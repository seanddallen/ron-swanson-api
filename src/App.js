import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  
  state = {
    currentQuote: "",
    inputValue: null
  }

  displayRandomQuote = async () => {
    const response = await Axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    this.setState({currentQuote: response.data[0]})
    // console.log(response.data[0])
  }

  displaySmallQuote = async () => {
    const response = await Axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    if(response.data[0].split(' ').length <= 4){
      this.setState({currentQuote: response.data[0]})
    } else {
      this.displaySmallQuote()
    }
    // console.log(response.data[0].split(' '))
  }

  displayMediumQuote = async () => {
    const response = await Axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    if(response.data[0].split(' ').length >= 5 && response.data[0].split(' ').length <= 12){
      this.setState({currentQuote: response.data[0]})
    } else {
      this.displayMediumQuote()
    }
    // console.log(response.data[0].split(' '))
  }

  displayLargeQuote = async () => {
    const response = await Axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    if(response.data[0].split(' ').length >= 13){
      this.setState({currentQuote: response.data[0]})
    } else {
      this.displayLargeQuote()
    }
    // console.log(response.data[0].split(' '))
  }

  updateInput = (e) => {
    this.setState({inputValue: e.target.value})  
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.inputValue)
  }
  
  render() {
    return (
      <div className="App" style={{backgroundColor: 'orange'}}>
        <header className="App-header">

        </header>
        <main style={{display: 'flex'}}>

          <div style={{border: '2px solid red', width: '50vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={require('./images/rs1.png')} alt="ron swanson face" style={{cursor: 'pointer'}} onClick={this.displayRandomQuote} />
          </div>

          <div style={{border: '2px solid green', width: '50vw', height: '100vh', display: 'flex-col'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
              <button style={{cursor: 'pointer', margin: '0px 20px'}} onClick={this.displaySmallQuote}>Small</button>
              <button style={{cursor: 'pointer', margin: '0px 20px'}} onClick={this.displayMediumQuote}>Medium</button>
              <button style={{cursor: 'pointer', margin: '0px 20px'}} onClick={this.displayLargeQuote}>Large</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
              <div style={{border: '5px solid black', borderRadius: '5px', height: '30vh', width: '40vw'}}>
                <h3>{this.state.currentQuote}</h3>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
              <form action="" style={{display: 'flex-col'}}>
                <div style={{width: '15vw', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between'}}>
                  <input type="radio" name="vote" value="1" onClick={this.updateInput}/>1
                  <input type="radio" name="vote" value="2" onClick={this.updateInput}/>2
                  <input type="radio" name="vote" value="3" onClick={this.updateInput}/>3
                  <input type="radio" name="vote" value="4" onClick={this.updateInput}/>4
                  <input type="radio" name="vote" value="5" onClick={this.updateInput}/>5
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                  <button onClick={this.handleSubmit}>Submit</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                  <h3>Quote Rating: 3/5</h3>
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
