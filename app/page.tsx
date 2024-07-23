"use client";
import { PageContent } from "@/components/layout/page-content";
import { CarouselSection } from "@/components/section/home-page-carousel";
import { Navbar } from "@/components/section/navbar";
import { createContext, useContext, useState } from "react";
import { SubNavbar } from "@/components/section/sub-navbar";
import NFTCard from "@/components/ui/nft-card";
import { HomeCarouselNew } from "@/components/section/homeCarouselNew";

export interface NavCategoryContextType {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const NavCategoryContext = createContext<NavCategoryContextType | undefined>(undefined);
export function UseSubNavCategory() {
  const context = useContext(NavCategoryContext);
  if (!context) {
    throw new Error("UseSubNavCategory must be used within a NavCategoryProvider");
  }
  return context;
}


export default function Home() {
  
  const [category, setCategory ] = useState<string>("Art")

  return (
   <main >
    <NavCategoryContext.Provider value={{category, setCategory}}>
      <Navbar/>
      <SubNavbar/> 
      <PageContent>
        {/* <NFTCard /> */}
        {/* <CarouselSection /> */}
        <HomeCarouselNew />
      </PageContent>
    </NavCategoryContext.Provider>
   </main>
  );
}





