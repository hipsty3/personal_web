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
      {
        id: 1,
        title: 'Sign Up & Sign In',
        image: '',
        desc: `* Sign-up and login using email
        * Implement email and input verification
        * After signed up or logged in, the app will remember the user's credentials until they log out.`,
        tools: []
      },
      {
        id: 2,
        title: 'Profile',
        image: '',
        desc: `* Display the user's name and date of birth.
        * Display the user's profile picture from Firebase.
        * Display artefacts created by the user in a 3 column grid format.`,
        tools: []
      },
      {
        id: 3,
        title: 'Family Tree',
        image: '',
        desc: `* Display the tree structure including profile pictures of each of the family member
        * When user press a profile picture, user will be directed to a new screen that shows the details of that user.
        * When user do a long press on the profile picture, user will be given options to either add parents/ spouse/ child.
        * User can add existing users as their family member or create dummy users.
        * User can delete the dummy user and replaced it with an existing user.`,
        tools: []
      },
      {
        id: 4,
        title: 'Upload Artefact',
        image: '',
        desc: `* Uploading the artefact from the app and stored the data into Firebase (for pictures) and MongoDB (other details).
        * The uploaded artefact will be displayed on the user's profile screen, timeline and gallery.`,
        tools: []
      },
      {
        id: 5,
        title: 'Sending Artefact',
        image: '',
        desc: `* User can send their own artefact (displayed in their profile/timeline/gallery screen) to other registered family member.
        * When user tapped the "Send Artefact" button, their artefact will not be visible in the profile screen and the ownership details will be changed onto the recipient.`,
        tools: []
      },
      {
        id: 6,
        title: 'Item Detail Page',
        image: '',
        desc: `* When the artefact is selected, the item detail screen will appear
        * Display details of the artefact including: Name, Value, Description, Date
        * If Edit button is tapped, the page will become editable
        * User can fill in fields to edit the details of the artefact`,
        tools: []
      },
      {
        id: 7,
        title: 'Timeline',
        image: '',
        desc: `* Display artefacts of all users in the family tree with the corresponding time.
        * Artefacts are sorted based on the dates, starting from the most recent to the most oldest.`,
        tools: []
      },
      {
        id: 8,
        title: 'Gallery',
        image: '',
        desc: `* Display artefacts in a 3 column grid format of all users in the family tree.
        * Display artefacts that are only belong to those in the user's family`,
        tools: []
      },
      {
        id: 9,
        title: 'Notification',
        image: '',
        desc: `* User will receive a notification when someone passed an artefact to them.
        * The history of the notification will be displayed in the notification screen.`,
        tools: []
      },
      {
        id: 10,
        title: '',
        image: '',
        desc: ``,
        tools: ['React Native', 'JavaScript', 'Android', 'Firebase']
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
        desc: 'A web app to let new students/residents of Melbourne to discover unique places and events within the city. The challenge we are trying to tackle is helping new international students in Melbourne to feel comfortable to their new environment. Mental health issues, such as loneliness, can affect students which may lead to poor health. Our web application was created as a platform for students who are new to Melbourne by allowing them to discover new events and places according to their interests.',
        tools: []
      },
      {
        id: 1,
        title: 'Home Page',
        image: '',
        desc: 'The home page greets users with a map-based search where they can visually locate events around them in the map which may interest them. Being a student means your time is occupied with studies and having a map-based search for events, students can look for events quickly. A short glimpse of the events is accessible by clicking on the point in the map, as glimpse of events around Melbourne.',
        tools: []
      },
      {
        id: 2,
        title: 'Sign up & Sign in',
        image: '',
        desc: 'To access the rest of the features of the website, they must sign up as a member which allows users to personally curate their interests. Members have a profile page containing their information such as: personal details, interests, friends, the places and events they’ve visited and reviews they’ve written. This will simplify the effort required to find information and allows a more personalised and immediate experience.',
        tools: []
      },
      {
        id: 3,
        title: 'Filter Events',
        image: '',
        desc: 'Signing up allows users to not only search events and places but also view event details and join events they are interested in. They can also filter out events by tags, making it easier to discover events and places they want to join based on their interests. This can keep international students updated on places and events that both suit their interests and are related to their culture and home country. Therefore, they can find a place that feels like home in a foreign land.',
        tools: []
      },
      {
        id: 4,
        title: 'Reviews and Ratings',
        image: '',
        desc: 'On each event details page users can see the reviews and ratings others have submitted to help them choose events to join. By joining events they like, users can also see others whose have wrote the reviews and the organisers of the events and are likely to come across people with similar interest. Our system allows member to follow and be followed by other members, which is a great way to meet other users with similar interests and potentially make new friends.',
        tools: [],
      },
      {
        id: 5,
        title: '',
        image: '',
        desc: '',
        tools: ['JavaScript', 'Pug', 'CSS', 'Firebase', 'Heroku'],
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