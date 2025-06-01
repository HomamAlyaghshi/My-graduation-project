import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Button2 = ({ to, onClick, className, children = "Discover Now" }) => {
  const content = (
    <>
      {children}
      <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
    </>
  );

  const baseClass =
                "flex items-center text-white whitespace-nowrap bg-neon rounded-3xl shadow-md hover:scale-105 transition-all duration-500 delay-200 shadow-white hover:shadow-black hover:text-star hover:shadow-xl px-5 py-2 justify-center h-auto gap-[4px] border-b border-transparent text-[14px] md:text-[16px]"

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

export default Button2;
