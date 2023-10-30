const express = require('express'); //라이브러리 첨부
const app = express(); //객체 만드는 건데 몰라도 됨

app.listen(8080, function () {
    //서버가 열렸을때
    console.log('listening on 8080');
});

//누군가가 /pet 으로 방문을 하면..
//pet관련된 안내문을 띄워주자

app.get('/', function (req, res) {
    res.send('안뇨옹');
});

app.get('/beauty', function (req, res) {
    res.send('뷰티용품 쇼핑 페이지');
});

app.get('/weather', async function (req, res) {
    const data = await getData();
    res.send(JSON.stringify(data));
});

app.get('/weather/tempcity', async function (req, res) {
    const data = await getData();
    const temp = data.main['temp'] - 273.15;
    const city = data.name;
    res.send(JSON.stringify({ temp, city }));
});

app.get('/user', function (req, res) {
    let u_name = req.param('name');
    let u_age = req.param('age');

    res.send('User Name : ' + u_name + ' / User Age : ' + u_age);
});

let API_URL_OpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?lat=35.88915274403333&lon=128.61149004492663&appid=4705c875456ae34f8816e78242702137`;

async function getData() {
    const response = await fetch(API_URL_OpenWeatherMap);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data; // 데이터 반환
}
