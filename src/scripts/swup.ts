import Swup from 'swup';
import { initRoleLinkElement as initRoleLinkElements } from './links_helper';

const w = window as any;
const swup = new Swup({ cache: false });

const pageHandle = () => {
    w.resetNavbar();
    
    if (swup.currentPageUrl === '/') {
        w.intitializeNav();
    } else {
        w.navSetWhiteBg();
    }

    initRoleLinkElements(swup);
}

swup.hooks.on('content:replace', pageHandle);
swup.hooks.on('enable', pageHandle); //Needed for initial load (links won't work without this)

initRoleLinkElements(swup);

