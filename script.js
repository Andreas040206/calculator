let firstNum = ''
let newNum = '0'
let extraNum = ''
let chosenOperator = 'nothing'

function executeCalculation(){
    if (chosenOperator === 'plus'){
        newNum = Number(newNum)
        firstNum = Number(firstNum)
        newNum = newNum + firstNum
        upperDisplayRef.textContent = newNum
        firstNum = ''
        lowerDisplayRef.textContent = firstNum
    } else if (chosenOperator === 'minus'){
        newNum = Number(newNum)
        firstNum = Number(firstNum)
        newNum = newNum - firstNum
        upperDisplayRef.textContent = newNum
        firstNum = ''
        lowerDisplayRef.textContent = firstNum
    } else if (chosenOperator === 'divide'){
        newNum = Number(newNum)
        firstNum = Number(firstNum)
        newNum = newNum / firstNum
        upperDisplayRef.textContent = newNum
        firstNum = ''
        lowerDisplayRef.textContent = firstNum
    } else if (chosenOperator === 'multiply'){
        newNum = Number(newNum)
        firstNum = Number(firstNum)
        newNum = newNum * firstNum
        upperDisplayRef.textContent = newNum
        firstNum = ''
        lowerDisplayRef.textContent = firstNum
    } 
}

const upperDisplayRef = document.querySelector('#upperDisplay')
const lowerDisplayRef = document.querySelector('#lowerDisplay')

upperDisplayRef.textContent = newNum;

const Num7BtnRef = document.querySelector('#Num7Btn');
const Num8BtnRef = document.querySelector('#Num8Btn');
const Num9BtnRef = document.querySelector('#Num9Btn');
const Num4BtnRef = document.querySelector('#Num4Btn');
const Num5BtnRef = document.querySelector('#Num5Btn');
const Num6BtnRef = document.querySelector('#Num6Btn');
const Num1BtnRef = document.querySelector('#Num1Btn');
const Num2BtnRef = document.querySelector('#Num2Btn');
const Num3BtnRef = document.querySelector('#Num3Btn');
const Num0BtnRef = document.querySelector('#Num0Btn');

const commaBtnRef = document.querySelector('#commaBtn')

const clearBtnRef = document.querySelector('#clearBtn')
const clearAllBtnRef = document.querySelector('#clearAllBtn')

const plusBtnRef = document.querySelector('#plusBtn')
const minusBtnRef = document.querySelector('#minusBtn')
const divideBtnRef = document.querySelector('#divideBtn')
const multiplyBtnRef = document.querySelector('#multiplyBtn')
const equalBtnRef = document.querySelector('#equalBtn')

clearAllBtnRef.addEventListener('click', function(){
    firstNum = ''
    newNum = ''
    chosenOperator = 'nothing'
    lowerDisplayRef.textContent = firstNum;
    upperDisplayRef.textContent = newNum;
});


clearBtnRef.addEventListener('click', function(){
    firstNum = firstNum.slice(0,-1)
    lowerDisplayRef.textContent = firstNum;
});



multiplyBtnRef.addEventListener('click', function(){
    if(chosenOperator !=='minus' && chosenOperator !=='plus' && chosenOperator !=='divide' && chosenOperator !=='multiply' && chosenOperator !=='nothing'){
        newNum = firstNum
    } 
    executeCalculation()
    chosenOperator = 'multiply'
    upperDisplayRef.textContent = newNum + ' x';
})

divideBtnRef.addEventListener('click', function(){
    if(chosenOperator !=='minus' && chosenOperator !=='plus' && chosenOperator !=='divide' && chosenOperator !=='multiply' && chosenOperator !=='nothing'){
        newNum = firstNum
    } 
    executeCalculation()
    chosenOperator = 'divide'
    upperDisplayRef.textContent = newNum + ' /';
});

minusBtnRef.addEventListener('click',function(){
    if(chosenOperator !=='minus' && chosenOperator !=='plus' && chosenOperator !=='divide' && chosenOperator !=='multiply' && chosenOperator !=='nothing'){
        newNum = firstNum
    } 
    executeCalculation()
    chosenOperator = 'minus'
    upperDisplayRef.textContent = newNum + ' -';
})

plusBtnRef.addEventListener('click',function(){
    if(chosenOperator !=='minus' && chosenOperator !=='plus' && chosenOperator !=='divide' && chosenOperator !=='multiply' && chosenOperator !=='nothing'){
        newNum = firstNum
    } 
    executeCalculation()
    chosenOperator = 'plus'
    upperDisplayRef.textContent = newNum + ' +';
});

equalBtnRef.addEventListener('click', function(){
    executeCalculation()
    chosenOperator = 'nothing'
    upperDisplayRef.textContent = '= ' + newNum;
});

commaBtnRef.addEventListener('click', function(){
    firstNum += '.'
    lowerDisplayRef.textContent = firstNum
});

Num7BtnRef.addEventListener('click', function(){
    firstNum += 7
    lowerDisplayRef.textContent = firstNum
});
Num8BtnRef.addEventListener('click', function(){
    firstNum += 8
    lowerDisplayRef.textContent = firstNum
});
Num9BtnRef.addEventListener('click', function(){
    firstNum += 9
    lowerDisplayRef.textContent = firstNum
});
Num4BtnRef.addEventListener('click', function(){
    firstNum += 4
    lowerDisplayRef.textContent = firstNum
});
Num5BtnRef.addEventListener('click', function(){
    firstNum += 5
    lowerDisplayRef.textContent = firstNum
});
Num6BtnRef.addEventListener('click', function(){
    firstNum += 6
    lowerDisplayRef.textContent = firstNum
});
Num1BtnRef.addEventListener('click', function(){
    firstNum += 1
    lowerDisplayRef.textContent = firstNum
});
Num2BtnRef.addEventListener('click', function(){
    firstNum += 2
    lowerDisplayRef.textContent = firstNum
});
Num3BtnRef.addEventListener('click', function(){
    firstNum += 3
    lowerDisplayRef.textContent = firstNum
});
Num0BtnRef.addEventListener('click', function(){
    firstNum += 0
    lowerDisplayRef.textContent = firstNum
});