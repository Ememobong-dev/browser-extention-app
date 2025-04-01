"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import sunLight from "@/public/assets/images/icon-sun.svg";
import moonLight from "@/public/assets/images/icon-moon.svg";
import dataExt from "@/public/data.json";
import { Switch } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  const [filtered, setFilteredList] = useState('all');
  const  [themeDark, setThemeDark] = useState(true)
  const [isExtensionActive, setIsExtensionActive] = useState<null| true | false>(null)

  const handleAllButton = () => {
    setFilteredList('all')
    setIsExtensionActive(null)
  }

  const handleActiveButton = () => {
    setFilteredList('active')
    setIsExtensionActive(true)
  }

  const handleInactiveButton = () => {
    setFilteredList('inactive')
    setIsExtensionActive(false)
  }

  useEffect(() => {
    document.body.style.background = themeDark
      ? "linear-gradient(180deg, #040918 0%, #091540 100%)"
      : "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
  }, [themeDark]);

  return (
    <div className="flex flex-col gap-8 md:gap-14 justify-center items-center p-8 md:p-14 h-full w-full ">
      <div className={` flex justify-between items-center rounded-2xl ${themeDark ? "bg-neutral-800"  : "bg-neutral-0"}  w-full p-4 `}>
        <div className="flex gap-5 items-center">
          <span>
            <Image src={logo} alt="" />
          </span>
        </div>
        <div className={` flex justify-center items-center  ${themeDark ? "bg-neutral-700"  : "bg-neutral-100"} p-2 rounded-xl cursor-pointer `} onClick={() => setThemeDark(!themeDark)}>
          <span>
            <Image src={themeDark ? sunLight : moonLight} className="cursor-pointer" alt="themeIcon"  />
          </span>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="flex flex-wrap gap-5 md:gap-0 justify-center md:justify-between  items-center h-full w-full">
          <h3 className={` text-3xl  ${themeDark ? "text-white "  : "text-neutral-900"} text-center md:text-left `}>Extensions List</h3>
          <div className="flex gap-3 items-center">
            <button onClick={() => handleAllButton()} className={` ${filtered==="all" ? `bg-red-500 font-bold ${themeDark ? "text-neutral-900" : "text-white"}` : ` ${themeDark ? "bg-neutral-700"  : "bg-neutral-0 text-neutral-800"} `}  py-2 px-5 cursor-pointer flex justify-center items-center rounded-full border border-neutral-500 focus:border-2 focus:border-red-500`}>
              All
            </button>
            <button onClick={() => handleActiveButton()} className={` ${filtered==="active" ? `bg-red-500 font-bold ${themeDark ? "text-neutral-900" : "text-white"}` : ` ${themeDark ? "bg-neutral-700"  : "bg-neutral-0 text-neutral-800"} `} py-2 px-5 cursor-pointer flex justify-center items-center rounded-full border border-neutral-500 focus:border-2 focus:border-red-500`}>
              Active
            </button>
            <button onClick={() => handleInactiveButton()} className={` ${filtered==="inactive" ? `bg-red-500 font-bold ${themeDark ? "text-neutral-900" : "text-white"}` : ` ${themeDark ? "bg-neutral-700"  : "bg-neutral-0 text-neutral-800"} `} py-2 px-5 cursor-pointer flex justify-center items-center rounded-full border border-neutral-500 focus:border-2 focus:border-red-500`}>
              Inactive
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
          {dataExt.filter( (filteredItem) => filteredItem.isActive === isExtensionActive || isExtensionActive === null ).map((item) => (
            <div className={` p-5 ${themeDark ? "bg-neutral-800" : "bg-neutral-0"}  border border-neutral-500 flex flex-col gap-5  rounded-3xl `} key={item.name}>
              <div className="flex gap-5 h-[100px]">
                <span>
                  <Image src={item.logo} width={48} height={48} className="w-full h-auto object-cover" alt="icon" />
                </span>
                <div className="flex flex-col">
                  <h3 className={` ${themeDark ? "text-white" : "text-neutral-900"} font-bold text-xl `}>{item.name}</h3>
                  <p className={` ${themeDark ? "text-neutral-300" : "text-neutral-600"} `}> {item.description} </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className={`py-1 px-2 ${themeDark ? "text-neutral-900" : "text-neutral-600"} cursor-pointer flex justify-center items-center rounded-full border border-neutral-500 focus:border-2 focus:border-red-500 hover:border-2 hover:font-semibold hover:border-red-500 hover:bg-red-500 hover:text-neutral-900`}>
                  Remove
                </button>
                <Switch checked={item.isActive}  style={{ backgroundColor: item.isActive ? "#f25c54" : "#545969" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
