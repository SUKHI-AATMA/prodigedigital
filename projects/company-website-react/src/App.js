import React, {Fragment, useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/layers.css';
import './css/navigation.css';
import './css/owl.carousel.min.css';
import './css/responsive.css';
import './css/style.css';

import Header from './components/header';
import Footer from './components/footer';

import Homepage from './components/homepage';
import ContactUsPage from './components/contactus';

function App() {
    const [data, setData] = useState([]);
    const [globalStats, setGlobalStats] = useState([]);
    const [statsForAllCountries, setStatsForAllCountries] = useState([]);
    const [countrySel, setCountrySel] = useState([]);
    const mySelect = useRef(null);

    function abc() {
      // console.log(mySelect.current);
      // console.log(mySelect);
    }

    const displayStatsAsPerCountry = (e) => {
      //console.log(e.target.value);
      console.log(e.target.selectedIndex);
      console.log(mySelect.current.value);
      //mySelect.current.addClass("abc");
      setCountrySel([{"index":e.target.selectedIndex}, {"countryName": e.target.value}]);
      //abc();
    }

    async function fetchUrl() {
        //const response = await fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations");
        const response = await fetch("https://covidapi.info/api/v1/global"); // global stats
        const response_all_countries = await fetch("https://covidapi.info/api/v1/global/latest");
        const json = await response.json();
        const json_all_contries = await response_all_countries.json();

        function removeDuplicates(originalArray, prop) {
            var newArray = [];
            var lookupObject  = {};
       
            for(var i in originalArray) {
               lookupObject[originalArray[i][prop]] = originalArray[i];
            }
       
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
             return newArray;
        }
       
        //var uniqueArray = removeDuplicates(json.locations, "country");
        // console.log(JSON.stringify(uniqueArray));
        // console.log(uniqueArray.length);

        //setData(uniqueArray);
        setGlobalStats(json.result);
        setStatsForAllCountries(json_all_contries.result);
        
        //setGlobalStats(json.latest);
      }

    useEffect(() => {
        fetchUrl();
        abc();
        const script = document.createElement("script");
        script.src = "https://prodigedigital.com/js/theme.js";
        script.async = true;
        document.body.appendChild(script);
      }, []
    );

  return (
    <Router>
      <Fragment>
          <Header />
          <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/contact-us" component={ContactUsPage}></Route>
          </Switch>
          <Footer />
          {/* <select onChange={displayStatsAsPerCountry} ref={mySelect}>
          {
              // data.map(({ id, country}) => (
              //     <option key={id}>{country}</option>
              //   ))
              //console.log(globalStats)

              //console.log(statsForAllCountries)

              statsForAllCountries.map((i) => (
                //console.log(JSON.stringify(Object.keys(i)[0]))
                <option key={Object.keys(i)[0]}> {Object.keys(i)[0]} </option>
              ))
              
          }
          </select>
          <section className="currentStatus">
              {
                  //console.log(globalStats)
              }
          </section> */}
      </Fragment>
    </Router>
  );
}

export default App;
