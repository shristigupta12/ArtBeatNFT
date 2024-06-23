"use client";
import { PageContent } from "@/components/layout/page-content";
import { CarouselSection } from "@/components/section/home-page-carousel";
import { Navbar } from "@/components/section/navbar";
import { createContext, useContext, useState } from "react";

export interface NavCategoryContextType {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const NavCategoryContext = createContext<NavCategoryContextType | undefined>(undefined);
export function useNavCategory() {
  const context = useContext(NavCategoryContext);
  if (!context) {
    throw new Error("useNavCategory must be used within a NavCategoryProvider");
  }
  return context;
}


export default function Home() {
  
  const [category, setCategory ] = useState<string>("All")

  return (
   <main>
    <NavCategoryContext.Provider value={{category, setCategory}}>
      <Navbar />
      <PageContent>
        <CarouselSection />
      </PageContent>
    </NavCategoryContext.Provider>
   </main>
  );
}





