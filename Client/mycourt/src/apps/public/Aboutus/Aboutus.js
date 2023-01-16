import React from 'react';
import './Aboutus.css';

export const AboutUs = () => {
    return(
       
  <div className='bet'>
      <div class="about-section">
        <div class="inner-width">
          <h1>About Us</h1>
          <div class="border1"></div>
          <div class="about-section-row">
            <div class="about-section-col">
              <div class="about">
                <p>
                When you work with us, you receive the best of both worlds:
Expertise, resources and skill of big firm lawyers combined with small firm efficiency, pliability and personalized attention.
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
            <div class="about-section-col">
              <div class="skills">
                <div class="skill">
                  <div class="title">Transparency</div>
                  <div class="progress">
                    <div class="progress-bar p1"><span>100%</span></div>
                  </div>
                </div>

                <div class="skill">
                  <div class="title">Quality Assured</div>
                  <div class="progress">
                    <div class="progress-bar p2"><span>100%</span></div>
                  </div>
                </div>

                <div class="skill">
                  <div class="title">Instant Justice</div>
                  <div class="progress">
                    <div class="progress-bar p3"><span>100%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

    )

}
export default AboutUs;