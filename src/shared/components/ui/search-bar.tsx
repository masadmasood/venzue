"use client";

import { SearchIcon, MapPinIcon, Sparkles } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
  className?: string;
  inNavbar?: boolean;
}

export default function SearchBar({ className = "", inNavbar = false }: SearchBarProps) {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    location: "dubai",
    date: "anytime",
    guests: "10-20",
    type: "venue",
  });

  const handleSearch = () => {
    const query = `${searchParams.location} ${searchParams.date} ${searchParams.guests}`;
    router.push(`/search?query=${encodeURIComponent(query)}&type=${searchParams.type}&location=${searchParams.location}&date=${searchParams.date}&guests=${searchParams.guests}`);
  };

  if (inNavbar) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="hidden md:flex items-center gap-2 bg-white rounded-lg px-2 py-1">
          <Select value={searchParams.location} onValueChange={(val) => setSearchParams({ ...searchParams, location: val })}>
            <SelectTrigger className="h-9 border-none bg-transparent text-sm w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dubai">Dubai, UAE</SelectItem>
              <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
              <SelectItem value="sharjah">Sharjah</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="w-px h-6 bg-gray-200" />
          
          <Select value={searchParams.date} onValueChange={(val) => setSearchParams({ ...searchParams, date: val })}>
            <SelectTrigger className="h-9 border-none bg-transparent text-sm w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="anytime">Anytime</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="w-px h-6 bg-gray-200" />
          
          <Select value={searchParams.guests} onValueChange={(val) => setSearchParams({ ...searchParams, guests: val })}>
            <SelectTrigger className="h-9 border-none bg-transparent text-sm w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10</SelectItem>
              <SelectItem value="10-20">10-20</SelectItem>
              <SelectItem value="20-50">20-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={handleSearch} size="sm" className="bg-primary hover:bg-primary/90 h-9 px-4">
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Mobile search button */}
        <Button onClick={handleSearch} size="sm" className="md:hidden bg-primary hover:bg-primary/90">
          <SearchIcon className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    );
  }

  return (
    <article className={`bg-white rounded-lg w-full max-w-5xl relative ${className}`}>
      {/* Tabs - Positioned above card */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex gap-2 bg-white rounded-lg p-2.5 shadow-lg">
          <button 
            onClick={() => setSearchParams({ ...searchParams, type: "venue" })}
            className={`gap-2 rounded-lg px-5 py-2 text-sm flex items-center cursor-pointer ${
              searchParams.type === "venue" ? "bg-primary text-white" : "hover:bg-gray-100"
            }`}
          >
            <MapPinIcon className="w-5 h-5" />
            Venue
          </button>
          <button 
            onClick={() => setSearchParams({ ...searchParams, type: "vendors" })}
            className={`gap-2 rounded-lg px-5 py-2 text-sm flex items-center cursor-pointer ${
              searchParams.type === "vendors" ? "bg-primary text-white" : "hover:bg-gray-100"
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Vendors
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-2.5 px-4 pt-8 items-end">
        {/* Where */}
        <div className="space-y-2">
          <label htmlFor="location" className="text-muted-foreground text-sm font-normal">
            Where
          </label>
          <Select value={searchParams.location} onValueChange={(val) => setSearchParams({ ...searchParams, location: val })}>
            <SelectTrigger id="location" className="h-12 border-none bg-transparent text-base font-medium w-full px-0! shadow-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-gray-200">
              <SelectItem value="dubai">Dubai, UAE</SelectItem>
              <SelectItem value="abudhabi">Abu Dhabi, UAE</SelectItem>
              <SelectItem value="sharjah">Sharjah, UAE</SelectItem>
              <SelectItem value="ajman">Ajman, UAE</SelectItem>
              <SelectItem value="rak">Ras Al Khaimah, UAE</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* When */}
        <div className="space-y-2">
          <label htmlFor="date" className="text-muted-foreground text-sm font-normal">
            When
          </label>
          <Select value={searchParams.date} onValueChange={(val) => setSearchParams({ ...searchParams, date: val })}>
            <SelectTrigger id="date" className="h-12 border-none bg-transparent text-base font-medium w-full px-0! shadow-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-gray-200">
              <SelectItem value="anytime">Anytime</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="next-month">Next Month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label htmlFor="guests" className="text-muted-foreground text-sm font-normal">
            Guests
          </label>
          <Select value={searchParams.guests} onValueChange={(val) => setSearchParams({ ...searchParams, guests: val })}>
            <SelectTrigger id="guests" className="h-12 border-none bg-transparent text-base font-medium w-full px-0! shadow-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-gray-200">
              <SelectItem value="1-10">1-10</SelectItem>
              <SelectItem value="10-20">10-20</SelectItem>
              <SelectItem value="20-50">20-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
              <SelectItem value="100-200">100-200</SelectItem>
              <SelectItem value="200+">200+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button onClick={handleSearch} className="lg:block hidden bg-primary text-white hover:bg-primary/90 h-12 px-8 gap-2 text-base rounded-lg!">
          <SearchIcon className="w-5 h-5" />
          Search
        </Button>
      </div>
    </article>
  );
}
