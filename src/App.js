import logo from './logo.svg';
import './App.css';
import ComponenteA from './componets/pure/componenteA';



function App() {
 const contactoPrueba={
  nombre: 'Lohana',
  apellido:'orellano',
  email: 'lohana@mail.com',
  conectado:false

 }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba}></ComponenteA>
      </header>
    </div>
  );
}

export default App;
