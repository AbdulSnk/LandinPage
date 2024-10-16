import React from "react";
import frame1 from "../assets/img/frame-1.png";
import frame2 from "../assets/img/frame-2.png";
import frame3 from "../assets/img/frame-3.png";
import lagos1 from "../assets/img/lagos1.png";
import lagos2 from "../assets/img/lagos2.png";
import lagos3 from "../assets/img/lagos3.png";
import lago4 from "../assets/img/lago4.png";
import lago5 from "../assets/img/lago5.png";
import lg1icon1 from "../assets/img/lg1icon1.png";
import lg1icon2 from "../assets/img/lg1icon2.png";
import lg1icon3 from "../assets/img/lg1icon3.png";
import awardCardImg from "../assets/img/flower.png";
import serviceImg1 from "../assets/img/servicesimg1.png";
import serviceImg2 from "../assets/img/servicesimg2.png";
import serviceImg3 from "../assets/img/servicesimg3.png";
import bath from "../assets/img/bath.jpg";
import spa1 from "../assets/img/spa1.jpg";
import spa2 from "../assets/img/spa2.jpg";
import spa3 from "../assets/img/spa3.jpg";
import bathroom2 from "../assets/img/bathroom2.jpg";

export const imageList = [
  { imageSrc: frame1 },
  { imageSrc: frame2 },
  { imageSrc: frame3 },
  { imageSrc: lagos1 },
  { imageSrc: lagos2 },
  { imageSrc: lagos3 },
  { imageSrc: frame1 },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "collections", label: "Collections" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Get in Touch" },
  { id: "awards", label: "Awards" },
];

//------------FEATURE SECTION-------------//

export const featuresText = {
  heading: "Step Into The World Of",
  highlight: "Homy & Comfort",
  paragraphs: [
    "Ever think to yourself, Where do I take my sweet family to? Where can we get a homy vibe with great view? Where can we get a home with minimal noise?",
    "Well, Homy & comfort has got answers to all your questions! A new level of luxury will be unlocked once you step into our world. Great things await you here.",
    "Why not come on this journey and never have to turn back as we have prioritized your experience.",
  ],
};

export const features = [
  {
    imageSrc: frame1,
    title: "Why Try Homy & Comfort",
    description:
      "When you are in any of our homes, you can always expect world-class reception and nothing less.",
  },
  {
    imageSrc: frame2,
    title: "Our Top Priority",
    description:
      "Our top priority is and will always be you! Our customer. We do all we can to give you a seamless experience.",
  },
  {
    imageSrc: frame3,
    title: "Our Role To Society",
    description:
      "A tree is planted for every night you stay because we deeply care for our planet.",
  },
];

//--------------COLLECTION-----------------//
export const collectionsText = {
  heading: "The Collection",
  highlight: "",
  paragraphs: [
    "Our ultra-luxury private residences include villas, chalets and spas, as well as a 5-star superior hotel",
    "Each one is chosen for its unique character and is designed impeccably in the signature Ultima style.",
    " Browse our growing portfolio of destinations below.",
  ],
};

export const collections = [
  {
    imageSrc: bath,
    label: "Lagos",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Cherryland",
  },
  {
    imageSrc: lagos1,
    label: "Abuja",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Rosewood",
  },
  {
    imageSrc: spa1,
    label: "PH",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Maplecrest",
  },
  {
    imageSrc: spa2,
    label: "Lagos",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Pinegrove",
  },
  {
    imageSrc: spa3,
    label: "Ikeja",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Oakshade",
  },
  {
    imageSrc: bathroom2,
    label: "Lagos",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Bluewater",
  },
  {
    imageSrc: lagos3,
    label: "Maid",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Willowbend",
  },
  {
    imageSrc: lagos2,
    label: "Imo",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Messissipi",
  },
  {
    imageSrc: lago4,
    label: "Kaduna",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The WaterFall",
  },
  {
    imageSrc: frame1,
    label: "Niger",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Cloverhill",
  },
  {
    imageSrc: lago5,
    label: "Nile",
    icons: [{ img: lg1icon1 }, { img: lg1icon2 }, { img: lg1icon3 }],
    title: "The Birchfield",
  },
];

//--------------SERVICES-----------------//
export const services = [
  {
    imageSrc: serviceImg1,
    title: "Private Concierge",
    description:
      "Helicopter transfers, Michelin star chefs and 24/7 service staff can be arranged by our in-house teams to personalise each experience. Consider it handled, however spontaneous the idea..",
  },
  {
    imageSrc: serviceImg2,
    title: "Health & Wellness",
    description:
      "Get youself great treatment with our facilities made available for your wellness. Our spas are always open and our pools are well treated..",
  },
  {
    imageSrc: serviceImg3,
    title: "Personalized Experiences & Events",
    description:
      "Personalized views for you and your family are one of the perks we provide to make your stay unforgettable..",
  },
];

export const servicesText = {
  heading: "Homy & Comfort ",
  highlight: "Services",
  paragraphs: [
    "We’re known for our world-class service, surpassing ‘luxury’ to offer highly personalised ",
    "experiences in utter seclusion. Not only do we get to know and anticipate your needs, but we’ll .",
    "delight you with surprises along the way.",
  ],
};

//--------------Contact-----------------//
export const contactText = {
  heading: "Get In Touch ",
  highlight: "",
  paragraphs: [
    "We are just an enquiry away for you to get the experience you, family and friends are really in search of. Why not take that bold step into the next level of luxury.",
  ],
};
//--------------Award-----------------//
export const awardText = {
  heading: "Awards ",
  highlight: "Homy & Comfort",
  paragraphs: [],
};

export const awards = [
  {
    imageSrc: awardCardImg,
    heading: "Nigeria Hotel Awards 2023",
    paragraph: "Best Luxury Hotel",
  },
  {
    imageSrc: awardCardImg,
    heading: "Africa Travel Awards 2020",
    paragraph: "Top for Business Travelers",
  },
  {
    imageSrc: awardCardImg,
    heading: "West Africa Tourism Awards 2022",
    paragraph: "Best in Service Excellence",
  },
  {
    imageSrc: awardCardImg,
    heading: "Global Hospitality Awards 2021",
    paragraph: "Outstanding Guest Experience",
  },
];
