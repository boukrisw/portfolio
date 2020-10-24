import React from 'react'
import { useStateValue } from "../../StateProvider";
import "./Projects.css";

function PaginationElement({element}) {
    const [{techno}, dispatch] = useStateValue();

    const change = (t) => {
        dispatch({
          type: "SET_THECHNO",
          techno: t,
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <li onClick={() => change(element)}
            className={`${techno === element ? "active teal" : "waves-effect"}`}
        >
        &nbsp;&nbsp;&nbsp;{element}&nbsp;&nbsp;&nbsp;
      </li>
    )
}

export default PaginationElement
