import React from 'react'

const Header = ({ children }: {children: React.ReactNode}) => {
  return <div className="bg-gray-100 dark:bg-gray-800 pb-4">{children}</div>;
}

export default Header