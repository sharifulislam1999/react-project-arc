import React from 'react';

const About = () => {
    return (
        <>
        <div className="text-center space-y-4 sm:space-y-6 py-8 sm:mx-auto border-t-2 border-border border-dashed border-b-2 mb-12 ">
          <div className="text-xl sm:text-4xl font-extrabold text-text_black">
              <h1>Program Sections</h1>
          </div>
          <div className="text-[14px] sm:text-base font-medium text_dark_3">
              <p>Explore diverse hockey programs: skill development, <br className="hidden md:block"/>team training, and events. Join us on the ice! </p>
          </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="px-6 bg-green-900	 py-6 sm:px-10 sm:pb-10 sm:pt-24 junior-program bg-cover bg-center bg-no-repeat rounded-2xl">
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
                <h1>Junior Program</h1>
              </div>
              <div className="text-[14px] sm:text-base font-medium text-white mb-5 sm:mb-6">
                <p>Nurture young talents with our dynamic junior program. Instilling passion, skills, and sportsmanship for future hockey stars.</p>
              </div>
              <div>
                <button className="py-2 px-4 sm:px-6 text-white text-[12px] sm:text-xl font-bold bg-btn-color rounded-lg cursor-pointer">Register Now!</button>
              </div>
            </div>
          </div>
          <div className="px-6 bg-teal-900	 py-6 sm:px-10 sm:pb-10 sm:pt-24 teenager-program bg-cover bg-center bg-no-repeat rounded-2xl">
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
                <h1>Teenager Program</h1>
              </div>
              <div className="text-[14px] sm:text-base font-medium text-white mb-5 sm:mb-6">
                <p>Empower teens with our specialized program, fostering skills, teamwork, and resilience on the hockey journey.</p>
              </div>
              <div>
                <button className="py-2 px-4 sm:px-6 text-white text-[12px] sm:text-xl font-bold bg-btn-color rounded-lg cursor-pointer">Register Now!</button>
              </div>
            </div>
          </div>
          <div className="px-6 bg-pink-900		 py-6 sm:px-10 sm:pb-10 sm:pt-24 teenager-program bg-cover bg-center bg-no-repeat rounded-2xl">
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
                <h1>Teenager Program</h1>
              </div>
              <div className="text-[14px] sm:text-base font-medium text-white mb-5 sm:mb-6">
                <p>Empower teens with our specialized program, fostering skills, teamwork, and resilience on the hockey journey.</p>
              </div>
              <div>
                <button className="py-2 px-4 sm:px-6 text-white text-[12px] sm:text-xl font-bold bg-btn-color rounded-lg cursor-pointer">Register Now!</button>
              </div>
            </div>
          </div>
          <div className="px-6 bg-purple-950		 py-6 sm:px-10 sm:pb-10 sm:pt-24 teenager-program bg-cover bg-center bg-no-repeat rounded-2xl">
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
                <h1>Teenager Program</h1>
              </div>
              <div className="text-[14px] sm:text-base font-medium text-white mb-5 sm:mb-6">
                <p>Empower teens with our specialized program, fostering skills, teamwork, and resilience on the hockey journey.</p>
              </div>
              <div>
                <button className="py-2 px-4 sm:px-6 text-white text-[12px] sm:text-xl font-bold bg-btn-color rounded-lg cursor-pointer">Register Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default About;