import React from 'react';

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-3">
      
      {/* Color Indicator */}
      <div className={`w-2 h-5 ${color} rounded-full`} />

      {/* Icon (if provided) */}
      {icon && (
        <div className="text-lg">
          {icon}
        </div>
      )}

      {/* Text Content */}
      <div>
        <p className="text-xs md:text-sm text-gray-500">
          <span className="text-sm md:text-base text-black font-semibold mr-1">
            {value}
          </span>
          {label}
        </p>
      </div>

    </div>
  );
};

export default InfoCard;
