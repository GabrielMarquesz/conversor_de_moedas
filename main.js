
//criar uma funcao para calcular

function Converter() {
    var valorElemento = document.getElementById('valor');  
    var valor = valorElemento.value; 
    var valorEmDolarNumero = parseFloat(valor);

    
    var valorEmReal = valorEmDolarNumero * 4.88;
    var valorEmBitcoin = valorEmDolarNumero * 0.000039;

    var elementoValorConvertido = document.getElementById('valorConvertido')
    var elementoValorConvertidoEmBitcoin = document.getElementById('valorConvertidoBitcoin')
 
    var valorConvertido = "o valor convertido em real é R$ " + valorEmReal;  
    var valorConvertidoBitcoin = "o valor convertido em bitcoin é BTC " + valorEmBitcoin;

  
    //mostrar dentro do elemento do html
    elementoValorConvertido.innerHTML = valorConvertido;

    elementoValorConvertidoEmBitcoin.innerHTML = valorConvertidoBitcoin;
}
 







//desafio 
//botao converter para real e botao para dolar
// aparecer valor em bitcoin

//parseInt -> transforma para numero inteiro.
//parseFloat -> transforma para numero real
//to fixed -> vai definir as casas decimais nesse caso duas.
