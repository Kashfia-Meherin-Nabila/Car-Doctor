import dbConnect from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";


export default async function ServicesSection  ()  {
  const data = await dbConnect("services").find({}).toArray();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
      {data.map((item) => {
        return (
          <div key={item._id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />

              <div className="flex place-content-between p-4" >
                <div className=" flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-md text-gray-600 mt-1 flex flex-col">
                    {item.price}
                  </p>
                </div>

                <button className="">
                  <FaArrowRight className="w-7 h-7 text-yellow-300 group-hover:text-white" />
                </button>

                {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
              View Details
            </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// export default ServicesSection;
