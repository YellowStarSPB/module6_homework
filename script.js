Задание 1.
const arr = [32, 22, 44, 53, 11, null, null, null, null, 'string', 0, 0, 0,0];

function isOddOrEven(arr) {
    let odd = 0;
    let even = 0;
    let other = 0;
    let nulls = 0;
    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] === 'number'){
            if (arr[i] === 0){
                nulls++
            } else if(arr[i] % 2 === 0){
                even++
            } else if(arr[i] % 2 !== 0){
                odd++
            }
        } else {
            other++
        }
    }
    console.log(`Четных ${even}`)
    console.log(`Нечетных ${odd}`)
    console.log(`Остальное ${other}`)
    console.log(`Нулей ${nulls}`)

}
isOddOrEven(arr)

Задание 2.

function numbers(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return num > 1
}
function getMessage(num) {
    if(num >= 1000){
        console.log('данные неверны')
    } else {
        numbers(num)
    }
    console.log(numbers(num) ? 'Число простое': 'Число не простое')
}
getMessage(23)

Задание 3.
function getNum(num){
    return function sum(num2){
        return num + num2;
    }
}


const total = getNum(5);
console.log(total(2))

Задание 4.
function timeNum(a, b){
    let current = a;
    let timerId = setInterval(function(){
        console.log(current);
        if(current === b){
            clearInterval(timerId);
        }
        current++
    }, 1000)
}
timeNum(5, 15)

Задание 5.
const num = (x, n) => {
    return x**n
}

console.log(num(2, 2))
