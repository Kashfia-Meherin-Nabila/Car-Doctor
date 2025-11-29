import db, { collectionNamesObj } from "@/lib/db";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function ServiceDetails({ params }) {
  const p = await params;
  const servicesCollection = db(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

  // const data = await servicesCollection.findOne({_id: new ObjectId(p.id)});
  return (
    <div>
      <section className="flex justify-center ">
        <figure className="relative">
          <Image
            src={"/assets/checkout.jpg"}
            alt={"banner"}
            width={1110}
            height={180}
          />
          <div className="transparent-layer bg-black/50 absolute w-full h-full top-0">
            <div className="w-full h-full flex items-center text-6xl font-bold ps-18 py-5">
              <div className="text-white">
                <h1 className="font-bold text-8xl">{data.title}</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>

      {/* <section className='flex justify-center ' >
                <Image src={data.img} alt={data.title} width={480} height={280}/>
                <h1 className='font-bold text-3xl'>{data.title}</h1>

            </section> */}

      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Top Section: Image + Sidebar */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT — Service Image */}
          <div className="w-full md:w-2/3">
            <Image
              src={data?.img}
              alt={data?.title}
              width={480}
              height={280}
              className="rounded-xl w-full h-auto shadow-md"
            />
          </div>

          {/* RIGHT — Price + Checkout */}
          <div className="w-full md:w-1/3 space-y-4 p-5 rounded-xl border shadow-md bg-base-100">
            <h1 className="text-3xl font-bold">{data?.title}</h1>

            <p className="text-2xl font-semibold text-primary">
              Price: ${data?.price}
            </p>

            <button className="btn btn-neutral btn-outline w-full text-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* DESCRIPTION SECTION */}
        <div className="mt-10 bg-base-200 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Service Description</h2>
          <p className="text-base">{data?.description}</p>
        </div>
      </section>



      {/* <p>{p.id}</p>
      <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}

