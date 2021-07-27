import { React, Component } from 'react';

import myTheme from './Theme';
import { makeStyles, withStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const classes = (myTheme) => ({
  container: {
    width: '941px',
    zIndex: 3,
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    fontFamily: myTheme.typography.fontFamily,
    fontSize: myTheme.typography.fontSize,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: myTheme.typography.color,
    backgroundColor: myTheme.pallete.background.default,
  }
});


class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    console.log("Test");
    this.setState({
      open: true,
    });
    
  }
  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <>
        <a onClick={() => this.handleOpen()}>
          SIGN IN
        </a>

          <Modal
            open={open}
            onClose={this.handleClose}
            className={classes.modal}
            BackdropComponent={Backdrop}
          >
            <Fade in={open}>
              <Paper className={classes.paper}>
                <h2>SIGN IN</h2>
              </Paper>
            </Fade>
          </Modal>
          
      </>
    );
  }
}

export default withStyles(classes(myTheme), { withTheme: true })(SignIn);
