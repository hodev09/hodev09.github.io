import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Home from "./Home";
import Bio from "./Bio";
import Experience from "./Experience";
import TechStack from "./TechStack";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Home" />
          <Tab label="Bio" />
          <Tab label="Experience" />
          <Tab label="Tech Stack" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <Home />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <Bio />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <Experience />
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <TechStack />
        </TabContainer>
      )}
    </div>
  );
}

export default ScrollableTabsButtonAuto;
