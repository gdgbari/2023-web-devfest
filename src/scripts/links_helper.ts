import Swup from "swup";

export function initRoleLinkElement(swup: Swup) {
    const speakerLinks = document.querySelectorAll('[role=link]');
    speakerLinks.forEach(linkEl => {
        const linkHtmlElment = linkEl as HTMLElement;
        linkHtmlElment.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            swup.navigate(linkHtmlElment.dataset.href!);
        };
    });
}