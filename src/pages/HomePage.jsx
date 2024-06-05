import React from "react";
// import { store } from "../store";
import AppLoader from '../components/AppLoader.jsx';
import SearchBar from "../components/SearchBar.jsx";
import RenderApartments from "../components/RenderApartments.jsx";
import SposorizedApartments from "../components/SposorizedApartments.jsx";

const HomePage = () => {
    return (
        <>

  <div className="jumbotron-search">
    <div className="container">
      <div className="row">
        <div className="my-2 col-12 d-flex justify-content-center align-items-center">
            hello world
          {/* <SearchBar @apartmentSearch="filteredApartments"/> */}
        </div>
      </div>
    </div>
  </div>


  
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 p-0">
      <SposorizedApartments/>
    </div>
    <div className="col-12 p-0">
      <RenderApartments/>
    </div>
    </div>
  </div>
    </>
    );
}

export default HomePage;
