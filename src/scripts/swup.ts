import Swup from 'swup';
const w = window as any;
const swup = new Swup({ cache: false });

swup.hooks.on('content:replace', () => {
    if (swup.currentPageUrl === '/') {
        w.intitializeNav();
    } else {
        w.navSetWhiteBg();
    }
});
