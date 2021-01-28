alert("welcome to my website")
var like = prompt("Do you like Spring?");
console.log(like)
if(like=="yes"){
    alert("Great")
}else if(like=="no"){
    alert("It's Buetiful Season")
}else {
    alert("please write yes / no")
}
document.write("<p> Welcome to spring</p>")
while(like!=='yes' && like!=='no'){
   like= prompt("Do you like Spring?")
}
var times=prompt("rate spring from 1 - 5") 
for (var i=0; i<times; i++){document.write("<img src='like.jpg'>")

}



  