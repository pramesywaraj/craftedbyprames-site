interface IFooterCTA {
    icon: string;
    color: string;
    alt: string;
    link: string;
}

const FOOTER_CTA_LINKS: IFooterCTA[] = [
    {
        icon: '/icons/github.svg',
        color: 'bg-brand-1',
        alt: 'Prames github link',
        link: 'https://github.com/pramesywaraj/',
    },
    {
        icon: '/icons/linkedin.svg',
        color: 'bg-brand-2',
        alt: 'Prames linkedin link',
        link: 'https://www.linkedin.com/in/pramesywara-j/'
    },
    {
        icon: '/icons/mail.svg',
        color: 'bg-brand-3',
        alt: 'Prames email',
        link: 'mailto:jembarpanalar21@gmail.com',
    }
];

export default FOOTER_CTA_LINKS;