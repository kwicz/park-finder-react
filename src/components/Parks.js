
import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import ParkForm from './ParkForm';
import ParkDetails from './ParkDetails';

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
      console.log("WASSUP WITH THESE PROPS: ", this.props);
      const { parksAPICall, selectedPark } = this.props;
      console.log("parksAPICall in Parks.js: ", parksAPICall);
      console.log("selectedPark in Parks.js: ", selectedPark);
      const { parks, isLoading, error } = parksAPICall;
      console.log("DESTRUCTURED ISLOADING: ", isLoading);
      console.log("PARKS: ", parks);
      if (error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (isLoading) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        console.log(parks)
        console.log(Object.values(parks))
        const testArray = Object.values(parks);
        return (
          <React.Fragment>
            <ParkForm />
            <ParkDetails />
            {/* <h1>Park Results</h1>
             <ul>
              {testArray.map((park, index) =>              
                <li key={index}>
                  <h4>{park.name} : {park.location}</h4>

                <h4>{park.matching_full_name}</h4>
              </li>
              )} 
            </ul> */}
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