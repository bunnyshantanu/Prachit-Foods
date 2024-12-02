import React, { useState } from "react";
import Breatcamp from "../../comman/Breatcamp";
import t1 from "../../assets/5bd0386e86116prachit maheshwari2.jpg";
import group1 from "../../assets/2147993335.jpg";
import group2 from "../../assets/2148825888.jpg";
import t4 from "../../assets/5bd038b00039aharish arya.jpg";
import t5 from "../../assets/5bd038c3a3cdbakhilesh shinde.jpg";
import t6 from "../../assets/5bd038c3a3cdbakhilesh shinde.jpg";

import { Link } from "react-router-dom";

export default function Team() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle between expanded and truncated content
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const members = [
    {
      id: 1,
      image: t1,
      name: "Prachit Maheshwari",
      designation: "Managing Director",
      content1:
        "Prachit Maheshwari is the dynamic founder and director of Prachit Foods India Pvt. Ltd., a leading name in the potato export industry. With over 15 years of extensive experience in agro-products, he has successfully combined his technical skills and business acumen to create a thriving enterprise. He holds an MBA and a degree in mechanical engineering, which equips him with a unique perspective on the intersection of technology and agriculture. ",
      content2:
        "Hailing from an agricultural family, Prachit possesses an innate understanding of the challenges and opportunities within the farming community. His background instills a deep respect for the land and the farmers who cultivate it, fostering strong, lasting relationships built on trust and mutual respect. This connection not only enhances the quality of the produce but also ensures that farmers feel valued and supported in their endeavors. <br> Prachit is known for his unwavering ethical principles and commitment to sustainability. He believes that the foundation of a successful business lies in the integrity of its operations. His ethical stance resonates deeply within the company culture at Prachit Foods, where employees are inspired to uphold the same values. He is a leader who leads by example, nurturing a positive work environment where everyone feels motivated and empowered to contribute to the company's vision. <br>Owning a state-of-the-art cold storage facility in Indore, Prachit has further strengthened Prachit Foods’ operational capabilities, ensuring that the quality of produce is maintained throughout the supply chain. His keen understanding of export procedures, farming practices, and the technical intricacies of the agro-business allows him to navigate challenges effectively while identifying new growth opportunities. <br>With a clear and ambitious vision, Prachit aims to position Prachit Foods as one of the largest potato exporters in India. His relentless pursuit of excellence, combined with a deep commitment to his employees and farmers, has set the company on a promising trajectory for the future. As he continues to inspire those around him, Prachit Maheshwari remains dedicated to achieving greatness for both Prachit Foods and the communities it serves, embodying the spirit of innovation and integrity in the agro-export sector ",
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
      content1:
        "Kaushik Patel is an innovative entrepreneur who has made a significant impact on the potato industry through his forward-thinking leadership and deep agricultural expertise. Over the years, he has built a thriving business empire that supplies premium-quality potatoes to some of the largest restaurants, retailers, and processors across India. His dedication to quality, sustainability, and customer satisfaction has helped him cultivate strong partnerships with farmers, suppliers, and clients alike. Under his guidance, his company has expanded operations, invested in cutting-edge technology, and ventured into new markets, firmly establishing itself as a leader in the potato sector.",
      content2:
        "Kaushik’s journey in the potato business didn’t begin with trading but from his personal connection to the land. Born and raised in rural Gujarat, India, Kaushik grew up with a first- hand understanding of farming. His deep respect for agriculture is rooted in his upbringing, where he learned the importance of soil care and sustainable practices. He owns multiple farms in Gujarat, where his innovative approach has focused on improving soil quality, increasing crop yields, and reducing environmental impact. By prioritizing soil health and sustainability, Kaushik has not only enhanced his produce but also contributed to long-term agricultural improvements in the region.<br>After gaining extensive experience in farming, Kaushik transitioned into potato trading. His agricultural background gave him an edge in this competitive industry, as he was able to ensure high standards of quality and reliability in his supply chain. He quickly earned the trust of major companies like Balaji Wafers, DFM Foods, Haldiram Snacks, and ITC. Over the past two decades, Kaushik has become a key player in supplying potatoes to major metro markets across India, building a reputation for consistency, integrity, and efficiency.<br>Kaushik’s success is not limited to farming and trading. He has also made significant strides in potato storage and preservation. His advanced storage facilities, which include pallet, bulk, and bag storage systems, are equipped with state-of-the-art technologies such as controlled atmosphere systems, humidity management, and expert temperature regulation. These facilities are strategically located near major transportation hubs, ensuring that his potatoes are distributed swiftly and arrive fresh at their destinations. His focus on storage innovation has helped reduce waste, maintain quality, and meet the growing demands of the market.<br>In addition to his business accomplishments, Kaushik remains deeply connected to his farming roots. His travels and experiences have given him a global perspective on agriculture, which he applies to his operations in India. His ability to combine traditional agricultural practices with modern technology has set him apart in the industry, making him a trusted supplier and respected figure in the agricultural business community. Through his passion, expertise, and commitment to excellence, Kaushik Patel has solidified his position as a leader in the potato industry, contributing to its growth and sustainability.",
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
      {/* <Breatcamp page="The Visionary Force" /> */}
      <div className="team-area-2 space-top  overflow-hidden ">
        <div className="container ">
          <div className="row gy-4 justify-content-center ">
            {members.map((member, index) => (
              <div className="row justify-content-between border-bottom mb-5">
                <div className="col-lg-4">
                  <div className="team-page-single">
                    <div className="page-img mb-40">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={"100%"}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="team-info-wrapper">
                    <h2 className="team-details-title">{member.name}</h2>
                    <h3 className="team-details-designation">
                      {member.designation}
                    </h3>
                    <p>{member.content1}</p>
                    <p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: member.content2,
                        }}
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: isExpanded ? "none" : 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      />
                      <a class="text-success" onClick={toggleReadMore}>
                        {isExpanded ? "Read Less" : "Read More"}
                      </a>
                    </p>

                    {/* <div className="social-btn">
                      {member.socialLinks.map((link, index) => (
                        <a href={link.url} key={index}>
                          <i className={`fab fa-${link.icon}`}></i>
                        </a>
                      ))}
                    </div> */}
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
