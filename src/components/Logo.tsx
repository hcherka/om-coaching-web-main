
import { UserCircle2, Brain } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

const Logo = ({ size = "medium" }: LogoProps) => {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-3xl"
  };

  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center justify-center">
        <UserCircle2 
          className="text-coaching-600 group-hover:text-coaching-500 transition-colors duration-300" 
          size={size === "small" ? 24 : size === "medium" ? 32 : 40} 
        />
        <Brain 
          className="absolute text-coaching-400 group-hover:text-coaching-300 transition-colors duration-300" 
          size={size === "small" ? 14 : size === "medium" ? 16 : 20} 
        />
      </div>
      <span className={`font-serif font-semibold text-coaching-600 group-hover:text-coaching-500 transition-colors duration-300 ${sizeClasses[size]}`}>
        OM Coaching
      </span>
    </Link>
  );
};

export default Logo;
