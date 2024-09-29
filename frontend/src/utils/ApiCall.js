import { BACKEND_URL } from "../constants";

const ApiCall = async (url, { method = "GET", headers = {}, body = null }) => {
    try {
        const response = await fetch(BACKEND_URL + url, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,  // Spread any additional headers
            },
            body: body ? JSON.stringify(body) : null, // Stringify body if it's not null
        });

        // Check if the response is not okay and throw an error if true
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Something went wrong!");
        }

        // Parse the JSON response
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API Call Error:", error.message);
        // Optionally handle redirect for unauthorized cases
        if (error.message.includes("Unauthorized")) {
            // handle logout or redirect
            window.location.href = "/login"; // Example: redirect to login
        }
        throw error; // Re-throw the error for further handling
    }
};

export default ApiCall;
