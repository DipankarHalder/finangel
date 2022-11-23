import MainLayout from "@/layout/mainLayer";
import { COLORBG } from "@/config/corevariable";

import common from "@/modules/Common.module.scss";
import home from "@/pageStyle/Home.module.scss";

export default function Home() {
  return (
    <div className={common.coverpage}>
      <div className={home.heroSection}>
        <h1>
          Connect your shop to the No.1 <br /> instalment club in the
          UK
        </h1>
        <span>Become a partner</span>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(home) {
  const layoutProps = {
    title: "Finangel || Home",
    description: "Finangel || Home",
    backbg: COLORBG,
  };

  return <MainLayout layoutProps={layoutProps}>{home}</MainLayout>;
};
