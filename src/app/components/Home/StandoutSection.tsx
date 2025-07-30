import React from 'react';

export const StandoutSection: React.FC = () => {
  return (
    <section className="px-4 pt-20  max-md:pt-[10px] max-sm:pt-8">
      <div className="box-border w-full max-w-[1172px] relative flex flex-wrap max-md:flex-col items-center justify-between overflow-hidden bg-[#226DFE] mx-auto px-[42px] py-[56px] rounded-3xl max-md:text-center max-md:px-[24px] max-md:py-10 max-sm:px-5 max-sm:py-8 gap-3">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute w-[1288px] h-[583px] top-[-201px] left-5 transform rotate-[-1.815deg] opacity-40"
            viewBox="0 0 1149 311"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6153 422.42C101.778 356.224 163.812 204.734 522.892 217.819C691.871 223.977 971.933 254.852 1143.11 130.761C1226.16 70.5624 1287.31 -14.6661 1283.33 -185.09L1282.78 -201.026C1283.02 -195.633 1283.21 -190.321 1283.33 -185.09L1302.97 381.627L15.6153 422.42Z"
              fill="#1455D3"
            ></path>
          </svg>
          <svg
            className="absolute w-[1347px] h-[567px] top-[-152px] left-[-21px] transform rotate-[2.084deg] opacity-40"
            viewBox="0 0 1172 311"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-21.0688 414.27C61.3688 358.62 239.271 232.676 564.979 261.908C728.672 276.599 1032.13 312.955 1195.46 209.103C1274.11 159.088 1337.45 49.8421 1345.28 -104.753L1345.93 -122.665C1345.8 -116.629 1345.58 -110.658 1345.28 -104.753L1325.32 443.575L-21.0688 414.27Z"
              fill="#1455D3"
            ></path>
          </svg>
        </div>

        <div className="box-border flex-1 max-w-[558px] relative z-[2] m-0 p-0">
          <h2 className="box-border text-white text-5xl font-semibold leading-[48px] tracking-[-0.96px] mb-[9px] m-0 p-0 max-md:text-4xl max-md:leading-[42px] max-sm:text-[28px] max-sm:leading-[34px]">
            What makes our company stand out?
          </h2>
          <p className="box-border text-white text-base font-medium leading-6 m-0 p-0">
            {`We build scalable, future-ready solutions with a team that's driven to make your business thrive in the digital world.`}
          </p>
        </div>

        <div className="box-border max-w-[414px] text-center relative z-[2] m-0 p-0">
          <p className="box-border text-white text-sm font-medium leading-[20.3px] mb-[19px] m-0 p-0">
            {`Schedule a free, no-strings-attached consultation to see if our SEO marketing company can get *you* the results you want.`}
          </p>
          <button className="box-border inline-flex h-[60px] justify-center items-center gap-2.5 cursor-pointer bg-white hover:bg-gray-100 transition-colors m-0 px-[33px] py-1.5 rounded-md border-2 border-solid border-white">
            <span className="box-border text-black text-lg font-semibold leading-[31.5px] m-0 p-0">
              Book My Free Consultation
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
