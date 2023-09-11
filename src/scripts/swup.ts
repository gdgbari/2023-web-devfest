import Swup from 'swup';
import { initCards as initSpeakerLinks } from './speaker_helper';
const w = window as any;
const swup = new Swup({ cache: false });

swup.hooks.on('content:replace', () => {
    w.resetNavbar();
    
    if (swup.currentPageUrl === '/') {
        w.intitializeNav();
    } else {
        w.navSetWhiteBg();
    }


    if(swup.currentPageUrl.includes('speakers')) {
        initSpeakerLinks();
    }
});
