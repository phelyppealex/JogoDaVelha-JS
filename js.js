var jogador = 'X';
var matriz = new Array(9);
var casaOcupada;
var alguemGanhou = false;
var cont = 0;

function jogada(casa){
    
    //Verifica se a jogada é válida
    if(matriz[casa-1] != null){
        return;
    }

    //
    switch(casa){
        case 1: if(jogador == 'X'){document.getElementById('1X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('1O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 2: if(jogador == 'X'){document.getElementById('2X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('2O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 3: if(jogador == 'X'){document.getElementById('3X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('3O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 4: if(jogador == 'X'){document.getElementById('4X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('4O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 5: if(jogador == 'X'){document.getElementById('5X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('5O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 6: if(jogador == 'X'){document.getElementById('6X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('6O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 7: if(jogador == 'X'){document.getElementById('7X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('7O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 8: if(jogador == 'X'){document.getElementById('8X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('8O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
        case 9: if(jogador == 'X'){document.getElementById('9X').style.display = 'block';matriz[casa-1] = 'X';}else{document.getElementById('9O').style.display = 'block';matriz[casa-1] = 'O';}
        break;
    }    

    if((matriz[0] == 'X' && matriz[1] == 'X' && matriz[2] == 'X') || (matriz[3] == 'X' && matriz[4] == 'X' && matriz[5] == 'X')
    || (matriz[6] == 'X' && matriz[7] == 'X' && matriz[8] == 'X') || (matriz[0] == 'X' && matriz[3] == 'X' && matriz[6] == 'X')
    || (matriz[1] == 'X' && matriz[4] == 'X' && matriz[7] == 'X') || (matriz[2] == 'X' && matriz[5] == 'X' && matriz[8] == 'X')
    || (matriz[0] == 'X' && matriz[4] == 'X' && matriz[8] == 'X') || (matriz[2] == 'X' && matriz[4] == 'X' && matriz[6] == 'X')
    || (matriz[0] == 'O' && matriz[1] == 'O' && matriz[2] == 'O') || (matriz[3] == 'O' && matriz[4] == 'O' && matriz[5] == 'O')
    || (matriz[6] == 'O' && matriz[7] == 'O' && matriz[8] == 'O') || (matriz[0] == 'O' && matriz[3] == 'O' && matriz[6] == 'O')
    || (matriz[1] == 'O' && matriz[4] == 'O' && matriz[7] == 'O') || (matriz[2] == 'O' && matriz[5] == 'O' && matriz[8] == 'O')
    || (matriz[0] == 'O' && matriz[4] == 'O' && matriz[8] == 'O') || (matriz[2] == 'O' && matriz[4] == 'O' && matriz[6] == 'O')){
        alguemGanhou = true;
        
        alert('O jogador "' + jogador + '" ganhou!!');
        
        reset();
        return;
    }
    
    cont++;
    console.log(cont);
    if(cont == 9 && !alguemGanhou){
        alert('Deu velha');
    }

    if(jogador == 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
}

function reset(){
    document.getElementById('1X').style.display = 'none'; document.getElementById('1O').style.display = 'none';
    document.getElementById('2X').style.display = 'none'; document.getElementById('2O').style.display = 'none';
    document.getElementById('3X').style.display = 'none'; document.getElementById('3O').style.display = 'none';
    document.getElementById('4X').style.display = 'none'; document.getElementById('4O').style.display = 'none';
    document.getElementById('5X').style.display = 'none'; document.getElementById('5O').style.display = 'none';
    document.getElementById('6X').style.display = 'none'; document.getElementById('6O').style.display = 'none';
    document.getElementById('7X').style.display = 'none'; document.getElementById('7O').style.display = 'none';
    document.getElementById('8X').style.display = 'none'; document.getElementById('8O').style.display = 'none';
    document.getElementById('9X').style.display = 'none'; document.getElementById('9O').style.display = 'none';
    
    for (let index = 0; index < matriz.length; index++) {
        matriz[index] = null;
    }

    cont = 0;

    alguemGanhou = false;

    jogador = 'X';
}