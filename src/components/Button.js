const Button = ({ onClick, value, className }) => (
  <button className={className} data-value={value} onClick={onClick}>
    {value}
  </button>
);

export default Button;
