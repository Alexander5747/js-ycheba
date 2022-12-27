// let elem = document.querySelector('p');
// let input = document.querySelector('#input');

// input.addEventListener('blur', function(){
//     elem.textContent += input.value;
// });
// let inputs = document.querySelectorAll('#inp'); 
// let p = document.querySelector('p');
// let button = document.querySelector('#button');
// let sum = 0;
// button.addEventListener('click', function(){
//     for(let input of inputs){
//         sum += +input.value;
//     }
//     p.textContent=sum
// }); 
// let numbers = document.querySelector('#numbers');
// numbers.addEventListener('blur', function(){
//     let num = +numbers.value;
//     let sum = 0;
//     if(num>=10){
//         for(let n of numbers.value){
//             sum += +n;
//         }
//         numbers.value=sum
//     }
//     else{
//         console.log(num);
//     }
// });
// let input = document.querySelector('input');
// let sum = 0;
// input.addEventListener('blur', function(){
//     let inp_value = input.value;
//     let st = 0
//     let res = 0
//     for(let elem of inp_value){
//         if(elem!== ","){
//             st+=1;
//             sum += +elem
//         }
//     }
//     res = sum/st
//     console.log(sum +" сумма",st+" счётчик");
//     console.log(res + " результат" );
// });
// let FIO = document.querySelector('#FIO'), 
// F=document.querySelector('#F'),
// I=document.querySelector('#I'), 
// O=document.querySelector('#O');
// FIO.addEventListener('blur', function(){
//     let res=''
//     for(let elem of FIO.value){
//         res+=elem;
//     }
//     res=res.split(' ')
//     console.log(res);
//     F.value=res[0];
//     I.value=res[1];
//     O.value=res[2];
// })
// let elem = document.querySelector("#FIO");
// elem.addEventListener('blur', function(){
//     elem.classList.add('up-text');
// })
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', function(){
//         let count = 0;
//         let split = elem.value.split(' ');
//         for (let i = 0; i < split.length ; i++) {
//             if (split[i] != "") {
//             count += 1;
//             }
//         }
//         console.log(count, split);
// })
let date = document.querySelector("#date");
date.addEventListener('blur', function(){
    let d = date.value.split(".")
    let p = d.reverse()
    let res =p.join("-")
    date.value = res
});
