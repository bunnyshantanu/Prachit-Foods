import React from "react";
import bg1 from "../assets/bread.jpg";

export default function Breatcamp({page}) {
  return (
    <div
      class="breadcumb-wrapper background-image overlay"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcumb-content">
              <h1 class="breadcumb-title">{page}</h1>
              <ul class="breadcumb-menu">
                <li>
                  <a>Prachit Foods</a>
                </li>
                <li class="active">{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
