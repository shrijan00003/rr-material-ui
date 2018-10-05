import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ muscles }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {muscles.map((group, index) => 
            <Tab key={index} label={group} />
        )}
    </Tabs>
  </Paper>
);
