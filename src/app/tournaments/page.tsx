import Button from "@/components/Button";
import ShoppingCard from "@/components/ShoppingCard";
import ShineBorder from "@/components/ui/ShineBorder";
import SparklesText from "@/components/ui/Sparkles";
import Image from "next/image";
import React from "react";

function Tournaments() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <SparklesText text="Tournaments" className="text-4xl py-4" />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <ShoppingCard
          image="/free-tournament.png"
          discription="Free NxS Weekly Scrims."
        />
        <ShoppingCard
          image="/free-tournament.png"
          discription="Free NxS Weekly Scrims."
        />
      </div>
      <Button text="babu" />
    </div>
  );
}

export default Tournaments;
