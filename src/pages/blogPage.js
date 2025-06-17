import React, { useState } from "react";
import PropTypes from "prop-types";
import { BlogContent } from "../data/blogContent";
import "./blogPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye, faClock, faUser, faTag } from "@fortawesome/free-solid-svg-icons";

const BlogPage = ({ results }) => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleExpanded = (index) => {
    setExpandedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const formatViews = (views) => {
    return views ? views.replace('K', 'K views') : '';
  };

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container blogpage-container">
        <p className="result-count">
          About {BlogContent.length} results (0.84 seconds)
        </p>
        <div className="blog-content">
          {BlogContent.map((item, index) => (
            <article key={index} className="blog-card">
              <a 
                href={item.link} 
                className="blog-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Read article: ${item.name}`}
              >
                <div className="blog-text-container">
                  <div className="blog-header">
                    <div className="category">
                      <img src={`${item.icon}`} className="blog-icon" alt="Article icon"/>
                      <span className="category-name">{`${item.category}`}</span>
                    </div>
                    
                    <div className="blog-meta">
                      {item.author && (
                        <span className="blog-author">
                          <FontAwesomeIcon icon={faUser} className="meta-icon" />
                          {item.author}
                        </span>
                      )}
                      <span className="blog-date">
                        <FontAwesomeIcon icon={faClock} className="meta-icon" />
                        {item.date}
                      </span>
                      {item.readTime && (
                        <span className="read-time">
                          {item.readTime}
                        </span>
                      )}
                      {item.views && (
                        <span className="blog-views">
                          <FontAwesomeIcon icon={faEye} className="meta-icon" />
                          {formatViews(item.views)}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="blog-title">{`${item.name}`}</h3>
                  
                  <p className="blog-excerpt">
                    {expandedPosts[index] 
                      ? item.excerpt 
                      : `${item.excerpt.substring(0, 300)}${item.excerpt.length > 300 ? '...' : ''}`
                    }
                  </p>

                  {item.tags && (
                    <div className="blog-tags">
                      <FontAwesomeIcon icon={faTag} className="tags-icon" />
                      {item.tags.slice(0, expandedPosts[index] ? item.tags.length : 3).map((tag, i) => (
                        <span key={i} className="blog-tag">{tag}</span>
                      ))}
                      {!expandedPosts[index] && item.tags.length > 3 && (
                        <span className="more-tags">+{item.tags.length - 3} more</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="blog-img-container">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="blog-overlay">
                    <span className="read-more">Read Article</span>
                  </div>
                </div>
              </a>

              {item.excerpt.length > 300 && (
                <button 
                  className="expand-blog-button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleExpanded(index);
                  }}
                  aria-expanded={expandedPosts[index]}
                >
                  {expandedPosts[index] ? 'Show Less' : 'Read Full Preview'}
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
