import { Suspense } from "react";
import { lazy } from "@loadable/component";
import { COLORBG } from "@/config/corevariable";
import MainLayout from "@/layout/mainLayer";
import common from "@/modules/Common.module.scss";

// import home from "@/pageStyle/Home.module.scss";

const Hero = lazy(() => import("@/pageComponents/home/hero"));
const RowGet = lazy(() => import("@/pageComponents/home/rowget"));
const ItWork = lazy(() => import("@/pageComponents/home/itWork"));
const WeCover = lazy(() => import("@/pageComponents/home/weCover"));
const AchvSec = lazy(() => import("@/pageComponents/home/achvSec"));
const Club = lazy(() => import("@/pageComponents/home/club"));
const Choose = lazy(() => import("@/pageComponents/home/choose"));
const Scroller = lazy(() => import("@/pageComponents/home/scroller"));

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={common.coverpage}>
        <Hero />
        <RowGet />
        <ItWork />
        <WeCover />
        <AchvSec />
        <Club />
        <Choose />
        <Scroller />
      </div>
    </Suspense>
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
