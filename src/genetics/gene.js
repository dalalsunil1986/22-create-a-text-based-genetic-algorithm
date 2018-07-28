class Gene {
  constructor(attrs={}) {
    this.fitness = attrs.fitness || -1
    this.value = attrs.value
  }

  toString() {
    return this.value
  }
}

export default Gene
