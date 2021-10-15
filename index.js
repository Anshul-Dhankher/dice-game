function rooldices()
{
var x=document.getElementsByClassName("result")[0];
var r1=Math.random()*6+1;
r1=Math.floor(r1);
var r2=Math.random()*6+1;
r2=Math.floor(r2);
var dic1=document.getElementsByClassName("img1")[0];
var dic2=document.getElementsByClassName("img2")[0];
dic1.setAttribute('src',"images/dice"+r1+".png");
dic2.setAttribute('src',"images/dice"+r2+".png");
if(r1>r2)
{
  x.innerHTML="Player 1 Wins!";
}
else if(r1<r2)
{
  x.innerHTML="Player 2 Wins!";
}
else{
  x.innerHTML="DRAW!,Play Again!";
}
x.style.visibility="visible";
}
