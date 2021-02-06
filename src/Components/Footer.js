import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "flex",
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  a: {
    color: "#07345D",
    padding: 8,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Card className={classes.contact}>
        <a
          href="https://www.linkedin.com/in/sarah-al-ashwal/"
          className={classes.a}
        >
          <LinkedInIcon />
        </a>

        <a href="https://github.com/SarahAlAshwal" className={classes.a}>
          <GitHubIcon />
        </a>
        <a href="contact" className={classes.a}>
          <AlternateEmailIcon />
        </a>
      </Card>
    </div>
  );
}
