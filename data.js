/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "vhen",
  email: "vhenqs@gmail.com",
  about:
    "Hey! I'm <b>vhen</b>, a 14 years old <b>Talented graphic designer</b> and currently live in <b>Denmark</b>.",

  // intro
  accomplishments: {
    name: "Recent Accomplishments",
    value: [
      "Learned HTML + CSS",
      "Started a side project",
      "Cooked meal for myself and choked to death",
	"Having my beautiful day",
    ],
  },
  socialLink: {
    name: "My social medias",
    value: [
      { name: "Twitter", link: "httsp://twitter.com/vhendzn" },
      { name: "Github", link: "httsp://github.com/vhendzn" },
      { name: "Youtube", link: "https://www.youtube.com/channel/UCcpZ-hRR6vkelWZI8Xf27Sg" },
      { name: "Behance", link: "https://www.behance.net/vhen" },
    ],
  },
  currentProfession: {
    name: "Currently",
	  value: [
		  "Doing clients/organisations work",
		  "Available for new projects"
		  "Living my passion"
	  ],
  },

  // Footer
  contactDetails: {
    name: "Any Questions or wanna contact me",
    value: [
      {
        name: "Gmail",
        value: "vhenqs@gmail.com",
      },
      {
        name: "Discord",
        value: "vhen#5789",
      },
{
        name: "Twitter",
        value: "@vhendzn",
      },
    ],
  },
  currentStatus: {
    name: "What am i doing rn",
    value: [
      "Designing",
	"Doing sports",
      "Playing video games",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
    {
      info: {
        "Project": ["Landing Page"],
        "Description": [
          "A nice and clean Landing page",
        ],
	      "My Objectives": [
	        "Learn and grow",
	        "Accessibility improvements"
		"enjoy"
	      ],
      },

      link: "www.behance.net/vhen",
      image: "/images/apple.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing",
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/spiderman.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing", 
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/microsoft.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "dark",
};
