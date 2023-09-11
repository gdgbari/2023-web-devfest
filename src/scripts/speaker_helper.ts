export function initCards() {
    const speakerLinks = document.querySelectorAll('[speaker-href]');
    speakerLinks.forEach(linkEl => {
        (linkEl as HTMLElement).onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            window.location.href = linkEl.getAttribute('speaker-href')!;
        };
    });
}

