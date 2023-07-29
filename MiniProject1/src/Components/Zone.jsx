import React from 'react';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

const Zone = () => {
    const[imageUrl, setImageUrl] = useState("");
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://www.trees.com/wp-content/uploads/2021/06/growing-zone-map-e1632410337830.png", {
            mode: 'no-cors',
            method:"post"
        })
        .then(response => response.blob())
        .then(blob => {
            setImageUrl(URL.createObjectURL(blob));
            setIsLoading(false);
        });
    }, []);
    if (isLoading) {
        return<div>Loading...</div>;
    } else {
        return(
            <img src={imageUrl} alt="US Zones" />
        );
    }
};

export default Zone;







