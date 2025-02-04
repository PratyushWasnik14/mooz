'use client'
import { sideBarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Sidebar = () => {
  const pathName = usePathname() //tells which path or link are we on
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sideBarLinks.map((link) => {
          const isActive = pathName === link.route
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                { 'bg-blue-1': isActive }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Sidebar

//What is const isActive doing?
// Checks if the current page is the same as the link’s route

// pathName === link.route → If pathName (current page URL) matches link.route, the link is considered active.
// Checks if the current page is within a section of the site

// pathName.startsWith(link.route) → If pathName starts with link.route, the link is also considered active.
// This allows subpages (e.g., /dashboard/settings) to activate their parent section (/dashboard).
// Why is this useful?
// It determines whether a sidebar link should be visually highlighted.
// If isActive is true, the className dynamically applies 'bg-blue-1', changing the link's background color.
// This makes the UI more intuitive, showing users which section they're currently in.
