import { registerApplication, start } from "single-spa";

registerApplication({
  name: "header",
  app: () => System.import("@bexs/header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "backoffice",
  app: () => System.import("@bexs/backoffice"),
  activeWhen: ["/backoffice"],
});

registerApplication({
  name: "compliance",
  app: () => System.import("@bexs/compliance"),
  activeWhen: ["/compliance"],
});

start({
  urlRerouteOnly: true,
});
