import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Linkedln from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#000",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  },
});
export const handleLinkedlnClick = () => {
  window.open(
    "https://www.linkedin.com/in/klajdi-beqiraj-1998-leven",
    "_blank"
  );
};

export const handlGitHubClick = () => {
  window.open("https://github.com/1998KB", "_blank");
};

export const handleInstagramClick = () => {
  window.open("https://www.instagram.com", "_blank");
};
const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<Linkedln />}
        onClick={handleLinkedlnClick}
        className={classes.root}
      />
      <BottomNavigationAction
        icon={<GitHub />}
        className={classes.root}
        onClick={handlGitHubClick}
      />
      <BottomNavigationAction
        icon={<Instagram />}
        onClick={handleInstagramClick}
        className={classes.root}
      />
    </BottomNavigation>
  );
};
export default Footer;
