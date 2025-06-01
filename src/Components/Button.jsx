import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Button = ({ to, onClick, className, children = "Discover Now" }) => {
  const content = (
    <>
      {children}
      <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
    </>
  );

  const baseClass =
    "h-auto mt-2 flex items-center whitespace-nowrap rounded-2xl hover:text-star bg-space-gradient px-4 py-2 transition-all duration-500 transform hover:scale-105 delay-100 hover:shadow-lg hover:shadow-black";

  if (to) {
    return (
      <Link to={to} className={`${baseClass} ${className || ""}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className || ""}`}>
      {content}
    </button>
  );
};

export default Button;
