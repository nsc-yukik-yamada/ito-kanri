// 真偽を配列に格納してまとめてチェックできないか

let barrey = [1,1];

console.log(barrey);
let baled = true;

// for (let i = 0; i < barrey.length; i++) {
//   if (barrey[i] == true) {
//     baled = true;
//   }else{
//       baled = false;
//   }
// }

for (let i = 0; i < barrey.length; i++) {
    
  if(barrey[i] == false) {
      baled = false;

  };
  console.log(baled);
}

if (baled == true) {
  console.log("●");
} else {
  console.log("×");
}
