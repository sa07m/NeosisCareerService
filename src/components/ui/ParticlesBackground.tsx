"use client";

import { useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // LoadSlim for a smaller bundle size

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Configuration for the streaky, moving background
  const options = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        color: { value: "#2600ffff" }, // Light cyan/blue color
        links: { enable: false }, // No connecting lines
        move: {
          direction: "top-right", // Diagonal movement
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 2, // Moderate speed
          straight: true, // Key for the linear/streaky look
        },
        number: {
          density: { enable: true, area: 800 },
          value: 150, // Plenty of particles for density
        },
        opacity: {
          value: { min: 0.4, max: 0.7 }, // Very low opacity for a faint effect
        },
        shape: { type: "circle" },
        size: { value: { min: 0.5, max: 1.5 } }, // Very small particles
        trail: { // Helps create the streak effect
          enable: true,
          length: 5,
          fillColor: { value: "#00ffff" }
        }
      },
      interactivity: {
        events: { onClick: { enable: false }, onHover: { enable: false } }, // Disable interaction
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};

export default ParticlesBackground;