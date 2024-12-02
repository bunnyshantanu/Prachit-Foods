import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ link , text ,tott}) {
  return (
    <div class="project-card style2 px-2 ">
      <div class="project-card-img">
        <img src={link} alt=""  className="rounded" />
      </div>
      <div class="project-card-details">
      
        <h3 class="project-card-title">
          <Link to={tott}>{text}</Link>
        </h3>
      </div>
    </div>
  );
}
