import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../services/authService";

const Dashboard = () => {
    const navigate = useNavigate();
    const user = getCurrentUser();

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

                <p>You have successfully logged in.</p>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;