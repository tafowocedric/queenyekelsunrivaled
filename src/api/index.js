import { create } from 'apisauce';

// define api
const api = create({ baseURL: 'http://localhost:5001' });

export const addSubscriber = (payload) => api.post('/subscriber/add', payload);
export const forwardMail = (payload) => api.post('/subscriber/forwardmail', payload);
export const requestRegistration = (payload) => api.post('/register/add', payload);
