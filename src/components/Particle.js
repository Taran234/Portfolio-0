import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        "autoPlay": true,
        "clear": true,
        "fullScreen": {
          "enable": false,
          "zIndex": -99
        },
        "detectRetina": true,
        "fpsLimit": 60,
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onHover": {
              "enable": true,
              "mode": [],
              "parallax": {
                "enable": true,
                "force": 20,
                "smooth": 10
              }
            },
            "resize": {
              "delay": 1,
              "enable": true
            }
          },
          "modes": {
            "bubble": {
              "distance": 200,
              "duration": 0.4,
              "size": 3,
              "opacity": 0.3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad"
            },
            "pulsar": {
              "enable": true,
              "color": "#ffffff",
              "speed": 0.5,
              "frequency": 0.5
            },
            "twinkle": {
              "lines": {
                "enable": true,
                "frequency": 0.005,
                "opacity": 0.7
              },
              "particles": {
                "enable": true,
                "frequency": 0.5,
                "opacity": 1
              }
            }
          }
        },
        "particles": {
          "number": {
            "density": {
              "enable": true,
              "value_area": 800
            },
            "value": 100
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.9,
            "random": true
          },
          "size": {
            "value": 6,
            "random": true
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "zLayers": 100
      }}
    />
  );
}

export default Particle;
