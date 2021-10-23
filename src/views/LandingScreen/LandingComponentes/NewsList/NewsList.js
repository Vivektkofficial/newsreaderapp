import Grid from "@material-ui/core/Grid";
import React ,{ useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './NewsList.scss'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { MdDateRange } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import color from "material-ui/colors/amber";
function handleEvent(event, picker) {
    console.log(picker.startDate,"popopop");
  }
  const array = [
      {
          date:"january 30,2020",
            title:"prince adrew touring jefferys epstins vitim with sjbc",
            mode:"positive",
            country:"NZ,herals"
      },
      {
          date:"january 30,2020",
            title:"Walmart jbs jsdjbs jefferys epstins vitim with sjbc",
            mode:"positive",
            country:"patch"
      },
  ]
export default function NewsList() {
    const [date1, setdate1] = useState(null);
    const [date2, setdate2] = useState(null);
    const [count, setCount] = useState(0);
    const [dateLabel, setDateLabel] = useState("Set Date Range");

    useEffect(() => {
        setCount(1)
      });
    return (

        <Grid container className="main-container-list">
            <DateRangePicker
             locale={{ format: "DD/MM/YYYY" }}
        initialSettings={{ startDate: '10/1/2021', endDate: '10/30/2021' }}
        // onApply={(event, picker) =>{console.log(picker)}}
        onEvent={handleEvent}
      >
        <Grid className="date-picker-container">
                <Grid className="date-picker-sub">
                    <Grid className="date-container">
                    <label    className="date-input">{dateLabel} </label>
                    </Grid>
                    <Grid className="date-icon-container">
                    <MdDateRange className="search-icon"/>
                    </Grid>
                </Grid>
        </Grid>
        
      </DateRangePicker>
      <Grid className="list-container">
            <Grid
                className="news-item-container"
             >
                  <Grid className="item-Date">
                  <label className="item-date-lbl">{count}</label>
                  </Grid>
                  <Grid className="item-title-container">
                        <label className="news-title-txt">Apple is hiring engineers and interns for their tech team in India</label>
                  </Grid>
                  <Grid className="item-place-container">
                      <GoPrimitiveDot style={{color:"red"}}/>
                      <label className="item-place-txt">NZ,herals</label>
                  </Grid>
            </Grid>
            <Grid
                className="news-item-container"
             >
                  <Grid className="item-Date">
                  <label className="item-date-lbl">january 30,2020</label>
                  </Grid>
                  <Grid className="item-title-container">
                        <label className="news-title-txt">Apple is hiring engineers and interns for their tech team in India</label>
                  </Grid>
                  <Grid className="item-place-container">
                      <GoPrimitiveDot style={{color:"red"}}/>
                      <label className="item-place-txt">NZ,herals</label>
                  </Grid>
            </Grid>
            <Grid
                className="news-item-container"
             >
                  <Grid className="item-Date">
                  <label className="item-date-lbl">january 30,2020</label>
                  </Grid>
                  <Grid className="item-title-container">
                        <label className="news-title-txt">Apple is hiring engineers and interns for their tech team in India</label>
                  </Grid>
                  <Grid className="item-place-container">
                      <GoPrimitiveDot style={{color:"red"}}/>
                      <label className="item-place-txt">NZ,herals</label>
                  </Grid>
            </Grid>
        </Grid>
        </Grid>
        // <div>
        //     <label>Test</label>
        // </div>
    )
}
