import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  typedContaine2: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "left",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    paddingLeft: 100,
    paddingRight: 100,
    height: "1%",
  },
  text: {
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
    fontSize: 20,
    fontStyle: "italic",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [cursor, setCursor] = useState(true);

  return (
    <>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Klajdi Beqiraj"
          />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed
            strings={["Klajdi Beqiraj"]}
            typeSpeed={40}
            showCursor={false}
          />
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Polyglot",
              "FullStack Developer",
              "Entrepreneur",
              "Human being",
            ]}
            typeSpeed={30}
            backSpeed={45}
            startDelay={1300}
            showCursor={cursor}
            onComplete={() => setCursor(false)}
          />
        </Typography>
      </Box>
      <Box className={classes.typedContaine2}>
        <Typography className={classes.text} variant="h6">
          <Typed
            strings={[
              "Greetings, friend! 🎈 It's Klajdi here, a 24-year-old human originally from Albania 🇦🇱 but now embracing the wonders of Amsterdam 🇳🇱. <br/> Welcome to my personal page! 🌟 Feel free to explore the site using the menu and if you need anything or simply want to connect, drop me a message! 📩 <br/><br/> Enjoy your time here! 🎉  ",
            ]}
            typeSpeed={25}
            startDelay={9000}
            showCursor={cursor}
            onComplete={() => setCursor(false)}
          />
        </Typography>
      </Box>
    </>
  );
};

export default Header;
