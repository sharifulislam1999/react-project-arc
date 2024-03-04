import React from 'react';

const Contact = () => {
    return (
        <>
        <div className="text-center space-y-4 sm:space-y-6 py-8 sm:mx-auto border-t-2 border-border border-dashed border-b-2 mb-12 ">
          <div className="text-xl sm:text-4xl font-extrabold text-text_black">
              <h1>Get In Touch</h1>
          </div>
          <div className="text-[14px] sm:text-base font-medium text_dark_3">
              <p>Connect with us easily. Reach out for inquiries, partnerships, <br className="hidden md:block"/> or any assistance. Join the hockey community! </p>
          </div>          
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-2/5 border rounded-2xl p-3 sm:p-3 md:p-5 lg:p-8 space-y-7">
          <div className="p-8 sm:px-4 md:px-6 lg:px-8  pt-8 pb-14 bg-[#BCED6D1A] rounded-2xl space-y-6">
            <div>
              <img src="../../../public/Images/phone.png" alt=""/>
            </div>
            <div>
              <h1 className="text-base font-normal tex-dark_6">Phone Number : </h1>
              <h1 className="text-lg font-extrabold text-text_black">(+62) 123-321-543</h1>
            </div>
          </div>          
          <div className="p-8 sm:px-4 md:px-6 lg:px-8  pt-8 pb-14 bg-[#FDDB5F19] rounded-2xl space-y-6">
            <div>
              <img src="../../../public/Images/mail.png" alt=""/>
            </div>
            <div>
              <h1 className="text-base font-normal tex-dark_6">Email : </h1>
              <h1 className="text-lg font-extrabold text-text_black">hockeys@support.com</h1>
            </div>
          </div>          
          <div className="p-8 sm:px-4 md:px-6 lg:px-8  pt-8 pb-14 bg-[#629CF319] rounded-2xl space-y-6">
            <div>
              <img src="../../../public/Images/phone.png" alt=""/>
            </div>
            <div>
              <h1 className="text-base font-normal tex-dark_6">Location : </h1>
              <h1 className="text-lg font-extrabold text-text_black">152/1 Mohakhali Wireless Gate</h1>
            </div>
          </div>          
                   
                    
        </div>
        <div className="w-full sm:w-3/5 ">
          <div>
            <form action="#">
              <div className="space-y-6">
                <div className="flex gap-6 flex-col md:flex-row">
                  <div className="flex-1 space-y-4">
                    <div className="text-xl font-bold text-text_black">
                      <h1>Your Name</h1>
                    </div>
                    <div>
                      <input type="text" className="text-dark_5 text-base font-normal rounded-xl bg-[#F8F8F8] border-none p-5 w-full border focus:outline-none" placeholder="Enter Your Full Name" />
                    </div>
                    </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="text-xl font-bold text-text_black">
                      <h1>Your Email</h1>
                    </div>
                    <div>
                      <input type="email" className="text-dark_5 text-base font-normal rounded-xl bg-[#F8F8F8] border-none p-5 w-full border focus:outline-none" placeholder="Enter Your Email" />
                    </div>
                  </div>
                </div>                
                <div className="flex gap-6 flex-col md:flex-row">
                  <div className="flex-1 space-y-4">
                    <div className="text-xl font-bold text-text_black">
                      <h1>Subject</h1>
                    </div>
                    <div>
                      <input type="text" className="text-dark_5 text-base font-normal rounded-xl bg-[#F8F8F8] border-none p-5 w-full border focus:outline-none" placeholder="Enter Your Full Name" />
                    </div>
                    </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="text-xl font-bold text-text_black">
                      <h1>Phone</h1>
                    </div>
                    <div>
                      <input type="number" className="text-dark_5 text-base font-normal rounded-xl bg-[#F8F8F8] border-none p-5 w-full border focus:outline-none" placeholder="Enter Your Email" />
                    </div>
                  </div>
                </div>  
                <div className="space-y-8">
                  <div className="text-xl font-bold text-text_black">
                    <h1>Message</h1>
                  </div>
                  <div>
                    <textarea className="text-dark_5 text-base font-normal rounded-xl h-[370px] sm:h-[150px] md:h-[370px] bg-[#F8F8F8] border-none p-5 w-full border focus:outline-none w-full" name="" id="" placeholder="Enter Your Message"></textarea>
                  </div>
                  <div>
                    <input type="submit" value="Send Message" className="w-full cursor-pointer bg-btn-color p-4 rounded-xl text-xl font-bold text-white" />
                  </div>
                </div>
                              
              </div>
            </form></div>
              </div>
            
          </div>
          <div className="mt-12 py-9 space-y-6 bg-[#F8F8F8] rounded-xl">
            <div className="text-2xl font-extrabold text-text_black text-center">
              <h1>Social Media</h1>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-6">
                <div className="text-2xl">
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className="text-2xl">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="text-2xl">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="text-2xl">
                  <i className="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default Contact;