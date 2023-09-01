import React, { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const jsonData = [
    {
    "id":"1",
    "name":"USA",
    "parent_id":"0"
   }, 
   {
    "id":"2",
    "name":"Canada",
    "parent_id":"0"
   }, 
   {
    "id":"3",
    "name":"Australia",
    "parent_id":"0"
   }, 
   {
    "id":"4",
    "name":"New York",
    "parent_id":"1"
   }, 
   {
    "id":"5",
    "name":"Alabama",
    "parent_id":"1"
   }, 
   {
    "id":"6",
    "name":"California",
    "parent_id":"1"
   }, 
   {
    "id":"7",
    "name":"Ontario",
    "parent_id":"2"
   }, 
   {
    "id":"8",
    "name":"British Columbia",
    "parent_id":"2"
   }, 
   {
    "id":"9",
    "name":"New South Wales",
    "parent_id":"3"
   }, 
   {
    "id":"10",
    "name":"Queensland",
    "parent_id":"3"
   }, 
   {
    "id":"11",
    "name":"New York city",
    "parent_id":"4"
   }, 
   {
    "id":"12",
    "name":"Buffalo",
    "parent_id":"4"
   }, 
   {
    "id":"13",
    "name":"Albany",
    "parent_id":"4"
   }, 
   {
    "id":"14",
    "name":"Birmingham",
    "parent_id":"5"
   }, 
   {
    "id":"15",
    "name":"Montgomery",
    "parent_id":"5"
   }, 
   {
    "id":"16",
    "name":"Huntsville",
    "parent_id":"5"
   }, 
   {
    "id":"17",
    "name":"Los Angeles",
    "parent_id":"6"
   }, 
   {
    "id":"18",
    "name":"San Francisco",
    "parent_id":"6"
   }, 
   {
    "id":"19",
    "name":"San Diego",
    "parent_id":"6"
   }, 
   {
    "id":"20",
    "name":"Toronto",
    "parent_id":"7"
   }, 
   {
    "id":"21",
    "name":"Ottawa",
    "parent_id":"7"
   }, 
   {
    "id":"22",
    "name":"Vancouver",
    "parent_id":"8"
   }, 
   {
    "id":"23",
    "name":"Victoria",
    "parent_id":"8"
   }, 
   {
    "id":"24",
    "name":"Sydney",
    "parent_id":"9"
   }, 
   {
    "id":"25",
    "name":"Newcastle",
    "parent_id":"9"
   }, 
   {
    "id":"26",
    "name":"City of Brisbane",
    "parent_id":"10"
   }, 
   {
    "id":"27",
    "name":"Gold Coast",
    "parent_id":"10"
   }
 ];

 useEffect(() => {
   const countries = jsonData.filter(item => item.parent_id === "0");
   setCountries(countries);
 }, []);

 useEffect(() => {
   if (selectedCountry !== null) {
     const states = getStates(selectedCountry);
     setStates(states);
     setSelectedState(null);
     setSelectedCity(null);
   }
 }, [selectedCountry]);

 useEffect(() => {
   if (selectedState !== null) {
     const cities = getCities(selectedState);
     setCities(cities);
     setSelectedCity(null);
   }
 }, [selectedState]);

 const handleCountryChange = (event) => {
   const selectedCountry = event.target.value;
   setSelectedCountry(selectedCountry);
 };

 const handleStateChange = (event) => {
   const selectedState = event.target.value;
   setSelectedState(selectedState);
 };

 const getStates = (countryId) => {
   const filteredStates = jsonData.filter(item => item.parent_id === countryId);
   return filteredStates;
 };

 const getCities = (stateId) => {
   if (stateId !== null) {
     const filteredCities = jsonData.filter(item => item.parent_id === stateId);
     return filteredCities;
   }
   return [];
 };
  return (
    <div className="container" style={{ width: '600px' }}>
      <h2 className="text-center">JSON - Dynamic Dependent Dropdown List using React</h2>
      <br /><br />
      <select
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="form-select form-select-lg"
      >
        <option value={null}>Select country</option>
        {countries.map(country => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <br />
      <select
        name="state"
        value={selectedState}
        onChange={handleStateChange}
        className="form-select form-select-lg"
      >
        <option value={null}>Select state</option>
        {states.map(state => (
          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}
      </select>
      <br />
      <select
        name="city"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="form-select form-select-lg"
      >
        <option value={null}>Select city</option>
        {cities.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
