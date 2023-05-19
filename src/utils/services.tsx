import databricks from '../assets/images/services/databricks.png';
import powerBI from '../assets/images/services/pbi.png';
import semanticLayer from '../assets/images/services/semanticlayer.png';
import webApps from '../assets/images/services/web-apps.png';
import powerBIDashboard from '../assets/images/Dashboard.png';
import { PowerBIVector } from 'src/assets/SVG/Services/PowerBI';
import { SemanticVector } from 'src/assets/SVG/Services/Semantic';
import { DataBricksVector } from 'src/assets/SVG/Services/DataBrics';
import { EmbededDataVector } from 'src/assets/SVG/Services/EmbededData';
import pbi from 'src/assets/SVG/technologies/pbi.svg';
import semantic from 'src/assets/SVG/technologies/semantic.svg';
import dataplatform from 'src/assets/SVG/technologies/dataplatform.svg';
import embeded from 'src/assets/SVG/technologies/embeded.svg';

export const servicesContent = [
  {
    id: '1',
    images: pbi,

    subImages: powerBIDashboard,
    title: 'Power BI Delivery Services',
    shortTitle: `Accelerate Your Analytics with Our Power BI Dashboard Projects`,
    subTitle: `In the world of business intelligence, efficiency and accuracy are everything. That's why we've revolutionized our Power BI dashboard development process.`,
    description: `<p>In the world of business intelligence, efficiency and accuracy are everything. That's why we've revolutionized our Power BI dashboard development process to offer you a rapid turnaround like never before.</p>
    <p><b>Here's how it works:</b></p>
    <p><b>Step 1: Use Our Discovery Platform</b></p>
    <p>No more lengthy consultation calls or confusing requirement gathering processes. Simply fill out your requirements via our intuitive Discovery Platform. This online service has been designed to streamline communication and ensure we understand exactly what you need from your Power BI dashboard.</p>
    <p><b>Step 2: Get a Quote Within 24 Hours</b></p>
    <p>After you submit your requirements, our team will get to work immediately. In just 24 hours, you'll receive a personalized quote for your Power BI dashboard project. This speed doesn't mean we compromise on quality. It's all thanks to our refined process and the commitment we have to delivering outstanding service to our clients.</p>
    <p><b>Step 3: We Replicate Your Environment</b></p>
    <p>Data security is a primary concern for many businesses. That's why we offer an environment replication service. You don't need to worry about giving us access to your actual data; simply provide us with your data schemas via our Discovery Platform. We'll create a mirror of your environment, ensuring your data stays secure while we develop your customized Power BI dashboard.</p>
    <p>In essence, our online development services are transforming Power BI dashboard projects into a seamless e-commerce-like experience. Our focus is to help you gain the insights you need, faster and more conveniently than ever before. Your time is valuable, and we respect that. Let us help you get the most out of your data today.</p>
    `,
    subDescription:
      'Accelerate Your Analytics with Our Power BI Dashboard Projects',
    price: 250,
  },
  {
    id: '2',
    images: semantic,

    title: 'Semantic Layer and Data Visualization',
    servicePageTitle:
      'Harmonize Your Business Metrics for Cross-Platform Visualization',
    shortTitle:
      'MI Services - Optimize Your Analytics with Semantic Layering and Advanced Visualization',
    subTitle: `Our dedicated team of analysts will collaborate closely with you to thoroughly understand your business's unique analytics landscape.`,
    description: `<p>Our dedicated team of analysts will collaborate closely with you to thoroughly understand your business's unique analytics landscape. This in-depth collaboration will allow us to identify the core metrics that truly drive your business, examining these across the entirety of your existing data platform.</p>
      <p>One key issue many organizations face is duplication across their reporting landscape. This not only leads to inefficiencies but also has the potential to create confusion or inconsistencies in reporting. To combat this, our team will identify any such duplication, ensuring your metrics are clear, streamlined, and consistently reported across your entire organization.</p>
      <p>Once we've defined these core metrics, our next step is to integrate them into a semantic layer tailored to your specific business needs. Semantic layers serve as an intermediary between raw data in databases and end users, translating technical data terminology into familiar business terms. This translation makes your data more understandable and accessible, ultimately enabling better, data-driven decision making.</p>
      <p>In our approach, we make this semantic layer accessible via APIs (Application Programming Interfaces). APIs are sets of protocols and tools used to build software and applications. By leveraging APIs, all of your applications and analytics tools can readily access the consistent business metrics stored in the semantic layer.</p>
      <p>The result? Your business metrics are served via a high-performance semantic layer, allowing for more efficient data access and consumption. This approach ensures that regardless of the application or analytics tool used, your metrics remain consistent and readily accessible, facilitating better, more informed decision-making across your entire organization.</p>
      <p>Ultimately, this process empowers your organization to maximize the value of your data, enabling you to make better, more informed decisions and drive your business forward.</p>`,
    subDescription: '',
    price: 350,
  },
  {
    id: '3',
    images: dataplatform,

    title: 'Data Platform and Data Visualization',
    servicePageTitle:
      ' Elevating Business Intelligence with Full-Spectrum Data Solutions',
    shortTitle: 'Real-Time Data Integration, Advanced Analytics & AI Services',
    subTitle: `At Future Analytics, we're pioneers in the realm of advanced business intelligence, offering comprehensive data solutions that encompass everything from real-time`,
    description: `<p>At Future Analytics, we're pioneers in the realm of advanced business intelligence, offering comprehensive data solutions that encompass everything from real-time and streaming data management to machine learning and artificial intelligence applications.</p>
      <p>Our expert team utilizes cutting-edge tools such as Airbyte, Fivetran, and custom Python scripts to extract, transform, and harmonize your data, including real-time and streaming data. These processes are further optimized using industry-leading platforms such as DBT, Databricks, Azure Data Factory, and Apache Airflow.</p>
      <p>Our service suite goes beyond traditional data processing. We delve into your data entry procedures, offering strategic advice to streamline these operations and significantly boost the quality of your data before it even enters the system.</p>
      <p>We then construct a robust semantic layer for your data, enabling high-speed queries and delivering consistent, actionable metrics. This data is served in your preferred visualization framework, be it a custom analytics portal, Power BI, Tableau, Looker, Plotly Dash, Streamlit, or any other tool that best fits your organization.</p>
      <p>We also offer cutting-edge data science services, applying advanced machine learning, artificial intelligence, and GPT technologies to drive deeper insights and predictive analytics for your business.</p>
      <p>Our commitment to your success extends beyond project completion. Future Analytics provides ongoing live support through your chosen communication platform and maintains a dedicated service desk for bug reports, enhancement requests, and training needs. With Future Analytics, you're investing in a partnership for your data-driven future.</p>`,
    subDescription: ``,
    price: 550,
  },
  {
    id: '4',
    images: embeded,

    title: 'Embedded Analytics',
    shortTitle:
      'Get a custom data app with a landing page, RBAC, user management, payment integration, data architecture, platform, and dashboards.',
    subTitle: `Get a custom data app with a landing page, RBAC, user management, payment integration, data architecture, platform, and dashboards.`,
    description:
      'Get a custom data app with a landing page, RBAC, user management, payment integration, data architecture, platform, and dashboards.',
    subDescription: '',
  },
];
