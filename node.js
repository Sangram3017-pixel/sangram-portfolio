var a = Prompt("hey whats you age?");
a = Number.parseInt(a);  //converting the number to string
if(a<0){
    alert("This is an invalid age");
}
else if(a<9
    alert("You are a kid and you cannot even thinking of driving");
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("This is a valid age");
}