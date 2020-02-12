class Pet {
  constructor (props) {
    this.props = props
  }

  getName () {
    return this.props.name
  }

  getSpecies () {
    return this.props.species
  }

  getSpeech () {
    return 'I make this sound: '
  }

   getIdentity = () => {
     console.log(this)
   }
}
class Dog extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'dog'
  }

  getSpeech () {
    return super.getSpeech() + 'Woof!'
  }
}
class Cat extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'cat'
  }

  getSpeech () {
    return super.getSpeech() + 'Meow!'
  }
}

function sayName (pet) {
  console.log(`My name is ${pet.getName()} and I am a ${pet.getSpecies()}.`)
  console.log(`${pet.getSpeech()}`)
}

var myPet = new Dog({ name: 'Bindi' })
sayName(myPet)
myPet.getIdentity()
// assign the method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity
// call function using myIdentity
myIdentity()
var myCat = new Cat({ name: 'Khaleesi' })
sayName(myCat)
myCat.getIdentity()
