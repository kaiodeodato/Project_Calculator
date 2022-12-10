var resultado = document.getElementById('resultado');
var conta = '';
var operacao = '';
var valores = [];

function calcular(tecla){
        switch(tecla){
            case 'b_um':
                if (conta.length < 28){
                conta += '1'
                resultado.innerText = conta;
                }
                break;
            case 'b_dois':
                if (conta.length < 28){
                conta += '2'
                resultado.innerText = conta;
                }
                break;
            case 'b_tres':
                if (conta.length < 28){
                conta += '3'
                resultado.innerText = conta;
                }
                break;
            case 'b_limpar':
                operacao = 'limpar';
                valores.pop()
                valores.pop()
                conta = ''
                resultado.innerText = 'Resultado';
                break;
            case 'b_quatro':
                if (conta.length < 28){
                conta += '4'
                resultado.innerText = conta;
                }
                break;
            case 'b_cinco':
                if (conta.length < 28){
                conta += '5'
                resultado.innerText = conta;
                }
                break;
            case 'b_seis':
                if (conta.length < 28){
                conta += '6'
                resultado.innerText = conta;
                }
                break;
            case 'b_mais':
                operacao = 'soma';
                valores.push(Number(conta));
                conta = ''
                resultado.innerText = conta
                break;
            case 'b_sete':
                if (conta.length < 28){
                conta += '7'
                resultado.innerText = conta;
                }
                break;
            case 'b_oito':
                if (conta.length < 28){
                conta += '8'
                resultado.innerText = conta;
                }
                break;
            case 'b_nove':
                if (conta.length < 28){
                conta += '9'
                resultado.innerText = conta;
                }
                break;
            case 'b_menos':
                operacao = 'menos';
                valores.push(Number(conta));
                conta = ''
                resultado.innerText = conta;
                break;
            case 'b_zero':
                if (conta.length < 28){
                conta += '0'
                resultado.innerText = conta;
                }
                break;
            case 'b_divide':
                operacao = 'divide';
                valores.push(Number(conta));
                conta = ''
                resultado.innerText = conta;
                break;
            case 'b_vezes':
                operacao = 'vezes';
                valores.push(Number(conta));
                conta = ''
                resultado.innerText = conta;
                break;
            case 'b_igual':
                valores.push(Number(conta));
                conta = ''
                if (operacao == 'soma' && valores.length == 2){
                    var result_soma = valores[0] + valores[1]
                    resultado.innerText = (result_soma)
                    valores.pop();
                    valores.pop();
                    conta = result_soma;
                }
                else if (operacao == 'menos'){
                    var result_soma = valores[0] - valores[1]
                    resultado.innerText = (result_soma)
                    valores.pop();
                    valores.pop();
                    conta = result_soma;
                }
                else if (operacao == 'vezes'){
                    var result_soma = valores[0] ** valores[1]
                    resultado.innerText = (result_soma)
                    valores.pop();
                    valores.pop();
                    conta = result_soma;
                }
                else if (operacao == 'divide'){
                    var result_soma = valores[0] / valores[1]
                    resultado.innerText = (result_soma)
                    valores.pop();
                    valores.pop();
                    conta = result_soma;              
                }
                break;
        }
    var tecla = document.getElementById(tecla)
}