import databricks from '../assets/images/services/databricks.png';
import powerBI from '../assets/images/services/pbi.png';
import semanticLayer from '../assets/images/services/semanticlayer.png';
import webApps from '../assets/images/services/web-apps.png';
import powerBIDashboard from '../assets/images/Dashboard.png';

export const servicesContent = [
  {
    id: '1',
    images: powerBI,
    subImages: powerBIDashboard,
    title: 'Power BI Delivery Services',
    description:
      'Our Power BI Developers will guide your dashboard project from Discovery to Design and Build. Our unique portal ensures a seamless experience.\n \nRegister on our discovery portal and receive an estimated timeline and quote within 24 hours.\n \nStarting at £250 per day, including project management, UX/UI designs, QA, and Power BI service set up.\n \nMinimum 1-month engagement, cancel anytime, payable monthly or per project if the statement of work is longer than 1 month.',
    subDescription:
      'Transform Your Data into Actionable Insights with Our End-to-End Power BI Delivery Services',
    price: 250,
  },
  {
    id: '2',
    images: semanticLayer,
    title: 'Semantic Layer and Data Visualization',
    description:
      'Our Data Engineers unify your data with semantic layers and visualizations, enabling sharing through APIs with other apps.',
    subDescription: '',
    price: 350,
  },
  {
    id: '3',
    images: databricks,
    title: 'Data Platform and Data Visualization',
    description:
      'Databricks Engineers use modern tools like dbt to ELT your data. We model it in a semantic layer and provide APIs for other apps to access it.',
    subDescription: '',
    price: 550,
  },
  {
    id: '4',
    images: webApps,
    title: 'Data Platform and Data Visualization',
    description:
      'Databricks Engineers use modern tools like dbt to ELT your data. We model it in a semantic layer and provide APIs for other apps to access it.',
    subDescription: '',
  },
];
