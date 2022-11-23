import MainLayout from "@/layout/mainLayer";
import { WHITEBG } from "@/config/corevariable";

import common from "@/modules/Common.module.scss";
import about from "@/pageStyle/About.module.scss";

export default function About() {
  return (
    <div className={common.coverpage}>
      <div className={about.headSection}></div>
    </div>
  );
}

About.getLayout = function getLayout(about) {
  const layoutProps = {
    title: "Finangel || About",
    description: "Finangel || About",
    backbg: WHITEBG,
  };

  return <MainLayout layoutProps={layoutProps}>{about}</MainLayout>;
};
