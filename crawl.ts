import axios , {AxiosPromise} from 'axios';
import * as c from './class';

/*
현재 마이마이 공홈 접속 후 
https://maimaidx-eng.com/maimai-mobile/record/musicLevel/search/?level=2
에서
곡 정보에 들어가는 url파싱까지 완료.

공홈에 로그인만 한 상태에서 레벨 1~15까지 쭉 돌아서 확인하는 방법을 알아봐야할듯.

for문 돌려서 xmlhttprequest한 후 getlementsbyname("idx") 하면 될듯?

*/

var level_url = 'https://maimaidx-eng.com/maimai-mobile/record/musicLevel/search/?level=1';
const http = new XMLHttpRequest();
http.open("GET",level_url);
http.send();
http.onload = () => console.log(http.responseText);
var response = http.responseXML;

var arr = response.getElementsByName("idx"); //index values []
console.log(arr);
var idx = arr[0].attributes[2].value; //이게 곡 정보로 들어가는 idx
console.log(idx);

var musicurl = 'https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx=';
var url = musicurl + idx;



//var html = document.documentElement.outerHTML; //get html
//var html = 'https://maimaidx-eng.com/maimai-mobile/record/musicLevel/search/?level=2';