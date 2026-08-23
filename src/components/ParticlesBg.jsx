import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 30, density: { enable: true, area: 900 } },
      color: { value: "#2a4dd7" },
      shape: { type: "circle" },
      opacity: { value: 0.1 },
      size: { value: { min: 1.5, max: 3 } },
      links: { enable: true, distance: 130, color: "#2a4dd7", opacity: 0.06, width: 1 },
      move: { enable: true, speed: 0.4, outModes: { default: "out" } },
    },
    detectRetina: true,
    interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
  };

  return (
    <div aria-hidden className="absolute inset-0 -z-20 pointer-events-none particles-wrap">
      <Particles init={init} options={options} />
    </div>
  );
}
