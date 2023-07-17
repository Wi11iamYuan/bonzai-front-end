const BASE = "http://127.0.0.1:8000/"

export const getStats = () => {
    return fetch(`${BASE}stats/`);
}