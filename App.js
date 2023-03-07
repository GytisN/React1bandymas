import logo from './logo.svg';
import './App.css';
import Button from './Components/button/button.js';
import Header from './Components/header/index.js'
import Main from './Components/Main/index.js'

function App() {
  return (
    <div className="App">

      <Header />
<Button text='menu1'>
</Button> 
<Button text='menu2' 
onClick={console.log("ohh yeah")}

>
</Button>

<h6> Gytis Nėnius, pirmas React bandymas. kazkodel neveikia header css </h6>

<Main>
        <div>
          Labas
        </div>
        <Button color="red" text="do not press" >
          
        </Button>
      </Main>

    </div>
  );
}

export default App;
