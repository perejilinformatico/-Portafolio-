import './App.css'

function App() {
  return (
    <>
      <header className='flex justify-between items-center text-center'>
        <h1 className='text-3xl'>Santiago</h1>
        <div>
          <img src='/burger128.png' alt='Barra_de_datos' className='w-10 m-1' onClick={Click}/>
        </div>
      </header>
    </>
  )
}

function Click() {
  
}

export default App