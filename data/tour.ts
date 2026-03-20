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
      "https://commons.wikimedia.org/wiki/Special:FilePath/W%C3%BCrzburg_radar_FuMG.65%2C_Gatow.jpg?width=1600",
    heroAlt: "Würzburg radar dish (museum specimen).",
    heroCredit:
      "Wikimedia Commons / Würzburg radar FuMG.65, Gatow (license on file page).",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:W%C3%BCrzburg_radar_FuMG.65,_Gatow.jpg",
    sketchfab: {
      uid: "2f706a86fe12454990b35a0d5b79f6ed",
      title: "Würzburg D radar (historical reference model)",
      author: "ryanvalentin",
      url: "https://sketchfab.com/3d-models/wurzburg-d-radar-2f706a86fe12454990b35a0d5b79f6ed",
    },
  },
  guns: {
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/M1_Garand_Rifle.jpg?width=1600",
    heroAlt: "M1 Garand rifle on display.",
    heroCredit:
      "Wikimedia Commons / M1 Garand Rifle (license on file page).",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:M1_Garand_Rifle.jpg",
    sketchfab: {
      uid: "ec368667c6a54f018c8cb4bacdebbb94",
      title: "M1 Garand",
      author: "YieldingMist206",
      url: "https://sketchfab.com/3d-models/m1-garand-ec368667c6a54f018c8cb4bacdebbb94",
    },
  },
  tanks: {
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/T-34-76%20Medium%20Tank%20(37661605271).jpg?width=1600",
    heroAlt: "T-34-76 tank in a museum setting.",
    heroCredit:
      "Wikimedia Commons / T-34-76 Medium Tank (license on file page).",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:T-34-76_Medium_Tank_(37661605271).jpg",
    sketchfab: {
      uid: "7b32b7ef1c284ea98d7a51c91fa53fa2",
      title: "Tank T-34",
      author: "T-FLEX CAD ST",
      url: "https://sketchfab.com/3d-models/tank-t-34-7b32b7ef1c284ea98d7a51c91fa53fa2",
    },
  },
  aircraft: {
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/P-51_Mustang_edit1.jpg?width=1600",
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
      "https://commons.wikimedia.org/wiki/Special:FilePath/Trinity%20Detonation%20T%26B.jpg?width=1600",
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
      "https://commons.wikimedia.org/wiki/Special:FilePath/Penicillin.png?width=1600",
    heroAlt: "Penicillin (chemical representation).",
    heroCredit:
      "Wikimedia Commons / Penicillin (license on file page).",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Penicillin.png",
    sketchfab: {
      uid: "1fca6f8d13f348d492563f732f14b020",
      title: "Penicillin syringe (museum object scan)",
      author: "The University of Manchester Library",
      url: "https://sketchfab.com/3d-models/penicillin-syringe-mmh1999121-1fca6f8d13f348d492563f732f14b020",
    },
  },
  "works-cited": {
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Women%27s_War_Work-_Life_in_a_Shell_Factory,_England,_UK,_1942_D8578.jpg?width=1600",
    heroAlt: "Women working in a shell factory, England, UK, 1942.",
    heroCredit:
      "Wikimedia Commons / Women's War Work: Life in a Shell Factory (license on file page).",
    heroCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Women%27s_War_Work-_Life_in_a_Shell_Factory,_England,_UK,_1942_D8578.jpg",
  },
};
