let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();

console.log(year + ' ' + month + ' ' + day);



function getTimes () {

    let times = new Date;    
    let h = times.getHours();
    h = h < 10 ? '0' + h : h; 
    let m = times.getMinutes();
    m = m < 10 ? '0' + m : m; 
    let s = times.getSeconds();
    s = s < 10 ? '0' + s : s; 

    return h + ':' + m + ':' + s;

}

console.log(getTimes());