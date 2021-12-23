import http from './httpService';

export const loginUser = (data) => http.post('/user/login', data);
