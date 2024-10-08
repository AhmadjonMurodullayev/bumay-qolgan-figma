import React from "react";
import Gorky from "../../assets/icons/gorky";
import Elektro from "../../assets/icons/elektro";
import Monokoles from "../../assets/icons/monokoles";
import Smakat2 from "../../assets/icons/smakat2";
import Samakat from "../../assets/icons/samakat";
import Rolik from "../../assets/icons/rolik";
import Auto from "../../assets/icons/auto";
import Quloqchin from "../../assets/icons/quloqchin";
import Plastation from "../../assets/icons/plastation";

export default function Hero() {
  return (
    <div className="w-[90%] mx-auto py-4 flex flex-col lg:flex-row gap-5">
      {/* Sidebar Menu */}
      <div className="flex flex-col gap-4 bg-[#EDF2F6] p-4 rounded-lg">
        <div className="flex items-center gap-3 cursor-pointer">
          <Gorky />
          <h5 className="text-sm lg:text-base">Гироскутеры</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Elektro />
          <h5 className="text-sm lg:text-base">Электросамокаты</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Monokoles />
          <h5 className="text-sm lg:text-base">Моноколеса</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Samakat />
          <h5 className="text-sm lg:text-base">Сигвеи и мини-сигвеи</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Elektro />
          <h5 className="text-sm lg:text-base">Электроскутеры</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Rolik />
          <h5 className="text-sm lg:text-base">Электроскейты</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Auto />
          <h5 className="text-sm lg:text-base">Электромобили</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Quloqchin />
          <h5 className="text-sm lg:text-base">Аксессуары</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Plastation />
          <h5 className="text-sm lg:text-base">Умные игрушки</h5>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Samakat />
          <h5 className="text-sm lg:text-base">Smart Watch</h5>
        </div>
      </div>

      <div className="w-full lg:w-[70%] flex justify-center lg:justify-end">
        <img
          src="https://s3-alpha-sig.figma.com/img/60b6/707e/f9606c50f364c5102ea043c4c75b0c3d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJYBgV2gCwHmRvO2Gy4pcziayi2d4FFEYSHkuJUCu0pvhgOogkjpkOH~1h-rN78hO0Aw5vjEtLeDu2jEy0fUePABiIrwTZGXPUGbq-sW5XLZJGQV6usAVpoaCxcjFuZ3kngSztVCmVg9yKxDkmuJ1IrIGCw4ccH~xOO0CeJuOH6EmvHBSn9~46qHysVPMyQZtvPe7nWYJeMufK40L9DCMA9EyNfPbm~wQ5ifmO-GiXBGH2ulvHWE4ywTU29vwBeoi4yrDk8cDOlWeWddB-bnSFXymtAw3lqFkcr2iM83X3Tk61N6IdXBr-w4SCRh18VcqitGlgdk1g2Lj0R7CeUluQ__"
          alt="Main Product Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
