import React, { Component } from 'react';
import { Container, ThemeProvider } from 'react-bootstrap';
import ItemCard from './ItemCard';

// @material-ui
import { makeStyles, useTheme, withTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const classes = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    square: true, 
  },
});

class ItemCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <>
            {/* <style>
                {`
                .MuiPaper-root {
                    height: 50px;
                    width: 50px;
                }
                `}
            </style> */}
            <Container>
            {/* <ItemCard /> */}
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard /> 
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>
                <Grid item xs={3}>
                  <ItemCard />
                </Grid>

            </Grid>
            </Container>
            </>
        );
    }
}

export default withStyles(classes, { withTheme: true })(ItemCards);