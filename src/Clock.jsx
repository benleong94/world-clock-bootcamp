import React, {useState, useEffect} from "react";

function Clock (){
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(setClock(new Date().toLocaleTimeString()), 1000)
  });

  return (
    <>
      <p>It is {clock}.</p>
    </>
  );
}

export default Clock