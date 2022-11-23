import Image from "next/image";
import home from "@/pageStyle/Home.module.scss";

import club from "@/club.webp";

export default function Club() {
  return (
    <div className={home.rowpannel}>
      <div className={home.rowLeft}>
        <Image
          src={club}
          width={632}
          height={703}
          alt={"getFinangel"}
        />
      </div>
      <div className={home.rowRight}>
        <h3>What you will get</h3>
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
        <div className={home.rowBlock}>
          <h5>No integration</h5>
          <p>
            Forget about integration. We only require Merchant ID.
          </p>
        </div>
      </div>
    </div>
  );
}
