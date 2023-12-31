import { apiService } from './apiService';

export const obterCursos = async () => {
  try {
    const response = await apiService.get('/cursos');
    return response.data;
  } catch (error) {
    console.error('Error fetching cursos:', error);
    throw error;
  }
};
