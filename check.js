function U() {
    document.getElementById("dr").innerHTML = "";
    document.getElementById("pr").innerHTML = "";
    if (document.getElementById("prvi").checked) {
        document.getElementById("pr").innerHTML = window.innerHeight;
    }
    if (document.getElementById("drugi").checked) {
        document.getElementById("dr").innerHTML = window.innerWidth;
    }

}

var prozorcic;
function open1(){
    prozorcic=window.open("https://www.youtube.com","name","height=200,width=200")

}
function close1(){
    prozorcic.close()
}
