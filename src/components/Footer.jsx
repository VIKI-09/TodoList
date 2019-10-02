import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Footer(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

    const handleChange = (event, index) => {
      setValue(index);

    };

  return (
    <Paper className={classes.root}>

      <Tabs
        value={0}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab index={0} label="All" />
        <Tab index={1} label="Active" />
        <Tab index={2} label="Completed" />
      </Tabs>
    </Paper>
  );
}
