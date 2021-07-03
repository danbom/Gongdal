const express = require('express');
const Router = require('express-router');
const app = express();
var cons = require('consolidate');
const router = express.Router();
const port = 3000;

app.engine('html', cons.swig)
app.set('views','views'); // 정적 파일 위치 지정
app.set('view engine','html'); // 템플릿 엔진 세팅
app.use(express.static('statics'));

//main page
//home
app.get('/main', (req, res) => {
  return res.render("home.html");
})
//schedule
app.get('/schedule', (req, res) => {
  return res.render("schedule.html");
})
//checklist
app.get('/schedule/month', (req, res) => {
  return res.render("checklist.html");
})
//contest
app.get('/contest', (req, res) => {
  return res.render("contest.html");
})
//portfolio
app.get('/portfolio', (req, res) => {
  return res.render("portfolio.html");
})

app.get('/detail', (req, res) => {
  return res.render("detail.html");
})

app.listen(3000)