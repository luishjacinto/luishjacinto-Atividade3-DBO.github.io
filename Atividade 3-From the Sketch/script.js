var table = document.querySelector('table');

var inteira = 0;
var meia = 0;

table.addEventListener('click', function(evento){
  var lugar = evento.target;
  if(lugar.className === 'lugarover'){
    lugar.className = 'inteiraover';
    inteira++;
  }else{
    if(lugar.className === 'inteiraover'){
      lugar.className = 'meiaover';
      inteira--;
      meia++;
    }else{
      if(lugar.className === 'meiaover'){
        lugar.className = 'lugarover';
        meia--;
      }
    }
  }
  troca();
  evento.preventDefault();
});

table.addEventListener('mouseover', function(evento) {
  var lugar = evento.target;
  if(lugar.className === 'lugar'){lugar.className = 'lugarover';
  }else{
    if(lugar.className === 'inteira'){lugar.className = 'inteiraover';
    }else{
      if(lugar.className === 'meia'){lugar.className = 'meiaover';
      }
    }
  }
});

table.addEventListener('mouseout', function(evento) {
  var lugar = evento.target;
  if(lugar.className === 'lugarover'){lugar.className = 'lugar';
  }else{
    if(lugar.className === 'inteiraover'){lugar.className = 'inteira';
    }else{
      if(lugar.className === 'meiaover'){lugar.className = 'meia';
      }
    }
  }
});

var input = document.querySelector('input');
input.value = 1;

input.addEventListener('change', function(evento){
    troca();
});
input.addEventListener('keyup', function(evento){
    troca();
});

var troca = function(){
  var preco = input.value;
  if(preco > 0){
    var mid = (preco/2);
    document.getElementsByTagName('output')[0].innerHTML = preco;
    document.getElementsByTagName('output')[1].innerHTML = mid;
    document.getElementsByTagName('output')[2].innerHTML = "R$" + ((preco*inteira)+(mid*meia));
  }
  if(preco < 0) input.value = 0;
  if(preco > 100000000) input.value = 100000000;

  while(compradas.hasChildNodes()){compradas.removeChild(compradas.firstChild);}

  var reciboint = document.createElement('p');
  reciboint.setAttribute('id','entradaint');
  reciboint.setAttribute('class','entradaint');

  var recibomeia = document.createElement('p');
  recibomeia.setAttribute('id','entradameia');
  recibomeia.setAttribute('class','entradameia');

  if(inteira > 0){
    compradas.appendChild(reciboint);
    if(inteira == 1) entradaint.innerHTML = inteira + " Entrada Inteira " + "R$" + preco;
    if(inteira > 1) entradaint.innerHTML = inteira + " Entradas Inteiras " + "R$" + (preco*inteira);
  }

  if(meia > 0){
    compradas.appendChild(recibomeia);
    if(meia == 1) entradameia.innerHTML = meia + " Meia Entrada " + "R$" + (preco/2);
    if(meia > 1) entradameia.innerHTML = meia + " Meias Entradas " + "R$" + ((preco/2)*meia);
  }
}
