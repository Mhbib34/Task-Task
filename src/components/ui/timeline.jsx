"use client";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data, children }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  return (
    <div className="w-full bg-black font-sans md:px-10">
      <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
        {children}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
              {/* STICKY BERADA DI SINI */}
              <div className="sticky top-40 z-40 flex flex-col md:flex-row items-center max-w-xs lg:max-w-sm md:w-full self-start">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-primary p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* GARIS TENGAH */}
        <div
          style={{ height: `${height - 40}px` }}
          className="absolute md:left-8 left-8 top-10 w-[2px] bg-gradient-to-b from-primary via-tertiary to-secondary"
        />
      </div>
    </div>
  );
};
