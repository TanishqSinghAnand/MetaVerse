import autoprefixer from 'autoprefixer';
import Head from 'next/head'
import Login from '../components/Login'
import  {useMoralis} from "react-moralis";
import Particles from 'react-tsparticles';

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
    <div className=" flex flex-col h-screen w-screen bg-black text-white text-center justify-center items-center">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        className="fixed w-full z-10 bg-opacity-0"
        id="tsparticles"
        options={configHome}
      />
      <h1 className="text-5xl mb-5  ">
        Welcome to the ultimate <b className="text-red-600">METAVERSE</b>
      </h1>

      <button onClick={logout} class="relative inline-block text-lg group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Logout</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
  );
}
