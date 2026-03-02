import SectionBlock from "./SectionBlock";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Generative AI Developer – Professional",
    issuer: "Amazon Web Services (AWS)",
    issued: "Issued Jan 2026",
    credlyUrl:
      "https://www.credly.com/badges/76addde4-a8a0-4f8d-acd0-a0aaf74bebe4/public_url",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issued: "Issued Jan 2026",
    credlyUrl:
      "https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-foundations",
  },
];

const CertificationsSection = () => (
  <SectionBlock id="certifications" title="Certifications & Badges">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert) => (
        <a
          key={cert.title}
          href={cert.credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between p-6 border-2 border-black bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-3">
              {cert.issuer}
            </p>
            <h3 className="text-base font-black text-foreground leading-snug group-hover:underline decoration-4 underline-offset-4">
              {cert.title}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/10">
            <span className="font-mono text-xs text-foreground/50">
              {cert.issued}
            </span>
            <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-black transition-colors" />
          </div>
        </a>
      ))}
    </div>
  </SectionBlock>
);

export default CertificationsSection;
