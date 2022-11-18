let toTop= document.getElementById("to-top");
window.onscroll = function () {
    scroll();
    };
function scroll() {
    if(document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20){
            toTop.style.display="block";
        }else {
            toTop.style.display="none";
        }
}
toTop.addEventListener("click", top );
function top(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let name=