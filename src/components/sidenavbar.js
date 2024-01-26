import React from "react";
import Upload from "../common/svg/upload";
import DashboardSymbol from "../common/svg/dashboardSymbol";
import Invoice from "../common/svg/invoice";
import Calender from "../common/svg/calender";
import Settings from "../common/svg/calender";
import Base from "../common/svg/base";
import "../common/style/header.css";


const Sidebar = () => {
  return (
    <aside style={{ backgroundColor: "#fff", width: "218px" , height:"100vh" }}>
      <nav>
      <div className="base">
        <Base />
      </div>
        <div>
          <button class="border  border-primary  bg-primaryFade text-primary flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-primaryFade transition-all navButton">
            <div class="flex justify-center">
              <DashboardSymbol />
            </div>
            <span className="navAlign">
              <p className="navText">Dashboard</p>
            </span>
          </button>
        </div>
        <div>
          <button class="border  border-primary  bg-primaryFade text-primary flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-primaryFade transition-all navButton">
            <div class="flex justify-center">
              <Upload />
            </div>
          </button>
        </div>
        <div>
          <button className="border border-primary bg-primaryFade text-primary flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-primaryFade transition-all navButton">
            <div className="flex justify-center">
              <Invoice />
            </div>
            <span className="navAlign">
              <p className="navText">Invoice</p>
            </span>
          </button>
        </div>
        <div>
          <button className="border border-primary bg-primaryFade text-primary flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-primaryFade transition-all navButton">
            <div className="flex justify-center">
              <Calender />
            </div>
            <span className="navAlign">
              <p className="navText">Schedule</p>
            </span>
          </button>
        </div>
        <div>
          <button className="border border-primary bg-primaryFade text-primary flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-primaryFade transition-all navButton">
            <div className="flex justify-center">
              <Calender />
            </div>
            <span className="navAlign">
              <p className="navText">Calender</p>
            </span>
          </button>
        </div>
        <div>
          <button className="border border-primary bg-primaryFade text-primary flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-primaryFade transition-all navButton">
            <div className="flex justify-center">
              <Settings />
            </div>
            <span className="navAlign">
              <p className="navText">Notification</p>
            </span>
          </button>
        </div>
        <div>
          <button className="border border-primary bg-primaryFade text-primary flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-primaryFade transition-all navButton">
            <div className="flex justify-center">
              <Settings />
            </div>
            <span className="navAlign">
              <p className="navText">Settings</p>
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
