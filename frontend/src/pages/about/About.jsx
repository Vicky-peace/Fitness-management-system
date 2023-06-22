import React from "react";
import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about3.jpg";
import VisionImage from "../../images/Trainer 1.png";
import MissionImage from "../../images/About1.jpg";
import Card from '../../UI/Card'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Welcome to our gym! We are dedicated to helping you achieve your fitness
        goals and lead a healthy lifestyle. Are you ready to transform your body
        and improve your overall well-being? Join us on this fitness journey!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
          <Card><img src={StoryImage} alt="Our Story" /></Card>  
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Our story begins with a passion for fitness and a desire to make a
              positive impact on people's lives. We believe that everyone
              deserves to live a healthy and active lifestyle, and we are here
              to support you on your fitness journey.
            </p>
            <p>
              At our gym, we provide a welcoming and inclusive environment for
              people of all fitness levels. Whether you're a beginner or an
              experienced athlete, our experienced trainers and state-of-the-art
              facilities are here to help you reach your goals.
            </p>
            <p>
              We are committed to providing personalized guidance and support to
              each and every member. Our dedicated team is here to motivate and
              inspire you, pushing you to achieve new heights and surpass your
              own expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              At our gym, our vision is to create a community that empowers
              individuals to prioritize their health and well-being. We strive
              to be a catalyst for positive change, inspiring people to adopt a
              fitness-centered lifestyle.
            </p>
            <p>
              We envision a future where everyone can enjoy the benefits of a
              healthy and active lifestyle. Through our innovative programs,
              cutting-edge equipment, and supportive environment, we aim to make
              fitness accessible and enjoyable for all.
            </p>
          </div>
          <div className="about__vision-image">
        <Card><img src={VisionImage} alt="Our Vision" /></Card>    
          </div>
        </div>
      </section>
  <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__mission-image">
         <Card> <img src={MissionImage} alt="Our Mission" /></Card>  
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission is to inspire and empower individuals to transform
              their lives through fitness. We are dedicated to providing a
              supportive and motivating environment where you can achieve your
              fitness goals and unlock your full potential.
            </p>
            <p>
              We strive to offer diverse and engaging fitness programs that
              cater to the unique needs and preferences of our members. Our
              experienced trainers are committed to guiding you on your fitness
              journey, helping you develop healthy habits and surpass your own
              expectations.
            </p>
            <p>
              We believe that fitness is not just about physical strength, but
              also about mental well-being. Through our holistic approach, we
              aim to improve both your physical fitness and mental resilience,
              enabling you to lead a balanced and fulfilling life.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
