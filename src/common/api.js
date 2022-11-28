
import axios from 'axios';
import { store } from 'store/store';

const Api = axios.create({
    baseURL: 'https://hvwh7akxxj.execute-api.us-east-1.amazonaws.com/Prod',
    headers: {
        'Accept': 'application/json',
    },
});


Api.interceptors.request.use(async config => {
    const auth = store.getState().auth;
    config.headers.Authorization = `Bearer ${auth.data?.access_token}`;
    return config;
});

Api.interceptors.response.use(
    async response => response,
    async error => {
        if (error.response.status === 500) {
            console.log('Ops, ocorreu um erro, tente novamente!');
        } else if (error.response.status === 404) {
            console.log('Ops, não encontrado!');
        } else if (error.response.status === 400) {
            console.log('Ops, ocorreu um erro, tente novamente!')
        }
        throw error.response
    },
);


const AuthApi = axios.create({
    baseURL: 'https://hvwh7akxxj.execute-api.us-east-1.amazonaws.com/Prod',
    auth: {
        username: "cartaonacaosaude",
        password: 'tw7qQFcNlh'
    },
});

AuthApi.interceptors.response.use(
    async response => response,
    async error => {
        if (error.response.status === 500) {
            console.log('Ops, ocorreu um erro, tente novamente!');
        } else if (error.response.status === 404) {
            console.log('Ops, não encontrado!');
        } else if (error.response.status === 400) {
            console.log('Ops, ocorreu um erro, tente novamente!')
        } else {
            throw error.response
        }
    },
);

export { Api, AuthApi };
