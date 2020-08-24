# maimai_info
maimai information crawl



## 목적

1. TypeScript 공부. - 요즘 이게 그렇게 핫하다고 들었습니다
2. 마이마이 서열표에 알아서 score와 rank를 칠해주는 서비스를 만들어보고 싶었습니다. sdvx는 많이 있는데 마이마이는 안보여서요.

## 구현 단계

1. 서열표 data화
   1. OOO님의 서열표 존버 or 직접 크롤링.
2. maimai score/rank data를 공홈에서 crawl 하는 스크립트 제작
3. crawl한 data를 기반으로 서열표 이미지들 경계에 aj(+), fc(+)... (모든랭크) 색칠.
   1. aj면 무조건 sss+이상인가?
   2. 색깔 조언 필요함
4. aws의 db 서비스를 이용해서 회원관리. - db랑 통신 어떻게?
   1. id, pw, email
   2. twitter를 이용해 로그인

+ 영어 번역도 가능하면 시도.
+ 일본, 중국은 서버가 다르므로 제외.