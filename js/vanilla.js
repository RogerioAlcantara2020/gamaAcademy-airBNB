function alteraMenu(){
    let posicaoMenu = window.scrollY;

    if(posicaoMenu > 200){
        document.getElementById("menuPrincipal").classList.add("bordaBaseCinza");  
        document.getElementById('link_acomodacao').style.display='none';
        document.getElementById('link_experiencia').style.display='none';
        document.getElementById('pais').style.marginLeft = '800px';
        document.getElementById('buscaTopo').style.display = 'block';
    } 
    if(posicaoMenu <= 200){
        document.getElementById("menuPrincipal").classList.remove("bordaBaseCinza");  
        document.getElementById('link_acomodacao').style.display='block';
        document.getElementById('link_experiencia').style.display='block';
        document.getElementById('buscaTopo').style.display = 'none';
    }
}

function alteraMenuFixo(){ 
        document.getElementById("menuPrincipal").classList.add("bordaBaseCinza");  
        document.getElementById('link_acomodacao').style.display='none';
        document.getElementById('link_experiencia').style.display='none';
        document.getElementById('pais').style.marginLeft = '800px';
        document.getElementById('buscaTopo').style.display = 'block';
        document.getElementById('pesquisa').style.display = 'none';
}

function menuRegiao(){
    if(document.getElementById("pais").style.display =="none"){        
        document.getElementById("pais").style.display ="block";         
    }else{
        document.getElementById("pais").style.display ="none";         
    }    
}

window.addEventListener('scroll',function(){
    alteraMenu();
})

function abrePesquisa(){
    document.getElementById('pesquisa').classList.add('painelPesquisaRolou');
    document.getElementById('pesquisa').style.display = 'block';
    document.getElementById('pesquisa').classList.remove('painelPesquisa');
}
function fechaPesquisa(){
    ocument.getElementById('pesquisa').classList.add('painelPesquisa');
    document.getElementById('pesquisa').style.display = 'none';
    document.getElementById('pesquisa').classList.remove('painelPesquisaRolou');
    }