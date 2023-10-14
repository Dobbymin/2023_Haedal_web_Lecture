const express = require('express'); //라이브러리 첨부
const app = express(); //객체 만드는 건데 몰라도 됨

app.listen(8080, function () {
    //서버가 열렸을때
    console.log('listening on 8080');
});

//누군가가 /pet 으로 방문을 하면..
//pet관련된 안내문을 띄워주자

app.get('/beauty', function (req, res) {
    res.send('뷰티용품 쇼핑 페이지');
});
