Hooks.once('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "Papy", name: "Papy"}, true);
  dice3d.addSystem({ id: "Red", name: "Red"}, true);
  dice3d.addSystem({ id: "Nasser", name: "Nasser"}, true);
  dice3d.addSystem({ id: "Diokhan", name: "Diokhan"}, true);
  dice3d.addSystem({ id: "Iteag", name: "Iteag"}, true);

  //Dice Papy
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
      "modules/zaita_dices/images/papy20.png"
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
       "modules/zaita_dices/images/papy20_bump.png"
     ],
    system: "Papy"
  });

  //Dice Red
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
      "modules/zaita_dices/images/red20.png"
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
      "modules/zaita_dices/images/red_bump.png"
    ],
    system: "Red"
  });

  //Dice Nasser
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
      "modules/zaita_dices/images/nasser20.png"
    ],
    system: "Nasser"
  });

  //Dice Diokhan
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
      "modules/zaita_dices/images/diokhan20.png"
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
      "modules/zaita_dices/images/diokhan20_bump.png"
    ],
    system: "Diokhan"
  });

  //Dice Iteag
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
      "modules/zaita_dices/images/iteag20.png"
    ],
    system: "Iteag"
  });
  
//  dice3d.addTexture("WikiRole", {
//      name: "WikiRole",
//      composite: "source-over",
//      source: "modules/arkangel/images/arkangel-texture.png",
//      bump:"modules/arkangel/images/arkangel-texture_bump.png" //puoi anche lasciarla vuoto
//  });
});