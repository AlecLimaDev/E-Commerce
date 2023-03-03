import axios from "axios";


export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/686c4d84fcd546809d0b49b15851dc77',
    timeout: 10000,
});