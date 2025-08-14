import { PartyPopper, Layers, BriefcaseBusiness, Laugh, UserRoundSearch, FileUser } from "lucide-react";

export const questions = {
    Me: 'Who are you? I want to know more about you.',
    Projects: 'What are your projects? What are you working on right now?',
    Skills: 'What are your skills? Give me a list of your soft and hard skills.',
    Resume: 'Get me your resume.',
    Contact: 'How can I reach you?',
    Experience: 'What is your experience?',
  } as const;

  export const questionConfig = [
    { key: 'Me', color: '#329696', icon: Laugh },
    { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
    { key: 'Skills', color: '#856ED9', icon: Layers },
    { key: 'Resume', color: '#B95F9D', icon: FileUser },
    { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
    { key: 'Experience', color: '#E11D48', icon: UserRoundSearch },
  ] as const;