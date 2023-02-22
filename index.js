var num=document.getElementById("input");

function generate(){
    for(var i=1;i<=10;i++){
        var h1=document.getElementsByClassName(i)[0];
        h1.innerHTML=(i*num.value);
        
    }
}
