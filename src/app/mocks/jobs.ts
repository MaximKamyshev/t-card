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
      name: 'T - Card',
      isConfirm: true,
    },
    firstColor: '#00A77F',
    secondColor: '#1c9275',
    isBookmark: true,
    salary: '195,000',
    place: 'Remote',
    createTime: '5 hours',
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
    logo: TCardLogo,
    jobLogo: ReactLogo,
    stacks: [
      {
        name: 'Figma',
        logo: FigmaLogo,
      },
      {
        name: 'React',
        logo: ReactLogo,
      },
      {
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
    id: 'dfasf',
    jobTitle: 'BackEnd Dev',
    company: {
      name: 'T - Card',
      isConfirm: false,
    },
    firstColor: '#0088FF',
    secondColor: '#096dca',
    isBookmark: true,
    salary: '195,000',
    place: 'Remote',
    createTime: '5 hours',
    tags: [
      '2+ years',
      'Full - Time',
      'MiniApps',
    ],
    logo: TCardLogo,
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
      name: 'T - Card',
      isConfirm: false,
    },
    firstColor: '#0088FF',
    secondColor: '#096dca',
    isBookmark: true,
    salary: '195,000',
    place: 'Remote',
    createTime: '5 hours',
    tags: [
      '2-3 Years',
      'Full - Time',
      'MiniApps',
    ],
    logo: TCardLogo,
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
      name: 'Uniswap',
      isConfirm: true,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Remote',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Figma',
    ],
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
    id: '0',
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'T Mobile',
      isConfirm: true,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: TMobileLogo,
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
    id: '1',
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'T Mobile',
      isConfirm: true,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: TMobileLogo,
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
    id: '2',
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'Apple',
      isConfirm: true,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: AppleLogo,
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
    id: '3',
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'Telegram',
      isConfirm: false,
    },
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    place: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: TgLogo,
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
]