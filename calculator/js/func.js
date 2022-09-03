// alert("hello")

var str="";
document.addEventListener('click',function(e){
    var x=e.target;
   
   
    if(x.id=="ac"){
    
       document.getElementById("space").innerHTML="0";
       str="";
       
    }
    if(x.id=="mod"){
        document.getElementById("space").innerHTML="%";
        str+='%';
     }
     if(x.id=="div"){
        document.getElementById("space").innerHTML="/";
        str+='/';
     }
     if(x.id=="seven"){
        document.getElementById("space").innerHTML="7";
        str+='7';
     }
     if(x.id=="eight"){
        document.getElementById("space").innerHTML="8";
        str+='8';
     }
     if(x.id=="nine"){
        document.getElementById("space").innerHTML="9";
        str+='9';
     }
     if(x.id=="mul"){
        document.getElementById("space").innerHTML="x";
        str+='*';
     }
     if(x.id=="four"){
        document.getElementById("space").innerHTML="4";
        str+='4';
     }
     if(x.id=="five"){
        document.getElementById("space").innerHTML="5";
        str+='5';
     }
     if(x.id=="six"){
        document.getElementById("space").innerHTML="6";
        str+='6';
     }
     if(x.id=="sub"){
        document.getElementById("space").innerHTML="-";
        str+='-';
     }
     if(x.id=="one"){
        document.getElementById("space").innerHTML="1";
        str+='1';
     }
     if(x.id=="two"){
        document.getElementById("space").innerHTML="2";
        str+='2';
     }
     if(x.id=="three"){
        document.getElementById("space").innerHTML="3";
        str+='3';
     }
     if(x.id=="add"){
        document.getElementById("space").innerHTML="+";
        str+='+';
     }
     if(x.id=="zero"){
        document.getElementById("space").innerHTML="0";
        str+='0';
     }
     if(x.id=="pt"){
        document.getElementById("space").innerHTML=".";
        str+='.';
     }
     if(x.id=="eq"){
        document.getElementById("space").innerHTML="=";
     }
     document.getElementById("space").innerHTML=str;
     
     if(x.id=='eq'){
      let ans=eval(str);
        document.getElementById("space").innerHTML=ans;
        str=ans;
     }
   
})
document.addEventListener('keypress',function(e){
    
   
   console.log(e.key);
  
    if(e.key=='%'){
        document.getElementById("space").innerHTML="%";
        str+='%';
     }
     if(e.key=='/'){
        document.getElementById("space").innerHTML="/";
        str+='/';
     }
     if(e.key=='7'){
        document.getElementById("space").innerHTML="7";
        str+='7';
     }
     if(e.key=='8'){
        document.getElementById("space").innerHTML="8";
        str+='8';
     }
     if(e.key=='9'){
        document.getElementById("space").innerHTML="9";
        str+='9';
     }
     if(e.key=='*'){
        document.getElementById("space").innerHTML="x";
        str+='*';
     }
     if(e.key=='4'){
        document.getElementById("space").innerHTML="4";
        str+='4';
     }
     if(e.key=='5'){
        document.getElementById("space").innerHTML="5";
        str+='5';
     }
     if(e.key=='6'){
        document.getElementById("space").innerHTML="6";
        str+='6';
     }
     if(e.key=='-'){
        document.getElementById("space").innerHTML="-";
        str+='-';
     }
     if(e.key=='1'){
        document.getElementById("space").innerHTML="1";
        str+='1';
     }
     if(e.key=='2'){
        document.getElementById("space").innerHTML="2";
        str+='2';
     }
     if(e.key=='3'){
        document.getElementById("space").innerHTML="3";
        str+='3';
     }
     if(e.key=='+'){
        document.getElementById("space").innerHTML="+";
        str+='+';
     }
     if(e.key=='0'){
        document.getElementById("space").innerHTML="0";
        str+='0';
     }
     if(e.key=='.'){
        document.getElementById("space").innerHTML=".";
        str+='.';
     }
     if(e.key=="Enter"){
        document.getElementById("space").innerHTML="=";
     }
     document.getElementById("space").innerHTML=str;
     
     if(e.key=="Enter"){
      let ans=eval(str);
        document.getElementById("space").innerHTML=ans;
        str=ans;
     }
   
})