import React from "react";
import NoticeBoard from "./NoticeBoard";
import Banner from "./Banner";

const HomePage = () => {
    return (

        <div>
            <Banner></Banner>
            <div className="container mx-auto lg:px-12 py-6">
            {/* Main Flexbox Container */}
            <div className="flex flex-col lg:flex-row justify-between gap-6">

                {/* Left Side: Cards */}
                <div className="flex flex-col lg:flex-row md:flex-row lg:w-3/4 gap-6 lg:px-12">
                    {/* Card 1: Chairman */}
                    <div className="bg-white shadow-lg rounded-lg p-4 flex-1">
                        <h2 className="text-xl font-bold text-center text-green-600 mb-2">সভাপতি</h2>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Chairman"
                            className="w-full h-auto rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">জনাব ছাইদুর রহমান সান্যামত (শহীদ সেরনিয়াবাত)</h3>
                        <p className="text-gray-600 ">সভাপতি</p>
                        <p className="text-gray-600">আইডিয়াল স্কুল অ্যান্ড কলেজ, মতিঝিল, ঢাকা-১২১৯</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Read more</a>
                    </div>

                    {/* Card 2: Principal */}
                    <div className="bg-white shadow-lg rounded-lg p-4 flex-1">
                        <h2 className="text-xl font-bold text-center text-green-600 mb-2">অধ্যক্ষ (ভারপ্রাপ্ত)</h2>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Principal"
                            className="w-full h-auto rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">মোহাম্মদ এমদাদ হোসাইন</h3>
                        <p className="text-gray-600">অধ্যক্ষ (ভারপ্রাপ্ত)</p>
                        <p className="text-gray-600">আইডিয়াল স্কুল অ্যান্ড কলেজ</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Read more</a>
                    </div>


                </div>

                {/* Right Side: Notice Board */}
                <div className="lg:w-1/4 w-full">
                    <NoticeBoard />
                </div>
            </div>
        </div>
        </div>

    );
};

export default HomePage;
