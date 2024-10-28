import React from "react";

export default function ProjectCard({ link , text}) {
  return (
    <div class="project-card style2 px-2 ">
      <div class="project-card-img">
        <img src={link} alt=""  className="rounded" />
      </div>
      <div class="project-card-details">
      
        <h3 class="project-card-title">
          <a>{text}</a>
        </h3>
      </div>
    </div>
  );
}
