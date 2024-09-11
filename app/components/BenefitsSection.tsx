"use client";
// import React from 'react';
// import backgroundImage from '/water.jpg'; 
// import overlayImage from '/water2.jpg'; 

// const BenefitsSection = () => {
//   return (
//     <section className="relative px-8 py-16">
//       {/* Heading and Subheading */}
//       <div className="mb-12">
//         <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
//           Sustainable and thriving future for our planet.
//         </h1>
//         <p className="text-gray-700 text-lg lg:w-2/3">
//           Renewable energy sources offer numerous advantages that contribute to a sustainable and thriving future for our planet.
//         </p>
//       </div>

//       {/* Background Image */}
//       <div className="relative w-full h-96 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
//         {/* Overlay Card */}
//         <div className="absolute bottom-16 left-12 bg-white p-6 rounded-lg shadow-lg">
//           <img src={overlayImage} alt="Environmental Benefits" className="rounded-lg mb-4 w-full h-40 object-cover" />
//           <h2 className="text-lg font-bold">Environmental Benefits</h2>
//           <p className="text-sm text-gray-600 mt-2">
//             Switching to renewable energy reduces carbon emissions and pollutants, mitigating climate change and improving air quality.
//           </p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-8">
//         <button className="flex items-center text-sm text-gray-700 hover:text-black">
//           <span className="mr-2">←</span> Previous
//         </button>
//         <button className="flex items-center text-sm text-gray-700 hover:text-black">
//           Next <span className="ml-2">→</span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;


import React from 'react';
import overlayImage from '@/public/water2.jpg';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/water.jpg)` }}
      >
        {/* Overlay Card */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80">
            <Image
              src={overlayImage}
              alt="Environmental Benefits"
              className="rounded-lg mb-4 w-full h-40 object-cover"
              // layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <h2 className="text-lg font-bold">Environmental Benefits</h2>
            <p className="text-sm text-gray-600 mt-2">
              Switching to renewable energy reduces carbon emissions and pollutants, mitigating climate change and improving air quality.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8">
        <button className="flex items-center text-sm text-gray-200 hover:text-black">
          <span className="mr-2">←</span> Previous
        </button>
        <button className="flex items-center text-sm text-gray-200 hover:text-black">
          Next <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
