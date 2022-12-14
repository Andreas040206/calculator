let firstNum = ''
let newNum = ''
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


function executeBtn(a){
    if(chosenOperator === 'nothing'){
        newNum += a
        upperDisplayRef.textContent = newNum
    } else {
    firstNum += a
    lowerDisplayRef.textContent = firstNum
    }    
}


commaBtnRef.addEventListener('click', function(){
    if(chosenOperator === 'nothing'){
        newNum += '.'
        upperDisplayRef.textContent = newNum
    } else {
    firstNum += '.'
    lowerDisplayRef.textContent = firstNum
    }
});

Num7BtnRef.addEventListener('click', function(){
    executeBtn(7)
});
Num8BtnRef.addEventListener('click', function(){
    executeBtn(8)
});
Num9BtnRef.addEventListener('click', function(){
    executeBtn(9)
});
Num4BtnRef.addEventListener('click', function(){
    executeBtn(4)
});
Num5BtnRef.addEventListener('click', function(){
    executeBtn(5)
});
Num6BtnRef.addEventListener('click', function(){
    executeBtn(6)
});
Num1BtnRef.addEventListener('click', function(){
    executeBtn(1)
});
Num2BtnRef.addEventListener('click', function(){
    executeBtn(2)
});
Num3BtnRef.addEventListener('click', function(){
    executeBtn(3)
});
Num0BtnRef.addEventListener('click', function(){
    executeBtn(0)
});