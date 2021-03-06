import React, { useState, useEffect } from "react";
import {axiosWithAuth} from './utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    getData();
  },[]);
  const getData=()=>{
      axiosWithAuth().get('api/colors')
      .then(response=>{
          setColorList(
              response.data.map(item=>item)
          );
          // console.log(response)
      })
      .catch(error=>{
        //   console.log("FRIENDS SOMETHING WRONG")
          console.log(error);
      }) 
  }
  // console.log("HERE!!!");
  // console.log(colorList);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
