import React from 'react';

const Footer = () => {
    return (
        <>
        <footer className="mt-24 bg-[#131318] pb-10 pt-24 sm:py-24 bg-text_black text-white">
      <div className="container mx-auto px-3">
        <div className="flex text-center sm:text-left flex-col sm:flex-col md:flex-row gap-10">
          <div className="w-full  sm:w-full md:w-2/5 mb-6 sm:mb-0">
            <div className="text-3xl font-extrabold text-white mb-4">
              <h1>Hockey<span className="text-btn-color">’</span>s</h1>
            </div>
            <div className="text-base font-medium text-dark_2 mb-6">
              <p>Elevate your hockey experience. Join us for elite training, passionate competition, and a vibrant community on the ice.</p>
            </div>
            <div className="flex sm:block justify-center">
              <div className="space-y-4">
                <a href="#" className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75" stroke="#FF4240" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg><p className="text-base font-medium text-dark_7">hockeys@support.com</p></a>
                <a href="#" className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="#FF4240" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg><p className="text-base font-medium text-dark_7">(+62) 123-321-543</p></a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 flex flex-col sm:flex-row sm:justify-between">
            <div className="w-full md:w-2/3 flex mb-6 sm:mb-0 ">
              <div className="w-full sm:w-full md:flex-1">
                <div className="space-y-7">
                  <h1 className="text-lg font-bold text-white">Company</h1>
                  <ul>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">About</a></li>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Leadership</a></li>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Careers</a></li>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">News &amp; Article</a></li>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Legal Notice</a></li>
                  </ul>
                </div>
               
              </div>
              <div className="w-full sm:w-full md:flex-1">
                <div className="space-y-7">
                  <h1 className="text-lg font-bold text-white">Support</h1>
                  <ul>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Help Center</a></li>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">FAQ</a></li>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Ticket Support</a></li>
                    <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Contact Us</a></li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-full md:flex-1">
             <div className="space-y-7">
              <h1 className="text-lg font-bold text-white">Service</h1>
              <ul>
                <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Academy</a></li>
                <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Group Lesson</a></li>
                <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Private Lesson</a></li>
                <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Hockeys for Kids</a></li>
                <li className="text-base text-dark_2 mb-4 font-medium"><a href="#">Hockeys for Adult</a></li>
              </ul>
             </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
};

export default Footer;