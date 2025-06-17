import geolocation from "../images/geolocation-api.jpg";
import distanceTwoLoc from "../images/distance-two-locations.jpg";
import svgAdvantages from "../images/svg-advantages-and-disadvantages.jpg";
import jsIcon from "../images/js-icon.png";

export const BlogContent = [
  {
    link: "https://medium.com/@fawaz-ahamed/building-chrome-extensions-react-typescript",
    img: svgAdvantages,
    icon: jsIcon,
    name: "Building Production-Ready Chrome Extensions with React and TypeScript",
    excerpt: `A deep dive into modern browser extension development using React 18, TypeScript 4.9, and Chrome Extension Manifest v3. This comprehensive guide covers advanced topics including background service workers, cross-tab communication, storage synchronization, and implementing complex UI components. Learn how to handle permissions, create persistent storage solutions, integrate with external APIs, and optimize performance for production deployment. Includes real-world examples from building a productivity timer extension with over 10,000 active users, covering challenges like memory management, event-driven architecture, and user experience optimization across different browser contexts.`,
    category: "Web Development",
    date: "2 days ago",
    readTime: "12 min read",
    tags: ["React", "TypeScript", "Chrome Extensions", "Manifest v3", "Web Development"],
    author: "Fawaz Ahamed",
    views: "15.2K"
  },
  {
    link: "https://medium.com/@fawaz-ahamed/ai-video-generation-pika-labs-insights",
    img: distanceTwoLoc,
    icon: jsIcon,
    name: "The Future of AI Video Generation: Insights from Pika Labs and Emerging Platforms",
    excerpt: `As a top 5 early access contributor to Pika Labs, one of the leading AI video generation platforms, I provide an insider's perspective on the rapidly evolving landscape of AI-powered content creation. This article explores the technical innovations behind text-to-video generation, including diffusion models, temporal consistency algorithms, and prompt engineering techniques. Compare the capabilities of emerging platforms like ManusAI, GensparkAI, and RunwayML, analyzing their strengths in different use cases from marketing content to educational materials. Discover how these tools are reshaping creative workflows, democratizing video production, and the ethical considerations surrounding AI-generated content. Includes practical tips for maximizing output quality and workflow integration strategies for content creators and businesses.`,
    category: "AI Technology",
    date: "5 days ago",
    readTime: "18 min read",
    tags: ["Artificial Intelligence", "Video Generation", "Pika Labs", "Content Creation", "Machine Learning"],
    author: "Fawaz Ahamed",
    views: "28.7K"
  },
  {
    link: "https://dev.to/fawaz-ahamed/3d-web-development-spline-immersive-experiences",
    img: geolocation,
    icon: jsIcon,
    name: "3D Web Development with Spline: Creating Immersive Digital Experiences",
    excerpt: `Explore the cutting-edge world of 3D web development using Spline, the browser-based 3D design tool that's revolutionizing interactive web experiences. This comprehensive tutorial covers everything from basic 3D modeling principles to advanced animation techniques, physics simulation, and WebGL optimization. Learn how to create realistic planetary systems with accurate orbital mechanics, implement interactive particle effects, and design responsive 3D layouts that work seamlessly across devices. Includes performance optimization strategies for mobile devices, integration with React components, and best practices for maintaining 60fps animations. Case studies include creating a solar system visualization with over 50,000 unique visitors and techniques for reducing loading times while maintaining visual fidelity.`,
    category: "3D Development",
    date: "1 week ago",
    readTime: "22 min read",
    tags: ["3D Development", "Spline", "WebGL", "Interactive Design", "Animation"],
    author: "Fawaz Ahamed",
    views: "19.4K"
  },
  {
    link: "https://hashnode.com/@fawaz-ahamed/cyber-physical-systems-iot-security",
    img: geolocation,
    icon: jsIcon,
    name: "Cyber-Physical Systems Security: Protecting IoT Infrastructure in 2025",
    excerpt: `An in-depth analysis of cybersecurity challenges in cyber-physical systems, drawing from my specialization at VIT Chennai. This article examines the intersection of physical and digital security in IoT ecosystems, covering threat modeling for connected devices, implementing zero-trust architectures, and securing communication protocols. Explore real-world case studies from smart city implementations, industrial automation systems, and healthcare IoT deployments. Learn about emerging attack vectors, including AI-powered threats, supply chain vulnerabilities, and the importance of hardware-level security measures. Includes practical frameworks for risk assessment, incident response planning, and compliance with international cybersecurity standards like ISO 27001 and NIST Cybersecurity Framework.`,
    category: "Cybersecurity",
    date: "2 weeks ago",
    readTime: "16 min read",
    tags: ["Cybersecurity", "IoT", "Cyber-Physical Systems", "Network Security", "Risk Management"],
    author: "Fawaz Ahamed",
    views: "12.1K"
  },
  {
    link: "https://dev.to/fawaz-ahamed/modern-javascript-game-development-physics",
    img: jsIcon,
    icon: jsIcon,
    name: "Modern JavaScript Game Development: Implementing Realistic Physics Engines",
    excerpt: `Dive deep into JavaScript game development with a focus on creating realistic physics simulations using HTML5 Canvas and modern ES6+ features. This tutorial covers building collision detection systems, implementing gravity and momentum mechanics, and optimizing performance for 60fps gameplay. Learn advanced techniques including spatial partitioning for efficient collision detection, vector mathematics for realistic movement, and state management patterns for complex game logic. Includes step-by-step implementation of a complete physics-based game engine, memory optimization strategies, and cross-platform compatibility considerations. Real-world examples demonstrate building games like the interactive ball maze and multiplayer snake game, with over 5,000 players across different platforms.`,
    category: "Game Development",
    date: "3 weeks ago",
    readTime: "25 min read",
    tags: ["JavaScript", "Game Development", "Physics Engine", "HTML5 Canvas", "ES6+"],
    author: "Fawaz Ahamed",
    views: "31.8K"
  },
  {
    link: "https://medium.com/@fawaz-ahamed/ui-ux-design-systems-figma-workflow",
    img: svgAdvantages,
    icon: jsIcon,
    name: "Building Scalable Design Systems in Figma: A Complete Workflow Guide",
    excerpt: `Master the art of creating comprehensive design systems using Figma's advanced features including auto-layout, component variants, and design tokens. This detailed guide covers establishing design principles, creating atomic design methodologies, and implementing consistent branding across multiple projects. Learn how to build reusable component libraries with over 100+ components, establish color palettes and typography scales, and create documentation that bridges the gap between design and development teams. Includes case studies from real client projects, collaboration strategies for remote teams, and integration with development workflows using tools like Figma API and design-to-code platforms. Discover how proper design systems can reduce development time by 40% while maintaining design consistency.`,
    category: "UI/UX Design",
    date: "1 month ago",
    readTime: "20 min read",
    tags: ["UI/UX Design", "Figma", "Design Systems", "Component Libraries", "Workflow"],
    author: "Fawaz Ahamed",
    views: "24.6K"
  },
  {
    link: "https://hashnode.com/@fawaz-ahamed/react-performance-optimization-2025",
    img: geolocation,
    icon: jsIcon,
    name: "React Performance Optimization in 2025: Advanced Patterns and Techniques",
    excerpt: `Explore cutting-edge React performance optimization techniques including React 18's concurrent features, server components, and advanced rendering patterns. This comprehensive guide covers implementing code splitting with Suspense, optimizing bundle sizes with dynamic imports, and leveraging React's new automatic batching features. Learn about memory leak prevention, efficient state management with Zustand and Jotai, and implementing virtual scrolling for large datasets. Includes real-world performance audits from production applications serving 100K+ users, with before/after metrics showing significant improvements in Core Web Vitals. Master advanced profiling techniques using React DevTools Profiler and Chrome DevTools, plus strategies for monitoring production performance with tools like Lighthouse CI and Web Vitals API.`,
    category: "React Development",
    date: "1 month ago",
    readTime: "28 min read",
    tags: ["React", "Performance", "Optimization", "Web Vitals", "JavaScript"],
    author: "Fawaz Ahamed",
    views: "42.3K"
  },
  {
    link: "https://dev.to/fawaz-ahamed/progressive-web-apps-offline-first-architecture",
    img: distanceTwoLoc,
    icon: jsIcon,
    name: "Progressive Web Apps: Building Offline-First Architectures with Service Workers",
    excerpt: `Master the development of Progressive Web Apps (PWAs) with a focus on offline-first architecture and advanced service worker implementations. This tutorial covers creating robust caching strategies, implementing background synchronization, and building apps that work seamlessly offline. Learn about IndexedDB for client-side storage, push notifications for user engagement, and Web App Manifests for native-like installation experiences. Includes advanced topics like cache versioning, network-first vs cache-first strategies, and handling dynamic content in offline scenarios. Real-world case studies demonstrate building PWAs with 99.9% uptime and lightning-fast loading speeds, including implementation of app shell architecture and critical resource caching for optimal user experience across all network conditions.`,
    category: "Progressive Web Apps",
    date: "6 weeks ago",
    readTime: "32 min read",
    tags: ["PWA", "Service Workers", "Offline-First", "Web Development", "Performance"],
    author: "Fawaz Ahamed",
    views: "18.9K"
  }
];
