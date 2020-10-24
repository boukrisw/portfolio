import React from 'react'
import PaginationElement from "./PaginationElement";
import MyProjects from "../../Storage/Storage";

import "./Projects.css";

function Pagination() {
    

    return (
        <span className="d-block p-2 bg-primary text-white .d-print-block">
        <ul className="pagination center pin-bottom">
          {MyProjects.map((e,i) => <PaginationElement key={i} element={e.type} />)}
        </ul>
      </span>
    )
}

export default Pagination
