const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
}); // api 경로에 hello 로 접속을 하면 Helloworld메시지를 보여줌.

app.listen(port, () => console.log(`Listening on port ${port}`)); // 1 옆에있는 기호를 사용함 문자열안에 변수를 출력