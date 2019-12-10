/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
// ParticlesJS Config.

var options = {"particles":
{"number":
{"value":90,
"density":
  {"enable":true,
  "value_area":800
}
},
  "color":
  {"value":"#cc99ff"
},
  "shape":
  {
    "type":"circle",
    "stroke":
    {
      "width":1.75,
    "color":"#000000"
  },
    "polygon":
    {"nb_sides":3
  },
  "image":
    {
      "src":"img/github.svg",
      "width":100,
      "height":200
    }
  },
    "opacity":
    {
    "value":3,
    "random":false,
      "anim":
        {
          "enable":false,
          "speed":10,
          "opacity_min":7,
          "sync":false}
        },
      "size":
      {
        "value":3,
        "random":true,
        "anim":
        {
        "enable":false,
        "speed":10,
        "size_min":0.1,
        "sync":false}
        },
        "line_linked":
        {
          "enable":true,
          "distance":150,
          "color":"#ffffff",
          "opacity":0.6,
          "width": 1
        },
        "move":
        {
          "enable":true,
          "speed": 10,
          "direction":"none",
          "random":true,
          "straight":false,
          "out_mode":"out",
          "bounce":false,
          "attract":
          {
            "enable":false,
            "rotateX":600,
            "rotateY":1200
          }
        }
      },
      "interactivity":
      {
        "detect_on":"canvas",
        "events":
        {
          "onhover":
          {
            "enable":true,
            "mode":"repulse"
          },
          "onclick":{
            "enable":false,
            "mode":"repulse"
          },
          "resize":true
        },
        "modes":
        {
          "grab":
          {
            "distance":400,
            "line_linked":
            {
              "opacity":1
            }
          },
          "bubble":
          {
            "distance":400,
            "size":20,
            "duration":2,
            "opacity":8,
            "speed":100
          },
            "repulse":
            {
              "distance":200,
              "duration":0.3
            },
            "push":
            {
              "particles_nb":4
            },
            "remove":
            {
              "particles_nb":2
            }
          }
        },
        "retina_detect":false
      };
      particlesJS("particle", options);
