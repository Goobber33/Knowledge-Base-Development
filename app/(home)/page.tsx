import React from "react";
import HomeNavbar from "@/components/home/home-navbar";
import HomeCards from "@/components/home/home-cards";
import Sidebar from "@/components/home/home-sidebar";
import SidebarR from "@/components/home/home-second-sidebar";
import SidebarB from "@/components/home/home-bottom-sidebar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <div className="flex flex-grow">
        <div className="flex flex-col">
          <Sidebar />
          <SidebarB />
        </div>
        <main className="flex-grow mr-16 ml-12">
          <HomeCards />
        </main>
        <SidebarR />
      </div>
      <Footer />
    </div>
  );
}
