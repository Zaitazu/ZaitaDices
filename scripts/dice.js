Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({ id: "test", name: "test"}, true); 
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
        "modules/ZaitaDices/images/nat20.png"
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
        "modules/ZaitaDices/images/nat20_BUMP.png"
      ],
      system: "test"
    },"d20");

  //  dice3d.addTexture("WikiRole", {
  //      name: "WikiRole",
  //      composite: "source-over",
  //      source: "modules/arkangel/images/arkangel-texture.png",
  //      bump:"modules/arkangel/images/arkangel-texture_bump.png" //puoi anche lasciarla vuoto
  //  });
  });