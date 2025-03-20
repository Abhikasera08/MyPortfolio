import React from 'react';

function Project() {
  return (
    <>
      <div className='bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col  justify-center'>

        {/* Profile Image Section */}
        <div className="flex justify-center items-center my-6">
          <img 
            src="./pic2.png" 
            alt="Profile" 
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg bg-white"
          />
        </div>

        {/* Project Section */}
        <h1 className="text-center text-4xl font-bold text-white my-8 underline decoration-wavy">
          Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-8 px-4">

          {/* Wine Website Project */}
          <div className="bg-white p-5 rounded-2xl shadow-xl w-full max-w-sm text-center border-2 border-blue-300 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-blue-500">Wine Website Project</h2>
            <p className="text-sm text-gray-500 mb-2">(Using HTML and CSS)</p>
            <p className="text-gray-700 mb-4">
              Welcome to my wine website! This project is built with HTML and CSS.
            </p>
            <a 
              href="https://wineclud.netlify.app/" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Visit this website
            </a>
          </div>

          {/* E-commerce Website Project */}
          <div className="bg-white p-5 rounded-2xl shadow-xl w-full max-w-sm text-center border-2 border-green-300 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-green-500">E-commerce Website Project</h2>
            <p className="text-sm text-gray-500 mb-2">(API-based Project)</p>
            <p className="text-gray-700 mb-4">
              This project fetches product data using APIs.
            </p>
            <a 
              href="https://e-commerce-website-xi-seven.vercel.app"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Visit this website
            </a>
          </div>

          {/* Product Designer Project */}
          <div className="bg-white p-5 rounded-2xl shadow-xl w-full max-w-sm text-center border-2 border-purple-300 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-purple-500">Product Designer</h2>
            <p className="text-sm text-gray-500 mb-2">(Using JavaScript)</p>
            <p className="text-gray-700 mb-4">
              This project is built using JavaScript, HTML, and CSS.
            </p>
            <a 
              href="https://product-desinger.vercel.app"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
            >
              Visit this website
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
