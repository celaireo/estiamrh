import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ListEmployes() {
    const [APIData, setAPIData] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8000/recherches`).then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);


    const getData = (e) => {
        axios.get(`http://localhost:8000/recherches?q=${e}`).then((getData) => {
                setAPIData(getData.data);
            });
    };


    return (
    
        <div>
            <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button type="sublimt" onSelect={getData(searchTxt)}>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>

        </div>
    )     

}