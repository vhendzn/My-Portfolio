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
		  "Available for new projects",
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
        "Project": ["Altitude Esports"],
        "Description": [
          "Altitude is a international organisation",
        ],
	      "My Objectives": [
	        "Learn and grow",
	        "Headers",
		"Streampack",
		"Hype Screen"
	      ],
      },

      link: "https://twitter.com/AltitudeHQs",
      image: "/images/Studios Header.jpg",
    },
    {
      info: {
        "Project": ["Fixture"],
        "Description": [
          "Fixture is a international organisation.",
        ],
        "My Objectives": [
          "Header",
          "Wallpaper",
	  "Stream Pack"
        ],
      },

      link: "https://twitter.com/FixtureEsports",
      image: "/images/Fixture.jpg",
    },
    {
      info: {
        "Project": ["Connecting Esports"],
        "Description": [
          "Danish Fortnite organisation",
        ],
        "My Objectives": [
          "Headers", 
          "Welcome Screen",
	  "Improve their overall graphics", 
        ],
      },

      link: "/",
      image: "/images/Con esport.jpg",       
    },
    {
      info: {
        "Rest of my work is here": ["My Behance"],
        "Description": [
          "My own behance with tons of more cool stuff",
        ],
        "Whats on my Behances": [
          "All kind of stuff", 
        ],
      },

      link: "https://www.behance.net/vhen",
      image: "/images/ADS.jpg",
    },
  ],

  // available options:- light, dark, auto
  theme: "dark",
};
