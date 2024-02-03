import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

export default function Conclude() {
  return (
    <>
      <div className="w-[1200px] mx-auto pb-[20px]">
        <div className="flex justify-between">
          <div>Copyright © 2024 Brandstore. Powered by Brandstore.</div>
          <div>
            <ul className="flex justify-between">
              <li className="mx-[10px]">
                <a href="facebook.com" className="hover:text-[#0084d6]">
                  <Facebook />
                </a>
              </li>
              <li className="mx-[10px]">
                <a href="instagram.com" className="hover:text-[#0084d6]">
                  <Instagram />
                </a>
              </li>
              <li className="mx-[10px]">
                <a href="youtube.com" className="hover:text-[#0084d6]">
                  <Youtube />
                </a>
              </li>
              <li className="mx-[10px]">
                <a href="twitter.com" className="hover:text-[#0084d6]">
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
