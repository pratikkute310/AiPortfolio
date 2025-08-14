import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Pratik Kute. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Pratik Kute, working as a Software Engineer 1 at Deskera Systems Pvt Ltd i work as full stack developer building user friendly, interactive and beautiful frontend and scalable backend, I am more into building Ai agents that automate the workflows. I'm passionate about AI, tech and SaaS tech.",
    };
  },
});
