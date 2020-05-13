import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel} from 'victory';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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


function ParkData(){
  
  const convertToInt = inputString => {
    let acres = inputString.split(' ',1);
    let outputString = acres[0].replace(/[.,]/g,"");
    let output = parseInt(outputString);
    return output;
    };
    
  const classes = useStyles();
  const parks = useSelector(state => state.parksAPICall.parks);
  console.log("Parks data: ", parks);
  
  
  const dataArr = [{size: parks.area, name: parks.name}]
  const parkVictoryBars = parks.map((e) => <VictoryBar 
      key={e.id}
      data={e.parks}
      style={{data: {fill: "pink"}}}
      // x={e.name}
      y={convertToInt(e.area)}
      label={e.name}
      labelComponent= {
        <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
      } 
      />
      
      )

  return (
    <Card className={classes.root}>
      <Typography>

        <div style={{border: "2px solid blue"}}>
          <div className={"data"}>
            <VictoryChart 
            theme={VictoryTheme.material}
            domainPadding={{ x: 50, y: [0, 20] }} >
            {parkVictoryBars}
            </VictoryChart>
          </div>
        </div>

      </Typography>
    </Card>
  );
}

export default ParkData;