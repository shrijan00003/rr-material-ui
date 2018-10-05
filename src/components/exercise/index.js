import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 500,
    overflowY: "auto"
  }
};
export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises], index) => (
          <Fragment key={index}>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="nav">
              {exercises.map(({ title }, index) => (
                <ListItem key={index} button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">Welcome</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          welcome to material ui design made here
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
