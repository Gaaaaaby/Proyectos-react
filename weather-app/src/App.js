
import './App.css';
// import TempHora from './componentes/Temp-hora';
import { TempCompleta, TempHora} from './componentes/Temp-hora';


function App() {
  return (
    <div className="App">
      <center><h1>Forecast report</h1></center>
      <div className='mini-div'>
        <h2>Today</h2>
        <h3>May 28, 2021</h3>
        
      </div>
      <div className='big-div'>
      
      < TempHora
       imagen='sol'
       textImagen='imagen de sol'
       hora='14.00'
       temperatura='32°C'
       />
       
       < TempHora
        imagen='lluvia'
        textImagen='imagen de lluvia'
        hora='15.00'
        temperatura='33°C'
       />
       < TempHora
        imagen='nublado'
        textImagen='imagen de clima nublado'
        hora='16.00'
        temperatura='20°C'
        />
        < TempHora
        imagen='nublado'
        textImagen='imagen de clima nublado'
        hora='17.00'
        temperatura='19°C'
        />
        < TempHora
        imagen='nublado'
        textImagen='imagen de clima nublado'
        hora='18.00'
        temperatura='17°C'
        />
       </div>

       <h2 className='next-forecast'>Next Forecast</h2>
       
        <center>
         < TempCompleta 
          day='Friday'
          fulldate='May, 24'
          temperature='32°C'
          imagenFullDate='nublado'
          descriptionImage='clima-nublado'
          />
         <TempCompleta
         day='Saturday'
         fulldate='May, 25'
         temperature='30°C'
         imagenFullDate='lluvia'
         descriptionImage='clima-lluvioso'
         />
         <TempCompleta
         day='Sunday'
         fulldate='May, 26'
         temperature='28°C'
         imagenFullDate='lluvia'
         descriptionImage='clima-lluvioso'
         />
         <TempCompleta
         day='Monday'
         fulldate='May, 27'
         temperature='30°C'
         imagenFullDate='sol'
         descriptionImage='clima-soleado'
         />
         

         </center>
    </div>
    
  );
}

export default App;
