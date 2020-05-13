import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as a from '../actions'
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


const ParkForm = props => {
  console.log("PROPS IN FORM: ", props)
  const classes = useStyles();
  const parks = useSelector(state => state.parksAPICall.parks)
  const parkList = parks.map((e) => <MenuItem value={e.parkId} key={e.parkId}>{e.name}</MenuItem>)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const parkSelectedId = event.target.value;
    console.log("Park Selected Id: ", parkSelectedId)
    const parkSelected = parkList[parkSelectedId]
    console.log("park selected: ", parkSelected)
    const action = a.selectedPark(parkSelected)
    dispatch(action);
  };
  
  return(
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="park-dropdown-label">Choose a Park</InputLabel>
        <Select
          labelId="park-dropdown-label"
          id="park-dropdown"
          onChange={handleChange}
        >
          {parkList}
        </Select>
      </FormControl>
    </div>
  )
}

export default ParkForm;