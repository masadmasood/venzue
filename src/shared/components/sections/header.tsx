"use client";

import Image from "next/image";
import { UserIcon, SearchIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

interface HeaderProps {
  isScrolled?: boolean;
}

export default function Header({ isScrolled = false }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-3 sm:py-4 transition-all duration-300">
      <div className="px-4 sm:px-6 md:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Venuze Logo"
            width={187}
            height={32}
            className="max-h-6 sm:max-h-8 w-auto"
          />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Search icon - always visible on lg screens and above */}
          <div className="block lg:hidden rounded-lg p-2 sm:p-2.5 cursor-pointer bg-white">
            <SearchIcon strokeWidth="2" className="w-5 h-5 text-primary" />
          </div>
          
          <Select defaultValue="add-listing">
            <SelectTrigger className="w-fit font-medium bg-white text-primary text-xs sm:text-sm hidden sm:flex">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="add-listing">Add your listing</SelectItem>
              <SelectItem value="manage-listings">Manage listings</SelectItem>
              <SelectItem value="pricing">Pricing</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="en">
            <SelectTrigger className="font-medium w-fit bg-white text-primary text-xs sm:text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="ar">AR</SelectItem>
              <SelectItem value="ur">UR</SelectItem>
            </SelectContent>
          </Select>

          <div className="rounded-lg p-2 sm:p-2.5 cursor-pointer bg-white">
            <UserIcon strokeWidth="2" className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
