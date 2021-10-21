import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    'position':'absolute',
    'bottom':'0',
    marginBottom:'60%',
  },
}));

function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      
      
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        作成
      </Button>
    </div>
  );
}
export default IconLabelButtons;