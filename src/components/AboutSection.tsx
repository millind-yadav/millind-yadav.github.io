import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";
import { BookOpen } from "lucide-react";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I am an AI &amp; Machine Learning Engineer specialising in building
          production-grade Generative AI solutions on AWS. With a strong
          foundation in Data Engineering, I bridge the gap between
          proof-of-concept models and scalable, reliable agentic systems.
        </p>
        <p className="body-text max-w-2xl mt-6">
          My focus is on leveraging Foundation Models, RAG architectures, and
          Amazon Bedrock to solve complex enterprise problems ensuring that AI
          systems are not just intelligent but also robust, secure, and grounded
          in high-quality data.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          I believe the next evolution of AI isn't just about models that
          talk it's about <strong>agents that do</strong>. My approach is
          grounded in years of Data Engineering experience, ensuring 'Good AI'
          always has 'Good Data' underneath it.
        </p>
        <a
          href="https://medium.com/@milindyadav98"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-black bg-white text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
        >
          <BookOpen className="w-4 h-4" />
          <span>Read My Technical Blog</span>
        </a>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
