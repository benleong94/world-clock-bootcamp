import React, {useState, useEffect} from "react";

function Clock (props){
  const [clock, setClock] = useState(
    new Date().toLocaleString("en-GB", { timeZone: props.title })
  );

  useEffect(() => {
    setInterval(() => {setClock(new Date().toLocaleTimeString("en-GB", { timeZone: props.title }));}, 1000)
  });

  return (
    <>
      <p>{props.title} : {clock}.</p>
    </>
  );
}

export default Clock