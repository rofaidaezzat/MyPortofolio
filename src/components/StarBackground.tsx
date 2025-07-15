import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { useCallback } from "react";

const StarBackground = () => {
  const customInit = useCallback(async (engine: any) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      options={{
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
      }}
    />
  );
};

export default StarBackground;
