import { React, Component } from 'react';
import myTheme from './Theme';

import { makeStyles, withStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const classes = (myTheme) => ({
  card: {
    textAlign: 'center',
    height: '280px',

    backgroundColor: myTheme.pallete.background.default,
    borderColor: myTheme.pallete.background.dark,
  },
  media: {
    height: '100%',
    width: '100%',
  }
});

class ItemCard extends Component {

  render () {
    const { classes } = this.props;
    return (
      <>
      <Card square className={classes.card}>
        <CardMedia
          className={classes.media}
          image="../img/Pentel P205 Yellow.png"
          title="MyTitle"
        />
        
      </Card>
      </>
    );
  }
}

export default withStyles(classes(myTheme), { withTheme: true })(ItemCard);