"use client";

import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import type { CarProps } from "@/types";

const CarCard = ({ car }: CarProps) => {
  const {
    class: carClass,
    cylinders,
    displacement,
    drive,
    fuel_type,
    make,
    model,
    transmission,
    year,
  } = car;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>Car Rent...</span>
      </p>
    </div>
  );
};

export default CarCard;
