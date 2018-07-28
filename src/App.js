import React, { Component } from 'react'
import './App.css'
import GA from './genetics/algorithm'

class App extends Component {

  state = {
    problem: "the infinite monkey theorem states that given an infinite amount time, an infinite number of monkeys hitting keys at random could recreate any work such as the complete volumes of William Shakespeare.",
    solution: null,
  }

  componentDidMount() {
    this.ga = new GA(this.state.problem)
    this.setState({
      population: this.ga.seed(1000)
    })
  }

  renderSolution() {
    if (!this.state.solution) return
    return this.state.solution.genes.map(letter => <span className="letter">
      { letter.toString() }
    </span>)
  }

  solve = () => {
    const { problem, solution } = this.state

    setTimeout(() => {
      this.setState(prevState => ({
        population: this.ga.breedGeneration(prevState.population),
        solution: this.ga.bestInPopulation(prevState.population)
      }))

      if(this.state.solution.toString() !== problem) {
        this.solve()
      }
      
    }, 10)
  }

  updateProblem = (e) => {
    this.ga = new GA(e.target.value)
    this.setState({
      population: this.ga.seed(1000)
    })

    this.setState({
      problem: e.target.value
    })
  }

  render() {
    return <div className="container">
      <div>
        { this.renderSolution() }
      </div>

      <textarea
        type="text"
        value={this.state.problem}
        onChange={ this.updateProblem }
        rows={4}
        cols={80}
      />

      <div>
        <button
          onClick={this.solve}
        >Solve!</button>
      </div>
    </div>
  }
}

export default App
