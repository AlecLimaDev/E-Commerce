import axios from "axios";


export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/656be735b731448ea4559e0376e2b6c0',
    timeout: 10000,
});