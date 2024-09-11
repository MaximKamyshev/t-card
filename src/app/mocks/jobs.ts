import TMobileLogo from './images/jobs/t-mobile.webp';
import TgLogo from './images/jobs/tg.webp';
import AppleLogo from './images/jobs/apple.webp';
import TCardLogo from './images/jobs/t-card.webp';
import GoLogo from './images/jobs/go.svg';
import PythonLogo from './images/jobs/python.svg';
import ReactLogo from './images/jobs/react.svg';
import ReduxLogo from './images/jobs/redux-store.svg';
import FigmaLogo from './images/jobs/figma.svg';
import { JobsType } from './types';

export const Jobs:JobsType[]  = [
  {
    id: 'asda',
    jobTitle: 'FrontEnd Dev',
    company: {
      id: 'asda',
      logo: TCardLogo,
      description: {
        tasks: [
          {
            type: 'list',
            content: 'Collaborating with cross-functional teams (design and development) to create materials.',
          },
          {
            type: 'list',
            content: 'Creating Designs for our products and all marketing collateral for social, educational, merchandise, print, presentation, etc. materials.',
          },
          {
            type: 'list',
            content: 'Providing a thoughtful and cohesive visual design strategy to showcase the brand.',
          },
          {
            type: 'text',
            content: "Contribution to the ongoing development of T - Card's corporate identity.",
            color: '#00A77F',
          }
        ]
      },
      name: 'T - Card',
      isVerified: true,
      social: [
        {
          text: 'Open Website',
          value: 'https://toolsdev.org/en/card',
          type: 'link'

        },
        {
          text: 'Phone',
          value: '8089898',
          type: 'tel'
        }
      ]
    },
    firstColor: '#00A77F',
    secondColor: '#1c9275',
    isBookmark: true,
    salary: '195,000',
    place: 'Remote',
    createAt: '5 hours',
    tags: [
      '2+ years',
      'Full - Time',
      'MiniApps',
      'Dev',
      'React',
      'Next.js',
      'MiniApps',
      'Dev',
      'React',
      'Next.js',
      'Dev',
    ],
    jobLogo: ReactLogo,
    stacks: [
      { 
        id: '1',
        name: 'Figma',
        logo: FigmaLogo,
      },
      {
        id: '2',
        name: 'React',
        logo: ReactLogo,
      },
      {
        id: '3',
        name: 'Redux',
        logo: ReduxLogo,
      }
    ],
    description: {
      tasks: [
        {
          type: 'list',
          content: 'Collaborating with cross-functional teams (design and development) to create materials.',
        },
        {
          type: 'list',
          content: 'Creating Designs for our products and all marketing collateral for social, educational, merchandise, print, presentation, etc. materials.',
        },
        {
          type: 'list',
          content: 'Providing a thoughtful and cohesive visual design strategy to showcase the brand.',
        },
        {
          type: 'text',
          content: "Contribution to the ongoing development of T - Card's corporate identity.",
          color: '#00A77F',
        }
      ],
      requirements: [
        {
          type: 'list',
          content: 'Experience as a product designer, UI/UX designer or similar position with a strong portfolio.',
        },
        {
          type: 'list',
          content: 'Ability to work in a fast-paced and collaborative environment.Portfolio is important!',
        },
        {
          type: 'list',
          content: 'Excellent communication skills to collaborate with cross-functional teams.',
        },
        {
          type: 'list',
          content: 'Detail-oriented and ability to work under tight deadlines.',
        },
        {
          type: 'list',
          content: 'Manage multiple design projects simultaneously, ensuring timely delivery of high quality assets.',
        },
        {
          type: 'text',
          content: 'Keep abreast of design trends, tools and technologies to continually improve the quality and efficiency of work.'
        }
      ],
      experience: [
        {
          type: 'list',
          content: '2+ years of professional design experience in a creative agency or development studios.',
        },
        {
          type: 'list',
          content: 'Proficiency in design programs such as Figma and Adobe Creative Suite (Photoshop, Illustrator, etc.).',
        },
      ],
      plus: [
        {
          type: 'text',
          content: 'Designing and creating motion graphics and animations for use in video content, social media and other digital platforms.',
        }
      ]
    }
  },
  {
    id: 'dfascf',
    jobTitle: 'BackEnd Dev',
    company: {
      id: 'asda',
      name: 'T - Card',
      isVerified: true,
      logo: TCardLogo,
      description: {
        tasks: [
          {
            type: 'list',
            content: 'Collaborating with cross-functional teams (design and development) to create materials.',
          },
          {
            type: 'list',
            content: 'Creating Designs for our products and all marketing collateral for social, educational, merchandise, print, presentation, etc. materials.',
          },
          {
            type: 'list',
            content: 'Providing a thoughtful and cohesive visual design strategy to showcase the brand.',
          },
          {
            type: 'text',
            content: "Contribution to the ongoing development of T - Card's corporate identity.",
            color: '#00A77F',
          }
        ]
      },
    },
    firstColor: '#0088FF',
    secondColor: '#096dca',
    isBookmark: true,
    salary: '190,000',
    place: 'Remote',
    createAt: '5 hours',
    tags: [
      '2+ years',
      'Full - Time',
      'MiniApps',
    ],
    jobLogo: GoLogo,
    description: {
      tasks: [
        {
          type: 'list',
          content: 'Collaborating with cross-functional teams (design and development) to create materials.',
        },
        {
          type: 'list',
          content: 'Creating Designs for our products and all marketing collateral for social, educational, merchandise, print, presentation, etc. materials.',
        },
        {
          type: 'list',
          content: 'Providing a thoughtful and cohesive visual design strategy to showcase the brand.',
        },
        {
          type: 'text',
          content: "Contribution to the ongoing development of T - Card's corporate identity.",
          color: '#00A77F',
        }
      ],
      requirements: [
        {
          type: 'list',
          content: 'Experience as a product designer, UI/UX designer or similar position with a strong portfolio.',
        },
        {
          type: 'list',
          content: 'Ability to work in a fast-paced and collaborative environment.Portfolio is important!',
        },
        {
          type: 'list',
          content: 'Excellent communication skills to collaborate with cross-functional teams.',
        },
        {
          type: 'list',
          content: 'Detail-oriented and ability to work under tight deadlines.',
        },
        {
          type: 'list',
          content: 'Manage multiple design projects simultaneously, ensuring timely delivery of high quality assets.',
        },
        {
          type: 'text',
          content: 'Keep abreast of design trends, tools and technologies to continually improve the quality and efficiency of work.'
        }
      ],
      experience: [
        {
          type: 'list',
          content: '2+ years of professional design experience in a creative agency or development studios.',
        },
        {
          type: 'list',
          content: 'Proficiency in design programs such as Figma and Adobe Creative Suite (Photoshop, Illustrator, etc.).',
        },
      ],
      plus: [
        {
          type: 'text',
          content: 'Designing and creating motion graphics and animations for use in video content, social media and other digital platforms.',
        }
      ]
    }
  },
  {
    id: 'dfassff',
    jobTitle: 'BackEnd Dev',
    company: {
      id: 'asda',
      name: 'T - Card',
      isVerified: true,
      logo: TCardLogo,
      description: {
        tasks: [
          {
            type: 'list',
            content: 'Collaborating with cross-functional teams (design and development) to create materials.',
          },
          {
            type: 'list',
            content: 'Creating Designs for our products and all marketing collateral for social, educational, merchandise, print, presentation, etc. materials.',
          },
          {
            type: 'list',
            content: 'Providing a thoughtful and cohesive visual design strategy to showcase the brand.',
          },
          {
            type: 'text',
            content: "Contribution to the ongoing development of T - Card's corporate identity.",
            color: '#00A77F',
          }
        ]
      },
    },
    firstColor: '#0088FF',
    secondColor: '#096dca',
    isBookmark: true,
    salary: '195,000',
    place: 'Remote',
    createAt: '5 hours',
    tags: [
      '2-3 Years',
      'Full - Time',
      'MiniApps',
    ],
    jobLogo: PythonLogo,
    description: {
      tasks: [
        {
          type: 'list',
          content: 'Collaborating with cross-functional teams (design and development) to create materials.',
        },
        {
          type: 'list',
          content: 'Creating Designs for our products and all marketing collateral for social, educational, merchandise, print, presentation, etc. materials.',
        },
        {
          type: 'list',
          content: 'Providing a thoughtful and cohesive visual design strategy to showcase the brand.',
        },
        {
          type: 'text',
          content: "Contribution to the ongoing development of T - Card's corporate identity.",
          color: '#00A77F',
        }
      ],
      requirements: [
        {
          type: 'list',
          content: 'Experience as a product designer, UI/UX designer or similar position with a strong portfolio.',
        },
        {
          type: 'list',
          content: 'Ability to work in a fast-paced and collaborative environment.Portfolio is important!',
        },
        {
          type: 'list',
          content: 'Excellent communication skills to collaborate with cross-functional teams.',
        },
        {
          type: 'list',
          content: 'Detail-oriented and ability to work under tight deadlines.',
        },
        {
          type: 'list',
          content: 'Manage multiple design projects simultaneously, ensuring timely delivery of high quality assets.',
        },
        {
          type: 'text',
          content: 'Keep abreast of design trends, tools and technologies to continually improve the quality and efficiency of work.'
        }
      ],
      experience: [
        {
          type: 'list',
          content: '2+ years of professional design experience in a creative agency or development studios.',
        },
        {
          type: 'list',
          content: 'Proficiency in design programs such as Figma and Adobe Creative Suite (Photoshop, Illustrator, etc.).',
        },
      ],
      plus: [
        {
          type: 'text',
          content: 'Designing and creating motion graphics and animations for use in video content, social media and other digital platforms.',
        }
      ]
    }
  },
  {
    id: '31',
    jobTitle: 'Product Designer',
    company: {
      id: 'asda',
      name: 'T - Card',
      isVerified: true,
      logo: TCardLogo,
      description: {
        tasks: [
          {
            type: 'list',
            content: 'Collaborating with cross-functional teams (design and development) to create materials.',
          },
          {
            type: 'list',
            content: 'Creating Designs for our products and all marketing collateral for social, educational, merchandise, print, presentation, etc. materials.',
          },
          {
            type: 'list',
            content: 'Providing a thoughtful and cohesive visual design strategy to showcase the brand.',
          },
          {
            type: 'text',
            content: "Contribution to the ongoing development of T - Card's corporate identity.",
            color: '#00A77F',
          }
        ]
      },
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Remote',
    createAt: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Figma',
    ],
    description: null
  },
  {
    id: '0',
    jobTitle: 'Sr. Web Designer',
    company: {
      id: '0',
      name: 'T Mobile',
      isVerified: true,
      description: null,
      logo: TMobileLogo,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createAt: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    description: null
  },
  {
    id: '1',
    jobTitle: 'Sr. Web Designer',
    company: {
      id: '1',
      name: 'T Mobile',
      isVerified: true,
      description: null,
      logo: TMobileLogo,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createAt: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    description: null
  },
  {
    id: '2',
    jobTitle: 'Sr. Web Designer',
    company: {
      id: '2',
      name: 'Apple',
      isVerified: true,
      description: null,
      logo: AppleLogo,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createAt: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    description: null
  },
  {
    id: '3',
    jobTitle: 'Sr. Web Designer',
    company: {
      id: '3',
      name: 'Telegram',
      isVerified: false,
      description: null,
      logo: TgLogo,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createAt: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    description: null
  },
]