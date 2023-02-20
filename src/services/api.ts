import axios from "axios";


export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/ad78a1adcef8454282f9cbf08a83ceae/',
    timeout: 10000,
});