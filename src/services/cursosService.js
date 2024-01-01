import { apiService } from './apiService';
import CursoDTO from '../dto/CursosDTO';

export const obterCursos = async (params = {}) => {
  try {
    const response = await apiService.get('/cursos', { params });
    return response.data.map((cursoData) => new CursoDTO(cursoData));
  } catch (error) {
    console.error('Não foi possível obter os cursos:', error);
    throw error;
  }
};

export const obterCursoPorId = async (id) => {
  try {
    const response = await apiService.get(`/cursos/${id}`);
    return new CursoDTO(response.data);
  } catch (error) {
    console.error(`Não foi possível obter o curso com ID: ${id}:`, error);
    throw error;
  }
};
