import React from "react";
import Breatcamp from "../../comman/Breatcamp";
import t1 from "../../assets/5bd0386e86116prachit maheshwari2.jpg";
import t2 from "../../assets/5bd03886453efanil sir.jpg";
import t3 from "../../assets/5bd03897d1ea0kshitij hankla.jpg";
import t4 from "../../assets/5bd038b00039aharish arya.jpg";
import t5 from "../../assets/5bd038c3a3cdbakhilesh shinde.jpg";
import t6 from "../../assets/5bd038c3a3cdbakhilesh shinde.jpg";

import { Link } from "react-router-dom";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      image: t1,
      name: "Prachit Maheshwari",
      designation: "Managing Director",
      socialLinks: [
        { url: "https://facebook.com/", icon: "facebook-f" },
        { url: "https://twitter.com/", icon: "twitter" },
        { url: "https://behance.com/", icon: "behance" },
        { url: "https://www.youtube.com/", icon: "youtube" },
      ],
    },
    {
        id: 2,
        image: t6,
        name: "Mr. Kaushik Patel ",
        designation: "Director",
        socialLinks: [
          { url: "https://facebook.com/", icon: "facebook-f" },
          { url: "https://twitter.com/", icon: "twitter" },
          { url: "https://behance.com/", icon: "behance" },
          { url: "https://www.youtube.com/", icon: "youtube" },
        ],
      },
    {
      id: 3,

      image: t2,
      name: "Anil Sachan",
      designation: "Director Food Technologist",
      socialLinks: [
        { url: "https://facebook.com/", icon: "facebook-f" },
        { url: "https://twitter.com/", icon: "twitter" },
        { url: "https://behance.com/", icon: "behance" },
        { url: "https://www.youtube.com/", icon: "youtube" },
      ],
    },
    {
      id: 4,

      image: t3,
      name: "Kshitij Hankla",
      designation: "Export Manager",
      socialLinks: [
        { url: "https://facebook.com/", icon: "facebook-f" },
        { url: "https://twitter.com/", icon: "twitter" },
        { url: "https://behance.com/", icon: "behance" },
        { url: "https://www.youtube.com/", icon: "youtube" },
      ],
    },
    {
      id: 5,

      image: t4,
      name: "Harish Arya Noah",
      designation: "Purchase Manager",
      socialLinks: [
        { url: "https://facebook.com/", icon: "facebook-f" },
        { url: "https://twitter.com/", icon: "twitter" },
        { url: "https://behance.com/", icon: "behance" },
        { url: "https://www.youtube.com/", icon: "youtube" },
      ],
    },
    {
      id: 6,

      image: t5,
      name: "Akhilesh Shinde",
      designation: "Accountant",
      socialLinks: [
        { url: "https://facebook.com/", icon: "facebook-f" },
        { url: "https://twitter.com/", icon: "twitter" },
        { url: "https://behance.com/", icon: "behance" },
        { url: "https://www.youtube.com/", icon: "youtube" },
      ],
    },
  ];

  return (
    <>
      <Breatcamp page="Our Team" />
      <div className="team-area-2 space-top space-extra-bottom overflow-hidden">
        <div className="container container2">
          <div className="row gy-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="team-card style2">
                  <div className="team-img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-card-content">
                    <div className="social-btn style3">
                      {member.socialLinks.map((link, index) => (
                        <a
                          href={link.url}
                          key={index}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fab fa-${link.icon}`}></i>
                        </a>
                      ))}
                    </div>
                    <div className="team-card-details">
                      <span className="team-card-desig">
                        {member.designation}
                      </span>
                      <h3 className="team-card-title">
                        <Link to={`/team/${member.id}`}>{member.name}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
