import { RopaHeader, Clothes } from './componentes/Ropa';
import './App.css';


function App() {
  return (
    <div className="App">
     < RopaHeader 
     mujer='WOMEN'
     hombre='MEN'
     kids='KIDS'
     icono1='2'
     descripcion='carrito'
     icono2='1'
     descripcion1='money'
     
     />
     <h2>Category Name</h2>
     <div className='container-prendas'>
      < Clothes 
       imgPrenda='1'
       descripImagenPrenda='t-shirt for women/girls'
       descripPrenda='Roxy Pink and White T-shirt'
       pricePrenda='$50.00'
      />
      < Clothes
      imgPrenda='2'
      descripImagenPrenda='no se'
      descripPrenda='Roxy t-shirt'
      pricePrenda='$24.00'
      />
      < Clothes 
      imgPrenda='3'
      descripImagenPrenda='nose'
      descripPrenda='Roxy Grey t-shirt'
      pricePrenda='$13.00'
      />
       < Clothes 
      imgPrenda='4'
      descripImagenPrenda='nose'
      descripPrenda='Roxy Grey Dress'
      pricePrenda='$19.00'
      />
      </div>
    </div>
  );
}

export default App;
