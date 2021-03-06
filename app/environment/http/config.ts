import Axios from 'axios';
import { baseUrl } from '../../../env';

//TODO: Criar estrutura base para requests
export const http = Axios.create({
  baseURL: baseUrl,
});

export interface ErrorResponse {
  success: false;
  error: string;
}

export interface DataResponse<T> {
  success: true;
  data: T;
}

export type Response<T> = DataResponse<T> | ErrorResponse;

export const checkSuccess = <T>(res: Response<T>): res is DataResponse<T> => {
  return res.success;
};
