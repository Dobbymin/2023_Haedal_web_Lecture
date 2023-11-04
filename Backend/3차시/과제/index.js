const fetch = require('node-fetch');

/** 라이브러리 첨부 */
const express = require('express');
/** 객체 만드는거 */
const app = express();

app.listen(8080, function () {
    /** 서버가 열렸을때 */
    console.log('listening on 8080');
});

app.get('/', function (req, res) {
    res.send('안뇨옹');
});

app.get('/home', function (req, res) {
    res.send('sweet my home~');
});

/** 대구 맛집 API */
let API_URL_DAEGU_FOOD = `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=북구`;

/** 데이터 반환 */
async function getData() {
    const response = await fetch(API_URL_DAEGU_FOOD);
    if (!response.ok) {
        throw new Error('Failed to fetch food data');
    }
    const data = await response.json();
    return data;
}

/** random 함수 구현 */
function randomNum(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

/** JavaScript 객체나 배열인 data를 JSON 문자열로 변환하는 메서드 */
app.get('/food', async function (req, res) {
    /** 비동기 */
    const data = await getData();
    res.send(JSON.stringify(data));
});

app.get('/food/buk', async function (req, res) {
    const data = await getData();
    /** 총 정보 개수 */
    const number = data.total;

    /** 정보 1개 무작위로 고르기 */
    const random = randomNum(0, number - 1);

    const temp = data.data[random];

    /** 식당 주소 */
    const address = temp.GNG_CS;
    /** 식당 소개 */
    const intro = temp.SMPL_DESC;
    /** 인근 버스 정류장 */
    const bus = temp.BUS;
    /** 인근 지하철 역 */
    const subway = temp.SBW;

    res.send(JSON.stringify({ address, intro, bus, subway }));
});
