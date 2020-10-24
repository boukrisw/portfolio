import React from "react";

import Project from "./Project";
import Pagination from "./Pagination";
import MyProjects from "../../Storage/Storage";

import { useStateValue } from "../../StateProvider";

import "./Projects.css";
function Projects() {
  const [{techno},] = useStateValue()
  const projects = () => {
    let res=null;

    MyProjects.forEach(e => {
      if(e.type===techno){
        res = (
          <div className="section">
            <div className="row">
              {e.liste.map( (p,i) => {
                return (<Project 
                  key={i}
                  img={p.img} 
                  title={p.title}
                  summary={p.summary}
                  WebSite={p.WebSite}
                  Demo={p.Demo}
                  Presentation={p.Presentation}
                  Github={p.Github} />)
                })
              }
            </div>
          </div>
        )
      }
    });
    return res
  };

  return (
    <>
      <Pagination />
      <div className="container">
        <span className="d-block p-2 bg-dark text-white">{projects()}</span>
      </div>
      <Pagination />
    </>
  );
}

export default Projects;