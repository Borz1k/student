const { useState } = React

const Tmr = () => {
  var [second, setSecond] = useState(0);

  var tick = (event) => {
    setSecond(second + 1)
  }

  var componentDidMount = (event) => {
    setInterval(tick, 1000);
  }

  return (
    <div onMouseMove={componentDidMount}>
      Seconds: {second}
    </div>
  );
}

ReactDOM.render(
  <Tmr />,
  document.getElementById('app')
);