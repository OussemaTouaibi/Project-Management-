import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar.js";

const rightLink = {
  fontSize: 14,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 18 }}
          >
            {"Project Management"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/signin"
              sx={rightLink}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
