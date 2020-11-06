import './App.css';
import Button from './components/Button';
import List from './components/List';


function App() {
  return (
    <div className="container">
      <h1 style={{justifyContent:"center",color:"red"}}>Calculator</h1>

       <div className="d-flex flex-row" >
          <Button />
          <List />
        </div>
    </div>

  );
}

export default App;
