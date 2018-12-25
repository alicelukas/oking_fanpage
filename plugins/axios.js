import axios from 'axios'

export function GetAA() {
  // let { data } = await axios.get(`https://api.twitch.tv/helix/streams`)
  // // let { data } = await axios.get(`https://my-api/posts/${params.id}`)
  // console.log('data: ', data);
  // return { title: data }

  // return axios.get(`https://my-api/posts/${params.id}`)
  // return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    return axios.get(`https://api.twitch.tv/helix/streams?first=20`, { 
                    params: { 'Client-ID': 'uo6dggojyb8d6soh92zknwmi5ej1q2' }
                  })
                  .then((res) => {
                    console.log('반환한닷!  ', res);
                    return res;
                  })

  // return new Promise((resolve, reject) => {
  //   let { data } = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
  //   if(data == null) {
  //     reject(error)
  //   }
  //   else {
  //     resolve(data);
  //   }
  // }) // Promise
}

export function getRequest() {
  // var request = require('request');
 
  // request.get({url: 'http://www.tistory.com'}, function(err, response, body){
  //   console.log(body);
  // })


  // const cheerio = require('cheerio');

  // let res = () => cheerio.fetch(
  //   "http://movie.naver.com/movie/sdb/rank/rmovie.nhn",
  //   (err, $, res, body)=> {
  //     console.log(body);
  //   }
  // );

  // res();

  // const requestggg = require('request');
  // let url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";

  // requestggg(url, function(error, response, body){
  //   console.log(body)
  // });



  // var casper = require('casperjs').create();

  // function getTodayCount(){  
  //   return document.querySelector('#side_today_count').innerText;
  // }

  // function asf() {
  //   return document.querySelector('#logo_sw').innerText;
  // }


  // casper.start('https://www.naver.com', function(){
  //   var side_today_count = this.evaluate(asf);
  //   console.log('document: ', side_today_count);
  //   // var side_today_count = this.evaluate(getTodayCount);
  //   // console.log("오늘의 방문자 수 : " + side_today_count);  
  // })


  // casper.run(); 
}