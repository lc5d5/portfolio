import { useState } from "react";

const Titulo = () => {
    const [hover, setHover] = useState(false);

    return ( 
        <h1 
        onMouseEnter = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
        className={hover ? ("text-blue-600") : ("text-red-600")}>Lucas</h1>
     );
}
 
export default Titulo;