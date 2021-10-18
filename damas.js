vez = "BRANCO"; //vez de quem jogar
lacoAux = 0; //controla o laço de iteração
andou = 0; //variavel que controla os movimentos das peças
passo = 0;

//função para andar passo a passo
function andar(){
  lacoAux = 0;
  passo = 1;
  laco();
}

//função para iniciar
function iniciar(){
  laco();
}

//Laço de repetição
function laco(){
  if(lacoAux == 0){
    pecas = document.getElementsByClassName("div_tabuleiro");
    pecas_comuns_pretas = [];
    pecas_damas_pretas = [];
    pecas_comuns_brancas = [];
    pecas_damas_brancas = [];
  
    for (let item of pecas) {
      if(item.innerHTML == '⛂'){
        pecas_comuns_pretas.push(item.id)
      } else if(item.innerHTML == '⛀') {
        pecas_comuns_brancas.push(item.id)
      } else if(item.innerHTML == '⛃') {
        pecas_damas_pretas.push(item.id)
      } else if(item.innerHTML == '⛁') {
        pecas_damas_brancas.push(item.id)
      }
    }
  
    if(vez == 'BRANCO'){
      andou = 0;

      if(pecas_damas_brancas.length > 0){
        for(let i=0; i<pecas_damas_brancas.length; i++){
          branca = pecas_damas_brancas[i].split('');
          for(let x=0; x<pecas_damas_pretas.length; x++){
            preta = pecas_damas_pretas[x].split('');
            if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])+1){
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(preta[1]),parseInt(preta[2]));
            } else if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])-1){
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(preta[1]),parseInt(preta[2]));
            } else if(parseInt(preta[1]) == parseInt(branca[1])+1 && parseInt(preta[2]) == parseInt(branca[2])+1){
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(preta[1]),parseInt(preta[2]));
            } else if(parseInt(preta[1]) == parseInt(branca[1])+1 && parseInt(preta[2]) == parseInt(branca[2])-1){
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(preta[1]),parseInt(preta[2]));
            }

            if(andou == 1){
              break;
            }
          };

          if(andou == 0){
            for(let x=0; x<pecas_comuns_pretas.length; x++){
              preta = pecas_comuns_pretas[x].split('');
              if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])+1){
                seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
                seleciona(parseInt(preta[1]),parseInt(preta[2]));
              } else if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])-1){
                seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
                seleciona(parseInt(preta[1]),parseInt(preta[2]));
              } else if(parseInt(preta[1]) == parseInt(branca[1])+1 && parseInt(preta[2]) == parseInt(branca[2])+1){
                seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
                seleciona(parseInt(preta[1]),parseInt(preta[2]));
              } else if(parseInt(preta[1]) == parseInt(branca[1])+1 && parseInt(preta[2]) == parseInt(branca[2])-1){
                seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
                seleciona(parseInt(preta[1]),parseInt(preta[2]));
              }
  
              if(andou == 1){
                break;
              }
            };
          }

          if(andou == 1){
            break;
          }
        };
      }

      if(andou == 0){
        for(let i=0; i<pecas_comuns_brancas.length; i++){
          branca = pecas_comuns_brancas[i].split('');
          for(let x=0; x<pecas_damas_pretas.length; x++){
            preta = pecas_damas_pretas[x].split('');
            if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])+1){
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(preta[1]),parseInt(preta[2]));
            } else if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])-1){
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(preta[1]),parseInt(preta[2]));
            }

            if(andou == 1){
              break;
            }
          };

          if(andou == 0){
            for(let x=0; x<pecas_comuns_pretas.length; x++){
              preta = pecas_comuns_pretas[x].split('');
              if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])+1){
                seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
                seleciona(parseInt(preta[1]),parseInt(preta[2]));
              } else if(parseInt(preta[1]) == parseInt(branca[1])-1 && parseInt(preta[2]) == parseInt(branca[2])-1){
                seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
                seleciona(parseInt(preta[1]),parseInt(preta[2]));
              }
  
              if(andou == 1){
                break;
              }
            };
          }

          if(andou == 1){
            break;
          }
        };
      }

      if(andou == 0){
        num = Math.floor(Math.random() * 4 + 1);
        for(let i=0; i<pecas_damas_brancas.length; i++){
          branca = pecas_damas_brancas[i].split('');
          switch (num) {
            case 1:
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(branca[1])+1,parseInt(branca[2])-1);
            case 2:
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(branca[1])+1,parseInt(branca[2])+1);
            case 3:
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(branca[1])-1,parseInt(branca[2])-1);
            case 4:
              seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
              seleciona(parseInt(branca[1])-1,parseInt(branca[2])+1);
          }
  
          if(andou == 1){
            break;
          }
        }
      }


      if(andou == 0){
        num = Math.floor(Math.random() * 1000 + 1);
        for(let i=0; i<pecas_comuns_brancas.length; i++){
          branca = pecas_comuns_brancas[i].split('');
          if(num%2 == 0){
            seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
            seleciona(parseInt(branca[1])-1,parseInt(branca[2])+1);
          } else {
            seleciona(parseInt(branca[1]),parseInt(branca[2]), 1);
            seleciona(parseInt(branca[1])-1,parseInt(branca[2])-1);
          }

          if(andou == 1){
            break;
          }
        };
      }

      if(andou == 0){
        document.getElementById("resultado").innerHTML = 'Empate';
      }
      
    } 
    else {
      andou = 0;

      if(pecas_damas_pretas.length > 0){
        for(let i=0; i<pecas_damas_pretas.length; i++){
          preta = pecas_damas_pretas[i].split('');
          for(let x=0; x<pecas_damas_brancas.length; x++){
            branca = pecas_damas_brancas[x].split('');
            if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])-1){
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(branca[1]),parseInt(branca[2]));
            } else if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])+1){
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(branca[1]),parseInt(branca[2]));
            } else if(parseInt(branca[1]) == parseInt(preta[1])-1 && parseInt(branca[2]) == parseInt(preta[2])-1){
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(branca[1]),parseInt(branca[2]));
            } else if(parseInt(branca[1]) == parseInt(preta[1])-1 && parseInt(branca[2]) == parseInt(preta[2])+1){
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(branca[1]),parseInt(branca[2]));
            }
  
            if(andou == 1){
              break;
            }
          };

          if(andou == 0){
            for(let x=0; x<pecas_comuns_brancas.length; x++){
              branca = pecas_comuns_brancas[x].split('');
              if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])-1){
                seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
                seleciona(parseInt(branca[1]),parseInt(branca[2]));
              } else if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])+1){
                seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
                seleciona(parseInt(branca[1]),parseInt(branca[2]));
              } else if(parseInt(branca[1]) == parseInt(preta[1])-1 && parseInt(branca[2]) == parseInt(preta[2])-1){
                seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
                seleciona(parseInt(branca[1]),parseInt(branca[2]));
              } else if(parseInt(branca[1]) == parseInt(preta[1])-1 && parseInt(branca[2]) == parseInt(preta[2])+1){
                seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
                seleciona(parseInt(branca[1]),parseInt(branca[2]));
              }
    
              if(andou == 1){
                break;
              }
            };
          }
  
          if(andou == 1){
            break;
          }
        };
      }

      if(andou == 0){
        for(let i=0; i<pecas_comuns_pretas.length; i++){
          preta = pecas_comuns_pretas[i].split('');
          for(let x=0; x<pecas_damas_brancas.length; x++){
            branca = pecas_damas_brancas[x].split('');
            if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])-1){
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(branca[1]),parseInt(branca[2]));
            } else if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])+1){
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(branca[1]),parseInt(branca[2]));
            }
  
            if(andou == 1){
              break;
            }
          };

          if(andou == 0){
            for(let x=0; x<pecas_comuns_brancas.length; x++){
              branca = pecas_comuns_brancas[x].split('');
              if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])-1){
                seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
                seleciona(parseInt(branca[1]),parseInt(branca[2]));
              } else if(parseInt(branca[1]) == parseInt(preta[1])+1 && parseInt(branca[2]) == parseInt(preta[2])+1){
                seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
                seleciona(parseInt(branca[1]),parseInt(branca[2]));
              }
    
              if(andou == 1){
                break;
              }
            };
          }
  
          if(andou == 1){
            break;
          }
        };
      }

      if(andou == 0){
        num = Math.floor(Math.random() * 4 + 1);
        for(let i=0; i<pecas_damas_pretas.length; i++){
          preta = pecas_damas_pretas[i].split('');
          switch (num) {
            case 1:
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(preta[1])+1,parseInt(preta[2])-1);
            case 2:
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(preta[1])+1,parseInt(preta[2])+1);
            case 3:
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(preta[1])-1,parseInt(preta[2])-1);
            case 4:
              seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
              seleciona(parseInt(preta[1])-1,parseInt(preta[2])+1);
          }
  
          if(andou == 1){
            break;
          }
        }
      }

      if(andou == 0){
        num = Math.floor(Math.random() * 1000 + 1);
        for(let i=0; i<pecas_comuns_pretas.length; i++){
          preta = pecas_comuns_pretas[i].split('');
          if(num%2 == 0){
            seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
            seleciona(parseInt(preta[1])+1,parseInt(preta[2])-1);
          } else {
            seleciona(parseInt(preta[1]),parseInt(preta[2]), 1);
            seleciona(parseInt(preta[1])+1,parseInt(preta[2])+1);
          }
  
          if(andou == 1){
            break;
          }
        }
      }

      if(andou == 0){
        document.getElementById("resultado").innerHTML = 'Empate';
      }
    }
    
    if(passo == 0){
      setTimeout(function(){ laco(); }, 500);
    }
  }
}


function inicia_jogo(){
  
  //indica jogador habilitado
  document.getElementById("jogador_habilitado").innerHTML = vez;

  //cria array que var receber as posicoes do tabuleiro
  cria_array();

  function cria_array(){
    var x,y;
    
    peca = new Array();
    
    for(x=1;x<=8;x++){
      
      peca[x] = new Array();
      
      for(y=1;y<=8;y++){
      
        peca[x][y] = new Array();
        peca[x][y]['peca'] = false; 		//defino como falso para as que não começam com peça ficarem nulas
        peca[x][y]['cor'] = false;			//defino como falso para as que não começam com peça ficarem nulas
        
      }
    }
    

    il = new Array();
    il['PRETO'] = new Array();
    il['BRANCO'] = new Array();
  
  }
  
  //posiciona as pecas pretas no array
  peca[1][2]['peca']="comum";		peca[1][2]['cor']="PRETO";	peca[1][2]['mov']=0;
  peca[1][4]['peca']="comum";	  peca[1][4]['cor']="PRETO";	peca[1][4]['mov']=0;
  peca[1][6]['peca']="comum"; 	peca[1][6]['cor']="PRETO";	peca[1][6]['mov']=0;
  peca[1][8]['peca']="comum";	  peca[1][8]['cor']="PRETO";	peca[1][8]['mov']=0;
  peca[2][1]['peca']="comum";		peca[2][1]['cor']="PRETO";	peca[2][1]['mov']=0;
  peca[2][3]['peca']="comum";		peca[2][3]['cor']="PRETO";	peca[2][3]['mov']=0; 
  peca[2][5]['peca']="comum";	  peca[2][5]['cor']="PRETO";	peca[2][5]['mov']=0; 
  peca[2][7]['peca']="comum";		peca[2][7]['cor']="PRETO";	peca[2][7]['mov']=0; 
  peca[3][2]['peca']="comum";		peca[3][2]['cor']="PRETO";	peca[3][2]['mov']=0;
  peca[3][4]['peca']="comum";		peca[3][4]['cor']="PRETO";	peca[3][4]['mov']=0;
  peca[3][6]['peca']="comum"; 	peca[3][6]['cor']="PRETO";	peca[3][6]['mov']=0;
  peca[3][8]['peca']="comum";		peca[3][8]['cor']="PRETO";	peca[3][8]['mov']=0;
  il['PRETO']['comum'] = "&#9922;";
  il['PRETO']['dama'] = "&#9923;";

  //posiciona as pecas brancas no array	
  peca[8][1]['peca']="comum";		peca[8][1]['cor']="BRANCO";	peca[8][1]['mov']=0;
  peca[8][3]['peca']="comum";	  peca[8][3]['cor']="BRANCO";	peca[8][3]['mov']=0;
  peca[8][5]['peca']="comum"; 	peca[8][5]['cor']="BRANCO";	peca[8][5]['mov']=0;
  peca[8][7]['peca']="comum";	  peca[8][7]['cor']="BRANCO";	peca[8][7]['mov']=0;
  peca[7][2]['peca']="comum";		peca[7][2]['cor']="BRANCO";	peca[7][2]['mov']=0;
  peca[7][4]['peca']="comum";		peca[7][4]['cor']="BRANCO";	peca[7][4]['mov']=0;
  peca[7][6]['peca']="comum";	  peca[7][6]['cor']="BRANCO";	peca[7][6]['mov']=0;
  peca[7][8]['peca']="comum";		peca[7][8]['cor']="BRANCO";	peca[7][8]['mov']=0;
  peca[6][1]['peca']="comum";		peca[6][1]['cor']="BRANCO";	peca[6][1]['mov']=0;
  peca[6][3]['peca']="comum";		peca[6][3]['cor']="BRANCO";	peca[6][3]['mov']=0;
  peca[6][5]['peca']="comum"; 	peca[6][5]['cor']="BRANCO";	peca[6][5]['mov']=0;
  peca[6][7]['peca']="comum";		peca[6][7]['cor']="BRANCO";	peca[6][7]['mov']=0;
  il['BRANCO']['comum'] = "&#9920;";
  il['BRANCO']['dama'] = "&#9921;";
  
  ///aray para movimentar as pecas
  movimenta = new Array();
  
  movimenta['selecionada'] = new Array();
  movimenta['selecionada']['x'] =0;
  movimenta['selecionada']['y'] =0;
  movimenta['selecionada']['peca']="0";
  movimenta['selecionada']['cor']="0";
  
  movimenta['destino'] = new Array();
  movimenta['destino']['x'] =0;
  movimenta['destino']['y'] =0; 
  movimenta['destino']['peca'] ="0";
  movimenta['destino']['cor']="0";
  
  ///aray para os possiveis movimentos
    possiveis = new Array();
  }
  
  function possiveis_movimentos(){
    var x,y;
    var c =0; //contador pro array possiveis
    var i; //contador pros for
    x = movimenta['selecionada']['x'];
    y = movimenta['selecionada']['y'];

    possiveis[c] = "t"+x+y; c++;
  
    ///////////////////////////////////////////////////////////////////////////////////COMUM//////////////////////////////// 
    if(peca[x][y]['peca']=='comum'){
      if(peca[x][y]['cor']=="PRETO"){
        possivel(x+1,y+1)
        possivel(x+1,y-1)
      }
      if(peca[x][y]['cor']=="BRANCO"){
        possivel(x-1,y-1);
        possivel(x-1,y+1);
      }
    }
    //////////////////////////////////////////////////////////////////////////////////////FIM COMUM ////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////DAMA//////////////////////////////// 
    if(peca[x][y]['peca']=='dama'){
      possivel(x+1,y+1)
      possivel(x+1,y-1)
      possivel(x-1,y-1);
      possivel(x-1,y+1);
    }
    //////////////////////////////////////////////////////////////////////////////////////FIM DAMA ////////////////////////////
  
    function possivel(px,py){
      if(px>0 && px <9 && py>0 && py <9 && peca[px][py]['cor']!= movimenta['selecionada']['cor']){
        possiveis[c] = "t"+(px)+(py); c++;
        
        if(!peca[px][py]['peca']){
          return true;
        }
      }else{
        return false;
      }
    }
    return c;
  }
  
  
  function verifica_possivel(x,y,c){
    var pode=0;
    var cp;
    var div = "t"+x+y;
    
    for(cp=1;cp<c;cp++){
      
      if(possiveis[cp]==div){
        pode ++;
      }
      if(pode>0){
        return 1;
      }
    }	
    
  }
  
  function seleciona(x,y, primeiro_clique){
      //Verifica se jogador está habilitado
      if(document.getElementById("jogador_habilitado").innerText == vez){
        if(x>0 && x <9 && y >0 && y <9){

          if((movimenta['selecionada']['x']==0 || peca[x][y]['cor'] == movimenta['selecionada']['cor']) && peca[x][y]['cor']==vez){
            if(peca[x][y]['peca']){ //se tiver uma peca nessa posição
              movimenta['selecionada']['x'] = x;	//recebe x selecionado
              movimenta['selecionada']['y'] = y;  //recebe y selecionado
              movimenta['selecionada']['peca'] = peca[x][y]['peca']; //recebe a peca selecionada
              movimenta['selecionada']['cor'] = peca[x][y]['cor'];	//recebe a cor selecionada
              
              cont_possiveis = possiveis_movimentos();
            }
            
          }else if(verifica_possivel(x,y,cont_possiveis)){ //se for segundo clique e a cor da peca destino for diferente da selecionada
            auxx = x;
            auxy = y;
            auxn = 0;
            mudou = 0;

          
            if(peca[x][y]['cor'] != movimenta['selecionada']['cor']){
              movimenta['destino']['x'] = x;	//recebe o x do destino(segundo clique)
              movimenta['destino']['y'] = y;  //recebe y do destino(segundo clique)
              if(peca[x][y]['peca']){  //se tiver alguma peca nessa posição
                if(movimenta['selecionada']['peca'] == 'comum'){ //verifica se a peça é comum
                  //verifica se a peça é branca
                  if(movimenta['selecionada']['cor'] == 'BRANCO'){
                    //verifica se está indo para a esquerda ou direita
                    if(movimenta['selecionada']['y'] - movimenta['destino']['y'] < 0) {
                      if(x-1>0 && x-1 <9 && y+1 >0 && y+1 <9){
                        if(peca[x-1][y+1] != undefined && peca[x-1][y+1]['peca'] == false){
                          movimenta['destino']['peca'] = peca[x-1][y+1]['peca'];	//destino recebe a peca selecionada
                          movimenta['destino']['cor'] = peca[x-1][y+1]['cor'];	//destino recebe a cor selecionada
                          document.getElementById("t"+x+""+y).innerHTML = '';
                          document.getElementById("pecas_pretas_removidas").innerHTML = parseInt(document.getElementById("pecas_pretas_removidas").innerText)+1;
                          peca[x][y]['peca'] = false;
                          peca[x][y]['cor'] = false;
                          auxx = x-1;
                          auxy = y+1;
                          
                          //Pra trocar de peça quando o peão chegar do outro lado
                          if(movimenta['selecionada']['peca']=='comum' && movimenta['selecionada']['cor']=='BRANCO' && x-1==1){
                            document.getElementById("damas_brancas").innerHTML = parseInt(document.getElementById("damas_brancas").innerText)+1;
                            movimenta['selecionada']['peca'] = 'dama';
                          }
                        } else {
                          auxn = 1;
                        }
                      }
                    } else { //verifica se está indo para a esquerda ou direita
                      if(x-1>0 && x-1 <9 && y-1 >0 && y-1 <9){
                        if(peca[x-1][y-1] != undefined && peca[x-1][y-1]['peca'] == false){
                          movimenta['destino']['peca'] = peca[x-1][y-1]['peca'];	//destino recebe a peca selecionada
                          movimenta['destino']['cor'] = peca[x-1][y-1]['cor'];	//destino recebe a cor selecionada
                          document.getElementById("t"+x+""+y).innerHTML = '';
                          document.getElementById("pecas_pretas_removidas").innerHTML = parseInt(document.getElementById("pecas_pretas_removidas").innerText)+1;
                          peca[x][y]['peca'] = false;
                          peca[x][y]['cor'] = false;
                          auxx = x-1;
                          auxy = y-1;

                          //Pra trocar de peça quando o peão chegar do outro lado
                          if(movimenta['selecionada']['peca']=='comum' && movimenta['selecionada']['cor']=='BRANCO' && x-1==1){
                            document.getElementById("damas_brancas").innerHTML = parseInt(document.getElementById("damas_brancas").innerText)+1;
                            movimenta['selecionada']['peca'] = 'dama';
                          }
                        } else {
                          auxn = 1;
                        }
                      }
                    }
                  } else { //peça preta
                    if(movimenta['selecionada']['y'] - movimenta['destino']['y'] < 0 && movimenta['selecionada']['x'] - movimenta['destino']['x'] < 1) {
                      //verifica se está indo para a esquerda ou direita
                      if(x+1>0 && x+1 <9 && y+1 >0 && y+1 <9){
                        if(peca[x+1][y+1] != undefined && peca[x+1][y+1]['peca'] == false){
                          movimenta['destino']['peca'] = peca[x+1][y+1]['peca'];	//destino recebe a peca selecionada
                          movimenta['destino']['cor'] = peca[x+1][y+1]['cor'];	//destino recebe a cor selecionada
                          document.getElementById("t"+x+""+y).innerHTML = '';
                          document.getElementById("pecas_brancas_removidas").innerHTML = parseInt(document.getElementById("pecas_brancas_removidas").innerText)+1;
                          peca[x][y]['peca'] = false;
                          peca[x][y]['cor'] = false;
                          auxx = x+1;
                          auxy = y+1;

                          //Pra trocar de peça quando o peão chegar do outro lado
                          if(movimenta['selecionada']['peca']=='comum' && movimenta['selecionada']['cor']=='PRETO' && x+1==8){
                            document.getElementById("damas_pretas").innerHTML = parseInt(document.getElementById("damas_pretas").innerText)+1;
                            movimenta['selecionada']['peca'] = 'dama';
                          }
                        } else {
                          auxn = 1;
                        }
                      }
                    } else { //verifica se está indo para a esquerda ou direita
                      if(x+1>0 && x+1 <9 && y-1 >0 && y-1 <9){
                        if (peca[x+1][y-1] != undefined && peca[x+1][y-1]['peca'] == false) {
                          movimenta['destino']['peca'] = peca[x+1][y-1]['peca'];	//destino recebe a peca selecionada
                          movimenta['destino']['cor'] = peca[x+1][y-1]['cor'];	//destino recebe a cor selecionada
                          document.getElementById("t"+x+""+y).innerHTML = '';
                          document.getElementById("pecas_brancas_removidas").innerHTML = parseInt(document.getElementById("pecas_brancas_removidas").innerText)+1;
                          peca[x][y]['peca'] = false;
                          peca[x][y]['cor'] = false;
                          auxx = x+1;
                          auxy = y-1;
  
                          //Pra trocar de peça quando o peão chegar do outro lado
                          if(movimenta['selecionada']['peca']=='comum' && movimenta['selecionada']['cor']=='PRETO' && x+1==8){
                            document.getElementById("damas_pretas").innerHTML = parseInt(document.getElementById("damas_pretas").innerText)+1;
                            movimenta['selecionada']['peca'] = 'dama';
                          }
                        } else {
                          auxn = 1;
                        }
                      }
                    }
                  }
                } else {//peça é dama
                  //direita baixo
                  if(movimenta['selecionada']['y'] - movimenta['destino']['y'] < 0 && movimenta['selecionada']['x'] - movimenta['destino']['x'] < 1) {
                    if(x+1>0 && x+1 <9 && y+1 >0 && y+1 <9){
                      if(peca[x+1][y+1] != undefined && peca[x+1][y+1]['peca'] == false){
                        movimenta['destino']['peca'] = peca[x+1][y+1]['peca'];	//destino recebe a peca selecionada
                        movimenta['destino']['cor'] = peca[x+1][y+1]['cor'];	//destino recebe a cor selecionada
                        document.getElementById("t"+x+""+y).innerHTML = '';
                        if(movimenta['selecionada']['cor'] == 'BRANCO'){
                          document.getElementById("pecas_pretas_removidas").innerHTML = parseInt(document.getElementById("pecas_pretas_removidas").innerText)+1;
                        } else {
                          document.getElementById("pecas_brancas_removidas").innerHTML = parseInt(document.getElementById("pecas_brancas_removidas").innerText)+1;
                        }
                        peca[x][y]['peca'] = false;
                        peca[x][y]['cor'] = false;
                        auxx = x+1;
                        auxy = y+1;
                        
                      } else {
                        auxn = 1;
                      }
                    }
                  } //esquerda baixo
                  else if(movimenta['selecionada']['y'] - movimenta['destino']['y'] > 0 && movimenta['selecionada']['x'] - movimenta['destino']['x'] < 1){
                    if(x+1>0 && x+1 <9 && y-1 >0 && y-1 <9){
                      if (peca[x+1][y-1] != undefined && peca[x+1][y-1]['peca'] == false) {
                        movimenta['destino']['peca'] = peca[x+1][y-1]['peca'];	//destino recebe a peca selecionada
                        movimenta['destino']['cor'] = peca[x+1][y-1]['cor'];	//destino recebe a cor selecionada
                        document.getElementById("t"+x+""+y).innerHTML = '';
                        if(movimenta['selecionada']['cor'] == 'BRANCO'){
                          document.getElementById("pecas_pretas_removidas").innerHTML = parseInt(document.getElementById("pecas_pretas_removidas").innerText)+1;
                        } else {
                          document.getElementById("pecas_brancas_removidas").innerHTML = parseInt(document.getElementById("pecas_brancas_removidas").innerText)+1;
                        }
                        peca[x][y]['peca'] = false;
                        peca[x][y]['cor'] = false;
                        auxx = x+1;
                        auxy = y-1;

                      } else {
                        auxn = 1;
                      }
                    }
                  } //direita cima
                  else if(movimenta['selecionada']['y'] - movimenta['destino']['y'] < 0){
                    if(x-1>0 && x-1 <9 && y+1 >0 && y+1 <9){
                      if (peca[x-1][y+1] != undefined && peca[x-1][y+1]['peca'] == false) {
                        movimenta['destino']['peca'] = peca[x-1][y+1]['peca'];	//destino recebe a peca selecionada
                        movimenta['destino']['cor'] = peca[x-1][y+1]['cor'];	//destino recebe a cor selecionada
                        document.getElementById("t"+x+""+y).innerHTML = '';
                        if(movimenta['selecionada']['cor'] == 'BRANCO'){
                          document.getElementById("pecas_pretas_removidas").innerHTML = parseInt(document.getElementById("pecas_pretas_removidas").innerText)+1;
                        } else {
                          document.getElementById("pecas_brancas_removidas").innerHTML = parseInt(document.getElementById("pecas_brancas_removidas").innerText)+1;
                        }
                        peca[x][y]['peca'] = false;
                        peca[x][y]['cor'] = false;
                        auxx = x-1;
                        auxy = y+1;

                      } else {
                        auxn = 1;
                      }
                    }
                  } //esquerda cima
                  else if(movimenta['selecionada']['y'] - movimenta['destino']['y'] > 0){
                    if(x-1>0 && x-1 <9 && y-1 >0 && y-1 <9){
                      if (peca[x-1][y-1] != undefined && peca[x-1][y-1]['peca'] == false) {
                        movimenta['destino']['peca'] = peca[x-1][y-1]['peca'];	//destino recebe a peca selecionada
                        movimenta['destino']['cor'] = peca[x-1][y-1]['cor'];	//destino recebe a cor selecionada
                        document.getElementById("t"+x+""+y).innerHTML = '';
                        if(movimenta['selecionada']['cor'] == 'BRANCO'){
                          document.getElementById("pecas_pretas_removidas").innerHTML = parseInt(document.getElementById("pecas_pretas_removidas").innerText)+1;
                        } else {
                          document.getElementById("pecas_brancas_removidas").innerHTML = parseInt(document.getElementById("pecas_brancas_removidas").innerText)+1;
                        }
                        peca[x][y]['peca'] = false;
                        peca[x][y]['cor'] = false;
                        auxx = x-1;
                        auxy = y-1;

                      } else {
                        auxn = 1;
                      }
                    }
                  } else {
                    auxn = 1;
                  }
                }
              } else {                
                //Pra trocar de peça quando o peão chegar do outro lado
                if(movimenta['selecionada']['peca']=='comum' && movimenta['selecionada']['cor']=='BRANCO' && x==1){
                  document.getElementById("damas_brancas").innerHTML = parseInt(document.getElementById("damas_brancas").innerText)+1;
                  movimenta['selecionada']['peca'] = 'dama';
                }
                if(movimenta['selecionada']['peca']=='comum' && movimenta['selecionada']['cor']=='PRETO' && x==8){				
                  document.getElementById("damas_pretas").innerHTML = parseInt(document.getElementById("damas_pretas").innerText)+1;
                  movimenta['selecionada']['peca'] = 'dama';
                }
              }
              
              //Verifica se feito alterado alguma coisa 
              if(auxn==0){
                if(peca[auxx][auxy]['peca'] === false && "t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y'] != 't00'){
                  document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).innerHTML = ""; //selcionada fica sem imagem
                  document.getElementById("t"+auxx+""+auxy).innerHTML = il[movimenta['selecionada']['cor']][movimenta['selecionada']['peca']]; //destino recebe a imagem da peça selecinada
                  peca[auxx][auxy]['peca']=movimenta['selecionada']['peca'];	//posicao destino recebe a peca
                  peca[auxx][auxy]['cor']=movimenta['selecionada']['cor'];		//posicao destino recebe a cor
                          
                  peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;		//peca selecionada recebe 0
                  peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;		//cor selecionada recebe 0
                    
                  movimenta['selecionada']['x'] =0;	//selecionada x recebe 0 (pra na proxima ver q é o primeiro movimento)
                  movimenta['selecionada']['y'] =0;	//selecionada y recebe 0 (pra na proxima ver q é o primeiro movimento)
                  movimenta['selecionada']['peca']="0";	//selecionada peca recebe 0 (pra na proxima ver q é o primeiro movimento)
                  movimenta['selecionada']['cor']="0";	//selecionada cor recebe 0 (pra na proxima ver q é o primeiro movimento)
                  
                  andou = 1; 
                  mudou = 1;
                } else {
                  if("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y'] != 't00' && x-1>0 && x+1 <9 && y-1>0 && y+1<9){
                    document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).innerHTML = ""; //selcionada fica sem imagem
                    document.getElementById("t"+auxx+""+auxy).innerHTML = il[movimenta['selecionada']['cor']][movimenta['selecionada']['peca']]; //destino recebe a imagem da peça selecinada
                    peca[auxx][auxy]['peca']=movimenta['selecionada']['peca'];	//posicao destino recebe a peca
                    peca[auxx][auxy]['cor']=movimenta['selecionada']['cor'];		//posicao destino recebe a cor
                            
                    peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;		//peca selecionada recebe 0
                    peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;		//cor selecionada recebe 0
                      
                    movimenta['selecionada']['x'] =0;	//selecionada x recebe 0 (pra na proxima ver q é o primeiro movimento)
                    movimenta['selecionada']['y'] =0;	//selecionada y recebe 0 (pra na proxima ver q é o primeiro movimento)
                    movimenta['selecionada']['peca']="0";	//selecionada peca recebe 0 (pra na proxima ver q é o primeiro movimento)
                    movimenta['selecionada']['cor']="0";	//selecionada cor recebe 0 (pra na proxima ver q é o primeiro movimento)
                    
                    andou = 1;
                    mudou = 1;

                  }
                }
              }
            }
            
            //Verifica se feito alterado alguma coisa
            if(auxn==0){
              if(mudou == 1){
                if(vez=="BRANCO"){
                  document.getElementById("ultimo_jogador").innerHTML = vez;
                  vez="PRETO";
                  document.getElementById("jogador_habilitado").innerHTML = vez;
                }else{
                  document.getElementById("ultimo_jogador").innerHTML = vez;
                  vez="BRANCO";
                  document.getElementById("jogador_habilitado").innerHTML = vez;
                }
              }
            }
            
            //Verifica vencedor
            verifica_brancas = parseInt(document.getElementById("pecas_brancas_removidas").innerText);
            verifica_pretas = parseInt(document.getElementById("pecas_brancas_removidas").innerText);
            if(verifica_brancas === 12){
              document.getElementById("resultado").innerHTML = 'Vitória Peças Pretas';
              lacoAux = 1;
            } else if(verifica_pretas === 12){
              document.getElementById("resultado").innerHTML = 'Vitória Peças Brancas';
              lacoAux = 1;
            }
          }
        }
      }
  }