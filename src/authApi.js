import apiClient from "./apiClient";

export const saveDetails = (data) =>
    apiClient.post("/auth/save-details", data);
