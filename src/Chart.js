import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@material-ui/core";
import { DateRangePicker } from "materialui-daterange-picker";
import DateRangeIcon from '@material-ui/icons/DateRange';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("2020", 0),
  createData("JAN20", 300),
  createData("FEB20", 600),
  createData("MAR20", 800),
  createData("APR20", 1500),
  createData("MAY20", 2000),
  createData("JUN20", 2400),
  createData("JULY20", 2400),
  createData("AUG20", undefined),
];

export default function Chart() {
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);

  const iD = {
    startDate: "Wed Dec 26 2020 ",
    endDate: "Sun Jan 08 2021 ",
  };


  return (
    <React.Fragment>
      <div >
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h5>Analytics</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p onClick={toggle} style={{ marginRight: "8px" }}>
              {dateRange.startDate
                ? dateRange.startDate.toString().substr(0,15)
                : iD.startDate} - 
            </p>
            <p onClick={toggle}>
              {dateRange.startDate ? dateRange.endDate.toString().substr(0,15) : iD.endDate}
            </p>
            <DateRangeIcon fontSize='small' style={{fontSize:'16px',color:'blue'}}/>
            <DateRangePicker
              open={open}
              toggle={toggle}
              onChange={(range) => setDateRange(range)}
              initialDateRange={iD}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" component="h6">
            245/500 <span className="chartText">Attribute</span>
          </Typography>
          <Typography variant="h6" component="h6">
            120 <span className="chartText">Attribute 1</span>
          </Typography>
          <Typography variant="h6" component="h6">
            125 <span className="chartText">Attribute 2</span>
          </Typography>
          <Typography variant="h6" component="h6">
            0 <span className="chartText">Attribute 3</span>
          </Typography>
        </div>
      </div>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}></YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
