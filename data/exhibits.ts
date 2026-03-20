export type Source = {
  mla: string;
  usedFor: string;
};

export type Exhibit = {
  id: string;
  hallNumber: string;
  title: string;
  subtitle: string;
  mainIdeas: string;
  whyItMatters: string;
  research: string;
  sources: Source[];
};

export const museumTitle =
  "Technological Advances in World War II — A Virtual Museum";

export const atrium = {
  title: "Atrium",
  headline: "Technological Advances in World War II",
  overview:
    "World War II saw enormous advances in nearly every area of military technology. Firearms, tanks, aircraft, ordnance, and medicine all changed dramatically between 1939 and 1945. Nations that could develop better technology and manufacture it at scale often gained a decisive edge.",
  keyPoints: [
    "Technology alone did not win the war: mass production of weapons and supplies mattered as much as invention.",
    "Much of the technology developed during the war continues to shape everyday life—jets, nuclear energy, penicillin, radar, and early computing among them.",
  ],
  sources: [
    {
      mla: "Overy, Richard. Why the Allies Won. W.W. Norton, 1995.",
      usedFor: "Allied advantage, multiple technologies and nations, production vs. invention.",
    },
    {
      mla: "Buderi, Robert. The Invention That Changed the World. Simon & Schuster, 1996.",
      usedFor: "Radar’s role in detection and battle outcomes; links to later civilian technology.",
    },
  ] as Source[],
};

export const exhibits: Exhibit[] = [
  {
    id: "guns",
    hallNumber: "Hall I",
    title: "Guns & Infantry Weapons",
    subtitle: "Rate of fire, machine guns, and new anti-armor tools",
    mainIdeas:
      "The standard infantry rifle evolved rapidly. The U.S. M1 Garand was semi-automatic, allowing eight rounds without manual cycling, while many German soldiers still carried bolt-action rifles. Germany’s MG42 machine gun fired so quickly that Allied troops called it “Hitler’s buzzsaw.” Weapons like the bazooka changed how infantry could confront tanks.",
    whyItMatters:
      "Faster, more reliable small arms and support weapons altered survivability and tactics in every theater.",
    research:
      "The M1 Garand let a U.S. soldier fire eight rounds without reloading while a German soldier with a Kar98k cycled the bolt after each shot. The MG42 fired roughly 1,200 rounds per minute—about twice the rate of many Allied machine guns. The proximity fuze placed a small radar inside an artillery shell so it could detonate at the correct height above a target, greatly improving anti-aircraft effectiveness.",
    sources: [
      {
        mla: "Overy, Richard. Why the Allies Won. W.W. Norton, 1995.",
        usedFor: "Infantry weapons, Allied and Axis comparisons, production context.",
      },
    ],
  },
  {
    id: "tanks",
    hallNumber: "Hall II",
    title: "Tanks",
    subtitle: "Armor, mobility, and the arithmetic of production",
    mainIdeas:
      "Tank design improved throughout the war. Germany’s Tiger had thick armor and a powerful gun but was slow and prone to breakdown. The Soviet T-34 was not always superior one-on-one but was cheaper and faster to build. The United States produced tens of thousands of Sherman tanks. At the Battle of Kursk in 1943, more than six thousand tanks clashed in the largest tank battle in history.",
    whyItMatters:
      "Tanks largely replaced cavalry as the principal mobile striking force; control of the armored battlefield often decided engagements.",
    research:
      "The T-34 used sloped armor that deflected shells more effectively than flat plates, and wide tracks that performed better in mud and snow than many German designs. The Tiger I carried an 88 mm gun and about 100 mm of frontal armor—formidable in a duel. Yet the USSR built over 55,000 T-34s while Germany produced roughly 1,347 Tigers; the U.S. made about 49,000 Shermans. Axis tanks could be individually superior, but the Allies replaced losses far faster.",
    sources: [
      {
        mla: "Zaloga, Steven J. T-34/76 Medium Tank 1941-45. Osprey Publishing, 1994.",
        usedFor: "T-34 specifications, combat performance, and design features.",
      },
      {
        mla: "Overy, Richard. Why the Allies Won. W.W. Norton, 1995.",
        usedFor: "Broader context of Allied production and strategy.",
      },
    ],
  },
  {
    id: "aircraft",
    hallNumber: "Hall III",
    title: "Aircraft",
    subtitle: "Range, radar, and the jet’s late arrival",
    mainIdeas:
      "Fighters and bombers advanced enormously between 1939 and 1945. Types like the Spitfire and P-51 Mustang grew faster and gained range; the P-51 could escort bombers to Berlin and back. Germany fielded the Me 262, the first operational jet fighter—roughly 100 mph faster than typical Allied piston fighters—but it entered service too late to change the outcome.",
    whyItMatters:
      "Air superiority governed the safety of ground movements and supply lines; losing the air often meant losing the campaign beneath it.",
    research:
      "The P-51 was mediocre with its original American engine; fitted with the British Rolls-Royce Merlin, it became one of the war’s outstanding fighters. A range of over 1,600 miles allowed deep escort of strategic bombers. The Me 262 outpaced Allied fighters, but demands to use it as a bomber and other decisions limited its impact.",
    sources: [
      {
        mla: "Buderi, Robert. The Invention That Changed the World. Simon & Schuster, 1996.",
        usedFor: "Radar, air defense, and the scientific story behind detection.",
      },
      {
        mla: "Overy, Richard. Why the Allies Won. W.W. Norton, 1995.",
        usedFor: "Strategic air war and comparative Allied/Axis programs.",
      },
    ],
  },
  {
    id: "atomic",
    hallNumber: "Hall IV",
    title: "The Atomic Bomb",
    subtitle: "The Manhattan Project and August 1945",
    mainIdeas:
      "The Manhattan Project employed well over 100,000 people and cost roughly two billion dollars. Atomic bombs destroyed Hiroshima and Nagasaki in August 1945, killing an estimated 110,000–210,000 people and hastening Japan’s surrender. Germany pursued a bomb but never came close to a usable weapon.",
    whyItMatters:
      "Nuclear weapons redefined the scale of war, ended the Pacific conflict in this form, and helped launch the Cold War arms race.",
    research:
      "The first test, Trinity, took place on 16 July 1945 in New Mexico. Little Boy used uranium in a gun-type design; Fat Man used plutonium with a more efficient implosion design. Japan announced surrender on 15 August 1945, six days after Nagasaki. The U.S. program was spurred in part by Einstein’s letter to Roosevelt warning that Germany might develop nuclear arms.",
    sources: [
      {
        mla: "Rhodes, Richard. The Making of the Atomic Bomb. Simon & Schuster, 1986.",
        usedFor: "Manhattan Project history, science, and the bombings.",
      },
    ],
  },
  {
    id: "medicine",
    hallNumber: "Hall V",
    title: "Medicine",
    subtitle: "Penicillin, plasma, and care under fire",
    mainIdeas:
      "Medical progress is easy to overlook beside tanks and planes, yet it was transformative. Penicillin was mass-produced for the first time during the war; before antibiotics, infected wounds killed more soldiers than combat in many earlier conflicts. Blood transfusion and forward surgery saved countless lives. Military medicine also began to address psychological trauma more systematically.",
    whyItMatters:
      "Wartime medicine helped launch the modern antibiotic era; penicillin alone has saved vast numbers of lives since 1945.",
    research:
      "Fleming discovered penicillin in 1928, but scalable production awaited wartime priority. By D-Day in June 1944, stocks existed to treat expected Allied casualties. In World War I, more troops died from infection and disease than from combat wounds. World War II saw large-scale blood plasma use and mobile surgical hospitals operating close behind the front.",
    sources: [
      {
        mla: "Cowdrey, Albert E. Fighting for Life: American Military Medicine in World War II. Free Press, 1994.",
        usedFor: "U.S. military medicine, penicillin, surgery, and field care.",
      },
    ],
  },
];

export const worksCitedUnique = [
  "Buderi, Robert. The Invention That Changed the World. Simon & Schuster, 1996.",
  "Cowdrey, Albert E. Fighting for Life: American Military Medicine in World War II. Free Press, 1994.",
  "Feynman, Richard P. Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character. W.W. Norton, 1985.",
  "Feynman, Richard P. What Do You Care What Other People Think?: Further Adventures of a Curious Character. W.W. Norton, 1988.",
  "Overy, Richard. Why the Allies Won. W.W. Norton, 1995.",
  "Rhodes, Richard. The Making of the Atomic Bomb. Simon & Schuster, 1986.",
  "Zaloga, Steven J. T-34/76 Medium Tank 1941-45. Osprey Publishing, 1994.",
];
