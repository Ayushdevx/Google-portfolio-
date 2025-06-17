import "./filtermenu.css";
import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faImage,
  faNewspaper,
  faMapMarkerAlt,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const FilterMenu = () => {
  const [activeItem, setActiveItem] = useState('/all');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Update active item based on current route
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  // Handle ripple effect on click
  const createRipple = useCallback((event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(66, 133, 244, 0.4);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
      z-index: 1;
    `;
    
    // Add ripple animation styles if not already added
    if (!document.getElementById('ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
      if (button.contains(ripple)) {
        button.removeChild(ripple);
      }
    }, 600);
  }, []);

  // Handle navigation with loading state
  const handleNavigation = useCallback((path) => {
    setIsLoading(true);
    setActiveItem(path);
    
    // Simulate loading for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // Keyboard navigation support
  const handleKeyDown = useCallback((event, path) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavigation(path);
    }
  }, [handleNavigation]);

  // Menu items configuration
  const menuItems = [
    {
      path: '/all',
      icon: faSearch,
      label: 'All',
      ariaLabel: 'View all content including projects, images, and blog posts'
    },
    {
      path: '/projects',
      icon: faBriefcase,
      label: 'Projects',
      ariaLabel: 'View Fawaz\'s portfolio projects and work experiences'
    },
    {
      path: '/images',
      icon: faImage,
      label: 'Images',
      ariaLabel: 'Browse image gallery and visual content'
    },
    {
      path: '/blog',
      icon: faNewspaper,
      label: 'News',
      ariaLabel: 'Read latest blog posts and articles'
    }
  ];

  return (
    <nav 
      className="filter-menu" 
      role="navigation" 
      aria-label="Content filter navigation"
    >
      <div className="filter-menu-items">
        {menuItems.map((item, index) => (
          <NavLink
            key={item.path}
            className={`filter-menu-item ${isLoading && activeItem === item.path ? 'loading' : ''}`}
            to={item.path}
            activeClassName="item-active"
            onClick={(e) => {
              createRipple(e);
              handleNavigation(item.path);
            }}
            onKeyDown={(e) => handleKeyDown(e, item.path)}
            aria-label={item.ariaLabel}
            role="tab"
            tabIndex={0}
            data-testid={`filter-${item.label.toLowerCase()}`}
          >
            <FontAwesomeIcon 
              className="icon" 
              icon={item.icon}
              aria-hidden="true"
            />
            <span>{item.label}</span>
            {/* Visual indicator for active state */}
            {activeItem === item.path && (
              <span 
                className="sr-only"
                aria-live="polite"
              >
                Currently viewing {item.label}
              </span>
            )}
          </NavLink>
        ))}
        
        {/* Optional Maps section - commented out but ready to enable */}
        {/* 
        <NavLink
          className="filter-menu-item"
          to="/maps"
          activeClassName="item-active"
          onClick={(e) => {
            createRipple(e);
            handleNavigation('/maps');
          }}
          onKeyDown={(e) => handleKeyDown(e, '/maps')}
          aria-label="View location-based content and maps"
          role="tab"
          tabIndex={0}
          data-testid="filter-maps"
        >
          <FontAwesomeIcon 
            className="icon" 
            icon={faMapMarkerAlt}
            aria-hidden="true"
          />
          <span>Maps</span>
        </NavLink>
        */}
      </div>
      
      {/* Screen reader only content for better accessibility */}
      <div className="sr-only">
        <p>Use the filter menu to navigate between different content types on Fawaz's portfolio.</p>
      </div>
    </nav>
  );
};

export default FilterMenu;
