import React from 'react'

function getDeals() {

  const fetchPromise = fetch(`/api/deals`)
  console.log(fetchPromise);

  fetchPromise.then((response) => {
    console.log(`response: ${response.status}`);
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].deal)
    })
  });
}

function App() {
  return (

    <div>
  <h1>Auto Tracker</h1>

  <div className="dropdowns"> 
    <label htmlFor="dealer_dd" id="dealer_dd_label">Dealership: </label>
    <select name="dealer_dd" id="dealer_list">
      <option value="arlingtoncdjr">AH CDJR</option>
      <option value="Napleton Hyundai">Napleton Hyundai</option>
      <option value="elmacura">Elmhurst Acura</option>
    </select>

    <label htmlFor="make_dd" id="make_dd_label"> Make: </label>
    <select name="make_dd" id="make_list">
      <option value="toyota">Toyota</option>
      <option value="acura">Acura</option>
      <option value="hyundai">Hyundai</option>
    </select>

    <label htmlFor="model_dd" id="model_dd_label"> Model: </label>
    <select name="model_dd" id="model_list">
      <option value="camry">Camry</option>
      <option value="sonata">Sonata</option>
      <option value="ilx">ILX</option>
    </select>


  </div>
  <div className="search_button">
    <button className="init_search" onClick={getDeals}> Search </button>
    <button className="db_query" > Search DB</button>
  </div>

</div>

  
  );
}

export default App;
