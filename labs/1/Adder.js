class Adder{
    constructor(props) {
        this.props = props;
        this.props.a = a;
        this.props.b = b;
  }

sum(a, b){
  return (a + b);
};

render = `The sum of ${this.props.a} and ${this.props.b} is ${sum}.`;
};

console.log(render);

module.exports = Adder;