import React from "react";
import Breatcamp from "../../comman/Breatcamp";
import b1 from "../../assets/cold-1.jpeg";
import b2 from "../../assets/cold-2.jpeg";
import b3 from "../../assets/cold-3.jpeg";
import b4 from "../../assets/cold-4.jpeg";
import b5 from "../../assets/373.jpg";
import b6 from "../../assets/bg55.jpg";
import b7 from "../../assets/bread.jpg";
import b8 from "../../assets/irewwie.jpg";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  return (
    <>
      <Breatcamp page="Gallery" />

      {/* <a key={'1'} href={b1} data-lg-size="1600-2400">
                    <img src={b1} alt="hel" />
                    </a> */}

      <div class="space">
        <div class="container-fluid px-5">
          <LightGallery plugins={[lgThumbnail, lgZoom]}>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"1"}
              href={b1}
              data-lg-size="1600-2400"
            >
              <img src={b1} alt="hel" />
            </a>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"2"}
              href={b2}
              data-lg-size="1600-2400"
            >
              <img src={b2} alt="hel" />
            </a>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"3"}
              href={b3}
              data-lg-size="1600-2400"
            >
              <img src={b3} alt="hel" />
            </a>  <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"3"}
              href={b3}
              data-lg-size="1600-2400"
            >
              <img src={b3} alt="hel" />
            </a>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"4"}
              href={b4}
              data-lg-size="1600-2400"
            >
              <img src={b4} alt="hel" />
            </a>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"5"}
              href={b5}
              data-lg-size="1600-2400"
            >
              <img src={b5} alt="hel" />
            </a>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"6"}
              href={b6}
              data-lg-size="1600-2400"
            >
              <img src={b6} alt="hel" />
            </a>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"6"}
              href={b6}
              data-lg-size="1600-2400"
            >
              <img src={b7} alt="hel" />
            </a>
            <a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
              key={"6"}
              href={b8}
              data-lg-size="1600-2400"
            >
              <img src={b8} alt="hel" />
            </a>
          </LightGallery>
        </div>
      </div>
    </>
  );
}
