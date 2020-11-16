var img = document.querySelector('img');
var div = document.querySelector('div');
// 2. 得到当前的小时数
var date = new Date();
var h = date.getHours();
// 3. 判断小时数改变图片和文字信息
if (h < 12) {
    // img.src = 'images/s.gif';
    img.setAttribute('src', 'images/s.gif');

} else if (h < 18) {
    // img.src = 'images/x.gif';
    img.setAttribute('src', 'images/x.gif');
} else {
    // img.src = 'images/w.gif';
    img.setAttribute('src', 'images/w.gif');
}

