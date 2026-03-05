import './App.css'
import { useState } from 'react';


function App() {
  const [active, setActive] = useState(false);
  
  function Click() {
     console.log("Menu sobre mi abierto");
     setActive(true);
  }
  return (
    <>
    <div>
          <div className='bg-gray-300 flex justify-center items-center flex-col text-center gap-3' id='menu_desplegable' style={{ display: active ? 'flex' : 'none' }}>
          <div>
            <img src='/close128.png' alt='salir_icono' className='my-8'/>
          </div>
          <h1 className='text-20'>¡Hola!</h1>
          <h2 className=''>¡Soy santiago, un programador full stack! :D</h2>
          <p className=''>Perdon por el vago portafolio pero este portafolio, esta hecho para mostrar proyectos <br /> 
          Proximamente hare uno mucho mas bueno! :(
          </p>
          <p>La verdad es simple por q encontre un diseño simple, hice el mio y asi quedo 👀</p>
      </div>
      <header className='flex justify-between items-center text-center'>
        <h1 className='text-3xl font-bold relative bottom-1 my-3' id="santiago__h1">Santiago</h1>
        <div>
          <img src='/burger128.png' alt='Barra_de_datos' className='w-10 m-1 my-3' onClick={Click}/>
        </div>
      </header>
    </div>
    </>
  )
}


export default App