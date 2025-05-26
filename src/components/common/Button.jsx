import { Link } from "react-router-dom";

const Button = ({ text, className, href, children }) => {
  return (
    <div>
      <Link to={href} className={className}>
        {text}
        {children}
      </Link>
    </div>
  );
};

export default Button;
