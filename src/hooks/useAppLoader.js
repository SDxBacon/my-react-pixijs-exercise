import { useState, useEffect } from "react";
import { useApp } from "@inlet/react-pixi";

const JET_SPRITE_SHEET =
  "https://pixijs.io/examples/examples/assets/spritesheet/fighter.json";

const useAppLoader = () => {
  const app = useApp();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      app.loader
        .add("jetFighter", JET_SPRITE_SHEET)
        .add("star", `${process.env.PUBLIC_URL}/images/star.png`)
        .add(
          "waterbottle",
          `${process.env.PUBLIC_URL}/assets/waterbottle/waterbottle.gltf`
        )
        .add(
          "starConflict",
          `${process.env.PUBLIC_URL}/assets/star_conflict/scene.gltf`
        )
        .add("cardFire", `${process.env.PUBLIC_URL}/active-fire-sprite.png`)
        .add("town_grass", `${process.env.PUBLIC_URL}/assets/town/grass.png`)
        .load(() => {
          setIsLoaded(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoaded;
};

export default useAppLoader;
