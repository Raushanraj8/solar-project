"use client";
// import React from 'react';
// import articleImage from '/main.jpg'; 

// const MainArticle = () => {
//   return (
//     <section className="px-8 py-16">
//       {/* Title Section */}
//       <h1 className="text-5xl font-bold mb-8">Renewable energy innovations and insights.</h1>

//       {/* Main Content - Image and Article Description */}
//       <div className="flex flex-col lg:flex-row justify-between items-start">
//         {/* Image */}
//         <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
//           <img src={articleImage} alt="Renewable Energy" className="rounded-lg w-full h-auto shadow-lg" />
//         </div>

//         {/* Article Description */}
//         <div className="lg:w-1/2 w-full lg:pl-8">
//           <p className="text-gray-500 mb-2">June 01, 2024</p>
//           <p className="text-lg text-gray-700 mb-8">
//             Simple changes, such as using energy-efficient appliances, reducing water usage, and incorporating renewable energy
//             sources like solar panels into your home, can make a significant difference.
//           </p>

//           <h2 className="text-2xl font-bold mb-4">Sustainable Living Tips</h2>
//           <ul className="space-y-4">
//             <li className="flex justify-between border-b pb-2">
//               <span>Innovative Energy Storage Solutions</span>
//               <a href="#" className="text-gray-600 hover:text-black">[READ MORE]</a>
//             </li>
//             <li className="flex justify-between border-b pb-2">
//               <span>Bioenergy Breakthroughs</span>
//               <a href="#" className="text-gray-600 hover:text-black">[READ MORE]</a>
//             </li>
//             <li className="flex justify-between border-b pb-2">
//               <span>Harnessing Nature’s Energy</span>
//               <a href="#" className="text-gray-600 hover:text-black">[READ MORE]</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainArticle;


import React from 'react';
import articleImage from '@/public/main.jpg'; // Replace with the actual path to your image
import Image from 'next/image';

const MainArticle = () => {
  return (
    <section className="px-8 py-16">
      {/* Title Section */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Renewable energy <br />innovations and insights.</h1>

      {/* Main Content - Image and Article Description */}
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center">
          <Image
            src={articleImage}
            alt="Renewable Energy"
            className="rounded-lg object-cover w-full h-[350px] lg:w-[400px] lg:h-[400px] shadow-lg"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Article Description */}
        <div className="lg:w-1/2 w-full lg:pl-8">
          <p className="text-gray-500 mb-2">June 01, 2024</p>
          <p className="text-lg text-gray-700 mb-8">
            Simple changes, such as using energy-efficient appliances, reducing water usage, and incorporating renewable energy
            sources like solar panels into your home, can make a significant difference.
          </p>

          <h2 className="text-2xl font-bold mb-4">Sustainable Living Tips</h2>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span>Innovative Energy Storage Solutions</span>
              <a href="#" className="text-gray-600 hover:text-black">[READ MORE]</a>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Bioenergy Breakthroughs</span>
              <a href="#" className="text-gray-600 hover:text-black">[READ MORE]</a>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Harnessing Nature’s Energy</span>
              <a href="#" className="text-gray-600 hover:text-black">[READ MORE]</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;
