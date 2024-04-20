import React, { useState } from "react";
import "../App.css";

function Search() {
  const articles = [
    {
      id: 1,
      title: "Understanding the difference between grid-template and grid-auto",
      date: "Oct 09, 2018",
      description: "Exploring the properties related to CSS Grid Layout...",
    },
    {
      id: 2,
      title: "Innovations in Responsive Design",
      date: "Mar 12, 2024",
      description:
        "A comprehensive look at new techniques for fluid layouts and responsive images.",
    },
    {
      id: 3,
      title: "Introduction to WebAssembly",
      date: "Apr 05, 2024",
      description:
        "Understanding WebAssembly and its role in performance optimization.",
    },
    {
      id: 4,
      title: "The Rise of CSS Variables",
      date: "Feb 15, 2024",
      description:
        "How CSS variables enhance theming and reduce the need for pre-processors.",
    },
    {
      id: 5,
      title: "Next-Gen Frontend Frameworks",
      date: "Jan 20, 2024",
      description:
        "Evaluating the newest frameworks and their impact on modern web development.",
    },
    {
      id: 6,
      title: "Progressive Web Apps vs. Native Apps",
      date: "Feb 27, 2024",
      description:
        "Comparing PWAs and native applications in the context of mobile strategy.",
    },
    {
      id: 7,
      title: "JavaScript Performance Best Practices",
      date: "Mar 09, 2024",
      description:
        "Tips and techniques for optimizing JavaScript execution in the browser.",
    },
    {
      id: 8,
      title: "Understanding Server-Side Rendering",
      date: "Apr 18, 2024",
      description:
        "A deep dive into server-side rendering and its benefits for SEO and performance.",
    },
    {
      id: 9,
      title: "Building Accessible Web Applications",
      date: "Mar 22, 2024",
      description:
        "Best practices for ensuring your web applications are accessible to all users.",
    },
    {
      id: 10,
      title: "Exploring GraphQL and REST APIs",
      date: "Apr 10, 2024",
      description:
        "A comparison of GraphQL and REST approaches to API design and development.",
    },
    {
      id: 11,
      title: "The Impact of HTTP/3 on Web Development",
      date: "Jan 28, 2024",
      description:
        "How the latest version of HTTP can revolutionize data transfer on the web.",
    },
  ];

  let [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleDelete = (e) => {
    setSearch("");
  };

  return (
    <div className="search">
      <h2>Search:</h2>
      <div className="searchContainer">
        <input type="search" value={search} onChange={handleChange} />
        <span onClick={handleDelete}>x</span>
      </div>
      <div>{filteredData}</div>
    </div>
  );
}

export default Search;
