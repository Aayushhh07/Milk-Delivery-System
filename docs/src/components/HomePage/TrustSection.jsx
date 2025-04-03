import React from "react";
import delivery from "../../assets/delivery.webp";
import cattle from "../../assets/cattle.webp";
import farms from "../../assets/farms.webp";

const TrustSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 text-left">Farm to Home, Everyday!</h2>
        <div className="grid grid-cols-5 gap-8 items-center relative">
          {/* Milk Collection */}
          <div className="flex flex-col items-center relative">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-4 shadow-md relative overflow-visible">
              <img src={cattle} alt="Milk Collection" className="w-28 h-28 absolute bottom-0 translate-y-0.1" />
            </div>
            <p className="text-gray-700 font-bold text-center">Milk collection from healthy cattle</p>
          </div>

          {/* Dashed Line */}
          <div className="flex items-center justify-center">
            <div className="w-16 border-t-2 border-green-500 border-dashed"></div>
          </div>

          {/* Quality Testing */}
          <div className="flex flex-col items-center relative">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-4 shadow-md relative overflow-visible">
              <img src={farms} alt="Quality Testing" className="w-28 h-28 absolute bottom-0 translate-y-0.1" />
            </div>
            <p className="text-gray-700 font-bold text-center">Quality tested for 100+ common adulterants</p>
          </div>

          {/* Dashed Line */}
          <div className="flex items-center justify-center">
            <div className="w-16 border-t-2 border-green-500 border-dashed"></div>
          </div>

          {/* Home Delivery */}
          <div className="flex flex-col items-center relative">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-4 shadow-md relative overflow-visible">
              <img src={delivery} alt="Home Delivery" className="w-28 h-28 absolute bottom-0 translate-y-0.1" />
            </div>
            <p className="text-gray-700 font-bold text-center">Home delivery by 7 AM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;