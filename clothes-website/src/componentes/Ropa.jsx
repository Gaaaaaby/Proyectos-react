import React from 'react';
import '../hojas-de-estilo/ropa.css';


function RopaHeader(props){
    return(
     <div className='contenedor-header'>
         <div className='div-1'>
         <h3 className='ropa-mujer'>{props.mujer}</h3>
         <h3 className='ropa-hombre'>{props.hombre}</h3>
         <h3 className='ropa-kids'>{props.kids}</h3>
         </div>
         <div className='div-2'>
         <img className='money'
         src={require(`../imagenes/i-${props.icono1}.png`)}
         alt={props.descripcion}
         />
         <img className='carrito'
         src={require(`../imagenes/i-${props.icono2}.png`)}
         alt={props.descripcion1}
         />
         </div>
     </div>
    );
}

function Clothes(props){
    return(
    <div className='container-clothes'>
        <img className='img-prenda'
        src={require(`../imagenes/c-${props.imgPrenda}.jpg`)}
        alt={props.descripImagenPrenda}
        />
        <h3 className='description-img-prenda'>{props.descripPrenda}</h3>
        <h3 className='price-img-prenda'>{props.pricePrenda}</h3>
    </div>
    );
}

export {RopaHeader, Clothes}  
