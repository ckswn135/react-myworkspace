import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import AreaChartDay from "./AreaChartDay";
import AreaChartMonth from "./AreaChartMonth";
import ResponsiveTable from "./ResponsiveTableSample";

import { useEffect, useState } from "react";

import api from "../../api/opendata";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
  },
}));

const transformLocationData = (source, location) => {
  if (source.length === 0) return [];

  const transData = [];
  let item = {};
  source.forEach((record, index) => {
    if (index % 13 === 0) {
      item.locdate = parseInt(record[location]);
      item.location = parseInt(record[location]);
      item.sunrise = parseInt(record[location]);
      item.sunset = parseInt(record[location]);
      item.moonrise = parseInt(record[location]);
      item.moonset = parseInt(record[location]);
      transData.unshift(item);
      item = {};
    }
  });

  return transData;
};

const transformLocationTableData = (source) => {
  if (source.length === 0) return [];
  return source.map((item) => {
    let newItem = {
      시간: item.locdate,
      지역: item.location,
      일출: item.sunrise,
      일몰: item.sunset,
      월출: item.moonrise,
      월몰: item.moonset,
    };
    for (let name of source) {
      let val = item[name];
      newItem[source] = parseInt(val);
    }

    return newItem;
  });
};

const Sun = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("서울");
  const [source, setSource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchSunDaily();
      setSource(result.data);
    };
    getData();
  }, []);

  return (
    <Grid container={3} className={classes.container}>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={10} sm={10} md={10} lg={5}>
        <Paper className={classes.paper} style={{ height: "40vh" }}>
          <h3>
            <Select
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            >
              {Object.keys(location).map((location) => (
                <MenuItem key={`menu-${location}`} value={location}>
                  {location[location]}
                </MenuItem>
              ))}
            </Select>
            {"\u00A0"} 오늘의 출몰 시간
          </h3>
          <AreaChartDay data={transformLocationData(source, location)} />
        </Paper>
      </Grid>
      <Grid item xs={10} sm={10} md={10} lg={5}>
        <Paper className={classes.paper} style={{ height: "40vh" }}>
          <h3>지역별 출몰 테이블</h3>
          <ResponsiveTable
            data={transformLocationTableData(source.slice(0, 13))}
          />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={10} sm={10} md={10} lg={5}>
        <Paper className={classes.paper}>
          <h3>
            <Select
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            >
              {Object.keys(location).map((location) => (
                <MenuItem key={`menu-${location}`} value={location}>
                  {location[location]}
                </MenuItem>
              ))}
            </Select>
            {"\u00A0"} 월 단위 출몰 시간
          </h3>
          <AreaChartMonth data={transformLocationData(source, location)} />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default Sun;
