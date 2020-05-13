import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import ParkDetails from './ParkDetails';
import ParkData from './ParkData';
import Container from '@material-ui/core/Container';

class Parks extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(makeApiCall());
      console.log("Component did mount props: ", this.props)
    }
    
    render(){
      const { parksAPICall, selectedPark } = this.props;
      const { parks, isLoading, error } = parksAPICall;
      if (error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (isLoading) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        const testArray = Object.values(parks);
        return (
          <React.Fragment>
            <Container>
              <ParkDetails selectedPark={selectedPark} />
              <hr />
              <ParkData />
            </Container>
          </React.Fragment>
        );
      }
    }
  }

  const mapStateToProps = state => {
    return {
      parksAPICall: state.parksAPICall,
      selectedPark: state.selectedPark
    }
  }
    
    
  export default connect(mapStateToProps)(Parks);