import { registerApplication, start } from "single-spa";

registerApplication({
    name: 'header',
    app: () => System.import('header'),
    activeWhen: (location => location.pathname.startsWith('/'))
});

registerApplication({
    name: 'backoffice',
    app: () => System.import('backoffice'),
    activeWhen: (location => location.pathname.startsWith('/backoffice')),
});

registerApplication({
    name: 'compliance',
    app: () => System.import('compliance'),
    activeWhen: (location => location.pathname.startsWith('/compliance')),
});

start();