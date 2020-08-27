import axios, { AxiosPromise } from 'axios';
//import {UserResponse} from '@/types/user';

const reqApi = axios.create({
    baseURL: 'https://maimaidx-eng.com/maimai-mobile/record/musicLevel',
    timeout : 5000 // 5초
})

//get result print
console.log(reqApi.get('/').then(function(response){
    console.log(response);
}));