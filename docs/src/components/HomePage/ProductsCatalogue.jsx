import React from "react";
import HeroImage from "../../assets/curd.png";
import Milk from "../../assets/curd.png";
import Curd from "../../assets/curd.png";
import Paneer from "../../assets/curd.png";
import Cheese from "../../assets/curd.png";
import Butter from "../../assets/curd.png";

const ProductsCatalogue = () => {
  return (
    <div>
     

      {/* Products Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#00B86C]">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
          {[{name: "Milk", img: Milk}, {name: "Curd", img: Curd}, {name: "Paneer", img: Paneer}, {name: "Cheese", img: Cheese}, {name: "Butter", img: Butter}].map((product, index) => (
            <div key={index} className="group cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-3 bg-white text-center text-lg font-semibold text-[#00B86C]">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCatalogue;
