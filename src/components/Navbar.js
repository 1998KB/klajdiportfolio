import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import Computer from "@material-ui/icons/Computer";
import Apps from "@material-ui/icons/Apps";
import Email from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar2.png";

import Footer from "../components/Footer";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#000",
    margin: 0,
  },
  menu: {
    color: "white",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#fff",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.1rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "black",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  {
    listIcon: <Computer />,
    listText: "Projects",
    listPath: "/projects",
  },
  { listIcon: <Apps />, listText: "Blog", listPath: "http://localhost:3000" },
  { listIcon: <Person />, listText: "About me", listPath: "/aboutme" },

  { listIcon: <Email />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <img className={classes.avatar} src={avatar} alt="Mahmudul Alam" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => {
              if (item.listText === "Blog") {
                window.open(item.listPath, "_blank");
                setOpen(false);
              } else {
                setOpen(false);
              }
              return 0;
            }}
            component={Link}
            to={() => {
              if (item.listText === "Blog") {
                return 0;
              } else {
                return item.listPath;
              }
            }}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Function to get the dynamic title based on the current path
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/projects":
        return "Projects";
      case "/aboutme":
        return "About me";
      case "/blog":
        return "Blog";
      case "/contact":
        return "Contact me";
      default:
        return "Home"; // Default title for other paths
    }
  };

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "right",
            }}
          >
            <Typography variant="h5" className={classes.title}>
              {getTitle()}
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.menu} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
