import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

function FooterLink({ children, to, ...props }) {
  return (
    <li>
      <Link
        href={to}
        {...props}
        className="capitalize flex items-center gap-2 transition-all ease-in-out duration-1000 hover:ml-2"
      >
        <div className="w-6 h-6 bg-background rounded-full flex justify-center items-center text-white">
          ›
        </div>
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ children, to, ...props }) {
  return (
    <Link href={to} {...props}>
      <div className="bg-white text-background rounded-full flex justify-center items-center p-3 transition-all ease-in-out duration-700 hover:text-white hover:bg-background">
        {children}
      </div>
    </Link>
  );
}

function FooterContact({ children, icon, ...props }) {
  return (
    <li className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full text-background border border-background flex justify-center items-center">
        {icon}
      </div>
      <p className="break-words flex-1">{children}</p>
    </li>
  );
}

function Footer() {
  return (
    <div>
      <div className="bg-[#f8f8f1] text-lg leading-9">
        <div className="py-20 lg:py-24 w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 place-content-center">
          <div className="space-y-4">
            <div className="text-5xl lg:text-6xl text-background font-semibold">
              Kodafe<sup className="text-base lg:text-lg">farms</sup>
            </div>

            <p>
              Kodafe Farms and Allied Services Ltd, is an agricultural firm that
              is redefining & repositioning aquaculture practice in Nigeria
            </p>

            <div className="flex items-center gap-3">
              <SocialLink to="/">
                <FaFacebookF />
              </SocialLink>
              <SocialLink to="/">
                <FaTwitter />
              </SocialLink>
              <SocialLink to="/">
                <FaLinkedinIn />
              </SocialLink>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl capitalize font-medium">useful links</h3>

            <ul className="space-y-2">
              <FooterLink to="/">about our company</FooterLink>
              <FooterLink to="/">our best services</FooterLink>
              <FooterLink to="/">our talented team</FooterLink>
              <FooterLink to="/">contact with us</FooterLink>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl capitalize font-medium">contact us</h3>

            <ul className="space-y-4">
              <FooterContact icon={<FaLocationDot />}>
                2th Street, Office 8, Somewhere in, Nigeria
              </FooterContact>
              <FooterContact icon={<FaEnvelope />}>
                kodafe@mail.com
              </FooterContact>
              <FooterContact icon={<FaPhone />}>
                +234 803 674 0000
              </FooterContact>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="w-[90%] md:w-[85%] mx-auto py-4">
          Copyright © 2023{" "}
          <span className="font-semibold">
            Kodafe<sup>farms</sup>
          </span>
          , All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
