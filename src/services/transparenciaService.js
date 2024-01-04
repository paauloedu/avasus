import { apiService } from './apiService';
import TransparenciaDTO from '../dto/TransparenciaDTO';

export const obterTransparencia = async () => {
  try {
    const response = await apiService.get('/transparecia');
    return new TransparenciaDTO(
      response.data.dados_gerais,
      response.data.usuarios_por_curso,
      response.data.usuarios_por_estado
    );
  } catch (error) {
    console.error('Não foi possível obter os dados de transparencia:', error);
    throw error;
  }
};
