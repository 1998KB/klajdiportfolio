import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import Done from "@material-ui/icons/Done";
import emailjs from "emailjs-com";
import Linkedln from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  handlGitHubClick,
  handleInstagramClick,
  handleLinkedlnClick,
} from "./Footer";
const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "rgba(0, 0, 0, .7)",
    height: "100vh",
  },
  heading: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "white",
    borderColor: "tan",
    "&:hover": {
      backgroundColor: "tan", // Change the background color on hover
      color: "black", // Change the text color on hover
    },
  },
  field: {
    margin: "1rem 0rem",
  },
  bottomNavContainer: {
    background: "none",
    marginTop: "1em",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      transform: "scale(1.5)",

      transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
      "&:hover": {
        transform: "scale(1.6)",
      },
    },
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setError(true);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      form_email: formData.email,
      form_message: formData.message,
    };
    emailjs.init("NPt7mNcSpels1zThI");

    emailjs
      .send("service_b615p2w", "template_635okgk", templateParams)
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        // Reset form fields
        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [success, error]);

  return (
    <Box component="div" className={classes.contactContainer}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Box>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "2em",
              marginBottom: "2em",
            }}
          >
            Have something to say? I am are here to help. <br />
            Fill up the form or send email or call phone.
          </Typography>
        </Box>
        <InputField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          inputProps={{ className: classes.input }}
        />
        <InputField
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={classes.field}
          inputProps={{ className: classes.input }}
        />
        <InputField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          inputProps={{ className: classes.input }}
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth
          endIcon={<SendIcon />}
          className={classes.button}
        >
          Contact Me
        </Button>
        <Box style={{ height: "1em", marginTop: "1em", textAlign: "center" }}>
          {error && (
            <Typography
              style={{ color: "red" }}
              className={classes.errorMessage}
            >
              Please fill in all fields
            </Typography>
          )}
          {success && (
            <Typography
              style={{ color: "green" }}
              className={classes.successMessage}
            >
              Email sent successfully!
            </Typography>
          )}
        </Box>
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
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <MailOutlineIcon style={{ marginRight: "0.5em", color: "white" }} />
          <a href="mailto:klajdibeqiraj88@gmail.com" style={{ color: "white" }}>
            klajdibeqiraj88@gmail.com
          </a>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          <PhoneOutlinedIcon style={{ marginRight: "0.5em", color: "white" }} />
          <a href="tel:+31653329287" style={{ color: "white" }}>
            +31 6 53329287
          </a>{" "}
        </Box>
      </form>
    </Box>
  );
};

export default Contact;
