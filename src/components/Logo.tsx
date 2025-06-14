
import { Mountain } from "lucide-react";

const Logo = () => {
  // Option 1: Original style with "Ventures"
  const Option1 = () => (
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
          VENTURES
        </span>
      </div>
    </div>
  );

  // Option 2: Single line layout
  const Option2 = () => (
    <div className="flex items-center gap-2">
      <Mountain 
        size={24} 
        className="text-blue-600" 
        strokeWidth={2.5}
      />
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Zensar
        </span>
        <span className="text-gray-600 font-medium ml-1 text-sm">
          Ventures
        </span>
      </h1>
    </div>
  );

  // Option 3: Stacked with larger mountain
  const Option3 = () => (
    <div className="flex items-center gap-3">
      <div className="relative bg-blue-50 p-2 rounded-lg">
        <Mountain 
          size={32} 
          className="text-blue-600" 
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
          Zensar
        </h1>
        <span className="text-xs text-blue-500 font-semibold tracking-wider">
          VENTURES
        </span>
      </div>
    </div>
  );

  // Option 4: Compact modern design
  const Option4 = () => (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Mountain 
          size={26} 
          className="text-blue-600" 
          strokeWidth={2.5}
        />
      </div>
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-none">
          Zensar
          <span className="text-sm text-gray-500 font-normal ml-1">
            Ventures
          </span>
        </h1>
      </div>
    </div>
  );

  // Return Option 1 by default - you can change this to test different options
  // Just change "Option1" to "Option2", "Option3", or "Option4" to see different designs
  return <Option1 />;
};

export default Logo;
