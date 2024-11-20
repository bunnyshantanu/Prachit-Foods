import React from "react";
import Breatcamp from "../../comman/Breatcamp";
import t1 from "../../assets/5bd0386e86116prachit maheshwari2.jpg";
import group1 from "../../assets/2147993335.jpg";
import group2 from "../../assets/2148825888.jpg";
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
      }
   
  ];

  return (
    <>
      <Breatcamp page="The Visionary Force" />
      <div className="team-area-2 space-top space-bottom overflow-hidden">
        <div className="container container2">
          <div className="row gy-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="team-card style2">
                  <div className="team-img">
                  <Link to={`/team/${member.id}`}>
                    <img src={member.image} alt={member.name} />
                    </Link>
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

            <div class="col-lg-12">
              <img src={group1} alt="" width={'100%'}/>
            </div>
            <div class="col-lg-12">
              <img src={group2} alt="" width={'100%'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
