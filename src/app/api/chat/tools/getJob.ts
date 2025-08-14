import { tool } from 'ai';
import { z } from 'zod';

export const getJobApplication = tool({
  description:
    "Provides a summary of my current job profile, work experience, skills, and how to contact me for opportunities. Use this tool when the user asks about my career, professional background, or how to reach me.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s my professional profile 👇

- 💼 **Current Role**: Software Engineer I @ Deskera Systems Pvt. Ltd. (Jun 2024 – Present)
- 📊 **Past Experience**: Data Analyst Intern @ Cusmat Technology Pvt. Ltd. (Dec 2023 – Jun 2024, 6 months)
- 🏗 **What I do**: Full-stack development, building scalable ERP systems powered by AI. 
  - Stunning, responsive frontends
  - Robust, maintainable backends
  - AI Agents & Reasoning Agents
- 🛠 **Tech Stack**:
  - **Frontend**: Next.js, React.js, Tailwind CSS, TypeScript, JavaScript
  - **Backend**: Node.js, Express.js, Java, Spring Boot
  - **Databases**: MySQL, PostgreSQL, MongoDB
  - **DevOps & Cloud**: Docker, AWS, CI/CD pipelines
  - **AI & ML**: RAG pipelines, AI agent workflows, prompt engineering, LLM fine-tuning
  - **Other Skills**: DBMS, OOP, system design
- 🚀 **Achievements**:
  - Built AI-powered ERP modules at Deskera
  - Delivered real-world AI solutions with agentic workflows
  - Successfully transitioned from Data Analyst to Full-stack AI Developer

📬 **Contact me**:
- Email: pratik.kute310@gmail.com
- LinkedIn: [linkedin.com/in/pratik-kute-b9a572206](https://www.linkedin.com/in/pratik-kute-b9a572206)
- GitHub: [github.com/pratikkute310](https://github.com/pratikkute310)

Always open to challenging roles in **AI-powered product development, SaaS, and enterprise solutions**. Let’s build something amazing together! ✌️
    `;
  },
});
