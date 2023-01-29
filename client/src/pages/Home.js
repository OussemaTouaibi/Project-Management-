import * as React from "react";

import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Hero from "./modules/views/Hero";
import withRoot from "./modules/withRoot";

import Services from "./modules/views/Services";

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      <Services />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);
