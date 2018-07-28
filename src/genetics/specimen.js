class Specimen {
  constructor() {
    this.genes = []
  }

  fitness() {
    let score = this.genes.reduce((acc, gene) => {
      return acc + gene.fitness
    }, 0)

    score = score / this.genes.length
    score = Math.pow(score, 2)
    return score
  }

  toString() {
    return this.genes.map(gene => gene.toString()).join('')
  }
}

export default Specimen
