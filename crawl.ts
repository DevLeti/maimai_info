import axios , {AxiosPromise} from 'axios';
import * as c from './class';

/*
현재 마이마이 공홈 접속 후 곡 정보에 들어가는 url파싱까지 완료.

공홈에 로그인만 한 상태에서 레벨 1~15까지 쭉 돌아서 확인하는 방법을 알아봐야할듯.

for문 돌려서 xmlhttprequest한 후 getelementsbyname("idx") 하면 될듯?

*/

/*
버그인지 모르겠는데 http.responseText는 되고 responseXML은 null떠서 parser로 text를 html로 바꿈. 그 와중에 application/html하면 null뜸. 왜지?
*/

/*
1~7 = level 1~7
8 = 7+
9 = 8
10 = 8+
11 = 9
12 = 9+
13 = 10
14 = 10+
15 = 11
16 = 11+
17 = 12
18 = 12+
19 = 13
20 = 13+
21 = 14
22 = 14+
23 = 15
*/


var http = new XMLHttpRequest();
var idxList = [];
for (var i = 1; i < 24; i++)
{
    var level_url = 'https://maimaidx-eng.com/maimai-mobile/record/musicLevel/search/?level=' + i;
    http.open("GET", level_url, false);
    http.send();

    var parser = new DOMParser();
    var response = parser.parseFromString(http.responseText, "text/html");
    //console.log(response);

    var arr = response.getElementsByName("idx"); //index values []
    idxList.push(arr);
    //console.log(i + 'level\'s idx length : ' +arr.length);
    //idx for문으로 돌아서 하나씩 점수 가져와서 추가해야함.
    
    //song instance 하나 만든 다음
    //record 페이지에 들어가서
    //먼저 title, composer, 자켓 이미지, genre 가져옴.
    //title : m_5 f_15 break --> getElementByClss("break")[0]로 잡기
    //composer :m_5 f_12 break --> getElementByClss("break")[1]로 잡기
    //자켓 이미지 : img.w_180.m_5.f_l
    //
    
    /**
     * 짧은 시간에 다량의 요청으로 바로 block 당함.. 어떡하지?
     */
    for (var i = 0; i < idxList.length; i++) {
        for(var j = 0; j < idxList[i].length; j++)
        {
            var idx = idxList[i][j].value;
            var musicurl = 'https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx=';
            var url = musicurl + idx;
            setTimeout(function () {
                // try{
                    http.open("GET", url, false);
                    http.send();
                    response = parser.parseFromString(http.responseText, "text/html");
                    if(response.getElementsByClassName("break") != null)
                    {
                        console.log('title : ' + response.getElementsByClassName("m_5 f_15 break")[0].textContent);
                        console.log(response.getElementsByClassName("break")[1].textContent.replace('\n', '').replace('\n', '').replace('			', '').replace(' 		', ''));
                    }
        
                //     throw "index error";
                // }
                // catch(e) {
                //     console.log(e);
                // }
                
            }, 200); //0.2 sec
        }
    }
}
// var idx = arr[0].attributes[2].value; //이게 곡 정보로 들어가는 idx

// var musicurl = 'https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx=';
// var url = musicurl + idx;

//var html = document.documentElement.outerHTML; //get html
//var html = 'https://maimaidx-eng.com/maimai-mobile/record/musicLevel/search/?level=2';