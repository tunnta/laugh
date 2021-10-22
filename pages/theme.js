import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.

function Theme(){
 let theme;
return  theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});
}
export default Theme;