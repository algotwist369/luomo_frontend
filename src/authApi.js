import apiClient from "./apiClient";

export const sendOtp = (data) =>
    apiClient.post("/auth/send-otp", data);

export const verifyOtp = (data) =>
    apiClient.post("/auth/verify-otp", data);

export const saveDetails = (data) =>
    apiClient.post("/auth/save-details", data);
