"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="flex justify-center items-center fixed mt-10 top-3 w-full z-10">
      <nav className="flex p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg shadow-lg">
        {tabs.map((tab) => (
          <div key={tab} className="relative">
            <a
              href="#"
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === tab
                  ? "text-gray-900"
                  : "text-white hover:text-white/80"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.6,
                  }}
                  style={{ zIndex: -1 }}
                />
              )}
              {tab}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Header;
