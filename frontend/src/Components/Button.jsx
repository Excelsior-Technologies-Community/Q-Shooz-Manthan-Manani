import React from 'react'

const Button = ({ children, type = "button", className = "", variant = "primary", loading = false, ...props }) => {
  const variants = {
    primary: `
      relative overflow-hidden
      bg-gradient-to-r from-[#AE3F4F] to-[#c2555e]
      hover:from-[#c2555e] hover:to-[#AE3F4F]
      text-white font-semibold tracking-wide
      shadow-lg shadow-[#AE3F4F]/20
      hover:shadow-xl hover:shadow-[#AE3F4F]/30
      hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
    `,
    outline: `
      relative overflow-hidden
      bg-transparent border-2 border-[#AE3F4F]/40
      text-[#AE3F4F] font-semibold tracking-wide
      hover:bg-[#AE3F4F]/5 hover:border-[#AE3F4F]
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      bg-transparent text-gray-500
      hover:text-[#AE3F4F] hover:bg-[#AE3F4F]/5
      font-medium
    `
  };

  return (
    <button
      type={type}
      disabled={loading}
      className={`
        px-6 py-3.5 rounded-xl
        transition-all duration-300 ease-out
        cursor-pointer
        disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
        ${variants[variant] || variants.primary}
        ${className}
      `}
      {...props}
    >
      <span className="relative flex items-center justify-center gap-2">
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </span>
    </button>
  )
}

export default Button