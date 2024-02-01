import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Modifique de acordo com a sua configuração
});

export const getUpcomingLaunches = async () => {
  try {
    const response = await api.get('/launches/upcoming');
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming launches:', error);
    throw error;
  }
};

export const getFavorites = async () => {
  try {
    const response = await api.get('/user/favorites');
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
};

export const addFavorite = async (launchId) => {
  try {
    const response = await api.post(`/user/add-favorite/${launchId}`);
    return response.data;
  } catch (error) {
    console.error('Error adding favorite:', error);
    throw error;
  }
};

export default api;
