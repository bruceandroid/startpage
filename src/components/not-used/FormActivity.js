import React from "react";
import TextField from '@material-ui/core/TextField';
import { Card } from '@mui/material';
import './styles/Card.scss';

const FormActivity = (props) => {
  let form = {
    title: 'test',
    date: '',
  }

  const handleChange = formElem => event => {
    form[formElem] = event.target.value;
  };

  return (
    <Card className="card">
      <form autoComplete="off">
        <TextField
          id="outlined-name"
          label="Título"
          onChange={handleChange('title')}
          margin="normal"
          variant="outlined"
        />
      </form>
    </Card>
  );
};

FormActivity.defaultProps = {
  type: 'default',
};

export default FormActivity;
