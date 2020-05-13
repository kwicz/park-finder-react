import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function ParkDetails(props){
  console.log("Park details props: ", props)
  // const { selectedPark } = props;
  const selectedPark = useSelector(state => state.selectedPark)
  console.log("Park details selectedPark: ", selectedPark)

  return (
    <React.Fragment>
      <h1>Park Details</h1>
      <h3>{selectedPark.name} - {selectedPark.location}</h3>
      <p>Park Size: {selectedPark.area}</p>
      <p><em>{selectedPark.description}</em></p>
    </React.Fragment>
  );
}

ParkDetails.propTypes = {
  selectedPark: PropTypes.object,
};

export default ParkDetails;
