import * as heraldKopi from "./heraldKopi.js";

let heraldKopi_tooltipButton = `Ko-Fi Link`;
let heraldKopi_linkUrlTab = `https://ko-fi.com/candlenote`;

Hooks.once("ready", () => {
  heraldKopi_tooltipButton = game.settings.get("herald-kopi", "tooltipSetting");
  heraldKopi_linkUrlTab = game.settings.get("herald-kopi", "urlSetting");
});

Hooks.on("getSceneControlButtons", (controls) => {
  heraldKopi_tooltipButton = game.settings.get("herald-kopi", "tooltipSetting");
  heraldKopi_linkUrlTab = game.settings.get("herald-kopi", "urlSetting");
  if (game.user.isGM) return;
  const tokenControls = controls.find((control) => control.name === "token");
  if (tokenControls) {
    tokenControls.tools.push({
      name: "herald-kopi",
      title: heraldKopi_tooltipButton,
      icon: "fa-brands fa-java",
      visible: true,
      onClick: () => {
        heraldKopi.heraldKopi_openTabLink(heraldKopi_linkUrlTab);
      },
      button: true,
    });
  }
});

Hooks.on("init", () => {
  game.settings.register("herald-kopi", "tooltipSetting", {
    name: "Tooltip Setting",
    hint: "tooltip ketika dihover",
    scope: "world",
    config: true,
    type: String,
    default: heraldKopi_tooltipButton,
    restricted: true,
    onChange: (value) => {
      if (game.user.isGM) {
        heraldKopi_tooltipButton = value;
        ui.controls.render();
      }
    },
  });

  game.settings.register("herald-kopi", "urlSetting", {
    name: "URL Setting",
    hint: "Url tab yang dibuka ketika klik herald kopi",
    scope: "world",
    config: true,
    type: String,
    default: heraldKopi_linkUrlTab,
    restricted: true,
    onChange: (value) => {
      if (game.user.isGM) {
        heraldKopi_linkUrlTab = value;
        ui.controls.render();
      }
    },
  });
});
