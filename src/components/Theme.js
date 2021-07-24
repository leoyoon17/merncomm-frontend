import { createTheme } from '@material-ui/core/styles';

const myTheme = createTheme({
  pallete: {
    primary: {
      main: '#F7E10E',
    },
    secondary: {
      main: '#98B5D2',
    },
    background: {
      default: '#939599',
      dark: '#898A8D',
    }
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 30,
    color:'#F7E10E',
  }
});

export default myTheme;