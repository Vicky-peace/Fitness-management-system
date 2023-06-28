import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import { apiDomain } from "../../Utils/Utils";
import Axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./plans.css";

const Plans = () => {
  const {user}  = useContext(Context)
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userId, setUserId] = useState(null);

  const getUserId = async () => {
    try {
      const res = await Axios.get(`${apiDomain}/users`, {
        headers: {
          Authorization: `${user.data}`,
        },
      });
      setUserId(res.data);
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };

  const handlePlanSelection = (id) => {
    setSelectedPlan(id);
  };

  const handlePlanSubmit = () => {
    if (!userId) {
      console.log("User ID not found");
      return;
    }

    if (!selectedPlan) {
      console.log("No plan selected");
      return;
    }

    // Prepare the request payload
    const requestBody = {
      plan_id: selectedPlan,
      user_id: userId,
      subscription_date: new Date().toISOString(),
    };

    // Send the request to the backend
    Axios.post(`${apiDomain}/plans/choose`, requestBody)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error submitting plan:", error);
      });
  };

  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Discover the Perfect Membership Plan for Your Fitness Journey
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button
                  className="btn lg"
                  onClick={() => handlePlanSelection(id)}
                >
                  Choose Plan
                </button>
              </Card>
            );
          })}
        </div>
      </section>
      {selectedPlan && (
        <Card>
          <div>
            <p>Selected Plan: {selectedPlan}</p>
            <p>User ID: {userId}</p>
            <button onClick={handlePlanSubmit}>Submit Plan</button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Plans;
