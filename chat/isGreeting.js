import voca from 'voca'

const greetings = [
  'hi',
  'hey',
  'hello',
  'yo',
  'sup',
  'hola',
  'moi',
  'hei',
  'hiya',
  'heya',
  'greetings'
]

export default message => {
  const words = voca.words(message)
  return greetings.some(greeting => greeting === voca.slugify(words[0])) // First word must be greeting
}
