import React,{useRef as usar, useLayoutEffect as efeito} from "react";
import '../templates/Conteudo.css'


function conteud(){
  const usa = usar()
  efeito(()=>{
 
      const componentLogin =document.querySelector('.Login')
      const buttonLogin = document.querySelector('#efetuarLogin')
      const opacity1 = document.querySelector('.form ')
      const opacity2 = document.querySelector('.rowButton ')
      const opacity3= document.querySelector('#nomeUsuario')
      
      console.log(componentLogin)
      
      buttonLogin.onclick=()=>{
        componentLogin.style.display ='block'
        opacity1.style.opacity ='10%'
        opacity2.style.opacity ='10%'
        opacity3.style.opacity ="10%"
        console.log()
        
           
    }
          
         
    
          
 
    })

return(
<div className="conteudo">
<div id="nomeUsuario" ref={usa}> Cadastro  de Usuario </div>
< div id="login"><button id="efetuarLogin">LOGIN </button></div>

<div className="Login">
<div id="informaçoes">Login </div>
<form action="">
  <div className="forlogin">
       <label id="nomelogin">Nome :</label>
       <input  id="placelogin" type="text" placeholder="Digite seu Nome" />
       <label id="nomelogin2">Email:</label>
       <input  id="placelogin2" type="text" placeholder="Digite seu Email" />
       <button id="inscrever">Inscreva-se</button>
       <button id="Entrar">Entrar</button>
       <button id="Cancelar">Cancelar</button>




  </div>
</form>


</div>

<form action="">
<div className="form">

           <div className="row">     
           <label id="nomeform" >Nome :</label>
           <input id="placeNome" type="text" placeholder="Digite Seu Nome" />
           <label id="emailform">E-mail : </label>
           <input id="placeEmail" type="text"  placeholder="Digite Seu Email"/>
           </div>
         </div>                        
     <div className="rowButton">
      <button id="salvar">Salvar</button>
      <button id="cancelar">Cancelar</button>
         </div>
         
</form>
</div>

)}
export default conteud    