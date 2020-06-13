import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';
import Sdata from "./Sdata";

function ncard(val){
  return( <Card
    imgsrc={val.imgsrc}
    sname={val.sname}
   link={val.link}
   /> 

  );

}

ReactDOM.render(<>
<h1 className='heading_style'> Learn Norwegian </h1>


{Sdata.map(ncard)}

  </>,
  document.getElementById('root')
);