import tutcode from "../images/tutcode.png";
import ll from "../images/libre-logos.svg";
import gfolio from "../images/gfolio.png";
import jpg2svg from "../images/jpg2svg.png";
import gg from "../images/geo-guess.png";
import blobby from "../images/blobby.png";
import cav from "../images/CryptographyVisualizer.png"
import placeholder from "../images/bg1.png";

export const ProjectsContent = [
  {
    link: "https://github.com/fawaz-ahamed/pirate-marketing-agency",
    img: placeholder,
    name: "Pirate-themed Marketing Agency Website",
    excerpt: `Designed and developed a comprehensive marketing agency website with a distinctive pirate theme for a creative agency startup. The project involved complete brand identity development, including custom illustrations, typography selection, and a cohesive color palette. Implemented responsive design principles with mobile-first approach, ensuring seamless user experience across all devices. Features include animated hero sections, client testimonial carousels, service showcase grids, and contact forms with validation. The design process included extensive user research, competitor analysis, and iterative prototyping. Utilized advanced Figma features including auto-layout, component variants, and design systems to create scalable design assets.`,
    tools: "Figma · UI/UX Design · Adobe Illustrator · Responsive Design · Design Systems",
    category: "Web Design",
    duration: "6 weeks",
    status: "Completed",
    highlights: [
      "Custom brand identity and logo design",
      "Interactive prototypes with micro-animations",
      "Accessibility-compliant design (WCAG 2.1 AA)",
      "Design system with 50+ reusable components"
    ]
  },
  {
    link: "https://github.com/fawaz-ahamed/multiplayer-snake-game",
    img: placeholder,
    name: "Advanced 2-Player Snake Game with AI Modes",
    excerpt: `Engineered a sophisticated multiplayer Snake game featuring both local co-op and AI opponent modes. The game implements advanced collision detection algorithms, smooth movement interpolation, and dynamic difficulty scaling. Players can compete in real-time using WASD and arrow key controls, with the game tracking comprehensive statistics including win rates, longest snake lengths, and reaction times. Integrated power-ups system including speed boosts, length multipliers, and temporary invincibility. The AI opponent utilizes pathfinding algorithms (A* implementation) to create challenging but fair gameplay. Features include customizable game boards, multiple themes, sound effects, and persistent leaderboards using localStorage.`,
    tools: "HTML5 Canvas · JavaScript ES6+ · CSS3 · Web Audio API · LocalStorage",
    category: "Game Development",
    duration: "4 weeks",
    status: "Live Demo Available",
    highlights: [
      "Real-time multiplayer with collision detection",
      "AI opponent with A* pathfinding algorithm",
      "Dynamic difficulty adjustment system",
      "Comprehensive player statistics tracking"
    ]
  },
  {
    link: "https://github.com/fawaz-ahamed/interactive-ball-maze",
    img: placeholder,
    name: "Physics-Based Interactive Ball Maze Game",
    excerpt: `Developed an immersive ball maze game with realistic physics simulation using HTML5 Canvas and JavaScript. The game features procedurally generated mazes with moving obstacles, gravity simulation, and momentum-based ball movement. Implemented advanced collision detection using spatial partitioning for optimal performance. The maze includes dynamic elements such as rotating barriers, moving platforms, and multiple difficulty levels. Players navigate using mouse controls or keyboard input, with the ball responding to realistic physics including friction, bounce dampening, and angular momentum. Features progressive level design with increasing complexity, particle effects for visual feedback, and an achievement system for completed challenges.`,
    tools: "HTML5 Canvas · JavaScript · Physics Engine · Procedural Generation · CSS Animations",
    category: "Game Development",
    duration: "5 weeks",
    status: "Beta Testing",
    highlights: [
      "Realistic physics simulation with gravity and momentum",
      "Procedurally generated maze layouts",
      "Dynamic moving obstacles and platforms",
      "Achievement system with unlockable content"
    ]
  },
  {
    link: "https://github.com/fawaz-ahamed/productivity-timer-extension",
    img: placeholder,
    name: "Smart Productivity Timer - Chrome Extension",
    excerpt: `Created a comprehensive productivity timer extension optimized for the Pomodoro Technique and other time management methodologies. The extension features intelligent break reminders, customizable work sessions, and detailed productivity analytics. Implemented Chrome Extension Manifest v3 with advanced permissions for cross-tab functionality and persistent data storage. Features include ambient sound integration, motivational quotes API, progress tracking with visual charts, and integration with popular task management platforms. The UI is built with React and TypeScript, ensuring type safety and component reusability. Includes dark/light theme support, keyboard shortcuts, and desktop notifications with different alert sounds for work and break periods.`,
    tools: "React · TypeScript · Chrome Extension API · Tailwind CSS · Chart.js · Service Workers",
    category: "Browser Extension",
    duration: "8 weeks",
    status: "Published on Chrome Web Store",
    highlights: [
      "Advanced time tracking with productivity insights",
      "Integration with Google Calendar and task managers",
      "Customizable ambient sounds and notifications",
      "Cross-platform synchronization with cloud storage"
    ]
  },
  {
    link: "https://spline.design/@fawaz/earth-jupiter-solar-system",
    img: placeholder,
    name: "Immersive 3D Solar System - Earth & Jupiter Interactive Model",
    excerpt: `Designed and animated a scientifically accurate 3D solar system simulation featuring Earth and Jupiter with realistic orbital mechanics, atmospheric effects, and surface textures. The project showcases advanced 3D modeling techniques including procedural texture generation, dynamic lighting systems, and particle effects for atmospheric phenomena. Implemented interactive camera controls allowing users to explore the planets from multiple angles with smooth transitions. Features include accurate scale representations, realistic rotation speeds, and educational information overlays. The model includes detailed surface features such as Earth's continents, cloud formations, and Jupiter's Great Red Spot with animated storm patterns. Optimized for web performance while maintaining visual fidelity across different devices.`,
    tools: "Spline 3D · WebGL · GLSL Shaders · Blender · Texture Mapping · Animation Systems",
    category: "3D Animation",
    duration: "6 weeks",
    status: "Interactive Demo Live",
    highlights: [
      "Scientifically accurate orbital mechanics simulation",
      "Real-time atmospheric effects and cloud dynamics",
      "Interactive exploration with educational content",
      "Optimized WebGL rendering for smooth performance"
    ]
  },
  {
    link: "https://github.com/fawaz-ahamed/interior-design-portfolio",
    img: placeholder,
    name: "Photorealistic Interior Design Visualization Suite",
    excerpt: `Developed a comprehensive interior design visualization project featuring multiple room layouts with photorealistic rendering capabilities. Created detailed 3D models using SketchUp Pro, incorporating custom furniture designs, lighting schemes, and material selections. Utilized Enscape for real-time rendering and virtual walkthrough generation, enabling clients to experience spaces before construction. The project includes modular design components allowing for easy customization and variant generation. Implemented advanced lighting techniques including HDRI environments, area lights, and global illumination for realistic material representation. Features include 360-degree panoramic views, VR compatibility, and automated rendering pipelines for client presentations. The workflow integrates with CAD systems and includes detailed material specifications and cost estimations.`,
    tools: "SketchUp Pro · Enscape · V-Ray · AutoCAD · 3D Warehouse · VR Integration · HDRI",
    category: "3D Visualization",
    duration: "10 weeks",
    status: "Client Showcase Ready",
    highlights: [
      "Photorealistic rendering with global illumination",
      "VR-ready virtual walkthroughs for client presentations",
      "Modular design system for rapid prototyping",
      "Integration with CAD workflow and cost estimation"
    ]
  },
  {
    link: `${window.location.origin}`,
    img: gfolio,
    name: "Advanced Portfolio Website - Google Search Interface Clone",
    excerpt: `Engineered a sophisticated portfolio website that faithfully recreates the Google Search interface while showcasing personal projects and professional experience. The application features advanced search functionality with real-time filtering, autocomplete suggestions, and intelligent result ranking. Implemented modern React patterns including hooks, context API, and custom component libraries. Features include dark theme support, accessibility compliance (WCAG 2.1 AA), progressive web app capabilities, and optimized performance with code splitting and lazy loading. The search algorithm includes semantic matching, keyword highlighting, and category-based filtering. Integrated with analytics tracking, SEO optimization, and social media sharing capabilities. The design system maintains Google's visual language while incorporating personal branding elements.`,
    tools: "React · JavaScript ES6+ · CSS Grid/Flexbox · PWA · Web Analytics · SEO · Git",
    category: "Full-Stack Web Development",
    duration: "12 weeks",
    status: "Production Deployment",
    highlights: [
      "Advanced search with semantic matching and filters",
      "PWA with offline capability and push notifications",
      "Accessibility-first design with screen reader support",
      "Performance optimized with 95+ Lighthouse scores"
    ]
  },
  {
    link: "https://github.com/fawaz-ahamed/ai-image-enhancer",
    img: placeholder,
    name: "AI-Powered Image Enhancement Tool",
    excerpt: `Developed an intelligent image enhancement application using machine learning algorithms for automatic image optimization. The tool implements advanced computer vision techniques including noise reduction, contrast enhancement, and super-resolution upscaling. Built with Python and TensorFlow, featuring a user-friendly web interface created with Flask and React. The application supports batch processing, multiple image formats, and real-time preview capabilities. Integrated with cloud storage services for seamless file management and sharing. Features include before/after comparison tools, customizable enhancement presets, and API integration for third-party applications. The ML model was trained on a diverse dataset of over 100,000 images, achieving significant improvement in image quality metrics.`,
    tools: "Python · TensorFlow · OpenCV · Flask · React · Cloud Storage APIs · Machine Learning",
    category: "AI/Machine Learning",
    duration: "14 weeks",
    status: "Research & Development",
    highlights: [
      "Custom neural network for image super-resolution",
      "Real-time processing with GPU acceleration",
      "RESTful API for third-party integration",
      "Batch processing with automated quality assessment"
    ]
  }
];
