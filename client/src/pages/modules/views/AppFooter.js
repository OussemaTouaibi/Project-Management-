import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function Copyright() {
  return (
    <React.Fragment>
      <Link color="#fff">
        {" "}
        {"© "} Project Management {new Date().getFullYear()}{" "}
      </Link>
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "primary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              color="secondary.dark"
              variant="h6"
              marked="left"
              gutterBottom
            >
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" color="#fff">
                  Terms
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" color="#fff">
                  Privacy
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              color="secondary.dark"
              variant="h6"
              marked="left"
              gutterBottom
            >
              Social Media
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="#fff" href="#">
                  Facebook
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="#fff" href="#">
                  Twitter
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
