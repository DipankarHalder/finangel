import Image from "next/image";
import home from "@/pageStyle/Home.module.scss";

import choose from "@/choose.webp";

export default function Choose() {
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
        <div className={home.rowBlock}>
          <h5>No integration</h5>
          <p>
            Forget about integration. We only require Merchant ID.
          </p>
        </div>
      </div>
      <div className={home.rowRight}>
        <Image
          src={choose}
          width={632}
          height={703}
          alt={"getFinangel"}
        />
      </div>
    </div>
  );
}
