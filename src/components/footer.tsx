'use client'

import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function FooterComponent() {
  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/headphones", label: "HEADPHONES" },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/earphones", label: "EARPHONES" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="text-2xl font-bold">
              audiophile
            </Link>
          </div>
          <nav className="mb-8 lg:mb-0">
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <p className="text-gray-400 max-w-2xl mb-8 lg:mb-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <p className="text-gray-400 text-sm mb-4 lg:mb-0">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}