import Image from "next/image";
import home from "@/pageStyle/Home.module.scss";

import coverRight from "@/coverRight.webp";

export default function WeCover() {
  return (
    <div className={home.rowcover}>
      <div className={home.rowLeft}>
        <h3>What we cover</h3>
        <div className={home.rowBlock}>
          <h5>Bigger purchases</h5>
          <p>We help increase your clients Average Order Value.</p>
        </div>
        <div className={home.rowBlock}>
          <h5>Instant money</h5>
          <p>
            We cover both technically and rinancially the instalment
            <br />
            process with our clients.
          </p>
        </div>
        <div className={home.rowBlock}>
          <h5>More clients</h5>
          <p>
            We encourage 300 000 clients to purchase more <br />
            goods with Finangel at partner shops.
          </p>
        </div>
      </div>
      <div className={home.rowRight}>
        <Image
          src={coverRight}
          width={632}
          height={703}
          alt={"getFinangel"}
        />
      </div>
    </div>
  );
}
