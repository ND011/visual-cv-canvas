
import React, { useRef } from 'react';
import Header from './Header';
import About from './About';
import Experience, { ExperienceItem } from './Experience';
import Education, { EducationItem } from './Education';
import Skills, { SkillCategory } from './Skills';
import Projects, { ProjectItem } from './Projects';
import Contact from './Contact';
import Footer from './Footer';

// Default CV data - replace with your own
const defaultData = {
  name: "John Doe",
  title: "Senior Software Engineer",
  email: "johndoe@example.com",
  phone: "+1 (555) 123-4567",
  address: "San Francisco, CA",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  bio: "I'm a passionate software engineer with over 8 years of experience building web applications. I specialize in frontend development with React and TypeScript, while also having strong backend skills with Node.js and Python. I enjoy solving complex problems and creating intuitive, efficient user interfaces.",
  resumeUrl: "https://example.com/resume.pdf",
  experiences: [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      period: "Jan 2020 - Present",
      description: "Lead developer for the company's flagship product, implementing new features and improving performance. Mentored junior developers and established coding standards and best practices.",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      company: "Web Innovations",
      position: "Frontend Developer",
      period: "Mar 2018 - Dec 2019",
      description: "Developed responsive web applications with modern JavaScript frameworks. Collaborated with UX designers to implement pixel-perfect interfaces.",
      technologies: ["JavaScript", "Vue.js", "SCSS", "Webpack"]
    },
    {
      company: "Digital Agency",
      position: "Junior Web Developer",
      period: "Jun 2016 - Feb 2018",
      description: "Assisted in building client websites and web applications. Worked on both frontend and backend tasks as needed.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ] as ExperienceItem[],
  educations: [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      period: "2014 - 2016"
    },
    {
      institution: "State University",
      degree: "Bachelor of Science in Information Technology",
      period: "2010 - 2014",
      description: "Graduated with honors, GPA 3.8/4.0"
    }
  ] as EducationItem[],
  skillCategories: [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 75 },
        { name: "REST API Design", level: 85 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Agile/Scrum", level: 80 }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration, user accounts, and an admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      projectUrl: "https://github.com/yourusername/ecommerce",
      imageUrl: "https://placekitten.com/600/340" // Placeholder image
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      projectUrl: "https://github.com/yourusername/task-app",
      imageUrl: "https://placekitten.com/601/340" // Placeholder image
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information display with location search and forecast visualization.",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      projectUrl: "https://github.com/yourusername/weather-app",
      imageUrl: "https://placekitten.com/602/340" // Placeholder image
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      technologies: ["React", "Three.js", "GSAP", "Tailwind"],
      projectUrl: "https://github.com/yourusername/portfolio",
      imageUrl: "https://placekitten.com/603/340" // Placeholder image
    }
  ] as ProjectItem[],
  githubRepoUrl: "https://github.com/yourusername/cv-platform"
};

interface CVProps {
  data?: typeof defaultData;
}

const CV: React.FC<CVProps> = ({ data = defaultData }) => {
  const contactRef = useRef<HTMLElement>(null);
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header 
        name={data.name}
        title={data.title}
        email={data.email}
        github={data.github}
        linkedin={data.linkedin}
        scrollToContact={scrollToContact}
      />
      
      <About 
        bio={data.bio}
        resumeUrl={data.resumeUrl}
      />
      
      <Experience experiences={data.experiences} />
      
      <Education educations={data.educations} />
      
      <Skills skillCategories={data.skillCategories} />
      
      <Projects projects={data.projects} />
      
      <Contact 
        ref={contactRef}
        email={data.email}
        phone={data.phone}
        address={data.address}
        message="Feel free to reach out to me for job opportunities or project collaborations."
      />
      
      <Footer githubRepoUrl={data.githubRepoUrl} />
    </div>
  );
};

export default CV;
