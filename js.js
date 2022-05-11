var jogador = 'X';

function jogada(casa){
    switch(casa){
        case 1: if(jogador == 'X'){document.getElementById('1X').style.display = 'block';}else{document.getElementById('1O').style.display = 'block';}
        break;
        case 2: if(jogador == 'X'){document.getElementById('2X').style.display = 'block';}else{document.getElementById('2O').style.display = 'block';}
        break;
        case 3: if(jogador == 'X'){document.getElementById('3X').style.display = 'block';}else{document.getElementById('3O').style.display = 'block';}
        break;
        case 4: if(jogador == 'X'){document.getElementById('4X').style.display = 'block';}else{document.getElementById('4O').style.display = 'block';}
        break;
        case 5: if(jogador == 'X'){document.getElementById('5X').style.display = 'block';}else{document.getElementById('5O').style.display = 'block';}
        break;
        case 6: if(jogador == 'X'){document.getElementById('6X').style.display = 'block';}else{document.getElementById('6O').style.display = 'block';}
        break;
        case 7: if(jogador == 'X'){document.getElementById('7X').style.display = 'block';}else{document.getElementById('7O').style.display = 'block';}
        break;
        case 8: if(jogador == 'X'){document.getElementById('8X').style.display = 'block';}else{document.getElementById('8O').style.display = 'block';}
        break;
        case 9: if(jogador == 'X'){document.getElementById('9X').style.display = 'block';}else{document.getElementById('9O').style.display = 'block';}
        break;
    }

    if(jogador == 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
}