import * as React from "react";
import Typography from "../components/Typography";
import HeroLayout from "./HeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function Hero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Build a great place to work
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Work more Structured and Organized
      </Typography>
    </HeroLayout>
  );
}
