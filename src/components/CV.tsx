
import React, { useRef } from 'react';
import {
  Header,
  About,
  Experience,
  Education,
  Skills,
  Projects,
  References,
  Contact,
  Footer,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  ProjectItem,
  Reference
} from './AllInOne';

// CV data with Dhruv's information
const defaultData = {
  name: "DHRUV VASAVA",
  title: "AI Student | Coding Pen Name: ND",
  email: "dhruvavasava123@gmail.com",
  phone: "+91 8758076291",
  address: "Gujarat, India",
  github: "https://github.com/dhruv-nd",
  linkedin: "https://linkedin.com/in/dhruv-vasava",
  bio: "Hi! I'm Dhruv Vasava, an AI-ML student focused on deep learning & NLP.\nI aspire to be a system designer for the future tech landscape.\nI enjoy gaming, coding, and anime, while poetry touches my heart.\nMy strengths include observation, analysis, critical thinking, and adaptability. Though I may procrastinate, I strive to complete tasks ahead of deadlines.",
  resumeUrl: "https://example.com/resume.pdf",
  experiences: [
    {
      company: "Self-Learning",
      position: "Projects",
      period: "Ongoing",
      description: "None but self learning on projects.",
      projects: [
        "Multiple project on C and C++ using Data Structures and Algorithms (DSA).",
        "OOT type website, Health website, Studio website. (By using HTML,CSS, JS).",
        "Multiple DSA program, data analysis using ML, classification models using CNN, Chatbot using RNN & NLP (by using python).",
        "Basic project, multiple mini game type GUI application using Java.",
        "Basic database projects using SQL & MySQL."
      ]
    }
  ] as ExperienceItem[],
  educations: [
    {
      institution: "AURO University",
      degree: "Bachelor of Science in Information Technology with a specialization in Artificial Intelligence",
      period: "4th sem (on going)",
      description: ""
    }
  ] as EducationItem[],
  skillCategories: [
    {
      category: "Programming & Technologies",
      skills: [
        { name: "Python", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "Java programming", level: 75 },
        { name: "HTML-CSS", level: 80 },
        { name: "Front-End", level: 75 },
        { name: "Java script", level: 70 },
        { name: "AI / ML", level: 80 },
        { name: "Deep learning", level: 75 },
        { name: "NLP", level: 70 },
        { name: "Backend System development", level: 65 },
        { name: "SQL & MySQL", level: 75 }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "Data Structures and Algorithms Projects",
      description: "Multiple projects using C and C++ implementing various data structures and algorithms.",
      technologies: ["C", "C++", "DSA"],
      projectUrl: "https://github.com/dhruv-nd/dsa-projects",
      imageUrl: "https://placekitten.com/600/340" // Placeholder image
    },
    {
      title: "Web Development Projects",
      description: "OOT type website, Health website, and Studio website using front-end technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectUrl: "https://github.com/dhruv-nd/web-projects",
      imageUrl: "https://placekitten.com/601/340" // Placeholder image
    },
    {
      title: "Machine Learning Applications",
      description: "Data analysis, classification models using CNN, and chatbot using RNN & NLP.",
      technologies: ["Python", "TensorFlow", "NLP", "Machine Learning"],
      projectUrl: "https://github.com/dhruv-nd/ml-projects",
      imageUrl: "https://placekitten.com/602/340" // Placeholder image
    },
    {
      title: "Java GUI Applications",
      description: "Multiple mini-game type GUI applications developed in Java.",
      technologies: ["Java", "Swing", "AWT"],
      projectUrl: "https://github.com/dhruv-nd/java-projects",
      imageUrl: "https://placekitten.com/603/340" // Placeholder image
    }
  ] as ProjectItem[],
  references: [
    {
      name: "Dhaval Thaker",
      position: "Faculty of school of IT, auro university",
      contact: "+90 9275191688",
      relationship: "Social"
    },
    {
      name: "Dr. Bhanu Pratap Singh",
      position: "Associate Professor, Chandigarh University, Lucknow Campus",
      contact: "bhanu.l100164@culko.in / Ph# 9336922458",
      relationship: "Academic"
    }
  ] as Reference[],
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
      
      <References references={data.references} />
      
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
