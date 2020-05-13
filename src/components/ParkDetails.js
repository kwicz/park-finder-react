import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import ParkForm from './ParkForm'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function ParkDetails(props){
  const classes = useStyles();
  const selectedPark = useSelector(state => state.selectedPark)

  return (
    <Card className={classes.root}>
      <Typography>
        <h1>Park Details</h1>
      </Typography>
      <ParkForm />
      <CardContent>
        <Typography component="h5" variant="h5">
          <h2>{selectedPark.name}</h2>
        </Typography>
        <Typography>
          <h3>Located in {selectedPark.location}</h3>
          <p>Park Size: {selectedPark.area}</p>
          <p><em>{selectedPark.description}</em></p>
        </Typography>  
      </CardContent>
    </Card>
  );
}

ParkDetails.propTypes = {
  selectedPark: PropTypes.object,
};

export default ParkDetails;
