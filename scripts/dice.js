Hooks.once('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "Zaita", name: "Zaita"}, true); 
  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "/zaita_dice/images/nat20.png"
    ],
    bumpMaps: [
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      "/zaita_dice/images/nat20.png"
    ],
    system: "Zaita"
  },"d20");

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "†",
      "/zaita_dice/images/nat20.png"
    ],
    bumpMaps: [
      ,
      "/zaita_dice/images/nat20.png"
    ],
    system: "Zaita"
  },"d2");
 
  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "†",
      "2",
      "3",
      "4"
    ],
    system: "Zaita"
  },"d4");
 
  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "†",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    system: "Zaita"
  },"d6");
 
  dice3d.addDicePreset({
    type: "df",
    labels: [
      "†",
      "",
      "☀"
    ],
    system: "Zaita",
    fontScale: 1.3
  },"df");
    
  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "†",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    system: "Zaita"
  },"d8");
    
  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "†",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    system: "Zaita" 
  },"d10");
 
  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "†",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    system: "Zaita"
  },"d12");
    
  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "00",
    ],
    system: "Zaita"
  },"d100");

//  dice3d.addTexture("WikiRole", {
//      name: "WikiRole",
//      composite: "source-over",
//      source: "modules/arkangel/images/arkangel-texture.png",
//      bump:"modules/arkangel/images/arkangel-texture_bump.png" //puoi anche lasciarla vuoto
//  });
});