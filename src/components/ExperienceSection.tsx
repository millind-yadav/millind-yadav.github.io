import SectionBlock from "./SectionBlock";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Brothers Drinks Co. Ltd",
    period: "[JUN 2025 – AUG 2025 · BRISTOL, U.K.]",
    description:
      "Delivered Proof-of-Concepts (PoCs) to validate AI feasibility, translating operational problems into measurable technical requirements. Built an internal knowledge assistant (LangChain + FastAPI) and ran stakeholder discovery to define success criteria. Implemented delivery guardrails (Docker, structured logging) to support the transition from prototype to production roadmap.",
  },
  {
    role: "Data Engineer",
    company: "Onit India Pvt Ltd (Legal Tech)",
    period: "[MAR 2023 – AUG 2024 · Pune, IN]",
    description:
      "Delivered scalable ETL pipelines (PySpark on AWS EMR) to ingest real-time and batch data, publishing curated assets to Redshift/RDS. Optimized high-throughput data pipelines by managing source-to-target mapping and data reconciliation. Enhanced pipelines for SaaS integrations (Coupa), optimizing PostgreSQL performance to reduce reporting cycles from 5 days to 3. Improved platform reliability via GitHub Actions and automated testing, significantly reducing production incidents.",
  },
  {
    role: "Data Analyst Intern",
    company: "NsembleAI",
    period: "[OCT 2021 – MAR 2022 · Nagpur, IN]",
    description:
      "Improved PPE detection accuracy by 15% using YOLO and OpenCV with curated augmentation pipelines. Produced evaluation tooling to track precision, recall, and F1, guiding rapid model iteration. Delivered lightweight real-time monitoring that reduced manual compliance oversight.",
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-full bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-full bg-black"></div>

            <h4 className="font-mono text-sm tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-lg md:text-xl">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-lg font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-xl font-bold text-foreground hidden md:block mb-3">
              {exp.role}
            </h3>
            <p className="body-text text-sm md:text-base">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ExperienceSection;
