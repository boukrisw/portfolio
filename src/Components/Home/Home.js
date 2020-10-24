import React from "react";
import "./Home.css";
//import Particles from "react-particles-js";
import Services from "./Services"
import Entete from "./Entete"
function Home() {
  return (
    <div>
      <Entete />
      <Services />
    </div>
  );
}

export default Home;

/*<Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
            },
          }}
        />*/