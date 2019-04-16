// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()
      this.state = {
      mood: "happy"
    }
  }
  
  handleClick = event => {
    this.setState({
      mood: "sad"
    })
  }
    
  render()
    return (
      <div>
        <button onClick={handleClick()}>{this.state.mood}</button>
      </div>
      )
}

export default SimpleComponent