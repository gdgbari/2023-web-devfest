import { WebsiteConfig } from "../config";

  document
    .querySelectorAll("button.share")
    .forEach((btn) => btn.addEventListener("click", shareWebsite));

  function shareWebsite(e: Event) {
    e.preventDefault();
    const element = e.currentTarget as HTMLElement;
    const attr = element.dataset.shareType;

    const websiteUrl = encodeURIComponent(window.location.origin);
    const fullTweet = WebsiteConfig.TWITTER_SOCIAL_TEXT.replace(
      "{url}",
      websiteUrl
    );

    switch (attr) {
      case "Facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${websiteUrl}`
        );
        break;
      case "Twitter":
        window.open(`https://twitter.com/intent/tweet?text=${fullTweet}`);
        break;
      case "Telegram":
        window.open(
          `https://t.me/share/url?url=${websiteUrl}&text=${WebsiteConfig.TELEGRAM_MESSAGE_TEXT}`
        );
        break;
    }
  }