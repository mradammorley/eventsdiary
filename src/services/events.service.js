import axios from "axios";

function refreshEvents() {
    return axios.get("/api")
        .then(response => {
            return response;
        })
        .catch(error => {
            return Promise.reject(error.response.status);
        });
}

export const eventsService = {
    refreshEvents
};