import React from "react";
import { ChevronRight, Truck } from "lucide-react";

export default function DeliveryCard() {
  return (
    <div className="w-full mt-5 lg:mt-7 flex justify-center bg-white">
      <div className="w-[clamp(340px,96vw,1000px)] lg:mx-3 lg:w-[clamp(340px,99vw,1500px)] bg-[#F4F8F3] rounded-2xl shadow-md px-4 py-4 flex items-center justify-between hover:shadow-lg transition-all duration-300">
        
    
        <div className="flex items-center gap-4">
          
              <div className="text-green-600">
            <Truck size={32} strokeWidth={1.8} />
          </div>

          <div>
            <h3 className="text-green-700 font-semibold text-sm sm:text-base">
              Free Delivery
            </h3>

            <p className="text-gray-500 text-xs sm:text-sm">
              On orders over $50
            </p>
          </div>
        </div>

        
        <div className="text-green-600">
          <ChevronRight size={24} />
        </div>
      </div>
    </div>
  );
}