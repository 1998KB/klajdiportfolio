import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "rgba(0,0,0,.7)",
    paddingBottom: 100,
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: "3em",
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
    // Add the fade-in animation
    animation: "$fadeIn 1s",
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "white white transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent white white",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#000",
    background: "white",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "white",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "white",
  },
  subtitle1: {
    color: "tan",
  },
  // Define the keyframes animation
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Aboutme = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2002
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            team work
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            athlete
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2012
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            rational thinking
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            chemical technician
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            critical thinking{" "}
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Bachelor of Arts
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical skills
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Today
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Soft skills
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default Aboutme;
