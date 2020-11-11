function time(date) {

    var oDate = new Date();
    var ss = Math.floor((date - oDate) / 1000);
    var h = Math.floor(ss / 3600);
    var m = Math.floor(ss / 60 % 60);
    var s = Math.floor(ss % 60);

    function aa(num) {
        return num < 10 ? "0" +
            num : num;
    }
    h = aa(h);
    m = aa(m);
    s = aa(s);
    hhh.innerText = h;
    mmm.innerText = m;
    sss.innerText = s;
    if (ss <= 0) {
        clearInterval(timer);
        h.innerText = "秒杀结束";
    }

}
var weilai = new Date("2020/11/20/ 18:00:00");
time(weilai);
var timer = setInterval(function() {
    time(weilai);
}, 1000)