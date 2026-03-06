import "./css/Experiences.css"
import { useState } from "react";
import { ChevronDown, X } from "@boxicons/react";


const experiences = [
  {
    title: "Software Engineering Intern - Munic",
    context: "Internship",
    description: [
      "Designed and developed an end-to-end automated testing framework in Python.",
      "Implemented a modular and scalable architecture allowing easy integration of new tests.",
      "Developed unit and end-to-end tests to ensure system robustness and reliability.",
      "Built a Streamlit dashboard to visualize testing results and execution metrics.",
      "Deployed documentation and results using GitHub Pages."
    ],
    technologies: ["Python", "Testing", "Streamlit", "GitHub Pages", "Automation"]
  },
  {
    title: "OAPIA - AI MCQ Generator",
    context: "AI Project",
    description: [
      "Developed an AI system capable of generating multiple-choice questions from educational documents.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline using two local LLMs.",
      "Built a dual-model architecture for document analysis and question generation.",
      "Containerized the entire application using Docker for reproducibility and deployment."
    ],
    technologies: ["Python", "LLM", "RAG", "Docker", "AI"]
  },
  {
    title: "CinéGraph - Movie Recommendation System",
    context: "Data Science Project",
    description: [
      "Developed a movie recommendation system based on collaborative filtering techniques.",
      "Integrated graph algorithms using NetworkX to improve recommendation quality.",
      "Built interactive visualizations to analyze relationships between users and movies.",
      "Optimized data processing to handle large-scale datasets."
    ],
    technologies: ["Python", "NumPy", "Pandas", "NetworkX", "Matplotlib", "Seaborn"]
  },
  {
    title: "Animal Image Classifier - Deep Learning",
    context: "Machine Learning Project",
    description: [
      "Developed a deep learning model for animal image classification using PyTorch.",
      "Implemented full model fine-tuning and transfer learning approaches.",
      "Built data preprocessing, training, and evaluation pipelines.",
      "Visualized model performance and predictions through interactive notebooks."
    ],
    technologies: ["Python", "PyTorch", "Deep Learning", "Machine Learning"]
  },
  {
    title: "RobinAI - Smart Water Management Platform",
    context: "Hackathon Project",
    description: [
      "Designed an AI-powered platform to monitor and optimize household water consumption.",
      "Proposed machine learning models to predict water usage based on historical data.",
      "Designed integrations with smart home devices for coordinated resource management.",
      "Developed the business model and product strategy using a Business Model Canvas."
    ],
    technologies: ["AI", "Machine Learning", "Data Analysis", "Entrepreneurship"]
  }
];

const Experiences = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const toggleExperience = (index) =>{
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <div className="experience">
            <h1 className="experience-title">Experiences</h1>
            {experiences.map((experience, index) => (
                <div key={index} className={`experience ${activeIndex === index ? "active" :""}`}>
                <h3 className="experience-title">{experience.title} <span style={{ fontSize: "0.9rem", color: "#555" }}><br />({experience.context})</span></h3>
                {activeIndex === index && (
                    <div>
                        <ul className="experience-text">{experience.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}</ul>
                        <div className="experience-badge">
                            <h3 className="title">Technologies</h3>
                            <div className="badges-container">{experience.technologies.map((tech, i) => (
                                <span key={i} className="badge">{tech}</span>
                            ))}</div>
                        </div>
                    </div>
                )}
            
            <button className="toggle" onClick={() => toggleExperience(index)}>{activeIndex === index ? <X /> : <ChevronDown />}</button>
        </div>
            ))}
        </div>
    )
}

export default Experiences;