import PropTypes from "prop-types";

function CounterApp({ value }) {
  return (
    <div>
      <h1 className="text-info">Counter App</h1>
      <p>value desde el componente padre: <span className="Code">{value}</span></p>
    </div>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
