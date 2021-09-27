
const print = (i, answer = '') => {
    document.write(`${i}  ${answer} <br>`)
    //console.log(`${i}  ${answer} <br>`)
} 

const start = (text) => {
    document.write(`<br><br><br><br>####################<br>${text}:<br>`)
} 

start('First Demo')  
for (var i = 1; i <= 30; i++) {
    let answer = '';
    if (i % 3 === 0) answer += "Clever";
    if (i % 5 === 0) answer += "Push";
    if (!answer)  i;
    print(i, answer);
} 
 
start('Second Demo')  
for (var index = 1; index <= 30; index++) {
    if ((index % 3 === 0) && (index % 5 === 0 ) ) print(index, "CleverPush");
    else if (index % 3 === 0) print(index, "Clever");
    else if (index % 5 === 0) print(index, "Push"); 
    else print(index, "");
} 

start('Third Demo')  
const cleverPush = (range) => {
const condition = { 3: "Clever", 5: "Push" };
for (var i = 1; i <= range; i++) {
  let answer = Object.entries(condition)
    .map(([key, value]) => i % key === 0 ? value : "")
    .join("");
  if (!answer)  i;
print(i, answer)
}
}
cleverPush(30);

start('Fourth Demo')
const pushClever = (range) => {
    for (let i = 1; i <= range; i++) {
        const clever = i % 3 === 0;
        const push = i % 5 === 0;

        if (clever && push) {
            print(i, "CleverPush");
        } else if (clever) {
            print(i, "Clever");
        } else if (push) {
            print(i, "Push");
        } else {
            print(i);
        } 
    } 
} 
pushClever(30);





start('Fifth Demo')
const fizzBuzz = (n) => {
  for (var i = 1; i <= n ; i++ ) {
    const divisibleBy = (divider, n) => n % divider == 0;
  
    if(divisibleBy(15, i)) 
      print(i, "CleverPush");
  
    else if(divisibleBy(3, i)) 
      print(i, "Clever");
  
    else if(divisibleBy(5, i)) 
      print(i, "Push");
  
    else print(i); 
  
  }
} 
fizzBuzz(30) 
