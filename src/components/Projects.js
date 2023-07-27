import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpeg";
import project3 from "../images/project3.jpeg";
import project4 from "../images/project4.jpeg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "rgba(0, 0, 0, .7)",
  },
  cardContainer: {
    maxWidth: 470,
    margin: "3rem auto",
    animation: "fadeIn 1s", // Apply the fadeIn animation
    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)", // Add a box-shadow effect
    transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: "0 8px 16px rgba(255, 255, 255, 0.4)", // Modify the box-shadow on hover
    },
  },
}));

const projects = [
  {
    name: "NeuroArt",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: project1,
    gitF: "https://github.com/1998KB/NeuroArt/tree/main/frontend",
    gitB: "https://github.com/1998KB/NeuroArt/tree/main/backend",
    liveDemo:
      "https://drive.google.com/file/d/1IZoZ_ku9NMlmE8tKW2zDpf2KiQOT2NG6/view",
  },

  {
    name: "TaskWise",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project2,
    gitF: "https://github.com/CodeOnBoat/Project-Manager-App-Frontend",
    gitB: "https://github.com/CodeOnBoat/Project-Manager-App-Backend",
    link: "https://taskwise.pro/",
  },
  {
    name: "Iconic",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project3,
    gitF: "https://github.com/CodeOnBoat/iconic-browse-and-beuty",
    link: "https://iconicbrowsandbeauty.se/",
  },
  {
    name: "Crypto Wallet",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  consequatur magni quod nesciunt necessitatibus molestiae non\
  eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  iste alias sunt veritatis nisi dolores!`,
    image: project4,
    gitB: "https://github.com/1998KB/cryptoWallet-springBackend",
  },
];

const Projects = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={6} spacing={0} key={i}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt="Project 1"
                height="200"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "space-evenly" }}>
                {project.liveDemo && (
                  <Button
                    style={{ width: "100%", minHeight: "5em" }}
                    size="small"
                    color="primary"
                    onClick={() => window.open(project.liveDemo, "_blank")}
                  >
                    Live Demo
                  </Button>
                )}
                {project.link && (
                  <Button
                    style={{ width: "100%", height: "5em" }}
                    size="small"
                    color="primary"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    Link
                  </Button>
                )}
                {project.gitF && (
                  <Button
                    style={{ width: "100%", height: "5em" }}
                    size="small"
                    color="primary"
                    onClick={() => window.open(project.gitF, "_blank")}
                  >
                    GitHub
                    <br />
                    Frontend
                  </Button>
                )}
                {project.gitB && (
                  <Button
                    style={{ width: "100%", height: "5em" }}
                    size="small"
                    color="primary"
                    onClick={() => window.open(project.gitB, "_blank")}
                  >
                    GitHub
                    <br />
                    Backend
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
