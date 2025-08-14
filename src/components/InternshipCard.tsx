'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, Briefcase, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ButtonWithTooltip from './ui/button-with-tooltip';

const JobApplicationCard = () => {
  const openMail = () => {
    window.open('mailto:pratik.kute310@gmail.com', '_blank');
  };
  const router = useRouter();

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Internship_letter.pdf';
    link.download = 'Internship_letter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/avatar-pratik.jpg"
              alt="Pratik's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Pratik Kute
            </h2>
            <p className="text-muted-foreground text-sm">
              Software Engineer @ Deskera Systems Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Availability badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to Opportunities
          </span>
        </div>
      </div>

      {/* Work Experience */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Briefcase className="h-5 w-5 text-orange-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Current Role</p>
            <p className="text-muted-foreground text-sm">
              Software Engineer I — Deskera Systems Pvt. Ltd. <br />
              (Jun 2024 – Present)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CalendarDays className="h-5 w-5 text-blue-500" />
          <div>
            <div className="text-foreground flex justify-between text-sm font-medium">
              <span>Past Experience</span>
              <ButtonWithTooltip side="top" toolTipText="Download internship letter" >  
                <Download  onClick={handleDownload} className="h-4 w-4" />
              </ButtonWithTooltip>

            </div>
            <p className="text-muted-foreground text-sm">
              Data Analyst Intern — Cusmat Technology Pvt. Ltd. <br />
              (Dec 2023 – Jun 2024, 6 months)
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <Globe className="h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              India — Open to relocation / Remote opportunities
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech Stack & Skills</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="list-disc pl-4">
                <li>Next.js, React.js, Tailwind CSS</li>
                <li>Node.js, Express.js, REST APIs</li>
                <li>Java, Spring Boot</li>
                <li>Python (Data Processing, AI)</li>
                <li>TypeScript, JavaScript</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Docker, AWS, CI/CD Pipelines</li>
                <li>DBMS, MySQL, PostgreSQL, MongoDB</li>
                <li>OOP Concepts, System Design</li>
                <li>AI Agents, Reasoning Agents, RAG Pipelines</li>
                <li>Prompt Engineering, Fine-tuning LLMs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I Bring
        </p>
        <p className="text-foreground text-sm">
          Full-stack development expertise with a strong AI focus. At Deskera, I
          build scalable ERP systems powered by AI — delivering beautiful, responsive
          frontends and robust, maintainable backends. <br />
          Experience in developing AI agents, reasoning agents, and integrating
          AI workflows into real-world applications. <br />
          Strong problem-solving skills, quick learner, and an ability to ship
          impactful features fast.
        </p>
      </div>

      {/* Career Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
        <p className="text-foreground text-sm">
          Join a forward-thinking, innovative team where I can leverage my
          full-stack and AI expertise to build impactful, user-focused solutions.
          I aim to grow rapidly, solve complex problems, and contribute to projects
          that make a difference.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact Me
        </button>
      </div>
    </motion.div>
  );
};

export default JobApplicationCard;
