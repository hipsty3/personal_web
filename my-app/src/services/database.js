import color from './../images/color.jpg';
import foodiy from './../images/foodiy_light.png';
import azure from './../images/azure.png';
import mementos from './../images/mementos2.png';
import gps from './../images/gps2.png';


const projects = [
  {
    id: 0,
    title: 'Greenfields',
    subtitle: {
      organisation: 'Freelance',
      work: 'Front-End Development',
      year: '2020-2021',
    },
    image: azure,
    desc: 'Greenfields Website',
    parts: [
      {
        id: 0,
        title: '',
        image: azure,
        desc: `This is a freelance project with another developer to develop a new website and content management system (CMS) display for our client. Both the website and the CMS is made using React and are design both designed by us from scratch. The client aims to create a more functional booking system in their website as well as to modernizing the look and feel of the website to attract more customers.\n
                I worked mainly on the front-end and design of the website and the CMS, and we took inspiration from other modern booking systems for the website's design and functionality.`,
        tools: []
      },
      {
        id: 1,
        title: 'Design and Wireframming',
        image: '',
        desc:  `The project involves revamping and old website into a more sleek and modern design. We first start by creating rough sketches of the layout. Then we cleaned up the basic design and turn it into basic wireframes in Figma. We then stylized the fonts and incorporate a pleasant color scheme that is suitable for the website. Finally, the product design in converted into zeplin files to be easily translated to code.`,
        tools: ['Figma', 'Zeplin']
      },
      {
        id: 2,
        title: 'Development',
        image: '',
        desc:  `The website is developed with React and mainly use functional components instead of class-based. We follow the atomic-design structure to structure our components, where the smallest most components are called atoms (e.g. buttons, header, etc), and atoms make up slightly bigger components called molecules, (e.g. search bar). Molecules populate a bigger component called organisms, which makes up a more integrated element (e.g. navigation bar, footer, card, etc). The organisms are then combined to create a page, which can be navigated to using links.\n
                For the sytles, we use SCSS. `,
        tools: ['React', 'JavaScript', 'HTML', 'SCSS', 'AWS']
      },
    ],
    tools: ['React', 'JavaScript', 'HTML', 'SCSS', 'AWS'],
    summary: {
      position: 'UI designer / Front-End Developer',
      organisation: 'Freelance',
      year: '2020-2021',
      work: 'Front-end development',
      link: '(in progress)',
    },
    link: "greenfields"
  },
  {
    id: 1,
    title: 'foodiy',
    subtitle: {
      organisation: 'Personal Project',
      work: 'Front-End Development',
      year: '2020',
    },
    image: foodiy,
    desc: 'foodiy',
    parts: [
      {
        id: 0,
        title: '',
        image: foodiy,
        desc: ' A recipe library mobile app made with React Native. Currently in progress',
        tools: ['React Native', 'JavaScript', 'Firebase']
      },
    ],
    tools: ['React Native', 'JavaScript', 'Firebase'],
    summary: {
      position: 'Product Designer / Developer',
      organisation: 'Personal Project',
      year: '2020-current',
      work: 'Design and Development',
      link: 'https://github.com/hipsty3/foodiy',
    },
    link: "foodiy"
  },
  {
    id: 2,
    title: 'mementos',
    subtitle: {
      organisation: 'University Project',
      work: 'Android App Development',
      year: '2019',
    },
    image: mementos,
    desc: 'Android app that keeps track of family heirloom to be passed down to future generations.',
    parts: [
      {
        id: 0,
        title: '',
        image: mementos,
        desc: 'Android app that keeps track of family heirloom to be passed down to future generations.',
        tools: []
      },
    ],
    tools: ['React Native', 'JavaScript', 'Android', 'Firebase'],
    summary: {
      position: 'Front-End Developer',
      organisation: 'University Project',
      year: '2020',
      work: 'Android App Development',
      link: 'https://github.com/jansk32/mementos',
    },
    link: "mementos"
  },
  {
    id: 3,
    title: 'gps (Get People Socializing)',
    subtitle: {
      organisation: 'University Project',
      work: 'Front-End Development',
      year: '2018',
    },
    image: gps,
    desc: 'A web app to let new students/residents of Melbourne to discover unique places and events within the city.',
    parts: [
      {
        id: 0,
        title: '',
        image: gps,
        desc: 'A web app to let new students/residents of Melbourne to discover unique places and events within the city.',
        tools: []
      },
    ],
    tools: ['JavaScript', 'Pug', 'CSS', 'Firebase', 'Heroku'],
    summary: {
      position: 'Front-End Developer',
      organisation: 'University Project',
      year: '2020',
      work: 'Responsive Web App Development',
      link: 'https://github.com/StaticDDQ/Go-Blox-GPS',
    },
    link: "gps"
  },
  {
    id: 4,
    title: 'Personal Website',
    subtitle: {
      organisation: 'Personal Project',
      work: 'Web App Development',
      year: '2020',
    },
    image: color,
    desc: 'A website for my portfolio of design and programming projects I have done / am currently doing. It is a single page responsive web app made with React and is hosted on AWS.',
    parts: [
      {
        id: 0,
        title: '',
        image: color,
        desc: 'A website for my portfolio of design and programming projects I have done / am currently doing. It is a single page responsive web app made with React and is hosted on AWS.',
        tools: ['React', 'JavaScript', 'SCSS', 'AWS']
      },
    ],
    tools: ['React', 'JavaScript', 'SCSS', 'AWS'],
    summary: {
      position: 'Developer',
      organisation: 'Personal Project',
      year: '2020',
      work: 'Web App Development',
      link: 'https://raisa.io',
    },
    link: "website"
  },
]

export { projects };