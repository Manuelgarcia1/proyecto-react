import {useState} from 'react'
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1 (evento.target.value)
  }

  const onChangeLinea2 = function(evento){
    setLinea2 (evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen (evento.target.value)
  }

  const onClickExportar = function(event){
    html2canvas(document.querySelector("#meme")).then(canvas => {
       // Obtener la imagen en formato Base64
    const dataURL = canvas.toDataURL('image/png');
    
    // Crear un enlace de descarga y asignar la imagen
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'meme.png'; // Asigna el nombre deseado al archivo de descarga
    
    // Agregar el enlace al cuerpo del documento
    document.body.appendChild(link);
    
    // Simular el clic en el enlace para iniciar la descarga
    link.click();
    
    // Eliminar el enlace del cuerpo del documento
    document.body.removeChild(link);
  });
  }

  return (
    <div className="App">
      <div className='memes-center'>
        <select onChange={onChangeImagen}>
            <option value='fire'>Casa en llamas</option>
            <option value='futurama'>futurama</option>
            <option value='history'>history channel</option>
            <option value='matrix'>matrix</option>
            <option value='philosoraptor'>philosoraptor</option>
            <option value='smart'>smart guy</option>
        </select> 
        <input onChange={onChangeLinea1} type='text' placeholder='Linea 1' />
        <input onChange={onChangeLinea2} type='text' placeholder='Linea 2' /> 
        <button onClick={onClickExportar}>Exportar</button>
      </div>

        <div className='meme' id='meme'>
          <span>{linea1}</span> <br/>
          <span>{linea2}</span>
          <img className='imagen' src={"/img/"+ imagen + ".jpg" }/>
        </div>
    </div>
  );
}

export default App;
