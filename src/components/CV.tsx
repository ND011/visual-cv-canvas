import React, { useRef } from 'react';
import Header from './Header';
import About from './About';
import Experience, { ExperienceItem } from './Experience';
import Education, { EducationItem } from './Education';
import Skills, { SkillCategory } from './Skills';
import Projects, { ProjectItem } from './Projects';
import Contact from './Contact';
import Footer from './Footer';

// CV data with Dhruv's information
const defaultData = {
  name: "DHRUV",
  title: "AI Student | Coding Pen Name: ND",
  email: "dhruv.vasava@example.com",
  phone: "+1 (555) 123-4567",
  address: "Gujarat, India",
  github: "https://github.com/dhruv-nd",
  linkedin: "https://linkedin.com/in/dhruv-vasava",
  bio: "I'm Dhruv Vasava, a passionate AI student currently in my 4th semester at Auro University. I'm enthusiastic about machine learning, software development, and creating innovative solutions. My goal is to bridge the gap between theoretical AI concepts and practical applications through hands-on projects and continuous learning.",
  resumeUrl: "https://example.com/resume.pdf",
  experiences: [
    {
      company: "Tech Solutions Inc.",
      position: "AI Research Intern",
      period: "Jan 2023 - Present",
      description: "Working on machine learning models and data analysis for company projects. Implementing neural networks and collaborating with senior researchers on AI applications.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Data Analysis"]
    },
    {
      company: "Web Innovations",
      position: "Student Developer",
      period: "Jun 2022 - Dec 2022",
      description: "Developed responsive web applications while learning modern frameworks. Collaborated with a team to implement user interfaces and functionality.",
      technologies: ["JavaScript", "React", "HTML/CSS", "Git"]
    }
  ] as ExperienceItem[],
  educations: [
    {
      institution: "Auro University",
      degree: "Bachelor's in Artificial Intelligence",
      period: "2021 - Present",
      description: "Currently in 4th semester, focusing on machine learning, neural networks, and AI applications"
    },
    {
      institution: "City High School",
      degree: "Higher Secondary Education",
      period: "2019 - 2021",
      description: "Graduated with distinction in Computer Science and Mathematics"
    }
  ] as EducationItem[],
  skillCategories: [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "C++", level: 70 },
        { name: "HTML/CSS", level: 80 }
      ]
    },
    {
      category: "AI & ML",
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "Data Analysis", level: 80 },
        { name: "Neural Networks", level: 65 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter", level: 85 },
        { name: "Problem Solving", level: 85 }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "AI Image Recognition",
      description: "A machine learning project for recognizing and classifying images using neural networks.",
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      projectUrl: "https://github.com/dhruv-nd/ai-image-recognition",
      imageUrl: "https://placekitten.com/600/340" // Placeholder image
    },
    {
      title: "Student Portal",
      description: "A web application for students to manage courses, assignments, and university resources.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      projectUrl: "https://github.com/dhruv-nd/student-portal",
      imageUrl: "https://placekitten.com/601/340" // Placeholder image
    },
    {
      title: "Smart Home Automation",
      description: "IoT project for automating home devices with AI-based decision making.",
      technologies: ["Python", "Raspberry Pi", "MQTT", "Machine Learning"],
      projectUrl: "https://github.com/dhruv-nd/smart-home",
      imageUrl: "https://placekitten.com/602/340" // Placeholder image
    },
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website to showcase projects and skills.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5"],
      projectUrl: "https://github.com/dhruv-nd/portfolio",
      imageUrl: "https://placekitten.com/603/340" // Placeholder image
    }
  ] as ProjectItem[],
  githubRepoUrl: "https://github.com/dhruv-nd/cv-platform"
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
