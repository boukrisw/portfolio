import React from 'react'
import Service from "./Service"
import "./Home.css";

function Services() {
    return (
        <div className="container">
        <div className="section">
          <div className="row">
            <Service icon='<i class="fas fa-server"></i>' 
                     title="Back-end" 
                     summary="Fluency in multiple major programming languages. <br /> JAVA, Python, NodeJs and C. <br />Ability to write quality unit tests.<br />Knowledge of Algorithms and data structures.<br />" />
            <Service icon='<i class="fas fa-file-code"></i>' 
                     title="Front-end" 
                     summary="Extensive experience with web development, with frequent production releases. <br /> ReactJs, Angular, TypeScript. <br /> Proficient in materializecss and Bootstrap. <br /> Firebase Authentication, Hosting and Realtime Database. <br />" />
            <Service icon='<i class="fas fa-database"></i>' 
                     title="Database" 
                     summary="Knowledge of various DBMS technology. <br /> Well versed with DBA processes SQL and NoSQL. <br /> MySQL, Oracle, JDBC, PL/SQL. <br />" />
          </div>
          <div className="row">
            <Service icon='<i class="fas fa-laptop" ></i>' 
                     title="Tools" 
                     summary="Knowledge of software version control systems. <br /> Git, github and gitlab. <br /> Hands on experience on operating systems like Ubuntu, Linux Mint. <br />" />
            <Service icon='<i class="fas fa-star"></i>' 
                     title="Soft skills" 
                     summary="Constantly learning and improving. <br /> Able to manage time and prioritize. <br /> Communicating well with others. <br /> Attention to detail. <br /> Creative vision. <br />" />
            <Service icon='<i class="fas fa-lightbulb"></i>' 
                     title="Check some funny Projects" 
                     summary='<a href="/Projects"
                                 class="waves-effect waves-light btn-large">
                                 <i class="material-icons center">send</i>
                              </a>' />
          </div>
        </div>
      </div>
    )
}

export default Services
