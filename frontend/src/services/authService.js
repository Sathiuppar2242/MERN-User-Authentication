const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    return response.json();
};

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });

    return response.json();
};

export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
};