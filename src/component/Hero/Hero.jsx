import React from 'react';

const Hero = () => {
    return (
       <>
       <div className="flex flex-col lg:flex-row items-center gap-5 justify-between p-5 md:p-24 banner bg-[#12132D] bg-[url('asset/images/bgbanner.png')] bg-no-repeat bg-bottom bg-cover rounded-[40px] mt-0">
                <div className="w-full lg:flex-1 ">
                    <div className="text-3xl text-center md:text-left md:text-5xl lg:text-7xl leading-snug text-white mulish font-extrabold">
                        <h1>Welcome to The <br className="hidden md:block"/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#797DFC] to-[#797dfc66]">ReTro</span> Forum</h1>
                    </div>
                    <div className="mulish text-[#FFFFFFCC] font-medium text-xl mt-[20px] leading-[36px]">
                        <p>Share your favorite opinion and win and wp<br className="hidden md:block"/> forum coffee mug!</p>
                    </div>
                    <div className="bg-white flex w-full lg:w-[80%] rounded-[50px] justify-between space-x-4 p-2 mt-[32px]">
                        <input id="searchInput" className="w-full lg:flex-1 text-base rounded-[50px] text-[#03071280] font-normal px-3 py-2 border-none outline-none" type="text" placeholder="Search here anything"/>
                        <button id="searchBtn" onclick="searchData()" className="py-2 rounded-[50px] px-7 text-white font-bold text-xl mulish bg-[#797DFC]">Search</button>
                    </div>
                </div>
                <div className="w-full flex justify-end lg:flex-1 ">
                    <div className="w-full lg:w-[340px] bg-white rounded-3xl p-7 lg:p-12 space-y-6">
                        <div className="flex justify-between">
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>Registered Users</h1>
                            </div>
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>01</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>Forum</h1>
                            </div>
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>05</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>Topic</h1>
                            </div>
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>01</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>Replies</h1>
                            </div>
                            <div className="text-xl font-medium text-[#12132daa]">
                                <h1>01</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
};

export default Hero;