import React from 'react';

const Product = () => {
    return (
        <>
        <div className="container mx-auto px-3">
        <div className="text-center space-y-4 sm:space-y-6 py-8 sm:mx-auto border-t-2 border-border border-dashed border-b-2 mb-12 ">
          <div className="text-xl sm:text-4xl font-extrabold text-text_black">
              <h1>Our New Products</h1>
          </div>
          <div className="text-[14px] sm:text-base font-medium text_dark_3">
              <p>Unleash game-changing performance with our latest hockey gear. <br className="hidden md:block"/>Elevate your play with innovation and style! </p>
          </div>          
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2 md:gap-5">
          <div className="p-5 sm:p-3 md:p-5 border rounded-2xl">
            <div className="flex flex-col sm:flex-col lg:flex-row gap-5 items-center">
              <div className="w-full sm:w-full lg:w-1/4">
                <div>
                  <img src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/travelmate-tmp214-53/travelmate-tmp214-53-01-228x228.jpg" className="w-full" />
                </div>
              </div>
              <div className="w-full lg:w-4/5">
                <div className="flex gap-4 mb-3">
                  <div className="flex items-center gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_192)">
                        <path d="M12 17.7498L5.82799 20.9948L7.00699 14.1218L2.00699 9.25477L8.90699 8.25477L11.993 2.00177L15.079 8.25477L21.979 9.25477L16.979 14.1218L18.158 20.9948L12 17.7498Z" fill="#F99808" stroke="#F99808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_192">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                   <div className="text-base font-medium text-dark_4">
                    <p>5.0</p>
                   </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_207)">
                        <path d="M10 11.9998C10 12.5302 10.2107 13.0389 10.5858 13.414C10.9609 13.789 11.4696 13.9998 12 13.9998C12.5304 13.9998 13.0391 13.789 13.4142 13.414C13.7893 13.0389 14 12.5302 14 11.9998C14 11.4693 13.7893 10.9606 13.4142 10.5855C13.0391 10.2105 12.5304 9.99976 12 9.99976C11.4696 9.99976 10.9609 10.2105 10.5858 10.5855C10.2107 10.9606 10 11.4693 10 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21 11.9998C18.6 15.9998 15.6 17.9998 12 17.9998C8.4 17.9998 5.4 15.9998 3 11.9998C5.4 7.99976 8.4 5.99976 12 5.99976C15.6 5.99976 18.6 7.99976 21 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_207">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>20</p>
                    </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_211)">
                        <path d="M19.5 12.5717L12 19.9997L4.5 12.5717C4.0053 12.0904 3.61564 11.5118 3.35554 10.8724C3.09545 10.233 2.97056 9.5467 2.98873 8.85668C3.00691 8.16667 3.16776 7.48789 3.46115 6.86309C3.75455 6.23829 4.17413 5.681 4.69348 5.22633C5.21283 4.77165 5.8207 4.42944 6.47881 4.22123C7.13691 4.01302 7.831 3.94333 8.51736 4.01655C9.20373 4.08977 9.8675 4.30431 10.4669 4.64666C11.0662 4.98901 11.5882 5.45175 12 6.00575C12.4135 5.45577 12.9361 4.99707 13.5351 4.65835C14.1341 4.31964 14.7965 4.1082 15.4809 4.03727C16.1654 3.96634 16.8571 4.03745 17.5128 4.24614C18.1685 4.45484 18.774 4.79662 19.2915 5.25011C19.8091 5.7036 20.2274 6.25903 20.5204 6.88164C20.8134 7.50425 20.9747 8.18063 20.9943 8.86846C21.0139 9.55628 20.8913 10.2407 20.6341 10.879C20.377 11.5173 19.9909 12.0956 19.5 12.5777" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_211">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>200</p>
                    </div>
                  </div>                  
                </div>
                <div className="mb-3">
                  <div className="text-xl font-extrabold text-text_black">
                    <h1>Branded Jacket</h1>
                  </div>
                </div>
                <div>
                  <div className="font-base font-medium text-dark_3 mb-4">
                    <p>Iconic design, ultimate pride – wear the official team jacket. </p>
                  </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full">
                  <div className="">
                    <div className="text-lg font-extrabold text-btn-color">
                      <h1>Price - $22.00</h1>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_7_227)">
                        <path d="M4 18.9998C4 19.5302 4.21071 20.0389 4.58579 20.414C4.96086 20.789 5.46957 20.9998 6 20.9998C6.53043 20.9998 7.03914 20.789 7.41421 20.414C7.78929 20.0389 8 19.5302 8 18.9998C8 18.4693 7.78929 17.9606 7.41421 17.5855C7.03914 17.2105 6.53043 16.9998 6 16.9998C5.46957 16.9998 4.96086 17.2105 4.58579 17.5855C4.21071 17.9606 4 18.4693 4 18.9998Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 16.9998H6V2.99976H4" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 4.99976L20 5.99976L19.284 11.0108M14 12.9998H6" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.121 20.1208C21.5406 19.7013 21.8265 19.1667 21.9423 18.5847C22.0581 18.0028 21.9988 17.3995 21.7717 16.8513C21.5447 16.3031 21.1602 15.8345 20.6668 15.5048C20.1734 15.1751 19.5934 14.9991 19 14.9991C18.4066 14.9991 17.8266 15.1751 17.3332 15.5048C16.8398 15.8345 16.4553 16.3031 16.2283 16.8513C16.0012 17.3995 15.9419 18.0028 16.0577 18.5847C16.1735 19.1667 16.4594 19.7013 16.879 20.1208C17.297 20.5398 18.004 21.1658 19 21.9998C20.051 21.1098 20.759 20.4838 21.121 20.1208Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 17.9998V18.0098" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_227">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                    <div className="text-base font-medium text-dark_4">
                      <h1>Delivery Fee : Free</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-3 md:p-5 border rounded-2xl">
            <div className="flex flex-col sm:flex-col lg:flex-row gap-5 items-center">
              <div className="w-full sm:w-full lg:w-1/4">
                <div>
                  <img src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/250-g8-ash-black/250-g8-ash-black-01-228x228.webp" className="w-full" />
                </div>
              </div>
              <div className="w-full lg:w-4/5">
                <div className="flex gap-4 mb-3">
                  <div className="flex items-center gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_192)">
                        <path d="M12 17.7498L5.82799 20.9948L7.00699 14.1218L2.00699 9.25477L8.90699 8.25477L11.993 2.00177L15.079 8.25477L21.979 9.25477L16.979 14.1218L18.158 20.9948L12 17.7498Z" fill="#F99808" stroke="#F99808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_192">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                   <div className="text-base font-medium text-dark_4">
                    <p>4.0</p>
                   </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_207)">
                        <path d="M10 11.9998C10 12.5302 10.2107 13.0389 10.5858 13.414C10.9609 13.789 11.4696 13.9998 12 13.9998C12.5304 13.9998 13.0391 13.789 13.4142 13.414C13.7893 13.0389 14 12.5302 14 11.9998C14 11.4693 13.7893 10.9606 13.4142 10.5855C13.0391 10.2105 12.5304 9.99976 12 9.99976C11.4696 9.99976 10.9609 10.2105 10.5858 10.5855C10.2107 10.9606 10 11.4693 10 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21 11.9998C18.6 15.9998 15.6 17.9998 12 17.9998C8.4 17.9998 5.4 15.9998 3 11.9998C5.4 7.99976 8.4 5.99976 12 5.99976C15.6 5.99976 18.6 7.99976 21 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_207">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>29</p>
                    </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_211)">
                        <path d="M19.5 12.5717L12 19.9997L4.5 12.5717C4.0053 12.0904 3.61564 11.5118 3.35554 10.8724C3.09545 10.233 2.97056 9.5467 2.98873 8.85668C3.00691 8.16667 3.16776 7.48789 3.46115 6.86309C3.75455 6.23829 4.17413 5.681 4.69348 5.22633C5.21283 4.77165 5.8207 4.42944 6.47881 4.22123C7.13691 4.01302 7.831 3.94333 8.51736 4.01655C9.20373 4.08977 9.8675 4.30431 10.4669 4.64666C11.0662 4.98901 11.5882 5.45175 12 6.00575C12.4135 5.45577 12.9361 4.99707 13.5351 4.65835C14.1341 4.31964 14.7965 4.1082 15.4809 4.03727C16.1654 3.96634 16.8571 4.03745 17.5128 4.24614C18.1685 4.45484 18.774 4.79662 19.2915 5.25011C19.8091 5.7036 20.2274 6.25903 20.5204 6.88164C20.8134 7.50425 20.9747 8.18063 20.9943 8.86846C21.0139 9.55628 20.8913 10.2407 20.6341 10.879C20.377 11.5173 19.9909 12.0956 19.5 12.5777" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_211">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>210</p>
                    </div>
                  </div>                  
                </div>
                <div className="mb-3">
                  <div className="text-xl font-extrabold text-text_black">
                    <h1>Official Ball</h1>
                  </div>
                </div>
                <div>
                  <div className="font-base font-medium text-dark_3 mb-4">
                    <p>Precision in play – the official hockey ball.</p>
                  </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full">
                  <div className="">
                    <div className="text-lg font-extrabold text-btn-color">
                      <h1>Price - $19.00</h1>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_7_227)">
                        <path d="M4 18.9998C4 19.5302 4.21071 20.0389 4.58579 20.414C4.96086 20.789 5.46957 20.9998 6 20.9998C6.53043 20.9998 7.03914 20.789 7.41421 20.414C7.78929 20.0389 8 19.5302 8 18.9998C8 18.4693 7.78929 17.9606 7.41421 17.5855C7.03914 17.2105 6.53043 16.9998 6 16.9998C5.46957 16.9998 4.96086 17.2105 4.58579 17.5855C4.21071 17.9606 4 18.4693 4 18.9998Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 16.9998H6V2.99976H4" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 4.99976L20 5.99976L19.284 11.0108M14 12.9998H6" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.121 20.1208C21.5406 19.7013 21.8265 19.1667 21.9423 18.5847C22.0581 18.0028 21.9988 17.3995 21.7717 16.8513C21.5447 16.3031 21.1602 15.8345 20.6668 15.5048C20.1734 15.1751 19.5934 14.9991 19 14.9991C18.4066 14.9991 17.8266 15.1751 17.3332 15.5048C16.8398 15.8345 16.4553 16.3031 16.2283 16.8513C16.0012 17.3995 15.9419 18.0028 16.0577 18.5847C16.1735 19.1667 16.4594 19.7013 16.879 20.1208C17.297 20.5398 18.004 21.1658 19 21.9998C20.051 21.1098 20.759 20.4838 21.121 20.1208Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 17.9998V18.0098" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_227">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                    <div className="text-base font-medium text-dark_4">
                      <h1>Delivery Fee : Free</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-3 md:p-5 border rounded-2xl">
            <div className="flex flex-col sm:flex-col lg:flex-row gap-5 items-center">
              <div className="w-full sm:w-full lg:w-1/4">
                <div>
                  <img src="https://www.startech.com.bd/image/cache/catalog/laptop/avita/avita-liber-v14/liber-v14-snowflakes-on-azure-blue-01-228x228.jpg" className="w-full" />
                </div>
              </div>
              <div className="w-full lg:w-4/5">
                <div className="flex gap-4 mb-3">
                  <div className="flex items-center gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_192)">
                        <path d="M12 17.7498L5.82799 20.9948L7.00699 14.1218L2.00699 9.25477L8.90699 8.25477L11.993 2.00177L15.079 8.25477L21.979 9.25477L16.979 14.1218L18.158 20.9948L12 17.7498Z" fill="#F99808" stroke="#F99808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_192">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                   <div className="text-base font-medium text-dark_4">
                    <p>4.5</p>
                   </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_207)">
                        <path d="M10 11.9998C10 12.5302 10.2107 13.0389 10.5858 13.414C10.9609 13.789 11.4696 13.9998 12 13.9998C12.5304 13.9998 13.0391 13.789 13.4142 13.414C13.7893 13.0389 14 12.5302 14 11.9998C14 11.4693 13.7893 10.9606 13.4142 10.5855C13.0391 10.2105 12.5304 9.99976 12 9.99976C11.4696 9.99976 10.9609 10.2105 10.5858 10.5855C10.2107 10.9606 10 11.4693 10 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21 11.9998C18.6 15.9998 15.6 17.9998 12 17.9998C8.4 17.9998 5.4 15.9998 3 11.9998C5.4 7.99976 8.4 5.99976 12 5.99976C15.6 5.99976 18.6 7.99976 21 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_207">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>56</p>
                    </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_211)">
                        <path d="M19.5 12.5717L12 19.9997L4.5 12.5717C4.0053 12.0904 3.61564 11.5118 3.35554 10.8724C3.09545 10.233 2.97056 9.5467 2.98873 8.85668C3.00691 8.16667 3.16776 7.48789 3.46115 6.86309C3.75455 6.23829 4.17413 5.681 4.69348 5.22633C5.21283 4.77165 5.8207 4.42944 6.47881 4.22123C7.13691 4.01302 7.831 3.94333 8.51736 4.01655C9.20373 4.08977 9.8675 4.30431 10.4669 4.64666C11.0662 4.98901 11.5882 5.45175 12 6.00575C12.4135 5.45577 12.9361 4.99707 13.5351 4.65835C14.1341 4.31964 14.7965 4.1082 15.4809 4.03727C16.1654 3.96634 16.8571 4.03745 17.5128 4.24614C18.1685 4.45484 18.774 4.79662 19.2915 5.25011C19.8091 5.7036 20.2274 6.25903 20.5204 6.88164C20.8134 7.50425 20.9747 8.18063 20.9943 8.86846C21.0139 9.55628 20.8913 10.2407 20.6341 10.879C20.377 11.5173 19.9909 12.0956 19.5 12.5777" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_211">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>90</p>
                    </div>
                  </div>                  
                </div>
                <div className="mb-3">
                  <div className="text-xl font-extrabold text-text_black">
                    <h1>Official Cap</h1>
                  </div>
                </div>
                <div>
                  <div className="font-base font-medium text-dark_3 mb-4">
                    <p>Signature style, team spirit – the official club cap. </p>
                  </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full">
                  <div className="">
                    <div className="text-lg font-extrabold text-btn-color">
                      <h1>Price - $29.00</h1>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_7_227)">
                        <path d="M4 18.9998C4 19.5302 4.21071 20.0389 4.58579 20.414C4.96086 20.789 5.46957 20.9998 6 20.9998C6.53043 20.9998 7.03914 20.789 7.41421 20.414C7.78929 20.0389 8 19.5302 8 18.9998C8 18.4693 7.78929 17.9606 7.41421 17.5855C7.03914 17.2105 6.53043 16.9998 6 16.9998C5.46957 16.9998 4.96086 17.2105 4.58579 17.5855C4.21071 17.9606 4 18.4693 4 18.9998Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 16.9998H6V2.99976H4" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 4.99976L20 5.99976L19.284 11.0108M14 12.9998H6" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.121 20.1208C21.5406 19.7013 21.8265 19.1667 21.9423 18.5847C22.0581 18.0028 21.9988 17.3995 21.7717 16.8513C21.5447 16.3031 21.1602 15.8345 20.6668 15.5048C20.1734 15.1751 19.5934 14.9991 19 14.9991C18.4066 14.9991 17.8266 15.1751 17.3332 15.5048C16.8398 15.8345 16.4553 16.3031 16.2283 16.8513C16.0012 17.3995 15.9419 18.0028 16.0577 18.5847C16.1735 19.1667 16.4594 19.7013 16.879 20.1208C17.297 20.5398 18.004 21.1658 19 21.9998C20.051 21.1098 20.759 20.4838 21.121 20.1208Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 17.9998V18.0098" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_227">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                    <div className="text-base font-medium text-dark_4">
                      <h1>Delivery Fee : Free</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-3 md:p-5 border rounded-2xl">
            <div className="flex flex-col sm:flex-col lg:flex-row gap-5 items-center">
              <div className="w-full sm:w-full lg:w-1/4">
                <div>
                  <img src="https://www.startech.com.bd/image/cache/catalog/laptop/chuwi/herobook/herobook-pro/herobook-pro-1-228x228.jpg" className="w-full" />
                </div>
              </div>
              <div className="w-full lg:w-4/5">
                <div className="flex gap-4 mb-3">
                  <div className="flex items-center gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_192)">
                        <path d="M12 17.7498L5.82799 20.9948L7.00699 14.1218L2.00699 9.25477L8.90699 8.25477L11.993 2.00177L15.079 8.25477L21.979 9.25477L16.979 14.1218L18.158 20.9948L12 17.7498Z" fill="#F99808" stroke="#F99808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_192">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                   <div className="text-base font-medium text-dark_4">
                    <p>3.5</p>
                   </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_207)">
                        <path d="M10 11.9998C10 12.5302 10.2107 13.0389 10.5858 13.414C10.9609 13.789 11.4696 13.9998 12 13.9998C12.5304 13.9998 13.0391 13.789 13.4142 13.414C13.7893 13.0389 14 12.5302 14 11.9998C14 11.4693 13.7893 10.9606 13.4142 10.5855C13.0391 10.2105 12.5304 9.99976 12 9.99976C11.4696 9.99976 10.9609 10.2105 10.5858 10.5855C10.2107 10.9606 10 11.4693 10 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21 11.9998C18.6 15.9998 15.6 17.9998 12 17.9998C8.4 17.9998 5.4 15.9998 3 11.9998C5.4 7.99976 8.4 5.99976 12 5.99976C15.6 5.99976 18.6 7.99976 21 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_207">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>65</p>
                    </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_211)">
                        <path d="M19.5 12.5717L12 19.9997L4.5 12.5717C4.0053 12.0904 3.61564 11.5118 3.35554 10.8724C3.09545 10.233 2.97056 9.5467 2.98873 8.85668C3.00691 8.16667 3.16776 7.48789 3.46115 6.86309C3.75455 6.23829 4.17413 5.681 4.69348 5.22633C5.21283 4.77165 5.8207 4.42944 6.47881 4.22123C7.13691 4.01302 7.831 3.94333 8.51736 4.01655C9.20373 4.08977 9.8675 4.30431 10.4669 4.64666C11.0662 4.98901 11.5882 5.45175 12 6.00575C12.4135 5.45577 12.9361 4.99707 13.5351 4.65835C14.1341 4.31964 14.7965 4.1082 15.4809 4.03727C16.1654 3.96634 16.8571 4.03745 17.5128 4.24614C18.1685 4.45484 18.774 4.79662 19.2915 5.25011C19.8091 5.7036 20.2274 6.25903 20.5204 6.88164C20.8134 7.50425 20.9747 8.18063 20.9943 8.86846C21.0139 9.55628 20.8913 10.2407 20.6341 10.879C20.377 11.5173 19.9909 12.0956 19.5 12.5777" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_211">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>25</p>
                    </div>
                  </div>                  
                </div>
                <div className="mb-3">
                  <div className="text-xl font-extrabold text-text_black">
                    <h1>Official Jursey</h1>
                  </div>
                </div>
                <div>
                  <div className="font-base font-medium text-dark_3 mb-4">
                    <p>Iconic design, ultimate pride – wear the official team jersey.</p>
                  </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full">
                  <div className="">
                    <div className="text-lg font-extrabold text-btn-color">
                      <h1>Price - $89.00</h1>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_7_227)">
                        <path d="M4 18.9998C4 19.5302 4.21071 20.0389 4.58579 20.414C4.96086 20.789 5.46957 20.9998 6 20.9998C6.53043 20.9998 7.03914 20.789 7.41421 20.414C7.78929 20.0389 8 19.5302 8 18.9998C8 18.4693 7.78929 17.9606 7.41421 17.5855C7.03914 17.2105 6.53043 16.9998 6 16.9998C5.46957 16.9998 4.96086 17.2105 4.58579 17.5855C4.21071 17.9606 4 18.4693 4 18.9998Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 16.9998H6V2.99976H4" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 4.99976L20 5.99976L19.284 11.0108M14 12.9998H6" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.121 20.1208C21.5406 19.7013 21.8265 19.1667 21.9423 18.5847C22.0581 18.0028 21.9988 17.3995 21.7717 16.8513C21.5447 16.3031 21.1602 15.8345 20.6668 15.5048C20.1734 15.1751 19.5934 14.9991 19 14.9991C18.4066 14.9991 17.8266 15.1751 17.3332 15.5048C16.8398 15.8345 16.4553 16.3031 16.2283 16.8513C16.0012 17.3995 15.9419 18.0028 16.0577 18.5847C16.1735 19.1667 16.4594 19.7013 16.879 20.1208C17.297 20.5398 18.004 21.1658 19 21.9998C20.051 21.1098 20.759 20.4838 21.121 20.1208Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 17.9998V18.0098" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_227">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                    <div className="text-base font-medium text-dark_4">
                      <h1>Delivery Fee : Free</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-3 md:p-5 border rounded-2xl">
            <div className="flex flex-col sm:flex-col lg:flex-row gap-5 items-center">
              <div className="w-full sm:w-full lg:w-1/4">
                <div>
                  <img src="https://www.startech.com.bd/image/cache/catalog/laptop/avita/avita-liber-v14/liber-v14-flowers-on-yellow-01-228x228.jpg" className="w-full" />
                </div>
              </div>
              <div className="w-full lg:w-4/5">
                <div className="flex gap-4 mb-3">
                  <div className="flex items-center gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_192)">
                        <path d="M12 17.7498L5.82799 20.9948L7.00699 14.1218L2.00699 9.25477L8.90699 8.25477L11.993 2.00177L15.079 8.25477L21.979 9.25477L16.979 14.1218L18.158 20.9948L12 17.7498Z" fill="#F99808" stroke="#F99808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_192">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                   <div className="text-base font-medium text-dark_4">
                    <p>4.0</p>
                   </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_207)">
                        <path d="M10 11.9998C10 12.5302 10.2107 13.0389 10.5858 13.414C10.9609 13.789 11.4696 13.9998 12 13.9998C12.5304 13.9998 13.0391 13.789 13.4142 13.414C13.7893 13.0389 14 12.5302 14 11.9998C14 11.4693 13.7893 10.9606 13.4142 10.5855C13.0391 10.2105 12.5304 9.99976 12 9.99976C11.4696 9.99976 10.9609 10.2105 10.5858 10.5855C10.2107 10.9606 10 11.4693 10 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21 11.9998C18.6 15.9998 15.6 17.9998 12 17.9998C8.4 17.9998 5.4 15.9998 3 11.9998C5.4 7.99976 8.4 5.99976 12 5.99976C15.6 5.99976 18.6 7.99976 21 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_207">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>52</p>
                    </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_211)">
                        <path d="M19.5 12.5717L12 19.9997L4.5 12.5717C4.0053 12.0904 3.61564 11.5118 3.35554 10.8724C3.09545 10.233 2.97056 9.5467 2.98873 8.85668C3.00691 8.16667 3.16776 7.48789 3.46115 6.86309C3.75455 6.23829 4.17413 5.681 4.69348 5.22633C5.21283 4.77165 5.8207 4.42944 6.47881 4.22123C7.13691 4.01302 7.831 3.94333 8.51736 4.01655C9.20373 4.08977 9.8675 4.30431 10.4669 4.64666C11.0662 4.98901 11.5882 5.45175 12 6.00575C12.4135 5.45577 12.9361 4.99707 13.5351 4.65835C14.1341 4.31964 14.7965 4.1082 15.4809 4.03727C16.1654 3.96634 16.8571 4.03745 17.5128 4.24614C18.1685 4.45484 18.774 4.79662 19.2915 5.25011C19.8091 5.7036 20.2274 6.25903 20.5204 6.88164C20.8134 7.50425 20.9747 8.18063 20.9943 8.86846C21.0139 9.55628 20.8913 10.2407 20.6341 10.879C20.377 11.5173 19.9909 12.0956 19.5 12.5777" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_211">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>100</p>
                    </div>
                  </div>                  
                </div>
                <div className="mb-3">
                  <div className="text-xl font-extrabold text-text_black">
                    <h1>Safety Healmeds</h1>
                  </div>
                </div>
                <div>
                  <div className="font-base font-medium text-dark_3 mb-4">
                    <p>Official headgear for comfort and style on and off the field. </p>
                  </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full">
                  <div className="">
                    <div className="text-lg font-extrabold text-btn-color">
                      <h1>Price - $32.00</h1>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_7_227)">
                        <path d="M4 18.9998C4 19.5302 4.21071 20.0389 4.58579 20.414C4.96086 20.789 5.46957 20.9998 6 20.9998C6.53043 20.9998 7.03914 20.789 7.41421 20.414C7.78929 20.0389 8 19.5302 8 18.9998C8 18.4693 7.78929 17.9606 7.41421 17.5855C7.03914 17.2105 6.53043 16.9998 6 16.9998C5.46957 16.9998 4.96086 17.2105 4.58579 17.5855C4.21071 17.9606 4 18.4693 4 18.9998Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 16.9998H6V2.99976H4" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 4.99976L20 5.99976L19.284 11.0108M14 12.9998H6" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.121 20.1208C21.5406 19.7013 21.8265 19.1667 21.9423 18.5847C22.0581 18.0028 21.9988 17.3995 21.7717 16.8513C21.5447 16.3031 21.1602 15.8345 20.6668 15.5048C20.1734 15.1751 19.5934 14.9991 19 14.9991C18.4066 14.9991 17.8266 15.1751 17.3332 15.5048C16.8398 15.8345 16.4553 16.3031 16.2283 16.8513C16.0012 17.3995 15.9419 18.0028 16.0577 18.5847C16.1735 19.1667 16.4594 19.7013 16.879 20.1208C17.297 20.5398 18.004 21.1658 19 21.9998C20.051 21.1098 20.759 20.4838 21.121 20.1208Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 17.9998V18.0098" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_227">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                    <div className="text-base font-medium text-dark_4">
                      <h1>Delivery Fee : Free</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-3 md:p-5 border rounded-2xl">
            <div className="flex flex-col sm:flex-col lg:flex-row gap-5 items-center">
              <div className="w-full sm:w-full lg:w-1/4">
                <div>
                  <img src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/250-g8-black/250-g8-ash-black-01-228x228.webp" className="w-full" />
                </div>
              </div>
              <div className="w-full lg:w-4/5">
                <div className="flex gap-4 mb-3">
                  <div className="flex items-center gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_192)">
                        <path d="M12 17.7498L5.82799 20.9948L7.00699 14.1218L2.00699 9.25477L8.90699 8.25477L11.993 2.00177L15.079 8.25477L21.979 9.25477L16.979 14.1218L18.158 20.9948L12 17.7498Z" fill="#F99808" stroke="#F99808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_192">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                   <div className="text-base font-medium text-dark_4">
                    <p>5.0</p>
                   </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_207)">
                        <path d="M10 11.9998C10 12.5302 10.2107 13.0389 10.5858 13.414C10.9609 13.789 11.4696 13.9998 12 13.9998C12.5304 13.9998 13.0391 13.789 13.4142 13.414C13.7893 13.0389 14 12.5302 14 11.9998C14 11.4693 13.7893 10.9606 13.4142 10.5855C13.0391 10.2105 12.5304 9.99976 12 9.99976C11.4696 9.99976 10.9609 10.2105 10.5858 10.5855C10.2107 10.9606 10 11.4693 10 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21 11.9998C18.6 15.9998 15.6 17.9998 12 17.9998C8.4 17.9998 5.4 15.9998 3 11.9998C5.4 7.99976 8.4 5.99976 12 5.99976C15.6 5.99976 18.6 7.99976 21 11.9998Z" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_207">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>70</p>
                    </div>
                  </div>                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_6_211)">
                        <path d="M19.5 12.5717L12 19.9997L4.5 12.5717C4.0053 12.0904 3.61564 11.5118 3.35554 10.8724C3.09545 10.233 2.97056 9.5467 2.98873 8.85668C3.00691 8.16667 3.16776 7.48789 3.46115 6.86309C3.75455 6.23829 4.17413 5.681 4.69348 5.22633C5.21283 4.77165 5.8207 4.42944 6.47881 4.22123C7.13691 4.01302 7.831 3.94333 8.51736 4.01655C9.20373 4.08977 9.8675 4.30431 10.4669 4.64666C11.0662 4.98901 11.5882 5.45175 12 6.00575C12.4135 5.45577 12.9361 4.99707 13.5351 4.65835C14.1341 4.31964 14.7965 4.1082 15.4809 4.03727C16.1654 3.96634 16.8571 4.03745 17.5128 4.24614C18.1685 4.45484 18.774 4.79662 19.2915 5.25011C19.8091 5.7036 20.2274 6.25903 20.5204 6.88164C20.8134 7.50425 20.9747 8.18063 20.9943 8.86846C21.0139 9.55628 20.8913 10.2407 20.6341 10.879C20.377 11.5173 19.9909 12.0956 19.5 12.5777" stroke="#131318" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_211">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-base font-medium text-dark_4">
                      <p>59</p>
                    </div>
                  </div>                  
                </div>
                <div className="mb-3">
                  <div className="text-xl font-extrabold text-text_black">
                    <h1>Customized Ball</h1>
                  </div>
                </div>
                <div>
                  <div className="font-base font-medium text-dark_3 mb-4">
                    <p>Personalized play with our customized hockey ball. </p>
                  </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full">
                  <div className="">
                    <div className="text-lg font-extrabold text-btn-color">
                      <h1>Price - $56.00</h1>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_7_227)">
                        <path d="M4 18.9998C4 19.5302 4.21071 20.0389 4.58579 20.414C4.96086 20.789 5.46957 20.9998 6 20.9998C6.53043 20.9998 7.03914 20.789 7.41421 20.414C7.78929 20.0389 8 19.5302 8 18.9998C8 18.4693 7.78929 17.9606 7.41421 17.5855C7.03914 17.2105 6.53043 16.9998 6 16.9998C5.46957 16.9998 4.96086 17.2105 4.58579 17.5855C4.21071 17.9606 4 18.4693 4 18.9998Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 16.9998H6V2.99976H4" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 4.99976L20 5.99976L19.284 11.0108M14 12.9998H6" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.121 20.1208C21.5406 19.7013 21.8265 19.1667 21.9423 18.5847C22.0581 18.0028 21.9988 17.3995 21.7717 16.8513C21.5447 16.3031 21.1602 15.8345 20.6668 15.5048C20.1734 15.1751 19.5934 14.9991 19 14.9991C18.4066 14.9991 17.8266 15.1751 17.3332 15.5048C16.8398 15.8345 16.4553 16.3031 16.2283 16.8513C16.0012 17.3995 15.9419 18.0028 16.0577 18.5847C16.1735 19.1667 16.4594 19.7013 16.879 20.1208C17.297 20.5398 18.004 21.1658 19 21.9998C20.051 21.1098 20.759 20.4838 21.121 20.1208Z" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 17.9998V18.0098" stroke="#89898B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_7_227">
                          <rect width="24" height="24" fill="white" transform="translate(0 -0.000244141)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                    <div className="text-base font-medium text-dark_4">
                      <h1>Delivery Fee : Free</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
            
        </>
    );
};

export default Product;