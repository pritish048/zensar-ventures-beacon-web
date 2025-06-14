
import { Mountain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Mountain 
          size={28} 
          className="text-blue-600" 
          strokeWidth={2.5}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
          Zensar
        </h1>
        <span className="text-xs text-gray-500 font-medium -mt-1">
          INCORPORATED
        </span>
      </div>
    </div>
  );
};

export default Logo;
