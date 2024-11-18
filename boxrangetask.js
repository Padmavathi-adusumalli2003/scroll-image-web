function fun() {
    var hor=document.getElementById("inp1").value;
    var ver=document.getElementById("inp2").value;
document.getElementById("container").style.backgroundPosition=`${hor}px ${ver}px`;
}