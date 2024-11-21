'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useDarkMode } from '@/constants/ThemeContext'
import { FiMoon, FiSun, FiHeart, FiShoppingCart, FiMenu, FiBell } from 'react-icons/fi'
import Sidebar from './Sidebar'
import SearchBar from '@/components/common/SearchBar'
import { navItems } from '@/constants/navItems'
import { useRouter } from 'next/navigation'
import Badge from '../common/Badge'
import Avatar from '../common/Avatar'

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const [isClient, setIsClient] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [user, setUser] = useState(null)
  const router = useRouter()
  const [favoriteCount, setFavoriteCount] = useState(0)

  // Test data for cart and notifications
  const cartItemCount = 1
  const notificationItemCount = 2

  // Initialize user and client-side state
  useEffect(() => {
    setIsClient(true)
    setUser({
      name: 'John Doe',
      image: '/test1.jpg',
      role: 'Artisan',
    })
  }, [])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavoriteCount(favorites.length)
    const handleFavoriteUpdated = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || []
      setFavoriteCount(favorites.length)
    }
    window.addEventListener('favoriteUpdated', handleFavoriteUpdated)
    return () => {
      window.removeEventListener('favoriteUpdated', handleFavoriteUpdated)
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false)
      }
    }
    if (isUserDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isUserDropdownOpen])

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  const dropdownLinks = [
    { href: '/profile', label: 'Profile' },
    { href: '/admin/dashboard', label: 'Admin Dashboard', condition: user?.role === 'Admin' },
    { href: '/artisan/dashboard', label: 'Artisan Dashboard', condition: user?.role === 'Artisan' },
    { href: '/settings', label: 'Settings' },
    { href: '/logout', label: 'Logout' },
  ]

  const renderNavLinks = () =>
    navItems.map(item => (
      <li
        key={item.href}
        className="hover:text-light-primary dark:hover:text-dark-primary transition"
      >
        <Link href={item.href}>{item.label}</Link>
      </li>
    ))

  const renderDropdownLinks = () =>
    dropdownLinks.map(
      (link, index) =>
        (link.condition === undefined || link.condition) && (
          <Link
            key={index}
            href={link.href}
            className="block px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary transition"
          >
            {link.label}
          </Link>
        )
    )

  return (
    <nav className=" sticky bg-light-background dark:bg-dark-background shadow  left-0 top-0 z-50">
      <div className="container py-4 flex  items-center md:px-1">
        {/* Logo and Nav Links */}
        <div className="flex justify-between items-center space-x-6">
          <FiMenu
            size={24}
            className="cursor-pointer text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition md:hidden"
            onClick={toggleSidebar}
          />
          <Avatar image="/test1.jpg" size="small" alt="User Avatar" />
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-light-primary dark:text-dark-primary hidden sm:block md:hidden">
              Marketplace
            </h1>
            <h1 className="text-2xl font-bold text-light-primary dark:text-dark-primary hidden md:block">
              Marketplace
            </h1>
          </Link>
          <ul className="hidden md:flex space-x-6 md:space-x-3 text-light-text dark:text-dark-text">
            {renderNavLinks()}
          </ul>
        </div>

        {/* Right-side actions */}
        <div className="flex justify-between items-center space-x-6 ml-auto md:space-x-3  md:flex">
          <SearchBar
            placeholder="Search products"
            onSearch={query => router.push(`/search?query=${encodeURIComponent(query)}`)}
          />

          {/* Dark Mode Toggle */}
          {isClient && (
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border text-light-text dark:text-dark-text border-light-border dark:border-dark-border hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={19} />}
            </button>
          )}

          {/* favorites */}
          <Link href="/favorites">
            <div className="relative p-2 cursor-pointer text-light-text dark:text-dark-text hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition rounded-full">
              <FiHeart size={22} />
              {favoriteCount > 0 && (
                <Badge
                  text={favoriteCount.toString()}
                  variant="danger"
                  size="sm"
                  className="absolute -top-1 -right-1"
                />
              )}
            </div>
          </Link>

          {/* Notifications */}
          <Link href="/notifications">
            <div className="relative p-2 cursor-pointer text-light-text dark:text-dark-text hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition rounded-full">
              <FiBell size={22} />
              {notificationItemCount > 0 && (
                <Badge
                  text={notificationItemCount.toString()}
                  variant="danger"
                  size="sm"
                  className="absolute -top-1 -right-1"
                />
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <div className="relative p-2 cursor-pointer text-light-text dark:text-dark-text hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition rounded-full">
              <FiShoppingCart size={22} />
              {cartItemCount > 0 && (
                <Badge
                  text={cartItemCount.toString()}
                  variant="danger"
                  size="sm"
                  className="absolute -top-1 -right-1"
                />
              )}
            </div>
          </Link>

          {/* User Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            tabIndex={0}
            onBlur={() => setIsUserDropdownOpen(false)}
          >
            <div onClick={() => setIsUserDropdownOpen(prev => !prev)} className="cursor-pointer">
              <Avatar
                image={user?.image}
                alt={`${user?.name}'s avatar`}
                initials={user?.name?.charAt(0) || '?'}
                badge={
                  user?.role === 'Admin' ? 'Admin' : user?.role === 'Artisan' ? 'Artisan' : null
                }
                badgePosition="top-right"
                size="small"
              />
            </div>
            {isUserDropdownOpen && (
              <div className="absolute whitespace-nowrap right-0 mt-2 w-40 bg-light-background dark:bg-dark-background shadow-lg rounded-md">
                {renderDropdownLinks()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </nav>
  )
}

export default Navbar
