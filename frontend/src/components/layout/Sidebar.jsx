import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { navItems } from '@/constants/navItems'

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed inset-0 z-50 lg:static lg:inset-auto lg:z-auto">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden"
        onClick={toggleSidebar}
        aria-label="Close sidebar"
      ></div>
      <div className="absolute left-0 top-0 h-full w-64 bg-light-background dark:bg-dark-background shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="p-5 border-b border-light-border dark:border-dark-border lg:hidden">
          <Link href="/">
            <h1 className="text-xl font-bold text-light-primary dark:text-dark-primary">
              Marketplace
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col p-4 mt-4 ">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block mb-4 text-xl font-semibold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

// Validation for props
Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
}

export default Sidebar
