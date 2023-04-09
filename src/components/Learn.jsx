import React from "react";
import Pawn from "../assets/pawn.jpg";
import Match from "../assets/Match.jpg";
import Study from "../assets/Study.jpg";
import Knights from "../assets/Knights.jpg";
import Coaching from "../assets/Coaching.jpg";
import Analysis from "../assets/Analysis.jpg";
import { Card } from "./Card.jsx";

export const Learn = () => {
  return (
    <div className="h-[95vh] items-center py-6">
      <p className="text-l p-4 flex justify-center text-2xl font-serif font-semibold">
        We are going to teach you how to win Chess matches with a great and
        diverse routine of practice, study, and analysis.
      </p>
      <div className="flex flex-wrap justify-center text-white items-center">
        <Card
          image={Pawn}
          caption="Study challenging chess situations to improve your game."
        />
        <Card
          image={Match}
          caption="Learn to overcome old mistakes and improve your skills."
        />
        <Card
          image={Study}
          caption="Access top-notch theoretical knowledge for your game."
        />
        <Card
          image={Knights}
          caption="Get daily expert feedback to track your progress."
        />
        <Card
          image={Coaching}
          caption="Engage with colleagues to discuss chess themes."
        />
        <Card
          image={Analysis}
          caption="Enhance your skills with data analysis in chess."
        />
      </div>
    </div>
  );
};
