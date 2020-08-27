import axios, { AxiosPromise } from 'axios';
//import {UserResponse} from '@/types/user';

var level = 1;
const baseURL = axios.create({
    withCredentials: true,
    baseURL : 'https://maimaidx-eng.com/maimai-mobile/record/musicLevel/search/?level=' + level,
    timeout : 6000,
    headers: {
        'userId' : 2466273391831692,
        'friendCodeList' : 6052530466308
    }
})

const reqApi = axios.create({
    baseURL: 'https://maimaidx-eng.com/maimai-mobile/record/musicLevel',
    timeout : 5000 // 5초
})

//get result print
console.log(baseURL.get('').then(function(response){
    console.log(response);
}));