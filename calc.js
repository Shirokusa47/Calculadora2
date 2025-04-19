const botonNumeros= document.getElementsByName('dato_numero');
const botonOpera=document.getElementsByName('dato_opera');
const botonResult=document.getElementsByName('dato_result')[0];
const botonClear=document.getElementsByName('dato_clear')[0];
var result = document.getElementById('result');
let opActual='';
let opAnterior='';
let operacion=undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);

    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        if(boton.innerText === 'π'){
            opActual = Math.PI.toString();
            actualizarDisplay();
            return;
        }
        selectOperacion(boton.innerText);
    })
});

botonResult.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});

botonClear.addEventListener('click',function(){
    clear();
    actualizarDisplay();

});
function selectOperacion(op){
    if(opActual === '' && op !== '√' && op !== '^2' && op !== '^3'){
        return;
    }
    if(opAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    opAnterior = opActual;
    opActual = '';
}

function calcular(){
    let calculo;
    const anterior=parseFloat(opAnterior);
    const actual=parseFloat(opActual);
    switch(operacion){
        case '+':
            if (isNaN(anterior) || isNaN(actual)) return;
            calculo = anterior + actual;
            break;
        case '-':
            if (isNaN(anterior) || isNaN(actual)) return;
            calculo = anterior - actual;
            break;
        case 'x':
            if (isNaN(anterior) || isNaN(actual)) return;
            calculo = anterior * actual;
            break;
        case '/':
            if (isNaN(anterior) || isNaN(actual)) return;
            calculo = anterior / actual;
            break;
        case '√':
            if (isNaN(anterior)) return;
            calculo = Math.sqrt(anterior);
            break;
        case '^2':
            if (isNaN(anterior)) return;
            calculo = Math.pow(anterior, 2);
            break;
        case '^3':
            if (isNaN(anterior)) return;
            calculo = Math.pow(anterior, 3);
            break;
        default:
            return;
    }
    opActual=calculo;
    operacion=undefined;
    opAnterior='';
}

function agregarNumero(num){
    opActual=opActual.toString()+num.toString()
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value= opActual;
}
function clear(){
    opActual='';
    opAnterior='';
    operacion=undefined;
}

clear();