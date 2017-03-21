import React from 'react'
import { render } from 'react-dom'

import { Top } from "./components/Top"
import { Greet } from "./components/Greet"


console.log('Hello Webpack!');

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      homeLink: 'Greet'
    } 
  }

  onGreet () {
    alert("Hello!")
  }

render() {

    let user = {
      name: "Anvika Kutty"
    //  initialAge: 9,
    //  hobbies: ["Sports", "Ayy Lmao", "Reading"]
  }
  
    return (
      <div className="container">
        
        <div className="row">
          <Top/>
        </div>
        <div className="row">
          <Greet
            user={ user }
          />
        </div>
        
      </div>
    )
  }

}

render(<App />, window.document.getElementById('app'))