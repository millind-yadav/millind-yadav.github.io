import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Multi-Modal Local LLM Chat Assistant",
    isNew: true,
    description:
      "A fully local, privacy-first AI chat app running entirely on-device. React + FastAPI + Ollama serving open-source LLMs with real-time SSE streaming. Smart query router dispatches to direct LLM inference, live DuckDuckGo web search, or RAG over uploaded PDFs via ChromaDB. Voice I/O via Whisper (STT) and gTTS (TTS), persistent multi-session history in SQLite.",
    tags: ["Python", "FastAPI", "LangChain", "Ollama", "ChromaDB", "React", "TypeScript", "Whisper"],
    githubUrl: "https://github.com/millind-yadav/MULTI_MODAL_LOCAL_LLM",
    liveUrl: "https://github.com/millind-yadav/MULTI_MODAL_LOCAL_LLM",
  },
  {
    title: "Lexibot · Agentic Legal Contract Reviewer",
    description:
      "Autonomous agent designed to revolutionise enterprise contract review. Architected a RAG pipeline backed by vector embeddings to eliminate hallucinations, wrapped in a scalable FastAPI microservice.",
    tags: ["LLaMA 3", "LoRA", "RAG", "FastAPI", "Docker", "LangChain"],
    githubUrl: "https://github.com/millind-yadav",
    liveUrl: "https://milindyadav.me",
  },
  {
    title: "Morphometric Evolution of Foraminifera",
    description:
      "Unsupervised morphometric analysis of fossil foraminifera spanning 3M+ years to reveal evolutionary groupings linked to palaeoenvironment change.",
    tags: ["Python", "Pandas", "scikit-learn", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/millind-yadav",
    liveUrl: "https://milindyadav.me",
  },
  {
    title: "Real-Time Fire Detection with Synthetic Data",
    description:
      "End-to-end YOLOv8 computer vision pipeline delivering 94% mAP fire and smoke detection with synthetic augmentation to reduce false alarms.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "Weights & Biases", "Docker"],
    githubUrl: "https://github.com/millind-yadav",
    liveUrl: "https://milindyadav.me",
  },
  {
    title: "Demand Forecasting Using Machine Learning",
    description:
      "Replaces traditional statistical methods (ARIMA, SARIMA, SMA) with ensemble and boosting regressors for retail demand prediction. Reframes time series as a supervised regression problem via lag feature engineering, trains Random Forest and XGBoost regressors, and tunes hyper-parameters with RandomizedSearchCV — achieving R² scores that closely track actual weekly sales across stores and SKUs.",
    tags: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/millind-yadav/Demand_Forecasting_Using_ML",
    liveUrl: "https://github.com/millind-yadav/Demand_Forecasting_Using_ML",
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {"isNew" in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
