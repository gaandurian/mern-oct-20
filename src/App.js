import React, { useState, useEffect } from "react";

export default function App() {
  const [batata, setBatata] = useState(0);
  const [views, setViews] = useState(0);

  // setTimeout(() => {
  //   setViews(Math.floor(Math.random() * 1000))
  // }, 2000)

  useEffect(() => {
    // this will fire every one second until random_number is greater than 600
    const myInterval = setInterval(() => {
      const random_number = Math.floor(Math.random() * 1000);
      setBatata(random_number);

      if (random_number > 600) {
        clearInterval(myInterval);
      }
    }, 1000);

    // this will fire once after two seconds
    setTimeout(() => {
      setViews(Math.floor(Math.random() * 300));
    }, 2000);
  }, []);

  return (
    <div style={{ paddingLeft: 300, paddingTop: 100 }}>
      <h3> Quantity of batata: {batata}</h3>
      <h3> page views: {views} </h3>
    </div>
  );
}
