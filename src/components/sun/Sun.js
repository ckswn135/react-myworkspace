import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import AreaChartDay from "./LineChartDay";
import AreaChartMonth from "./LineChartMonth";
import ResponsiveTable from "./ResponsiveTableSample";

import { useEffect, useState } from "react";

import api from "../../api/opendata";
import locationList from "./locationList";

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

const transformLocationData = (source) => {
  if (source.length === 0) return [];
  return source.map((item) => {
    let newItem = {
      지역: item.location,
      일출: item.sunrise,
      일몰: item.sunset,
      월출: item.moonrise,
      월몰: item.moonset,
    };
    return newItem;
  });
};

const transformMonthData = (source, location) => {
  if (source.length === 0) return [];
  const transData = source.filter((source) => {
    return source.location === location;
  });
  transData.reverse();
  return transData.map((item) => {
    let newItem = {
      날짜: item.locdate,
      지역: item.location,
      일출: item.sunrise,
      일몰: item.sunset,
      월출: item.moonrise,
      월몰: item.moonset,
    };
    return newItem;
  });
};

const transformLocationTableData = (source) => {
  if (source.length === 0) return [];
  return source.map((item) => {
    let newItem = {
      날짜: item.locdate,
      지역: item.location,
      일출: item.sunrise,
      일몰: item.sunset,
      월출: item.moonrise,
      월몰: item.moonset,
    };
    return newItem;
  });
};

const Sun = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("강릉");
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
          <h3>{"\u00A0"} 오늘의 출몰 시간</h3>
          <AreaChartDay data={transformLocationData(source.slice(91, 104))} />
        </Paper>
        <Paper className={classes.paper} style={{ height: "40vh" }}>
          <h3>
            <Select
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            >
              {Object.keys(locationList).map((location) => (
                <MenuItem key={`menu-${location}`} value={location}>
                  {locationList[location]}
                </MenuItem>
              ))}
            </Select>
            {"\u00A0"} 월 단위 출몰 시간
          </h3>
          <AreaChartMonth data={transformMonthData(source, location)} />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={10} sm={10} md={10} lg={5}>
        <Paper className={classes.paper}>
          <h3>지역별 출몰 테이블</h3>
          <ResponsiveTable
            data={transformLocationTableData(source.slice(91, 104))}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Sun;
