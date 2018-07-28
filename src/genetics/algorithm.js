const letters = 'abcdefghijklmnopqrstuvwxyz'
const punctuation = " ,.'-"

export const genePool = [
  ...letters.map( letter => letter.toUpperCase() ),
  ...letters,
  ...punctuation,
]