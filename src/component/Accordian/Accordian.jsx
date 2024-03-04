import React from 'react';

const Accordian = () => {
    return (
        <>
      <div className="p-4 sm:p-5 md:p-6 border rounded-xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <div>
              <img src="../../../public/Images/tesimonial.png" alt="" className="w-full sm:h-[470px]"/>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div>
              <div className="collapse collapse-plus border-b rounded-none px-0">
                <input type="radio" name="my-accordion-3" checked="checked"/> 
                <div className="collapse-title text-xl font-extrabold text-text_black">
                  <h1>How can I join the hockey club?</h1>
                </div>
                <div className="collapse-content"> 
                  <p className="text-base font-normal text-[#1313131899] pb-4">Visit our "Join Us" page for membership details and registration instructions.</p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b rounded-none">
                <input type="radio" name="my-accordion-3"/> 
                <div className="collapse-title text-xl font-extrabold text-text_black">
                  <h1>What age groups does the club cater to?</h1>
                </div>
                <div className="collapse-content"> 
                  <p className="text-base font-normal text-[#1313131899] pb-4">We welcome players of all ages, from youth to adults, with programs tailored to each level.</p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b rounded-none">
                <input type="radio" name="my-accordion-3"/> 
                <div className="collapse-title text-xl font-extrabold text-text_black">
                  <h1>Are there tryouts for the teams?</h1>
                </div>
                <div className="collapse-content"> 
                  <p className="text-base font-normal text-[#1313131899] pb-4">Yes, we conduct tryouts regularly. Check our schedule and be part of the selection process.</p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b rounded-none">
                <input type="radio" name="my-accordion-3"/> 
                <div className="collapse-title text-xl font-extrabold text-text_black">
                  <h1>What training facilities do you offer?</h1>
                </div>
                <div className="collapse-content"> 
                  <p className="text-base font-normal text-[#1313131899] pb-4">Explore our state-of-the-art facilities equipped for skill development, team training, and fitness.</p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b rounded-none">
                <input type="radio" name="my-accordion-3"/> 
                <div className="collapse-title text-xl font-extrabold text-text_black">
                  <h1>Is financial assistance available for players?</h1>
                </div>
                <div className="collapse-content"> 
                  <p className="text-base font-normal text-[#1313131899] pb-4">We offer scholarship programs. Contact our support team for information on financial aid and assistance.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b rounded-none">
                <input type="radio" name="my-accordion-3"/> 
                <div className="collapse-title text-xl font-extrabold text-text_black">
                  <h1>How can I stay updated on club events and news?</h1>
                </div>
                <div className="collapse-content"> 
                  <p className="text-base font-normal text-[#1313131899] pb-4">Follow our social media channels and regularly check our website for the latest news, events, and updates.</p>
                </div>
              </div>
             
          
            
            </div>
          </div>
        </div>
      </div>           
        </>
    );
};

export default Accordian;