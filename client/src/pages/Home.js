import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bunny from "../assets/bunny.jpg";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = ({ currentPage, handlePageChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  let navigate = useNavigate();

  const handleSearchClicked = async (event) => {
    let start = startDate;
    let end = endDate;

    if (!start || !end) {
      alert("Please select a start and end date");
      return;
    }

    start = await dayjs(start).format("YYYYMMDD");
    end = await dayjs(end).format("YYYYMMDD");

    console.log(start, end);

    let path = `/searchresults/?date1=${start}&date2=${end}`

    navigate(path);
  }

  return (
    <>
      <div className="body-element">
        <div className="instructions">
          <h3 className="brown font-display">
            A Recall Rabbit Hole For Pharmaceuticals
          </h3>
          <h5 className="brown font-display-bold">
            To go down the Rabbit Hole, scroll down and select two dates below!
          </h5>
          <h6>The White Rabbit will show you the prescription drugs that have been recalled within that range.</h6>
        </div>
        <img src={bunny} alt="a white rabbit" className="rabbit" />
        <div className="search-container">
          <div className="calendar-container-from">
            <h5 className="brown font-display-bold">Start Date</h5>
            <DatePicker id="from"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={dayjs("20120101").toDate()}
            maxDate={new Date()}/>
          </div>
          <h3 className="brown font-display-bold">TO</h3>
          <div className="calendar-container-to">
            <h5 className="brown font-display-bold">End Date</h5>
            <DatePicker id="to"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={dayjs("20120101").toDate()}
            maxDate={new Date()}/>
          </div>
        </div>
        <div className="nav-buttons">
          <button
            className="search uk-link brown font-display nav-link"
            href="#searchResults"
            onClick={() => {
              handleSearchClicked();
            }}
          >
            Recall Rabit Hole
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;