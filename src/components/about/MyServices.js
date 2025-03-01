import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2">
  <ServicesCard
    icons={<BiCodeAlt />}
    title="Web Development"
    subTitle="I specialize in building modern, scalable web applications using React, Next.js, and Node.js. From frontend UI to backend APIs, I deliver high-performance solutions."
  />
  <ServicesCard
    icons={<SiAntdesign />}
    title="Responsive Web Design"
    subTitle="Crafting pixel-perfect, fully responsive designs with Tailwind CSS and modern frameworks. I ensure seamless user experiences across all devices."
  />
  <ServicesCard
    icons={<AiTwotoneAppstore />}
    title="MERN Stack Applications"
    subTitle="Developing robust full-stack applications with MongoDB, Express, React, and Node.js. Whether it's an e-commerce site or a custom dashboard, I bring ideas to life."
  />
  <ServicesCard
    icons={<FaAppStoreIos />}
    title="SEO & Performance"
    subTitle="Optimizing websites for speed, SEO, and best practices to enhance search rankings and user experience. Fast-loading, high-ranking sites drive better engagement."
  />
</div>

  );
};

export default MyServices;
