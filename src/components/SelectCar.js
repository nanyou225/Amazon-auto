import React from "react";
import { Button, Option } from "@material-tailwind/react";
import Select from "react-select";

function SelectCar() {
  const options = [
    { value: "p1", label: "Top level - P1" },
    { value: "p2", label: "Mid level - P2" },
    { value: "p3", label: "Low level - P3" },
  ];
  return (
    <div className="flex w-96 px-8 flex-col gap-4 bg-gray-300 rounded">
      <span className="text-center">Selectionner votre véhicule</span>
      <label>Par plaque d'immatriculation</label>
      <div className="flex">
        <input
          className="rounded border h-10 text-center focus:outline-none text-xl"
          type="text"
          placeholder="AB-325-CF"
        />
        <Button className="border bg-red-500 p-2 rounded">OK</Button>
      </div>
      <label>Par selection de véhicule</label>
      <Select
        car="peugeot"
        label="Selectionner la marque"
        id="selectbox"
        instanceId="selectbox"
        options={options}
      >
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select
        car="renault"
        label="Selectionner le modèl"
        id="selectbox"
        instanceId="selectbox"
      >
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select
        car="seat"
        label="Selectionner la motorisation"
        id="selectbox"
        instanceId="selectbox"
      >
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Button className="border bg-red-500 p-2 rounded">Rechercher</Button>
    </div>
  );
}

export default SelectCar;
