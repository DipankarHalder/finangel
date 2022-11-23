import Link from "next/link";
import Image from "next/image";
import { COLORBG } from "@/config/corevariable";

import common from "@/modules/Common.module.scss";
import header from "@/modules/Header.module.scss";

import logo_color from "@/logo-color.svg";
import logo_white from "@/logo-white.svg";

import {
  HOME,
  ABOUT,
  MISSION,
  STORES,
  COMMUNITY,
  LOGIN,
} from "@/config/routers";

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
              <Link href={HOME}>
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
                  <Link href={ABOUT}>About Us</Link>
                </li>
                <li>
                  <Link href={MISSION}>Mission</Link>
                </li>
                <li>
                  <Link href={STORES}>Stores</Link>
                </li>
                <li>
                  <Link href={COMMUNITY}>Community</Link>
                </li>
              </ul>
            </div>
            <div className={header.loginIcn}>
              <Link href={LOGIN}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
