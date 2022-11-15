import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    if (props.theme === "light") {
      return {
        fullScreen: {
          enable: false,
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        retina_detect: true,
        fps_limit: 120,
        particles: {
          links: {
            enable: true,
            distance: 200,
            color: {
              value: "#ffffff",
            },
          },
          move: {
            enable: true,
            speed: { min: 1, max: 2.5 },
          },
          size: {
            value: 2,
          },
          color: {
            value: "#ffffff",
          },
        },
        responsive: [
          {
            maxWidth: 768,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 5,
                },
              },
            },
          },
          {
            maxWidth: 1024,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 50,
                },
              },
            },
          },
          {
            maxWidth: 1440,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 75,
                },
              },
            },
          },
          {
            maxWidth: 1920,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 100,
                },
              },
            },
          },
        ],
      };
    } else if (props.theme === "dark") {
      return {
        fullScreen: {
          enable: false,
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        retina_detect: true,
        fps_limit: 120,
        particles: {
          links: {
            enable: true,
            distance: 200,
            color: {
                value: "#000000"
            }
          },
          move: {
            enable: true,
            speed: { min: 1, max: 2.5 },
          },
          size: {
            value: 2,
          },
          color: {
            value: "#000000",
          },
        },
        responsive: [
          {
            maxWidth: 768,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 25,
                },
              },
            },
          },
          {
            maxWidth: 1024,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 50,
                },
              },
            },
          },
          {
            maxWidth: 1440,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 75,
                },
              },
            },
          },
          {
            maxWidth: 1920,
            mode: "screen",
            options: {
              particles: {
                number: {
                  value: 100,
                },
              },
            },
          },
        ],
      };
    }
  }, [props.theme]);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={options}
      className={props.className}
    />
  );
};

export default ParticlesComponent;
