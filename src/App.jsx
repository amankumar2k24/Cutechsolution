import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import PrivateRoutes from './routes/PrivateRoutes';
import Footer from './component/Footer';
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
// import { Helmet } from 'react-helmet-async';

const App = () => {
  const location = useLocation();
  // const tawkMessengerRef = useRef();
  const currentPage = pageData.find(page => page.path === location.pathname);

  return (
    <>
      {/* <Helmet>
        <title>{currentPage.metaTitle}</title>
        <meta name="description" content={currentPage.metaDescription} />
        {currentPage.metaKeywords && <meta name="keywords" content={currentPage.metaKeywords} />}
        {currentPage.canonicalUrl && <link rel="canonical" href={currentPage.canonicalUrl} />}
      </Helmet> */}

      <Navbar />
      <PrivateRoutes />
      {/* <TawkMessengerReact
        ref={tawkMessengerRef}
        propertyId="65f5385ecc1376635adb4051"
        widgetId="1hp2u8db4" />
      <Footer /> */}
    </>
  );
};

const pageData = [
  {
    path: '/',
    metaTitle: 'Boost Your Business with Reliable B2B IT Support Service',
    metaDescription: "Elevate your company's tech game with top-notch B2B IT support services. Streamline operations & enhance productivity today",
    canonicalUrl: 'https://cutechsolutions.co.uk',
    metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"
  },
  {
    path: '/about-us',
    metaTitle: 'Discover Our Story | Cutech Solutions About Us',
    metaDescription: 'Explore the journey of Cutech Solutions. Learn about our overview, our mission, and core values. Get to know us better.',
    canonicalUrl: 'https://cutechsolutions.co.uk/about-us'
  },
  {
    path: '/blog',
    metaTitle: 'Cutech Solutions Blog: Stay Updated',
    metaDescription: "Explore the latest trends and insights in technology with Cutech Solutions' informative blog posts.",
    canonicalUrl: 'https://cutechsolutions.co.uk/blog'
  },
  {
    path: '/contact-us',
    metaTitle: 'Contact Page',
    metaDescription: 'Contact Us Page Meta Description',
    canonicalUrl: 'https://cutechsolutions.co.uk/contact'
  },
  {
    path: '/disclaimer',
    metaTitle: 'Disclaimer',
    metaDescription: "Explore Cutech Solutions' Disclaimer page to understand our policies, limitations, and legal obligations in delivering digital marketing services.",
    canonicalUrl: 'https://cutechsolutions.co.uk/disclaimer'
  },
  {
    path: '/terms-condition',
    metaTitle: 'Terms of Service',
    metaDescription: "Review our comprehensive terms and condition for Cutech Solutions. Learn about our commitments, usage policies, and legal agreements.",
    canonicalUrl: 'https://cutechsolutions.co.uk/terms-condition'
  },
  {
    path: '/refund-policy',
    metaTitle: 'Refund Policy',
    metaDescription: "Explore Cutech Solutions' Refund Policy: Clear guidelines ensuring customer satisfaction & transparency in all transactions. Your trust, our priority.",
    canonicalUrl: 'https://cutechsolutions.co.uk/refund-policy'
  },
  {
    path: '/privacy-policy',
    metaTitle: 'Privacy Policy',
    metaDescription: "Explore Cutech Solutions' Disclaimer page to understand our policies, limitations, and legal obligations in delivering digital marketing services.",
    canonicalUrl: 'https://cutechsolutions.co.uk/privacy-policy'
  },
  {
    path: '/services',
    metaTitle: 'Cutech Solution Services',
    metaDescription: "Discover how our services can elevate your business. From B2B IT support services to digital marketing solutions, we've got you covered. Explore now",
    canonicalUrl: 'https://cutechsolutions.co.uk/services'
  },
  {
    path: '/elevate-your-business-with-expert-b2b-it-support',
    metaTitle: 'Elevate Your Business With Expert B2B-IT-Support',
    metaDescription: "Get expert Remote Technical Support Services in UK for seamless troubleshooting and assistance. Reliable solutions for all your tech needs",
    canonicalUrl: 'https://cutechsolutions.co.uk/elevate-your-business-with-expert-b2b-it-support'
  },
  {
    path: '/remote-technical-support-services',
    metaTitle: 'CExpert UK Remote Technical Support Services Cutech Solutions',
    metaDescription: "Get expert Remote Technical Support Services in UK for seamless troubleshooting and assistance. Reliable solutions for all your tech needs",
    metaKeywords: "Remote Technical Support Services in UK, Remote Technical Support in UK, Technical Support Services in UK, IT Helpdesk Service in UK, On-Call 24x7 Technical Support in UK, IT Helpdesk Support in UK, IT Managed Service Providers in UK, Technical Support in UK",
    canonicalUrl: 'https://cutechsolutions.co.uk/remote-technical-support-services'
  },
  {
    path: '/digital-marketing-company',
    metaTitle: 'Top Digital Marketing Services in UK | SEO Service UK',
    metaDescription: "Unlock growth opportunities with our expert digital marketing services in UK. Trusted strategies tailored for your success.",
    canonicalUrl: 'https://cutechsolutions.co.uk/digital-marketing-company',
    metaKeywords: "Digital Marketing Services in UK, SEO Service UK, Digital Marketing Company in UK, Digital Marketing Service Provider, Digital Marketing Service Provider in UK, digital marketing experts, digital marketing services UK, Search Engine Optimization, Pay-Per-Click, Social Media Marketing, Digital Marketing Companies in UK, Digital Marketing Solutions",
  },
  {
    path: '/cyber-security-service',
    metaTitle: 'Cyber Security Service',
    metaDescription: "Don't leave your business vulnerable to cyber attacks. Explore our cyber security services and fortify your defenses today.",
    canonicalUrl: 'https://cutechsolutions.co.uk/cyber-security-service',
    metaKeywords: "Cyber Security Service, Cyber Security Service Providers in UK, Computer Cyber Security Service Solutions, Computer Cyber Security Service Providers in UK, Cyber Security Service in UK, Best Cyber Security Service in UK, Top Cyber Security Service in UK",
  },
  {
    path: '/cloud-managed-services',
    metaTitle: 'Enhance Efficiency with Cloud Managed Services',
    metaDescription: "Discover cloud managed services in UK to optimize operations. Our experts ensure seamless integration & efficiency for your business needs.",
    canonicalUrl: 'https://cutechsolutions.co.uk/cloud-managed-services',
    metaKeywords: "Cloud Managed Services, Cloud Managed Services in UK, Cloud Service Management in UK, Cloud Service Management Provider, Cloud Managed Services the UK, Best Cloud Based Managed Services, Managed Cloud Services, Managed Cloud Services Providers, Cloud Server Management Solution",
  },
];

export default App;
