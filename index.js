
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
for (var i = 1; i <= 30; i++) {
    if ((i % 3 === 0) && (i % 5 === 0 ) ) print(i, "CleverPush");
    else if (i % 3 === 0) print(i, "Clever");
    else if (i % 5 === 0) print(i, "Push"); 
    else print(i, "");
} 

start('Third Demo')  
const condition = { 3: "Clever", 5: "Push" };
for (var i = 1; i <= 30; i++) {
  let answer = Object.entries(condition)
    .map(([key, value]) => i % key === 0 ? value : "")
    .join("");
  if (!answer)  i;
print(i, answer)
}

start('Fourth Demo')
const cleverPush = (range) => {
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
cleverPush(30);





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
