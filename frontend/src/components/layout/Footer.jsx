'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const socialLinks = [
  { href: '#', label: 'Facebook', icon: FaFacebook, color: 'text-[#4267B2]' },
  { href: '#', label: 'Twitter', icon: FaTwitter, color: 'text-[#1DA1F2]' },
  { href: '#', label: 'Instagram', icon: FaInstagram, color: 'text-[#E1306C]' },
  { href: '#', label: 'LinkedIn', icon: FaLinkedin, color: 'text-[#0077B5]' },
  { href: '#', label: 'YouTube', icon: FaYoutube, color: 'text-[#FF0000]' },
]

const footerLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Contact Us' },
  { href: '#', label: 'FAQs' },
]

const quickLinks = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Products' },
  { href: '#', label: 'Categories' },
  { href: '#', label: 'About Us' },
]

const Footer = () => {
  const renderLinks = (links, isSocial = false) =>
    links.map(({ href, label, icon: Icon, color }) => (
      <Link
        key={label}
        href={href}
        className={`${
          isSocial
            ? `${color} transform transition-transform duration-200 hover:scale-125 hover:opacity-80`
            : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors'
        } flex items-center space-x-2 text-sm md:text-base`}
        aria-label={label}
      >
        {isSocial && Icon ? <Icon size={24} /> : <span>{label}</span>}
      </Link>
    ))

  return (
    <footer className="bg-light-background dark:bg-dark-background py-16 border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary">
              Handcrafted Marketplace
            </h3>
            <p className="text-light-muted dark:text-dark-muted mt-4 text-lg">
              Explore unique handmade products crafted with love and passion. Your one-stop shop for
              creativity.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-4">{renderLinks(quickLinks)}</div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-6">
              Follow Us
            </h4>
            <div className="flex space-x-6">{renderLinks(socialLinks, true)}</div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-6">
              Stay Updated
            </h4>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border dark:bg-dark-background dark:text-light-text focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-light-primary text-white rounded-lg hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* الروابط السفلية */}
        <div className="flex justify-center mt-12 space-x-6">{renderLinks(footerLinks)}</div>

        {/* النص السفلي */}
        <p className="text-light-muted dark:text-dark-muted text-sm mt-8 text-center">
          &copy; {new Date().getFullYear()} Handcrafted Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
