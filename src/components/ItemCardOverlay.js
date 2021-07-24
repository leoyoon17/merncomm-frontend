import {React, Component, memo} from 'react';
import { withStyles } from '@material-ui/core/styles';
import myTheme from './Theme';

import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
// const Overlay = memo(({ handleMouseOver, handleMouseOut }) => {

//   return (
//     <Card square onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//       TEST
//     </Card>
//   )
// });


// const StyledItemCardOverlay = withStyles({
//   root: {
//     textAlign: 'center',
//     height: '280px',
//     backgroundColor: 'purple',

//     zIndex: 1,
//   }
// })(Overlay);

const classes = (myTheme) => ({
  root: {
    textAlign: 'center',
    height: '280px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2,
    fontFamily: myTheme.typography.fontFamily,
    fontSize: myTheme.typography.fontSize,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: myTheme.typography.color,
  }
});


class ItemCardOverlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: this.props.displayed,
    }
  }

  render() {
    const { classes } = this.props;
    const Overlay = memo(({ handleMouseOver, handleMouseOut }) => {
      return (
        <Card square
              className={classes.root} >
                <p>Pentel P209</p>
                <p>0.9mm</p>
                <p>$123.45</p>
                
        </Card>
      )
    });

    return (
        <Overlay/>
    );
  }
}

export default withStyles(classes(myTheme), { withTheme: true})(ItemCardOverlay);