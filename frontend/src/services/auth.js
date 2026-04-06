import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const authService = {
  async login({ email, password }) {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
    }

    return response.data;
  },

  async register({ name, email, password }) {
    const response = await axios.post(`${API_URL}/register`, {
      name,      
      email,
      password,
    });

    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
    }

    return response.data;
  },

  async getCurrentUser() {
    const token = localStorage.getItem("token");

    if (!token) throw new Error("No token found");

    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  logout() {
    localStorage.removeItem("token");
  },
};

export default authService;