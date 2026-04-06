import React, { forwardRef, useState } from "react";

const Input = forwardRef(
  ({ label, placeholder, type = "text", className = "", icon, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="relative group">
        {label && (
          <label
            className={`
              block text-xs font-semibold uppercase tracking-widest mb-2
              transition-colors duration-300
              ${isFocused ? "text-[#AE3F4F]" : "text-gray-400"}
            `}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className={`
              absolute left-4 top-1/2 -translate-y-1/2 text-lg
              transition-colors duration-300
              ${isFocused ? "text-[#AE3F4F]" : "text-gray-400"}
            `}>
              {icon}
            </span>
          )}
          <input
            type={type}
            ref={ref}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full bg-gray-50
              border border-gray-200 rounded-xl
              px-4 py-3.5 text-gray-800 text-sm
              placeholder:text-gray-400
              outline-none
              transition-all duration-300 ease-out
              focus:border-[#AE3F4F]/50 focus:bg-white
              focus:shadow-[0_0_20px_rgba(174,63,79,0.08)]
              focus:ring-2 focus:ring-[#AE3F4F]/10
              hover:border-gray-300
              ${icon ? "pl-12" : ""}
              ${className}
            `}
            {...props}
          />
          <div
            className={`
              absolute bottom-0 left-1/2 -translate-x-1/2
              h-[2px] bg-gradient-to-r from-transparent via-[#AE3F4F] to-transparent
              transition-all duration-500 ease-out rounded-full
              ${isFocused ? "w-full opacity-100" : "w-0 opacity-0"}
            `}
          />
        </div>
      </div>
    );
  }
);

export default Input;