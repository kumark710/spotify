import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "https://spotify-dea2.onrender.com/api" : "/api",
});
