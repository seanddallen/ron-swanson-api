import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    currentQuote: ""
  }

  displayRandomQuote = () => {

  }
  
  render() {
    return (
      <div className="App" style={{backgroundColor: 'orange'}}>
        <header className="App-header">

        </header>
        <main style={{display: 'flex'}}>

          <div style={{border: '2px solid red', width: '50vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={require('./images/rs1.png')} alt="ron swanson face" style={{}} onClick={this.displayRandomQuote} />
          </div>

          <div style={{border: '2px solid green', width: '50vw', height: '100vh', display: 'flex-col'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
              <button style={{margin: '0px 20px'}}>Small</button>
              <button style={{margin: '0px 20px'}}>Medium</button>
              <button style={{margin: '0px 20px'}}>Large</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
              <div style={{border: '3px solid black', height: '30vh', width: '40vw'}}>

              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
              <form action="" style={{display: 'flex-col'}}>
                <div style={{border: '2px solid black', width: '15vw', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between'}}>
                  <input type="radio"/>1
                  <input type="radio"/>2
                  <input type="radio"/>3
                  <input type="radio"/>4
                  <input type="radio"/>5
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
