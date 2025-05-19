import React from 'react';

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-full bg-white p-1 border-2 border-[#263B80]">
        <div className="rounded-full bg-[#F5F5DC] p-2 flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-[#263B80] mb-1 flex items-center justify-center">
              {/* Simplified Buddha icon */}
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#F5F5DC"/>
                <circle cx="12" cy="9" r="2" fill="#F5F5DC"/>
                <path d="M12 14c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" fill="#F5F5DC"/>
              </svg>
            </div>
            <div className="text-[#263B80] text-[6px] font-semibold text-center">EST. 2053</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 right-0 text-[4px] text-[#E31B23] font-bold">Golbazaar-7, Siraha</div>
    </div>
  );
};

export default Logo;