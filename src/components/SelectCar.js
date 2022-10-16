import React from "react";
import Option from "@material-tailwind/react";
import Select from "react-select";

function SelectCar() {
  return (
    <div className="flex w-72 flex-col gap-4 mr-auto ml-6 bg-gray-300 p-6">
      <span className="text-center">Selectionner votre véhicule</span>
      <label>Par plaque d'immatriculation</label>
      <input
        className="rounded border h-10 text-center focus:outline-none text-xl"
        type="text"
        placeholder="AB-325-CF"
      />
      <label>Par selection de véhicule</label>
      <Select color="blue" label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select color="purple" label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select color="teal" label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}

export default SelectCar;
