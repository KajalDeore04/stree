import { createContext, useContext, useState, useEffect } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem('token', serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem('token');
  };

  const isLoggedIn = !!token;

  const userAuthentication = async () => {
    try {
      console.log("Token being sent:", token); // Debugging
      const response = await fetch(`${backendUrl}/api/auth/getUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        const errorText = await response.text();
        console.error("Response received:", errorText);
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.error("error from userAuthentication : ", error);
    }
  };

  const getUserIncidents = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/users/incidents`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.incidents;
      }
    } catch (error) {
      console.error("error from getServices : ", error);
    }
    return [];
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, token, getUserIncidents }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};