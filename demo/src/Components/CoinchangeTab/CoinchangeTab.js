import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CoinChangeDp from "./../../Algorithms/CoinChange/coinchangeinputdp";
import CoinChangeGdy from "./../../Algorithms/CoinChange/coinchangeinput";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault(); 
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //history.push(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "white"
            }
          }}
          aria-label="nav tabs example"
        >
          <LinkTab label="Greedy" href="/CoinChangeGdy" value={0} {...a11yProps(0)} />
          <LinkTab label="Dynamic" href="/CoinChangeDp" value={1} {...a11yProps(1)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h1>Greedy Coin Change Problem</h1>
        <CoinChangeGdy/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Dynamic Coin Change Problem</h1>
        <CoinChangeDp/>
      </TabPanel>
    </div>
  );
}