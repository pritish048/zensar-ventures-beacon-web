
import { TreePine } from "lucide-react";

const Logo = () => {
  // Option 1: Original style with "Ventures"
  const Option1 = () => <div className="flex items-center gap-2 bg-red-100 rounded-xl">
      <div className="relative">
        <TreePine size={28} className="text-blue-600" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">Zensar</h1>
        <span className="text-xs text-gray-500 font-medium -mt-1">
          VENTURES
        </span>
      </div>
    </div>;

  // Option 2: Single line layout
  const Option2 = () => <div className="flex items-center gap-2">
      <TreePine size={24} className="text-blue-600" strokeWidth={2.5} />
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Zensar
        </span>
        <span className="text-gray-600 font-medium ml-1 text-sm">
          Ventures
        </span>
      </h1>
    </div>;

  // Option 3: Stacked with larger tree
  const Option3 = () => <div className="flex items-center gap-3">
      <div className="relative bg-blue-50 p-2 rounded-lg">
        <TreePine size={32} className="text-blue-600" strokeWidth={2} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
          Zensar
        </h1>
        <span className="text-xs text-blue-500 font-semibold tracking-wider">
          VENTURES
        </span>
      </div>
    </div>;

  // Option 4: Compact modern design
  const Option4 = () => <div className="flex items-center gap-2">
      <div className="relative">
        <TreePine size={26} className="text-blue-600" strokeWidth={2.5} />
      </div>
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-none">
          Zensar
          <span className="text-sm text-gray-500 font-normal ml-1">
            Ventures
          </span>
        </h1>
      </div>
    </div>;

  // Option 5: Large tree forest with one large sequoia
  const Option5 = () => <div className="flex items-center gap-3">
      <div className="relative">
        {/* Tree forest with one large sequoia */}
        <div className="relative flex items-end">
          <TreePine size={20} className="text-blue-400" strokeWidth={2} />
          <TreePine size={36} className="text-blue-600 -ml-2" strokeWidth={2.5} />
          <TreePine size={22} className="text-blue-500 -ml-2" strokeWidth={2} />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
          Zensar
        </h1>
        <span className="text-xs text-blue-600 font-semibold tracking-wider">
          VENTURES
        </span>
      </div>
    </div>;

  // Return Option 5 by default - you can change this to test different options
  // Just change "Option5" to "Option1", "Option2", "Option3", or "Option4" to see different designs
  return <Option5 />;
};
export default Logo;
