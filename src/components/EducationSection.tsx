import SectionBlock from "./SectionBlock";

const education = [
  {
    degree: "MSc Data Science",
    school: "University of Bristol",
    year: "SEP 2024 – SEP 2025 · Bristol, U.K. | Classification: Merit",
    details: "Key modules: AI & ML, Text Analytics, Natural Language Understanding, Hadoop & Spark, Visual Analytics, Cloud Computing. Fine-tuned BERT-family models for NLP tasks and deployed AWS text-processing applications for near real-time analysis."
  },
  {
    degree: "BE Computer Technology",
    school: "Priyadarshini College of Engineering, Nagpur",
    year: "JUN 2019 – JUL 2022 · Nagpur, IN | CGPA: 9.02/10",
    details: "Built strong foundations in Data Structures & Algorithms, Databases, Statistics, and Machine Learning. Delivered hands-on coursework spanning software engineering, automation, and analytics workflows."
  },
];

const EducationSection = () => (
  <SectionBlock id="education" title="Education">
    <div className="space-y-10">
      {education.map((item) => (
        <div
          key={item.degree}
          className="border-l-2 border-black/10 pl-6 py-2 hover:border-black transition-colors duration-300"
        >
          <h3 className="text-lg md:text-xl font-bold text-foreground">
            {item.degree}
          </h3>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
            <span className="text-foreground font-medium">{item.school}</span>
            <span className="hidden md:inline text-foreground/20">•</span>
            <span className="font-mono text-sm text-foreground/60">
              {item.year}
            </span>
          </div>
          {item.details && (
            <p className="body-text text-sm mt-3 text-foreground/70">{item.details}</p>
          )}
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default EducationSection;
