/** Ordered paths for the guided museum tour (each is its own page). */
export const tourSteps = [
  { id: "atrium" as const, path: "/visit/atrium", label: "Atrium", blurb: "Orientation" },
  { id: "guns" as const, path: "/visit/hall/guns", label: "Hall I", blurb: "Infantry arms" },
  { id: "tanks" as const, path: "/visit/hall/tanks", label: "Hall II", blurb: "Armor" },
  { id: "aircraft" as const, path: "/visit/hall/aircraft", label: "Hall III", blurb: "Aircraft" },
  { id: "atomic" as const, path: "/visit/hall/atomic", label: "Hall IV", blurb: "Atomic age" },
  { id: "medicine" as const, path: "/visit/hall/medicine", label: "Hall V", blurb: "Medicine" },
  {
    id: "works-cited" as const,
    path: "/visit/works-cited",
    label: "Archive",
    blurb: "Works cited",
  },
] as const;

export type TourStepId = (typeof tourSteps)[number]["id"];

export function getTourNav(currentPath: string) {
  const i = tourSteps.findIndex((s) => s.path === currentPath);
  if (i === -1) {
    return { index: -1, total: tourSteps.length, prev: null, next: null };
  }
  return {
    index: i,
    total: tourSteps.length,
    prev: i > 0 ? tourSteps[i - 1] : null,
    next: i < tourSteps.length - 1 ? tourSteps[i + 1] : null,
  };
}

export type HallMedia = {
  heroImage: string;
  heroAlt: string;
  /** Plain-language credit (Wikimedia Commons / license). */
  heroCredit: string;
  heroCreditUrl: string;
  /** Sketchfab model UID for /models/{uid}/embed — omit on text-only pages. */
  sketchfab?: {
    uid: string;
    title: string;
    author: string;
    url: string;
  };
};

/** Hero photos (Wikimedia Commons) + 3D viewers (Sketchfab, embed per site terms). */
export const hallMedia: Record<TourStepId, HallMedia> = {
  atrium: {
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Radar_Post_-_geograph.org.uk_-_680561.jpg/1280px-Radar_Post_-_geograph.org.uk_-_680561.jpg",
    heroAlt: "Concrete radar post used with British WWII radar defences.",
    heroCredit:
      "Andrew Curtis / Radar Post (geograph.org.uk) / CC BY-SA 2.0 via Wikimedia Commons.",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Radar_Post_-_geograph.org.uk_-_680561.jpg",
    sketchfab: {
      uid: "2f706a86fe12454990b35a0d5b79f6ed",
      title: "Würzburg D radar (historical reference model)",
      author: "ryanvalentin",
      url: "https://sketchfab.com/3d-models/wurzburg-d-radar-2f706a86fe12454990b35a0d5b79f6ed",
    },
  },
  guns: {
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M1_Garand_rifle_-_USA_-_12_April_2012_0002.jpg/1280px-M1_Garand_rifle_-_USA_-_12_April_2012_0002.jpg",
    heroAlt: "M1 Garand rifle on display.",
    heroCredit:
      "Caleb Smith / M1 Garand rifle / Public domain via Wikimedia Commons.",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:M1_Garand_rifle_-_USA_-_12_April_2012_0002.jpg",
    sketchfab: {
      uid: "ec368667c6a54f018c8cb4bacdebbb94",
      title: "M1 Garand",
      author: "YieldingMist206",
      url: "https://sketchfab.com/3d-models/m1-garand-ec368667c6a54f018c8cb4bacdebbb94",
    },
  },
  tanks: {
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/T-34-76_exhibited_in_the_Museum_of_the_Great_Patriotic_War_in_Minsk.jpg/1280px-T-34-76_exhibited_in_the_Museum_of_the_Great_Patriotic_War_in_Minsk.jpg",
    heroAlt: "T-34-76 tank in a museum setting.",
    heroCredit:
      "Alexey Minkin / T-34-76 in Minsk / CC BY-SA 4.0 via Wikimedia Commons.",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:T-34-76_exhibited_in_the_Museum_of_the_Great_Patriotic_War_in_Minsk.jpg",
    sketchfab: {
      uid: "7b32b7ef1c284ea98d7a51c91fa53fa2",
      title: "Tank T-34",
      author: "T-FLEX CAD ST",
      url: "https://sketchfab.com/3d-models/tank-t-34-7b32b7ef1c284ea98d7a51c91fa53fa2",
    },
  },
  aircraft: {
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/P-51_Mustang_edit1.jpg/1280px-P-51_Mustang_edit1.jpg",
    heroAlt: "North American P-51 Mustang in flight.",
    heroCredit:
      "U.S. Air Force photo / P-51 Mustang / Public domain via Wikimedia Commons.",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:P-51_Mustang_edit1.jpg",
    sketchfab: {
      uid: "bf6c79be180e421fb00fd41265cad727",
      title: "P-51 Mustang — WWII North American Fighter",
      author: "INGSOC1984",
      url: "https://sketchfab.com/3d-models/p-51-mustang-wwii-north-american-fighter-bf6c79be180e421fb00fd41265cad727",
    },
  },
  atomic: {
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Trinity_Detonation_T%26B.jpg/1280px-Trinity_Detonation_T%26B.jpg",
    heroAlt: "Trinity test fireball, July 16, 1945.",
    heroCredit:
      "U.S. Government / Trinity detonation / Public domain via Wikimedia Commons.",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Trinity_Detonation_T%26B.jpg",
    sketchfab: {
      uid: "1985777a2dcf4ad1baba0669c86c7a7c",
      title: "Little Boy nuclear bomb (historical 3D reference)",
      author: "sakigakefuruzawa",
      url: "https://sketchfab.com/3d-models/little-boy-nuclear-bomb-1985777a2dcf4ad1baba0669c86c7a7c",
    },
  },
  medicine: {
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Penicillin_pastilles.jpg/1280px-Penicillin_pastilles.jpg",
    heroAlt: "Historic penicillin pastilles package.",
    heroCredit:
      "Wellcome Images / Penicillin pastilles / CC BY 4.0 via Wikimedia Commons.",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Penicillin_pastilles.jpg",
    sketchfab: {
      uid: "1fca6f8d13f348d492563f732f14b020",
      title: "Penicillin syringe (museum object scan)",
      author: "The University of Manchester Library",
      url: "https://sketchfab.com/3d-models/penicillin-syringe-mmh1999121-1fca6f8d13f348d492563f732f14b020",
    },
  },
  "works-cited": {
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/WomanFactory1940.jpg/1280px-WomanFactory1940.jpg",
    heroAlt: "Women working in a WWII factory, 1940.",
    heroCredit:
      "U.S. National Archives / WomanFactory1940 / Public domain via Wikimedia Commons.",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:WomanFactory1940.jpg",
  },
};
