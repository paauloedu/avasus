import { apiService } from './apiService';
import ParceirosDTO from '../dto/ParceirosDTO';

export const obterParceiros = async (params = {}) => {
  try {
    const response = await apiService.get('/parceiros', { params });
    return response.data.map(
      (parceirosData) => new ParceirosDTO(parceirosData)
    );
  } catch (error) {
    console.error('Não foi possível obter os parceiros:', error);
    throw error;
  }
};
