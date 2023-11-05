export class WebsiteConfig {
    /*--------------------------------------------
    |              GENERAL SETTINGS              |  
    --------------------------------------------*/
    
    public static readonly DEVFEST_NAME: string = 'Devfest Bari 2023';
    public static readonly DEVFEST_LOGO_LIGHT: string = '/assets/images/logo_light.png';
    public static readonly DEVFEST_LOGO_DARK: string = '/assets/images/logo_dark.png';

    /*--------------------------------------------
    |              EVENT INFO                    |  
    --------------------------------------------*/

    public static readonly EVENT_START : Date = new Date('2023-12-02');
    public static readonly EVENT_END : Date = new Date('2023-12-02');
    public static readonly EVENT_LOCATION_NAME : String = 'Polythecnic of Bari';
    public static readonly EVENT_LOCATION_CITY : String = 'Bari';
    public static readonly EVENT_LOCATION_ADDRESS : String = 'Via Edoardo Orabona 4';
    public static readonly EVENT_LOCATION_FULL_ADDRESS : String = ` ${this.EVENT_LOCATION_ADDRESS}, 70126 Bari BA`;

    
    /*--------------------------------------------
    |              SOCIAL SHARE                  |  
    --------------------------------------------*/

    public static readonly TWITTER_SOCIAL_TEXT : string = 'Devfest Bari 2023 {url}';
    public static readonly TELEGRAM_MESSAGE_TEXT : string = 'Devfest Bari 2023';

    /*--------------------------------------------
    |              SOCIAL PAGES                  |  
    --------------------------------------------*/

    public static readonly FACEBOOK_PAGE : string = 'https://www.facebook.com/GDGBari';
    public static readonly MEETUP_PAGE : string = '';
    public static readonly INSTAGRAM_PAGE : string = 'https://www.instagram.com/gdgbari/';
    public static readonly LINKEDIN_PAGE : string = 'https://www.linkedin.com/company/gdgbari/';
    public static readonly WEBSITE : string = 'https://gdg.community.dev/gdg-bari/';

}