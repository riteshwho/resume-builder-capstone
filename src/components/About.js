import React from "react";
import './About.css';


     const About = () => {
      return (
        <div>
          <header className="header">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/logo1_edfc81b31b.png" alt="almabetter" className="logo" />
            <nav className="navbar">
              <ul className="navbar-list">
                <li><a className="navbar-link" href="#">Resume Template</a></li>
                <li><a className="navbar-link" href="#">My Resume</a></li>
                <li><a className="navbar-link" href="#">About Us</a></li>
              </ul>
            </nav>
          </header>
          <div className="main">
            <div className="mid-one">
              <h2 className="heading">
                Resume <br />
                Builder
              </h2>
              <br />
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                perferendis totam ut aut excepturi unde aspernatur laboriosam rerum
                hic vitae. Inventore laboriosam obcaecati consequuntur repudiandae
                culpa, itaque minus accusamus iure. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Iste, odio! Eveniet itaque nesciunt,
                voluptate eaque dolorum nobis exercitationem recusandae modi magnam
                corporis hic ipsum non ullam illo natus similique quas? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Consequatur, sed quis
                ipsa saepe quod qui omnis porro sapiente delectus, quaerat animi vel
                magnam voluptatibus pariatur hic vitae neque rerum. Mollitia? Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Provident,
                quidem eum! Animi ex itaque iusto modi sunt praesentium minima ut
                nam, dolore ducimus repellat ab accusamus reiciendis molestias totam
                rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus expedita accusamus assumenda, inventore vel dicta
                incidunt nesciunt. Tempora eveniet in molestias adipisci consectetur
                rerum, consequuntur quia officia quibusdam reiciendis itaque!
              </p>
              <br />
              <h3 className="line">Share with your friends</h3>
            </div>
            <div className="mid-two">
              <img src="https://img.freepik.com/premium-vector/resume-concept-woman-makes-resume-vector-illustration-flat_186332-971.jpg" alt="logo" />
            </div>
          </div>
        </div>
      );
     }
    
      export default About;