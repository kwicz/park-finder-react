import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { VictoryBar, VictoryChart, VictoryTheme, Bar} from 'victory';
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

  const classes = useStyles();
  const parks = useSelector(state => state.parksAPICall.parks)
  const { area, name, id } = parks;
  console.log("Parks data: ", parks)
  console.log("Parks area: ", area)
  const parkVictoryBars = parks.map((e) => <VictoryBar 
          data="zakk attakk"
          style={{data: {fill: "pink"}}}
          x={parks.name}
          y={parks.area}
          />)


  // const oneParkArea = (parks.area[0]);
  // console.log("one park area: ", oneParkArea)
  // const areaToInt = oneParkArea => {
  //   const noQuotes = oneParkArea.replace(/['"]+/g, '');
  //   const acres = noQuotes.split(" ")[0];
  //   console.log("acres: ", acres)
  //   return acres;
  // }
  const dataArr = [
  {size: parks.area, name: parks.name}
  ]
  console.log("data array: ", dataArr[0]);

  return (
    <Card className={classes.root}>
      <Typography>
      {/* <div>
        <VictoryChart height={400} width={400}
          domainPadding={{ x: 50, y: [0, 20] }}
          scale={{ x: "time" }}
        />
          <VictoryBar
            dataComponent={
              <Bar events={{ onMouseOver: handleMouseOver }}/>
            }
            style={this.state.style}
            data={[
              { x: new Date(1986, 1, 1), y: 2 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 5 },
              { x: new Date(2016, 1, 1), y: 4 }
            ]}
          /> */}
  

<div style={{border: "2px solid blue"}}>
        <div className={"data"}>
          <VictoryChart 
          theme={VictoryTheme.material}
          domainPadding={20} />
            {parkVictoryBars}
        </div>
      
        <p>Park Area: {parks.area}</p>
      </div>


{/* 
        </VictoryChart>
      </div> */}
      </Typography>
    </Card>
  );
}

export default ParkData;
