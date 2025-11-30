import dbConnect, { collectionNamesObj } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { poppins } from "../layout";


export default async function ServicesSection  ()  {
  const data = await dbConnect(collectionNamesObj.servicesCollection).find({}).toArray();
  return (
    <>
    <div>
      <h1 className="pt-30 pb-5 font-bold text-5xl justify-center items-center text-center">Our Services</h1>
      <p className={`${poppins.className} text-lg mb-8 max-w-2xl text-center mx-auto`}>
          High-quality services, expert technicians, and seamless customer experience.
        </p>

    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-40 w-280 mx-auto gap-6">
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
                  <h3 className={`${poppins.className} text-lg font-semibold text-gray-800`}>
                    {item.title}
                  </h3>

                  <p className={`${poppins.className} text-md text-gray-600 mt-1 flex flex-col`}>
                    {item.price}
                  </p>
                </div>

                <Link href={`/services/${item._id}`}>
                  <FaArrowRight className="w-7 h-7 text-yellow-300 group-hover:text-white" />
                </Link>

                {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
              View Details
            </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};


// export default ServicesSection;
