import autoprefixer from 'autoprefixer';
import Head from 'next/head'
import Login from '../components/Login'
import  {useMoralis} from "react-moralis";
import Particles from 'react-tsparticles';
import Header from '../components/Header';
import Messages from '../components/Messages'
const configHome = {
  particles: {
    number: {
      value: 128,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: "#1b1b1b",
    },
    shape: {
      type: "star",
      stroke: {
        width: 1,
        color: "#f1f1f1",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};


export default function Home() {

  const { isAuthenticated, logout } = useMoralis();


  if(!isAuthenticated) return < Login/>;


  return (
    <div className="h-screen overflow-y-scroll flex flex-col w-screen bg-gradient-to-br from-[#0EA55C] to-[#0C7475] text-white ">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Particles
        className="fixed w-full z-10 bg-opacity-0"
        id="tsparticles"
        options={configHome}
      /> */}
      {/* Header */}
      <div className="max-w-screen-2xl z-20">
        <Header className="p-5" />
      </div>
      {/* Messages */}
      <Messages />
    </div>
  );
}
