import { useCallback } from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const PARTICLES_CONFIG = {
  preset: "stars",
  background: {
    color: {
      value: "transparent",
    },
  },
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
};

const StarBackground = () => {
  const initializeParticles = useCallback(async (engine: any) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={initializeParticles}
      options={PARTICLES_CONFIG}
    />
  );
};

export default StarBackground;
