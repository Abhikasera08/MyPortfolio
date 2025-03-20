import React from 'react';

function About() {
  return (
 <>
<div className='bg-gradient-to-r from-purple-500 to-blue-500 h-screen'>
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-32 h-32 mb-3">
          <img src="./pic1.png" alt="Profile" className="w-full h-full rounded-full shadow-lg  " />
        </div>

        <div className="h-auto mt-16 bg-white p-4 rounded-lg shadow-lg text-center">
          <h1 className="text-lg font-bold text-blue-600 mb-2">About Me</h1>
          <p className="text-gray-700 text-lg">
            I'm Abhijeet Kasera, a B.Com graduate from Vikram University with frontend development training from 'Code with Priyanshi.'
          </p>

          <h1 className="text-lg font-bold text-blue-600 mt-3">Education</h1>
          <div className="text-gray-700 text-lg text-left mt-1">
            <p><span className="font-semibold">B.Com:</span> Govt. Commerce College, Ratlam</p>
            <p><span className="font-semibold">Diploma (DCA):</span> Sai Institution, Ratlam</p>
            <p><span className="font-semibold">Frontend Development:</span> Code With Priyanshi,Ratlam</p>
          </div>

          <h1 className="text-lg font-bold text-blue-600 mt-3">Skills</h1>
          <div className="flex flex-wrap justify-center gap-1 mt-1 text-gray-700 text-lg">
            <span className="bg-gray-200 px-2 py-1 rounded-lg">HTML</span>
            <span className="bg-gray-200 px-2 py-1 rounded-lg">CSS</span>
            <span className="bg-gray-200 px-2 py-1 rounded-lg">JavaScript</span>
            <span className="bg-gray-200 px-2 py-1 rounded-lg">React & Redux</span>
            <span className="bg-gray-200 px-2 py-1 rounded-lg">Tailwind CSS</span>
            <span className="bg-gray-200 px-2 py-1 rounded-lg">Bootstrap</span>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}

export default About;