import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PictureTitle from './PictureTitle';
import Picture from './Picture';
import Credit from './Credit';
import Date from './Date';
import Description from './Description';

function Container(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if(props.newDate === ""){
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=Lewanao5JfGr3UjXpnlzqJSdcXwTj6umRE0M4D2q')
      .then(res => {
        console.log('Received data...');
        setData(res.data);
      })
      .catch(err => console.log('Error occurred: ' + err));
    }else{
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=Lewanao5JfGr3UjXpnlzqJSdcXwTj6umRE0M4D2q&date=${props.newDate}`)
      .then(res => {
        console.log('Received data...');
        setData(res.data);
      })
      .catch(err => console.log('Error occurred: ' + err));
    }
    
  }, [props.newDate])
  
  return (
    <div className="container">
      <div className="top">
        <PictureTitle value={data.title} />
        <Picture value={data.hdurl} />
        <Credit value={data.copyright} />
      </div>
      <div className="bottom">
        <Date value={data.date} />
        <Description value={data.explanation} />
      </div>
    </div>
  )
}

export default Container
