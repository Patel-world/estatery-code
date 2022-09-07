import React, { useState,useRef,useEffect } from "react";

import location from "../data/Location";
import Select from "../Views.js/Select";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import price from "../data/Price";

import { BsCalendarDate } from "react-icons/bs";
import property from "../data/Property";
import data from "../data/data";
import Listing from "./Listing";
import Pagination from "./Paginate";


const Category = () => {
    const [selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState(false)
    const [to, setTo] = useState(true)
    const [sorted, setSorted] = useState([...data])
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if first render
    }

    setToggle(false)
  }, [selected]); 
   
    if (selected) {
        //console.log(format(selected, 'PP'))
        //console.log(selected)
        document.querySelector("#dt").textContent = format(selected, 'PP')
        


        
    }

 

    const handleDate = () => {
        if (toggle) {
            setToggle(false)
        }
        else {
            setToggle(true)
        }
        console.log(toggle)
    }
    const handleD = () => {
        if (toggle) {
            setToggle(false)
        }
        else {
            setToggle(false)
        }
        console.log(toggle)
    }


    const handleSearch = () => {
        var l1 = document.querySelector("#New").textContent
        var p1 = document.querySelector("#\\$500-\\$2500").textContent
        var h1 = document.querySelector("#Houses").textContent
        var dt = document.querySelector("#dt").textContent
        var searched = data.filter(e => (e.city == l1 && e.price == p1 && e.property == h1 && e.date >= dt))
        setSorted(searched)
        if (searched.length == 0) {
            
            setTo(false)
        }
        else {
            setTo(true)
        }
        
    }


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    //setSorted(currentPosts);
    return (
        <div>
            <div className="grid21">
                <div className="g6">
                    <div className="qwer">

                        <Select defaultValue='New York, USA' location={location} />

                    </div>
                    <div className="qwer">
                        <a onClick={handleDate}><div className="flend"><div id="dt">Select Move-In Date</div><BsCalendarDate id='qsd' /></div></a>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            style={{ visibility: toggle ? "visible" : "collapse" }}
                     
                        />
                    </div>
                    <div className="qwer">
                        <Select defaultValue='$500-$2500' location={price} />
                    </div>
                    <div className="qwer">
                        <Select defaultValue='Houses' location={property} />
                    </div>
                    <div className="qw">
                        <a onClick={handleSearch}><div className="search">Search</div></a>
                    </div>

                </div>

            </div>
            <div style={{ display: to === true ? 'none' : 'block' }}><h4>Nothing to show..</h4></div>
            <Listing data={currentPosts} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={sorted.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Category;
