const Display = ({ value }) => (
  <div className="display">
    <div className="history">&nbsp;</div>
    <div className="output">{value}</div>
  </div>
);

export default Display;
