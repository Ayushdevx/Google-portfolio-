import React, { useState } from "react";
import PropTypes from "prop-types";
import { ProjectsContent } from "../data/projectsContent";
import "./projectsPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const ProjectsPage = ({ results }) => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpanded = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const formatDuration = (duration) => {
    return duration ? `Duration: ${duration}` : '';
  };

  const formatCategory = (category) => {
    return category ? `Category: ${category}` : '';
  };

  const formatStatus = (status) => {
    const statusClass = status?.toLowerCase().includes('completed') ? 'status-completed' :
                       status?.toLowerCase().includes('live') ? 'status-live' :
                       status?.toLowerCase().includes('beta') ? 'status-beta' :
                       status?.toLowerCase().includes('published') ? 'status-published' :
                       'status-development';
    
    return status ? (
      <span className={`project-status ${statusClass}`}>
        {status}
      </span>
    ) : null;
  };

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {ProjectsContent.length} results (0.84 seconds)
        </p>
        <div className="projects-content">
          {ProjectsContent.map((item, index) => (
            <div key={index} className="projects-card">
              <a href={`${item.link}`} className="project-link" target="_blank" rel="noopener noreferrer">
                <p className="project-url">{`${item.link}`}</p>
                <h3 className="project-title">{`${item.name}`}</h3>
              </a>
              
              <div className="projects-details">
                <div className="projects-img-container">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  {item.status && (
                    <div className="project-status-overlay">
                      {formatStatus(item.status)}
                    </div>
                  )}
                </div>
                
                <div className="projects-text-container">
                  <div className="project-meta">
                    {item.category && (
                      <span className="project-category">{formatCategory(item.category)}</span>
                    )}
                    {item.duration && (
                      <span className="project-duration">{formatDuration(item.duration)}</span>
                    )}
                  </div>
                  
                  <p className="projects-excerpt">
                    {expandedProjects[index] 
                      ? item.excerpt 
                      : `${item.excerpt.substring(0, 200)}${item.excerpt.length > 200 ? '...' : ''}`
                    }
                  </p>
                  
                  {item.excerpt.length > 200 && (
                    <button 
                      className="expand-button"
                      onClick={() => toggleExpanded(index)}
                      aria-expanded={expandedProjects[index]}
                    >
                      {expandedProjects[index] ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                  
                  {item.highlights && expandedProjects[index] && (
                    <div className="project-highlights">
                      <h4>Key Highlights:</h4>
                      <ul>
                        {item.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="projects-tools-container">
                    <p className="projects-tools">{`${item.tools}`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
