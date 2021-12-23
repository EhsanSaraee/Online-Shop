import http from './httpService';

export const signUpUser = (data) => http.post('/user/register', data);
