import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    problem: "",
    solution: ['a', 'b'],
  }

  renderSolution() {
    return this.state.solution.map(letter => <span className="letter">
      { letter }
    </span>)
  }

  render() {
    return <div className="container">
      <div>
        { this.renderSolution() }
      </div>

      <textarea
        type="text"
        value={this.state.problem}
        rows={4}
        cols={80}
      />
    </div>
  }
}

export default App
