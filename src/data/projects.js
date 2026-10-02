import shopsphereImage from "../assets/images/shopsphere.jpg";
import inuLabImage from "../assets/images/inu-lab.jpg";
import hotelBookingImage from "../assets/images/hotel-booking.jpg";
import smartParkingImage from "../assets/images/smart-parking.jpg";

const projects = [
  {
    id: 1,
    title: "ShopSphere",
    description:
      "A modern e-commerce web application for browsing products, managing a shopping cart, placing orders, and managing an online store.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    featured: true,
    image: shopsphereImage,
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "INU Computer Laboratory Management System",
    description:
      "A university laboratory management system designed to manage users, laboratory resources, authentication, and administrative operations.",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    category: "Full Stack",
    featured: true,
    image: inuLabImage,
    github: "#",
    demo: "#",
  },

  {
    id: 3,
    title: "Hotel Booking System",
    description:
      "A web-based hotel booking system for managing rooms, customers, reservations, and booking information.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    category: "Web Development",
    featured: false,
    image: hotelBookingImage,
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    title: "Smart Parking Lot Management System",
    description:
      "A parking management project focused on organizing vehicles and parking operations using data structures.",
    technologies: ["C++", "Queues", "Hashmaps"],
    category: "Software Development",
    featured: false,
    image: smartParkingImage,
    github: "#",
    demo: "#",
  },
];

export default projects;
