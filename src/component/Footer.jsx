import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className=" flex justify-between">
        <div className="flex-1 space-y-6 p-4">
          <div className="text-3xl font-bold">LXRY</div>
          <nav className="flex gap-40">
            <div className="space-y-5">
              <a href="/" className="block">
                HOME
              </a>
              <a href="/about" className="block">
                ABOUT
              </a>
              <a href="/process" className="block">
                PROCESS
              </a>
            </div>
            <div className="space-y-5">
              <a href="/contact" className="block">
                CONTACT
              </a>
              <a href="/partners" className="block">
                PARTNERS
              </a>
            </div>
            <div className="space-y-5">
              <a href="/portfolio" className="block">
                PORTFOLIO
              </a>
            </div>
          </nav>
        </div>
        <div className="flex-1 flex flex-col space-y-10 p-4">
          <div className="space-y-6">
            <div className="text-lg font-bold">CONTACT</div>
            <div className="flex gap-10">
              <div className="space-y-2">
                <div>INFO@LXRYSTUDIO.COM</div>
                <div>+202 796 1717</div>
              </div>
              <div>
                2430 WISCONSIN AVE NW
                <br />
                WASHINGTON, D.C. 20007
              </div>
              <div className="flex space-x-4">
                <a href="#">
                  <img src="/path/to/instagram-icon.png" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src="/path/to/pinterest-icon.png" alt="Pinterest" />
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-lg font-bold">HOURS</div>
            <div className="flex gap-10">
              <div className="space-y-2">
                <div>
                  MONDAY - FRIDAY
                  <br />
                  10:00 AM - 6:00 PM
                </div>
                <div>
                  SUNDAY
                  <br />
                  *CLOSED*
                </div>
              </div>
              <div>
                SATURDAY
                <br />
                APPOINTMENT ONLY
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        @2024 LXRY
      </div>
    </footer>
  );
}

export default Footer;
