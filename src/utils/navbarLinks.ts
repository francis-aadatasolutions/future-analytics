// import { INavbar } from 'src/types/navbar.type';

export const navbarLinks = [
  {
    id: 1,
    name: 'services',
    url: '/services',
    subLinks: [
      {
        name: 'Power BI Delivery Services',
        url: '/services/service-details/1',
      },
      {
        name: 'Semantic Layer and Data Visualization',
        url: '/services/service-details/2',
      },
      {
        name: 'Data Platform and Data Visualization',
        url: '/services/service-details/3',
      },
      {
        name: 'Embedded Analytics',
        url: '/services/service-details/4',
      },
    ],
  },
  {
    id: 2,
    name: 'case studies',
    url: '/case-studies',
  },
  {
    id: 3,
    name: 'showcase',
    url: '/showcase',
  },
  {
    id: 4,
    name: 'about us',
    url: '/about-us',
  },
  {
    id: 5,
    name: 'contact us',
    url: '/contact-us',
  },
  {
    id: 6,
    name: 'client portal',
    url: 'https://futureanalyticsportal.vercel.app',
    target: '_blank',
  },
];
