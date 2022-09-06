import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
 
 const UseFetch = (url) => {
        const [data, setData] =useState({});
        useEffect (()=>{
            changeData();},[])

          const  changeData =()=>{
                axios.get(url)
                .then(res=> setData(res.data))
            
        }
    
    return {data,changeData};
 };
 
 export default UseFetch;