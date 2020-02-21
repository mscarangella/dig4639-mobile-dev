import Card from './components/Card/index3.js'

function runOnLoad () {
  // Create a container for us
  const element = document.createElement('div')
  element.id = 'container'
  document.body.appendChild(element)
  var newCard = new Card({ content: 'Sample value provided' })
  element.appendChild(newCard.render())
}

window.addEventListener('DOMContentLoaded', runOnLoad)
