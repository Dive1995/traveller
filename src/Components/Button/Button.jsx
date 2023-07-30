import React from 'react'

function Button({children, icon, className=''}) {
  return (
    <button 
    className={`bg-primary-bg px-5 py-2 rounded-full hover:bg-primary-hoverBg text-primary-text hover:text-primary-hoverText
    ${className} ${icon ? "flex items-center justify-center gap-2" : ""}`}
    >
        {icon} {children}
    </button>
  )
}

export default Button