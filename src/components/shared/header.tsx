'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { montserrat } from '@/app/fonts/fonts'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

const navItems = ['Home', 'Services', 'VIP', 'Blog', 'Franchise', 'Contact']

export const Header = () => {
  return (
    <header className={`${montserrat.className} fixed top-6 left-0 w-full z-50 flex justify-center`}>
      <Card className="header-gradient backdrop-blur rounded-full border-none shadow-xl w-full max-w-5xl px-6 py-1">
        <div className="flex items-center justify-between w-full">
          {/* Left: Mobile Menu + Logo */}
          <div className="flex items-center gap-1 md:gap-0">
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden text-[#0B2B46] focus:outline-none">
                  <Menu className="w-7 h-7" />
                </button>
              </SheetTrigger>

              {/* Make the backdrop full width but transparent */}
              <SheetContent side="bottom" className="p-0 bg-transparent  border-t-0">
                {/* CONSTRAINED inner card-style drawer */}
                <div className="mx-auto w-[92%] sm:max-w-md header-menu-gradient rounded-t-2xl px-6 py-8 shadow-xl">
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/assets/cocoon-full-logo.svg"
                      alt="Logo"
                      width={178}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  {/* Navigation */}
                  <div className="flex flex-col gap-6 pb-10 ">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="text-lg font-medium text-white hover:text-primary transition"
                        >
                          {item}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo for larger screens */}
            <Link href="/" className="shrink-0 ml-1 md:ml-0">
              <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-full overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/assets/cocoon-logo.svg"
                  alt="Logo"
                  width={100}
                  height={56}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12 text-base font-medium text-[#060606]">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="group relative transition-colors hover:text-primary"
              >
                <span>{item}</span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button for desktop */}
          <div className="shrink-0">
            <Button className="lg:hidden flex rounded-full px-6 py-2 md:px-8 md:py-5.5" variant="primary">
              Book now
            </Button>
            <Button className="hidden lg:flex px-8 py-5.5" variant="primary">
              Book an appointment
            </Button>
          </div>
        </div>
      </Card>
    </header>
  )
}
