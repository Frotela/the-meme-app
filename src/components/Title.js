import React from 'react';

const titleStyles = {
    padding : "10px 0px 0px 10px",
    fontWeight : "bold",
    fontSize : "40px",

}

const Title = ({title}) => <p style= {titleStyles}>{title}</p>;

export default Title;