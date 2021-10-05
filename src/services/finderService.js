import axios from 'axios';

export const search = async (q) => {
    try {
        const response = await axios.get(`http://localhost:3001/search?q=${q}&_limit=10`);
        return response.data;
    } catch (error) {
        alert('Whoops! Something went wrong. Also this alert message is ugly, we\'ll make a better one soon.');
    }
};

export const getStarredCount = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/search?starred=true`);
        return response.data.length;
    } catch (error) {
        alert('Whoops! Something went wrong. Also this alert message is ugly, we\'ll make a better one soon.');
    }
};

export const updateStarredState = async (data, newState) => {
    const { id } = data;
    const body = {...data, starred: newState };
    try {
        const response = await axios.put(`http://localhost:3001/search/${id}`, body);
        return response.data;
    } catch (error) {
        alert('Whoops! Something went wrong. Also this alert message is ugly, we\'ll make a better one soon.');
    }
};