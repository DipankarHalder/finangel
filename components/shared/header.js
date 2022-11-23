import Link from "next/link";
import Image from "next/image";
import { COLORBG } from "@/config/corevariable";

import common from "@/modules/Common.module.scss";
import header from "@/modules/Header.module.scss";

import logo_color from "@/logo-color.svg";
import logo_white from "@/logo-white.svg";

export default function Header({ backbg }) {
  return (
    <div className={header.wrapperHeader}>
      <div className={common.container}>
        <div className={common.cover}>
          <div
            className={
              backbg === COLORBG
                ? header.headerCoverColor
                : header.headerCoverWhite
            }
          >
            <div className={header.logo}>
              <Link href="/">
                <Image
                  src={backbg === "COLORBG" ? logo_white : logo_color}
                  width={110}
                  height={44}
                  alt={"finangel"}
                />
              </Link>
            </div>
            <div className={header.navigation}>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/">Mission</Link>
                </li>
                <li>
                  <Link href="/">Stores</Link>
                </li>
                <li>
                  <Link href="/">Community</Link>
                </li>
              </ul>
            </div>
            <div className={header.loginIcn}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
}
