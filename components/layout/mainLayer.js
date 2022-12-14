import Head from "next/head";
import { Fragment } from "react";
import Header from "@/shared/header";

import common from "@/modules/Common.module.scss";

export default function MainLayout({ children, layoutProps }) {
  const { title, description, backbg } = layoutProps;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={common.mainwebwrapper}>
        <div className={common.container}>
          <div className={common.pageinside}>
            <Header backbg={backbg} />
            <main className={common.main}>{children}</main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
