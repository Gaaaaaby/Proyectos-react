import React from "react";  /* importacion de los paquetes de react*/  /* no es necesasrio incluir esto puede trabajar sin el mismo */
import '../hoja-de-estilos/testi.css'; /*importacion archivo css */  

function Testimonio(props){  /* esto es un componente con la estructura HTML de lo que queremos mostrar */
    return(
      <div className="contenedor-testimonio">
        <img 
          className="imagen-testimonio"
          src={require(`../imagenes/i-${props.imagen}.jpg`)}    /* insercion de imagenes se usa require*/
          alt={props.textimagen}/> 
            <div className="contenedor-texto-testimonio">
              <p className="nombre-testimonio">
                <strong> {props.nombre}</strong> en {props.pais}
              </p>
              <p className="cargo-testimonio">
                <strong>{props.cargo} </strong>de {props.empresa}
              </p>
              <p className="texto-testimonio">
                "{props.testimonio}"
               </p>
            </div>
      </div>
    );
}


export default Testimonio; //exportamos el componente para que pueda ser usado o importado