import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'research', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Sentiment Analysis on Customer Reviews",
      description: "Built LSTM model to classify restaurant review sentiments with deployment on Hugging Face Spaces.",
      tech: ["Python", "TensorFlow", "NLP", "Hugging Face"],
      date: "Sep 2024"
    },
    {
      title: "Lane Detection System",
      description: "Developed real-time lane detection system for self-driving cars using image processing techniques.",
      tech: ["Python", "OpenCV", "Tkinter", "Computer Vision"],
      date: "July 2024"
    },
    {
      title: "Eagle's Eye - Face Expression Detector",
      description: "Implemented ML-based emotion recognition system using facial cues and real-time detection.",
      tech: ["Python", "OpenCV", "Machine Learning", "Tkinter"],
      date: "Nov 2021"
    },
    {
      title: "go-Corona Updater",
      description: "Created live COVID-19 dashboard displaying real-time statistics from public APIs.",
      tech: ["Java", "API Integration", "GUI"],
      date: "June 2021"
    }
  ];

  const skills = {
    "Programming": ["Python", "Java", "MySQL", "C++", "HTML", "CSS"],
    "Frameworks & Tools": ["TensorFlow", "OpenCV", "Pandas", "Docker", "Kubernetes"],
    "Concepts": ["Machine Learning", "Deep Learning", "NLP", "Image Processing", "GenAI"],
    "Soft Skills": ["Problem Solving", "Leadership", "Communication", "Time Management"]
  };

  const experience = [
    {
      role: "Research Assistant",
      company: "MJP Rohilkhand University",
      location: "Bareilly, UP",
      period: "June 2024 – Present",
      description: [
        "Working on AI-based IoT framework for crop recommendation",
        "Implementing blockchain-enabled supply chain solutions"
      ]
    },
    {
      role: "Benefit Associate Intern",
      company: "EPAY Systems",
      location: "Noida, UP",
      period: "Sep 2023 – Jan 2024",
      description: [
        "Managed payroll back-end operations for U.S. clients",
        "Applied data analytics using Pandas for automation"
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Corizo",
      location: "Remote",
      period: "Sep 2023 – Oct 2023",
      description: [
        "Completed ML training with mini-projects and MNC-based case studies",
        "Implemented DL models for real-world tasks"
      ]
    }
  ];

  const research = [
    {
      institution: "MJP Rohilkhand University",
      period: "2024 – Present",
      supervisors: "Dr. Vinay Rishiwal, Dr. Preeti Yadav",
      focus: "AI-based IoT framework using blockchain for smart agriculture"
    },
    {
      institution: "Bennett University",
      period: "2024",
      supervisors: "Prof. Umesh Gupta, Dr. Ankit Yadav",
      focus: "Evaluating deepfake detection architectures for performance vs cost optimization"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              Shreyansh
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Research', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-yellow-400'
                      : darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Experience', 'Research', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md ${
                    activeSection === item.toLowerCase()
                      ? 'bg-yellow-400 text-gray-900'
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5635AQEPc3jUSjzzEQ/profile-framedphoto-shrink_400_400/B56Zkd_ICVKAAc-/0/1757144711663?e=1763056800&v=beta&t=YbqJnCGGe4fVk2xX3nFMaGEgsBKjENhfQ7vlwxYzmHE" 
              alt="Shreyansh Manav Shukla"
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Shreyansh Manav Shukla
          </h1>
          <p className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Machine Learning Engineer | Data Scientist
          </p>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Skilled in Python, AI, and data science. Experienced in designing, optimizing, and deploying intelligent models for NLP, computer vision, and analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:shreyanshmanavs@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 rounded-lg transition-all">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/i-Shreyansh" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/shreyansh-manav-shukla" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://kaggle.com/shreyanshmanavshukla" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Background</h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Machine Learning Engineer and Data Scientist with a strong foundation in AI and data science. 
                I specialize in designing, optimizing, and deploying intelligent models that solve complex real-world challenges.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My expertise spans NLP, computer vision, and advanced analytics, with hands-on experience in 
                research, development, and deployment of ML solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Education</h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science (AI Specialization)</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Bennett University, Greater Noida</p>
                  <p className="text-sm text-yellow-400">May 2024 • CGPA: 7.4/10</p>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h4 className="font-semibold text-lg">Higher Secondary Education</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>S.R. International School, Bareilly</p>
                  <p className="text-sm text-yellow-400">12th: 72.4% | 10th: 85.6%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span>Bareilly, UP, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>+91-8126235815</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>shreyanshmanavs@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-400">{exp.role}</h3>
                    <p className="text-xl">{exp.company}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.location}</p>
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 md:mt-0`}>{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-yellow-400 mr-2">▸</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Research Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {research.map((r, idx) => (
              <div key={idx} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:scale-105 transition-transform`}>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{r.institution}</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{r.period}</p>
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-semibold">Supervisors:</span> {r.supervisors}
                </p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  <span className="font-semibold">Focus:</span> {r.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.date}</span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} hover:scale-110 transition-transform cursor-default`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-yellow-400">Relevant Coursework</h3>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Advanced Machine Learning", "GenAI", "Deep Learning", "Image Processing", "Cloud Computing", 
                  "Data Structures & Algorithms", "Operating Systems", "DBMS", "Docker & Kubernetes"].map((course, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-white'} text-sm`}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:shreyanshmanavs@gmail.com" className={`flex items-center gap-2 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all`}>
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>shreyanshmanavs@gmail.com</span>
            </a>
            <a href="tel:+918126235815" className={`flex items-center gap-2 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all`}>
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>+91-8126235815</span>
            </a>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © 2024 Shreyansh Manav Shukla. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/i-Shreyansh" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/shreyansh-manav-shukla" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://kaggle.com/shreyanshmanavshukla" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/shreyanshmanavs/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.944-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.916-1.632-7.96.419L.122 11.396a.001.001 0 0 0-.002.001"/>
                </svg>
              </a>
              <a href="mailto:shreyanshmanavs@gmail.com" className="hover:text-yellow-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
