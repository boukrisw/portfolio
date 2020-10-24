import sort from "../Ressources/sort.png";
import Sokoban from "../Ressources/Sokoban.png";
import P4 from "../Ressources/P4.png";
import sudoku from "../Ressources/sudoku.png";
import movies from "../Ressources/movies.png";
import takuzu from "../Ressources/takuzu.png";
import WB from "../Ressources/WB.png";
import fanorana from "../Ressources/fanorana.jpg";
import plane from "../Ressources/plane.png";
import Pygame from "../Ressources/Pygame.png";
import shell from "../Ressources/shell.png";
import train from "../Ressources/train.png";
import airbnb from "../Ressources/airbnb.png";

const MyProjects = [
    { type : "React", 
      liste : [
          { img: sort,
            title:"Sorting Algorithms Visulaser" ,
            summary:"Visualize sorting Algorithms. Quick sort, shell sort and more🔥", 
            WebSite:"https://sorting-algos-visualizer-8022c.web.app/" ,
            Github:"https://github.com/boukrisw/sorting-algos",
          },
          { img: P4,
            title:"Connect Four Chat ROOM" ,
            summary:"Connect Four game with your friends", 
            WebSite:"https://connect4roomchat.web.app/" ,
            Github:"https://github.com/boukrisw/connect4",
          },
          { img: WB,
            title:"This Portfolio" ,
            summary:"Professional portfolio", 
            WebSite:"/" ,
            Github:"https://github.com/boukrisw/portfolio",
          },
          { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/langfr-220px-Instagram_logo_2016.svg.png",
            title:"Instagram clone" ,
            summary:"SignUp and post a picture🔥", 
            WebSite:"https://instagram-clone20.web.app/" ,
            Github:"https://github.com/boukrisw/Instagram-clone",
          },
          { img: "https://gusandco.net/wp-content/uploads/2015/08/td-amazon-smile-logo-01-large.jpg",
            title:"Amazon clone" ,
            summary:"AMAZON clone with REACT Context API 🚀", 
            WebSite:"https://clone-ade69.web.app/" ,
            Github:"https://github.com/boukrisw/Amazon-clone",
          },
          { img: "https://yt3.ggpht.com/a/AATXAJyzyrPJMwSCUxtTlY-MQ9sEqX8XHm8MYq4yr7e6Gw=s900-c-k-c0xffffffff-no-rj-mo",
            title:"Netflix clone" ,
            summary:"NETFLIX clone using Material-UI and TMDB API🌟", 
            WebSite:"https://netflix-clone-42aed.web.app/" ,
            Github:"https://github.com/boukrisw/Netflix-clone",
          },
          { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/langfr-220px-WhatsApp.svg.png",
            title:"WhatsApp clone" ,
            summary:"Create a Chat Room and talk with your friends, family 🌟", 
            WebSite:"https://whatsapp-clone97.web.app/" ,
            Github:"https://github.com/boukrisw/whatsapp-clone",
          },
          { img: airbnb,
            title:"Airbnb clone" ,
            summary:"Airbnb clone with REACT 🚀🚀", 
            WebSite:"https://airbnb-clone97.web.app/",
          },
          { img: sudoku,
            title:"Sudoku solver" ,
            summary:"Can't solve a Sudoku problem! <br /> Go check the solution here", 
            WebSite:"https://suduko-solver-25e58.web.app/" ,
            Github:"https://github.com/boukrisw/Sudoku-solver",
          },
      ]
    },
    { type : "Angular", 
      liste : [
        { img: Sokoban,
          title:"Shortest Path Visulaser" ,
          summary:"Visualize Pathfinding Algorithms. <br /> (A* search, dijkstra and more)", 
          WebSite:"https://shortest-path-f1101.web.app/?fbclid=IwAR08A_WlqZKuzerRFU7kwFoQiGvQMGAcnlHN2QEs5uhN4qnKVBsmNucDQac"  ,
          Github:"https://github.com/boukrisw/shortest-path",
        },
        { img: movies,
          title:"Movies library" ,
          summary:"Search for movies and see people's opinion", 
          WebSite:"https://movies-lib.web.app/" ,
          Github:"https://github.com/boukrisw/takuzu-solver",
        },
        { img: takuzu,
          title:"takuzu solver" ,
          summary:"Can't solve a Takuzu problem! <br /> Go check the solution here", 
          WebSite:"https://takuzu-solver.web.app/?fbclid=IwAR3waKjwCAvJVljBwe2uuC1vpH86hC4yqqElKyMcshpgSShjNoV34LqftVo" ,
          Github:"https://github.com/boukrisw/takuzu-solver",
        },
      ]  
    },
    { type : "JAVA", 
      liste : [
        {   img: fanorana,
            title:"Fanorana" ,
            summary:"A Malagasy strategy board game with some powerful IA.", 
            Presentation: "https://github.com/boukrisw/Fanorona/blob/master/IA.pdf", 
            Github:"https://github.com/boukrisw/Fanorona",
        },
        {   img: plane,
            title: "Air Chance" ,
            summary: "An application to manage airline flights and customer's reservation", 
            Demo: "https://drive.google.com/file/d/1QHLyrXsJb9g6k4vepTfuU_Bkx0--p0ye/view",
            Github:"https://github.com/boukrisw/AirChanceApp",
        },
      ]
    },
    { type : "Python", 
      liste : [
        {   img: Pygame,
            title:"Sokoban Advance" ,
            summary:"A game where it rains bricks! <br /> Avoid them.", 
            Demo:"https://drive.google.com/file/d/1a5_l7WUp1mTtVqEjGkZxp952ohvHnE5x/view?usp=sharing" ,
            Github:"https://github.com/boukrisw/Sokoban",
        },
      ]
    },
    { type : "C", 
      liste : [
        {   img: shell,
            title:"Mini shell" ,
            summary:"Mini shell with management of pipes, redirects and signals ...", 
            Github:"https://github.com/boukrisw/mini-shell",
        },
        {   img: train,
            title:"Find your Train" ,
            summary:"Search for a train", 
            Github:"https://github.com/boukrisw/Projet_Systemes_Reseaux",
        },
      ]
    },
];


export default MyProjects;

/**
 { img: "",
            title:"" ,
            summary:"", 
            WebSite:"" ,
            Github:"",
          },
 */