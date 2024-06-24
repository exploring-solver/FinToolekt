import React, { useState } from "react";
import Slider from 'react-slick';
import digi1 from '../../assets/bg1_digi.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CatalogList from './CatalogList';
// import FaqSection from './FaqSection';
import step1 from '../../assets/step1.jpg'
import step2 from '../../assets/step2.jpg'
import step3 from '../../assets/step3.jpg'
import step4 from '../../assets/step4.jpg'
import workflow from '../../assets/workflow.jpg'
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true
  };

  const slides = [
    {
      src: "../src/assets/step1.jpg",
      title: "Easy E-Commerce Store Catalog Creation",
      description: "We offer an easy-to-use app for sellers to create their e-commerce store catalogues, helping them reach a wider audience and increase sales.",
      id: 1,
    },
    {
      src: "../src/assets/step2.jpg",
      title: "Effortless Catalog Digitization",
      description: "Our platform streamlines the process of catalog digitization, making it hassle-free for sellers to manage their product listings and showcase them effectively.",
      id: 2,
    },
    {
      src: "../src/assets/step3.jpg",
      title: "Effortless Catalog Digitization",
      description: "Our platform streamlines the process of catalog digitization, making it hassle-free for sellers to manage their product listings and showcase them effectively.",
      id: 3,
    },
    {
      src: "../src/assets/step4.jpg",
      title: "Effortless Catalog Digitization",
      description: "Our platform streamlines the process of catalog digitization, making it hassle-free for sellers to manage their product listings and showcase them effectively.",
      id: 4,
    },
    {
      src: "../src/assets/workflow.jpg",
      title: "Sell Standardized and Non-Standardized Products",
      description: "Our platform allows sellers to create catalogs for both standardized and non-standardized products, providing flexibility and customization.",
      id: 5,
    },
  ];

  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const imageIndex = Math.abs(idx % slides.length);

  //TODO: Make it professional and change images in caraousel to new idea and execution
  //TODO: Hero Section
  return (
    <div className="container mx-auto mt-5 w-[90%]">
      <h1 className="text-3xl font-bold mb-5 text-center">Welcome to FinToolekt</h1>
      <Slider {...settings}>
        <div className="bg-gray-200 p-2">
          <img
            className="d-block  m-auto h-[300px] object-fill"
            src={step1}
            alt="Second slide"
          />
          <div className='w-[600px] m-auto'>
            <h3 className="text-2xl font-bold mb-4">Fraud Detection and Prevention Tool</h3>
            <p className="text-lg text-gray-700 mb-4">
              We intend to create a solution for fraud detection and auditing that is specifically designed to help large firms handle their data efficiently. Our technology uses advanced AI algorithms and Generative AI (GenAI) to scan large datasets  
            </p>
          </div>
        </div>

        <div className="bg-gray-200 p-2">
          <img
            className="d-block w-[600px] m-auto"
            src={step2}
            alt="Third slide"
          />
          <div className='w-[600px] m-auto'>
            <h3 className="text-2xl font-bold mb-4">Audit Helper Tool</h3>
            <p className="text-lg text-gray-700 mb-4">
            and detect trends and anomalies that indicates fraudulent activity and an audit assistant tool for data cleaning and sampling of data sheets and excel reports of for analyzing financial and operational losses, we used simple logic construction to ensure thorough and accurate assessments.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-2">
          <img
            className="d-block w-[600px] m-auto"
            src={step3}
            alt="Third slide"
          />
          <div className='w-[600px] m-auto'>
            <h3 className="text-2xl font-bold mb-4">Seemless Extension Integration</h3>
            <p className="text-lg text-gray-700 mb-4">
            By combining machine learning and GenAI, we can give real time insights and automated auditing processes, significantly reducing the time and effort necessary for manual checks.
            </p>
          </div>
        </div>
        {/* <div className="bg-gray-200 p-2">

          <img
            className="d-block w-[600px] m-auto"
            src={step4}
            alt="Third slide"
          />
          <div className='w-[600px] m-auto'>
            <h3 className="text-2xl font-bold mb-4">Effortless Catalog Digitization</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our platform streamlines the process of catalog digitization, making it hassle-free for sellers to manage their product listings and showcase them effectively.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-2">
          <img
            className="d-block w-[600px] m-auto"
            src={workflow}
            alt="First slide"
          />
          <div className='w-[600px] m-auto'>
            <h3 className="text-2xl font-bold mb-4">Sell Standardized and Non-Standardized Products</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our platform allows sellers to create catalogs for both standardized and non-standardized products, providing flexibility and customization.
            </p>
          </div>
        </div> */}
      </Slider>
      <br /><br />

      <div className="flex justify-center items-center mt-8 flex-wrap gap-10">
        {/* Image */}
        <div className="">
          <img src={digi1} alt="Digitize Store Catalogs" className=" object-cover md:w-[600px] w-[200px] " />
        </div>

        {/* Text */}
        <div className='lg:w-[40%]'>
          <h2 className="text-2xl font-bold mb-4 text-gray-700">How are we different from others?</h2>
          <p className="text-lg text-gray-700 mb-4">
            What sets our solution apart from others is the unique combination of fraud detection and auditing tools within a single platform. Currently, there are no comprehensive tools available that specifically aid in the auditing process while simultaneously detecting fraudulent activities.

          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our platform fills this gap by providing a dual-functionality solution, enabling companies to not only identify fraud but also conduct thorough audits with ease. By integrating these critical functions, we stand apart from other solutions, offering a more holistic approach to managing financial data and ensuring integrity within large organizations.
          </p>
          <p className="text-lg text-gray-700">
            This new approach not only improves fraud detection accuracy, but also enables organizations to better protect their financial assets and enhances overall security, making our platform a leading tool in the financial technology landscape.
          </p>
        </div>

      </div>
      {/* <CatalogList /> */}
      {/* <FaqSection /> */}
    </div>
  );
}

export default Home;

const imgVariants = {
  initial: (trend) => ({
    x: trend === 1 ? "200%" : "-200%",
    opacity: 0,
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend) => ({
    x: trend === 1 ? "-200%" : "200%",
    opacity: 0,
  }),
};

const titleVariants = {
  initial: (trend) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: { y: 0, opacity: 1 },
  exit: (trend) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
  }),
};
