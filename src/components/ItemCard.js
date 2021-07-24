import { React, Component } from 'react';
import ItemCardOverlay from './ItemCardOverlay';
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
    zIndex: 1,
  },
});


class ItemCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter = (e) => {
    e.preventDefault();
    this.setState({
      isHovering: true,
    });
  } 

  handleMouseLeave = (e) => {
    e.preventDefault();
    this.setState({
      isHovering: false,
    });
  }


  render () {
    const { classes } = this.props;
    return (
      <>
      <Card square 
            className={classes.card} 
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave} >
      
        {this.state.isHovering && <ItemCardOverlay displayed={this.isHovering} />}

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