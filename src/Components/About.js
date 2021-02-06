import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "justify",
  },
  header: {
    color: "#07345D",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  header2: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#07345D",
  },
  paper2: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  col: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  const techSkills = [
    ["HTML", "CSS", "Javascript", "Python", "Matlab", "C"],
    ["ReactJS", "JQuery", "Material-UI", "Bootstrap", "ExpressJS", "NdoeJS"],
    ["ReactNative", "JEST", "Cypress", "Mocha-Chai", "REST API", "GraphQL"],
    ["Docker", "Kubernetes", "PostgreSQL", "MongoDB", "MySQL", "Git"],
  ];
  const techList = techSkills.map((tech) => (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Paper className={classes.paper}>{tech[0]}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>{tech[1]}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>{tech[2]}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>{tech[3]}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>{tech[4]}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>{tech[5]}</Paper>
      </Grid>
    </Grid>
  ));

  const softSkills = [
    ["Communicating Effectively", "Adaptability", "Flexibility"],
    ["Time Management", "Critical Thinking", "Critical Thinking"],
  ];
  const softSkillsList = softSkills.map((soft) => (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>{soft[0]}</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>{soft[1]}</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>{soft[2]}</Paper>
      </Grid>
    </Grid>
  ));

  const experience = [
    {
      name: "Freelance Software Developer/ Web Developer",
      date: "May 2020 - Now",
      description:
        "PROJECTS: MENA AGE websit , Naveco Power Inc. Solar QuoteApplication, Efccts website",
    },
    {
      name: "Webmaster",
      date: "Sep 2019 - Nov 2020",
      description: "Leslie Park Community Association, Ottawa, Canada",
    },
    {
      name: "Network Engineer / Network Administrator",
      date: "Jan 2012 - Jun 2013",
      description: "Public Telecom Corporation, Sana’a, Yemen",
    },
  ];
  const expreienceList = experience.map((exp) => (
    <div>
      <Paper className={classes.paper2}>
        <div className={classes.col}>
          <Typography className={classes.header2} gutterBottom component="h3">
            {exp.name}
          </Typography>
          <Typography>{exp.date}</Typography>
        </div>
        <Typography>{exp.description}</Typography>
      </Paper>
      <br></br>
    </div>
  ));

  const education = [
    {
      name: "Web Application Development (Full Stack Development)",
      date: "Aug 2020 - Nov 2020",
      description: "Lighthouse lab, Ottawa, Canada",
    },
    {
      name: "Master’s degree In Computer Science",
      date: "Sep 2019 - Nov 2020",
      description:
        "Faculty of Science (University of Geneva), Geneva, Switzerland",
    },
    {
      name: "B.Sc. in Electrical Engineering (Computer and Control)",
      date: "Sep 2004 - Jul 2009",
      description: "Faculty of Engineering (Sana’a University), Sana’a, Yemen",
    },
  ];
  const educationList = education.map((edu) => (
    <div>
      <Paper className={classes.paper2}>
        <div className={classes.col}>
          <Typography className={classes.header2} gutterBottom component="h3">
            {edu.name}
          </Typography>
          <Typography>{edu.date}</Typography>
        </div>
        <Typography>{edu.description}</Typography>
      </Paper>
      <br></br>
    </div>
  ));

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="team work"
        height="500"
        image={process.env.PUBLIC_URL + "/programmer.jpg"}
        title="team work"
      />
      <CardContent>
        <Typography
          className={classes.header}
          gutterBottom
          variant="h5"
          component="h2"
        >
          LEARNING IS A LIFELONG PROCESS
        </Typography>
        <Typography color="textSecondary" component="p" variant="h6">
          Since my first year in the school I was always the first student in my
          class and I continued in the same manner until I finished my high
          school studies. I was one of few students who passed the entrance exam
          of the Faculty of Engineering. I majored in Electrical Engineering-
          Computer and Control- and graduated the First Honor Student with a GPA
          of 92.93%. My passion to learn and discover in the world of technology
          made me take a challenge and apply for the Masters' program in the
          University of Geneva. The big challenge was that 50% of the courses
          were taught in French, which I could not speak well at the time.
          However, I was confident that my relevant background, my self-learning
          ability, and my hardworking personality would help me succeed. In
          February 2017, I completed the Master’s degree with an A. Reflecting
          on that now, I strongly believe that if there is a will, there is a
          way. I have different types of work experience. I worked as a teaching
          assistant for four semesters, where I greatly improved my
          communication skills and learned how to express and explain
          complicated concepts in an easy way. After that, I worked as a network
          engineer where I gained a strong background on networking. Lately, I
          have joined two interesting training programs. The first one was with
          Google and it focused on data structure and algorithms. The second
          training I had was the Lighthouse Labs Web Application Bootcamp in
          which I learned many industry leading languages and frameworks, such
          as Javascript, Express.js, and React. I had the chance to build
          several web applications within the Bootcamp. In the final project I
          worked in a team of three to build an application for Naveco Power
          Inc. I am so excited to work as a full stack developer as I found
          while in the Bootcamp that I enjoyed every hour I spent in reading,
          programming, debugging, testing and celebrating fulfilling my
          projects.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          className={classes.header}
          gutterBottom
          variant="h5"
          component="h2"
        >
          TECHNICAL SKILLS
        </Typography>
        <div>
          <CardContent>{techList}</CardContent>
        </div>
      </CardContent>
      <CardContent>
        <Typography
          className={classes.header}
          gutterBottom
          variant="h5"
          component="h2"
        >
          SOFT SKILLS
        </Typography>
        <div>
          <CardContent>{softSkillsList}</CardContent>
        </div>
      </CardContent>
      <CardContent>
        <Typography
          className={classes.header}
          gutterBottom
          variant="h5"
          component="h2"
        >
          WORK EXPERIENCE
        </Typography>
        {expreienceList}
      </CardContent>
      <CardContent>
        <Typography
          className={classes.header}
          gutterBottom
          variant="h5"
          component="h2"
        >
          EDUCATION
        </Typography>
        {educationList}
      </CardContent>
    </Card>
  );
}
