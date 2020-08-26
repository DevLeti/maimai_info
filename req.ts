import axios, { AxiosPromise } from 'axios';
//import {UserResponse} from '@/types/user';

const reqApi = axios.create({
    baseURL: 'https://https://maimaidx-eng.com/maimai-mobile/record/musicLevel/',
    timeout : 5000 // 5초
})