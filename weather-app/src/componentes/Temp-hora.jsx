import React from 'react';
import '../hojas-de-estilo/temp-hora.css';
import '../hojas-de-estilo/temp-completa.css';

function TempHora(props){
    return(
      <div className='contenedor-temp-hora'>
        <img className='imagen-clima'
        src={require(`../imagenes/c-${props.imagen}.png`)}
        alt={props.textImagen}
        />
          <div className='contenedor-texto-clima'>
          <h2 className='hora-clima'> {props.hora}</h2>
          <h2 className='temp-clima'>{props.temperatura}</h2>
          </div> 
      </div>   
    );
}

function TempCompleta(props){
  return(
    <div className='contenedor-temp-completa'>
      
      <div className='contenedor-date-completa'>
       <h3 className='day'> <strong> {props.day} </strong></h3>
       <h3 className='complete-date'>{props.fulldate}</h3>
      </div>
      <div className='contenedor-temp'>
        <h1 className='temperature'>{props.temperature}</h1>
      </div>
      <div className='contenedor-img'>
        <img className='img-fulldate' src={require(`../imagenes/c-${props.imagenFullDate}.png`)}
         alt={props.descriptionImage}
         />
      </div>
    </div>
  );
}
export {TempHora ,TempCompleta};
// export default TempHora;
