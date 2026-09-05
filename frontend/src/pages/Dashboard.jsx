import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getCurrentUser,
    getToken,
    logoutUser
} from "../services/authService";

const Dashboard = () => {
    const navigate = useNavigate();
    const user = getCurrentUser();

    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const token = getToken();
            const apiUrl = import.meta.env.VITE_API_URL;

            try {
                const response = await fetch(
                    `${apiUrl}/users/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    logoutUser();
                    navigate("/login");
                    return;
                }

                setProfile(data.user);
            } catch (error) {
                setError("Unable to load protected profile");
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        logoutUser();
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1>Welcome to Dashboard</h1>

                {user && (
                    <div className="user-info">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )}

                {profile && (
                    <p>
                        Authentication verified successfully.
                    </p>
                )}

                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;