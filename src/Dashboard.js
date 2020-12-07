import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./ListItems";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import { Button, Card, CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Chart from "./Chart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Dashboard.css";
import Loader from './images/loader.png'
import Notes from './images/notes.png'
import Security from './images/security.png'
import NS from './images/ns.png'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Dummy Design
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      All Rights Reserved
    </Typography>
  );
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "white",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "black",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor:'#F5F6F8'
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 400,
  },
  avatar: {
    margin: theme.spacing(1),
  },
  button: {
    backgroundColor: "#007bff",
    border: "none",
    color: "white",
    padding: "10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline - block",
    fontSize: "13px",
    marginBottom: "15px",
    marginLeft: "80%",
    cursor: "pointer",
    borderRadius: 14,
    width: "14%",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          ></Typography>
          <Avatar
            src=" https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thenewsminute.com%2Farticle%2Fhero-review-sivakarthikeyans-film-more-message-padam-superhero-movie-114461&psig=AOvVaw29w8ifoFKEAt0r9UGWog_T&ust=1607386189015000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKD9iqjKuu0CFQAAAAAdAAAAABAD"
            className={classes.avatar}
          ></Avatar>
          <Typography
            style={{ color: "black", marginRight: "20px" }}
            component="h1"
            variant="h5"
          >
            Daivik Patel
            <ExpandMoreIcon fontSize="small" />
            <Typography component="h5" variant="caption" style={{color:"grey"}}>
              Software Developer
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <h5 style={{color:"#3467DA"}}>LOGO HERE</h5>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List style={{ marginTop: "40%" }}>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Button color="primary" className={classes.button}>
            Upgrade
          </Button>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8} lg={3}>
              <div className="customCard">
                <div className="thumb">
                  <img src={Loader} height={65}></img>
                </div>
                <div className="desc">
                  <span>245/500</span>
                  <span className="text">Attribute 1</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8} lg={3}>
              <div className="customCard">
                <div className="thumb">
                  <img src={Security} height={45}></img>
                </div>
                <div className="desc">
                  <span>120</span>
                  <span className="text">Attribute 2</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8} lg={3}>
              <div className="customCard">
                <div className="thumb">
                  <img src={Notes} height={45}></img>
                </div>
                <div className="desc">
                  <span>125</span>
                  <span className="text">Attribute 3</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8} lg={3}>
              <div className="customCard">
                <div className="thumb">
                  <img src={NS} height={45}></img>
                </div>
                <div className="desc">
                  <span>0</span>
                  <span className="text">Attribute 4</span>
                </div>
              </div>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4} style={{ display: "flex", justifyContent: "flex-start" }}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};
