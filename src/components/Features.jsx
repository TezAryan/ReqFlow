import React from "react";
import "./Features.css";

const features = [
  {
    title: "Smart Extraction",
    description:
      "Transform lengthy content into key insights, summaries, and structured workflows in seconds.",
    icon: "📊",
  },
  {
    title: "AI-Powered Visualization",
    description:
      "Generate dynamic flowcharts and workflow diagrams for better clarity and understanding.",
    icon: "🤖",
  },
  {
    title: "Intelligent Prioritization",
    description:
      "Use AI-driven MoSCoW analysis and numerical ranking to categorize requirements effectively.",
    icon: "⚡",
  },
];

const Features = () => {
  return (
    <section className="features">
      <h3>Explore <span className="highlight">AI Chatbots</span></h3>
      <div className="feature-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;