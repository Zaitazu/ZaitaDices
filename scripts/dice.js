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
      "https://raw.githubusercontent.com/Zaitazu/ZaitaDices/main/images/nat20.png"
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
      "https://raw.githubusercontent.com/Zaitazu/ZaitaDices/main/images/nat20_BUMP.png"
    ],
    system: "Zaita"
  },"d20");

//  dice3d.addTexture("WikiRole", {
//      name: "WikiRole",
//      composite: "source-over",
//      source: "modules/arkangel/images/arkangel-texture.png",
//      bump:"modules/arkangel/images/arkangel-texture_bump.png" //puoi anche lasciarla vuoto
//  });
});