import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [modelList, setModelList] = React.useState([]);
  const [engine, setEngine] = React.useState('');
  const databaseMakes = ['Audi', 'BMW', 'Tesla'];
  const databaseModels = {
    Audi: ['TT', 'Q'],
    BMW: ['BM', '1 Series'],
    Tesla: ['Model X'],
  };
  const engineList = ['2.0'];

  const handleChangeMake = (event) => {
    setMake(event.target.value);
    setModelList(databaseModels[event.target.value]);
    setModel('');
    setEngine('');
  };

  const handleChangeModel = (event) => {
    setModel(event.target.value);
    setEngine('');
  };

  const handleChangeEngine = (event) => {
    setEngine(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Car Make</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={make}
          onChange={handleChangeMake}
          label="Car Make"
        >
          {databaseMakes.map((x) => (
            <MenuItem value={x}>{x}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={model}
          onChange={handleChangeModel}
          label="Car Model"
        >
          {make == '' ? (
            <MenuItem>Select Make</MenuItem>
          ) : (
            modelList.map((x) => <MenuItem value={x}>{x}</MenuItem>)
          )}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Engine</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={engine}
          onChange={handleChangeEngine}
          label="Engine"
        >
          {engineList.map((x) => (
            <MenuItem value={x}>{x}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
