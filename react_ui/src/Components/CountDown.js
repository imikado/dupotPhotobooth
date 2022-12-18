import React from "react";

export default function CountDown(props) {
  const [counter, setCounter] = React.useState(3);

  React.useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
      return;
    }

    props.handle();
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}
