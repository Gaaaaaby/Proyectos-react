
import './App.css';
import Testimonio from "./componentes/testimonio" /* importacion de archivo testimonio */

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Estrellas de Hollywood en el mundo moderno</h1>
      <Testimonio        /*se pasan los props al componente*/
      nombre='Zendaya'
      textimagen='foto de perro'
      pais='USA'
      imagen='d'  /*se coloca el nombre de la imagen en este caso solo d*/
      cargo='Actriz'
      empresa='Spain'
      testimonio='Zendaya Maree Stoermer Coleman (Oakland, California; 1 de septiembre de 1996),​ conocida simplemente como Zendaya, es una actriz, cantante, bailarina y modelo estadounidense. Ha recibido varios reconocimientos durante su trayectoria, incluido un Emmy, un premio Satellite y un premio Saturn.'
      />   
      
      < Testimonio    //estas son plantillas cada una que tiene la palabra Testimonio
        nombre='Timothee'
        textimagen='foto de Timothee'
        pais='Francia'
        imagen='t'
        cargo='Actor porno'
        empresa='Sony'
        testimonio='Timothée Hal Chalamet (Inglés /ˈtɪməθi_ˈʃæləmeɪ/ TIM-ə-thee SHAL-ə-may,3​4​ pronunciación en francés: /timɔte ʃalamɛ/; Nueva York, 27 de diciembre de 1995) es un actor estadounidense-francés.5​ Ha recibido varios elogios a lo largo de su carrera, incluidas nominaciones para un Premio Óscar, tres BAFTAs, dos Globo de Oro, cuatro SAG y cinco Premios de la Crítica Cinematográfica. Chalamet comenzó su carrera como actor en cortometrajes y comerciales, antes de aparecer en la serie dramática de televisión Homeland en 2012. Dos años más tarde, hizo su debut cinematográfico en la comedia dramática Men, Women & Children y posteriormente apareció en la película de ciencia ficción Interstellar.'
      
      />   
      < Testimonio 
         nombre='Oscar Isaac'
         textimagen='foto de Oscar Isaac'
         pais='Guatemala'
         imagen='j'
         cargo='Director'
         empresa='Disney'
         testimonio='Hoal'

      />
     </div>              
    </div>
  );
}

export default App;
