window.addEventListener('load', bindEvents);
function bindEvents() {
    document.querySelector("#AC").addEventListener('click',clearAll);
    document.querySelector("#result").addEventListener('click',result);
}

var val="";
function disp(number){
    val=val +number;
    document.getElementById("r1").innerHTML=val;
}
function clearAll(){
    val="";
    document.getElementById("r1").innerHTML=0;
}
function result(){
    var ans=parseFloat(eval(val));
    console.log(eval(val));
    document.getElementById("r1").innerHTML=ans;
    val="";

}