var Greeter = React.createClass({ // takes as argument an options object
  getDefaultProps: function() {
    return {
      name: 'React',
      msg:  'ach so!'
    }
  },
  render: function () {
    var name = this.props.name,
        msg  = this.props.msg;

    return (
      <div>
        <h1>Hola {name}!</h1>
        <p>{msg}</p>
      </div>
    );
  }
});

var sisterName = 'Vale';
var msg = 'este es un mensaje';

ReactDOM.render(
  <Greeter name={sisterName} msg={msg}/>,
  document.getElementById('app')
);
