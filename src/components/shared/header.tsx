'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { montserrat } from '@/app/fonts/fonts'
import { motion } from 'framer-motion'

const navItems = ['Home', 'Services', 'VIP', 'Blog', 'Franchise', 'Contact']

export const Header = () => {
  return (
    <header className={`${montserrat.className} fixed top-6 left-0 w-full z-50 flex justify-center`}>
      <Card className="header-gradient backdrop-blur rounded-full border-none shadow-xl w-full max-w-5xl px-6 py-1">
        <div className="flex items-center justify-between w-full">
          {/* Logo with hover glow + scale */}
          <Link href="/" className="shrink-0">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full overflow-hidden bg-black flex items-center justify-center"
            >
              <Image
                src="/assets/cocoon-logo.svg"
                alt="Logo"
                width={100}
                height={56}
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Navigation links with underline on hover */}
          <nav className="hidden md:flex gap-12 text-base font-medium text-[#060606]">
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="group relative transition-colors hover:text-primary">
                <span>{item}</span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button with slight hover bounce */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="shrink-0">
            <Button className="px-8 py-5.5" variant="primary">
              Book an appointment
            </Button>
          </motion.div>
        </div>
      </Card>
    </header>
  )
}
