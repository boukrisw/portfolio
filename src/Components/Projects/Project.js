import React from 'react'
import "./Projects.css";

function Project({img,title, summary,WebSite,Demo,Presentation,Github}) {
    return (
        <div className="col s12 m4">,
            <div className="card small center imageProject">
                <div>
                    <img style={{ width: `150px`, height: `110px` }}
                        src={img}
                        alt="Projet" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="light" dangerouslySetInnerHTML={{ __html: summary }} />
                    <div className="card-action">
                        {WebSite &&<a href={WebSite}
                                      className="teal-text"
                                      rel="noopener noreferrer"
                                      target="_blank">
                                        WebSite
                                    </a>
                        }
                        {Demo && <a href={Demo}
                                      className="teal-text"
                                      rel="noopener noreferrer"
                                      target="_blank">
                                        Demo
                                   </a>
                        }
                        {Presentation &&<a href={Presentation}
                                            className="teal-text"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            Presentation
                                        </a>
                        }
                        {Github && <a href={Github}
                                      className="teal-text"
                                      rel="noopener noreferrer"
                                      target="_blank">
                                        Github
                                   </a>
                        }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Project
