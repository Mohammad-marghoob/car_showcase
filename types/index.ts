import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLBRElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  car: {
    class: string;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    make: string;
    model: string;
    transmission: string;
    year: number;
  };
}
