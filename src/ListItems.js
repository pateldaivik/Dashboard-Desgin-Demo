import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AddIcon from "@material-ui/icons/Add";
import "./Dashboard.css";
import ArrowRightAltSharpIcon from "@material-ui/icons/ArrowRightAltSharp";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export const mainListItems = (
  <div>
    <ListItem button className="list">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Option 1" />
    </ListItem>
    <ListItem className="list" button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Option 2" />
      <AddIcon fontSize="small" style={{ fontSize: "15" }} />
    </ListItem>
    <ListItem className="list" button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Option 3" />
      <AddIcon fontSize="small" style={{ fontSize: "15" }} />
    </ListItem>
    <ListItem className="list" button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Option 4" />
    </ListItem>
    <ListItem className="list" button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Option 5" />
      <ArrowRightAltSharpIcon fontSize="small" style={{ fontSize: "18" }} />
    </ListItem>
    <ListItem className="list" button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Option 6" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem style={{ backgroundColor: "#175fa7" }} button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Option 7" />
      <ArrowRightAltSharpIcon fontSize="small" style={{ fontSize: "18" }} />
    </ListItem>
    <ListItem className="settings" style={{ marginTop: "35px", backgroundColor:'#E6F2FF'}} button>
      <ListItemIcon>
       <SettingsOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Settings"  />
    </ListItem>
  </div>
);
