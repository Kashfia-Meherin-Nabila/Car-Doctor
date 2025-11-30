import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import Banner from "@/components/Banner";
import Counter from "@/components/Counter.jsx";


export default function Home() {
  
  return (
    <>
    <Banner></Banner>
    <ServicesSection></ServicesSection>   



    {/* counter */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 text-center bg-gray-100">

      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          <Counter to={1200} />
        </h1>
        <p className="text-gray-600 mt-2">Happy Clients</p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          <Counter to={850} />
        </h1>
        <p className="text-gray-600 mt-2">Projects Done</p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          <Counter to={35} />
        </h1>
        <p className="text-gray-600 mt-2">Team Members</p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          <Counter to={12} />
        </h1>
        <p className="text-gray-600 mt-2">Years Experience</p>
      </div>

    </div>
    </>
    
    
  );
  
}
