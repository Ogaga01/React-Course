import './App.css';

function App() {
  return (
    <div className="App">
      <User name={'Ogaga'} age={25} description={'A fine, wealthy, healthy boy who God has got'} />
    </div>
  );
}

const User = (props) => {
  return (
    <>
      <hi>{props.name}</hi>
      <h2>{props.age}</h2>
      <p>{props.description}</p>
    </>
  );
}

export default App;
