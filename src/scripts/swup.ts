import Swup from 'swup';
import { initCards as initSpeakerLinks } from './speaker_helper';
const w = window as any;
const swup = new Swup({ cache: false });

const pageHandle = () => {
    w.resetNavbar();
    
    if (swup.currentPageUrl === '/') {
        w.intitializeNav();
    } else {
        w.navSetWhiteBg();
    }

    if(swup.currentPageUrl.includes('speakers')) {
        initSpeakerLinks();
    }
}

swup.hooks.on('content:replace', pageHandle);
swup.hooks.on('enable', pageHandle); //Needed for initial load (links won't work without this)