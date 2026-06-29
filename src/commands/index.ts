import help from './help';
import about from './about';
import education from './education';
import experiences from './experiences';
import projects from './projects';
import skills from './skills';
import stack from './stack';
import languages from './languages';
import socials from './socials';
import github from './github';
import linkedin from './linkedin';
import email from './email';
import resume from './resume';
import quote from './quote';
import motivation from './motivation';
import source from './source';
import neofetch from './neofetch';
import whoami from './whoami';
import hostname from './hostname';
import echo from './echo';
import clear from './clear';

export type CommandHandler = (args: string[]) => string | Promise<string>;

export const commands: Record<string, CommandHandler> = {
    help: () => help(),
    about: () => about(),
    education: () => education(),
    experiences: () => experiences(),
    projects: () => projects(),
    skills: () => skills(),
    stack: () => stack(),
    languages: () => languages(),
    socials: (args) => socials(args),
    github: () => github(),
    linkedin: () => linkedin(),
    email: () => email(),
    resume: () => resume(),
    quote: () => quote(),
    motivation: () => motivation(),
    source: () => source(),
    neofetch: () => neofetch(),
    whoami: () => whoami(),
    hostname: () => hostname(),
    echo: (args) => echo(args),
    clear: () => clear(),
};

export const commandNames = Object.keys(commands);
