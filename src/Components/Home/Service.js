import React from 'react'
import "./Home.css";

function Service({icon, title, summary}) {
    return (
        <div className="col s12 m4">
              <div className="icon-block">
              <h2 className="center" dangerouslySetInnerHTML={{ __html: icon }} />
              <h5 className="center">{title}</h5>
              <p className="desc light center" dangerouslySetInnerHTML={{ __html: summary }} />
              </div>
        </div>
    )
}

export default Service
