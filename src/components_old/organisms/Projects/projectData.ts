import blueprints from '@/assets/projects/blueprints.png';
import liferay from '@/assets/projects/liferay.png';
import nodegh from '@/assets/projects/nodegh.png';
import tradeshow from '@/assets/projects/tradeshow.png';
import triblio from '@/assets/projects/triblio.png';

export const projects = [
    {
        name: 'Triblio',
        description: [
            'Created dev & prod environments for Account Based Marketing company’s new website with a React infrastructure.',
            'Handled the code review process involving several team members.',
            'Built out a few page level components like the home hero & “Our Team” sections.',
        ],
        gradient: 'linear-gradient(180deg, white 20%, rgba(0,255,255, 0.5) 100%)',
        link: 'https://triblio.com/',
        media: triblio,
    },
    {
        name: 'Liferay.com',
        description: [
            'Served global marketing teams at enterprise scale by creating microsites for company conferences and events: https://www.liferay.com/web/events-ldsf-anz',
            'Provided business critical, next-gen forms experiences leveraging HubSpot APIs and marketing tools.',
            'Communicated with stakeholders and designers to implement requirements and design mockups to pixel perfection for our central portal site: Liferay.com',
        ],
        gradient: 'linear-gradient(180deg, white 0%, rgba(34,195,238, 0.5) 100%)',
        link: 'https://liferay.com',
        media: liferay,
    },
    {
        name: 'Liferay Design Blueprints',
        description: [
            'Set up documentation site infrastructure using React and Gatsby for our Design teams to display brand guidelines and resources: https://liferay.design/blueprints',
            'Acheived Google Lighthouse scores of 100 for “Best Practices” and “Performance”',
            'Created a development to production workflow by leveraging a staging environment',
        ],
        gradient: 'linear-gradient(180deg, white 0%, rgba(76,122,217, 0.5) 100%)',
        link: 'https://liferay.design/blueprints',
        media: blueprints,
    },
    {
        name: 'Node GH',
        description: [
            'Core maintainer of NodeGH open source software',
            'Empower developers using Node.js to automate and speed up repetitive GitHub tasks like submitting pull requests and maintaining issues',
            'Interface with the community by answering GitHub questions, implementing feature requests, and providing guidance for new contributors.',
        ],
        gradient: 'linear-gradient(180.02deg, white 5%, rgba(113,51,191, 0.5) 99.98%)',
        link: 'https://github.com/node-gh/gh',
        media: nodegh,
    },
    {
        name: 'Tradeshow Mgt Tool',
        description: [
            'Blazingly Fast static site built upon stable modern technologies like React and Firebase with a goal to simplify the trade show management process',
            'helps marketers/sales people consolidate their efforts and collaborate in real time with speed',
            'This web app can keep track of all booths you are managing and color code them according to ownership and sales status',
        ],
        gradient: 'linear-gradient(180deg, white 0%, #f6f6f6 100%)',
        link: 'https://tradeshow-floorplan.firebaseapp.com/lb/',
        media: tradeshow,
    },
];
