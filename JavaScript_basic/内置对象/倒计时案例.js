


function countDown(time) {
    
    let nowTime = +new Date();//返回当前时间戳
    let inputTime = +new Date(time);//返回用户输入时间的时间戳

    let times = (nowTime - inputTime)/1000;//转化成秒

    let day = parseInt(times / 60 / 60 / 24);
    let hours = parseInt(times / 60 / 60 % 24);
    let m = parseInt(times / 60 % 60);
    let s = parseInt(times % 60);
    
    return day + 'tian' + hours + 'shi' + m + 'fen' + s;
}

console.log(countDown('2020-11-5 18:00:00'));
