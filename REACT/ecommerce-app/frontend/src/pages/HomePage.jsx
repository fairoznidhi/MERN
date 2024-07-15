import React from "react";
import { LeftPanel } from "../components/leftPanel";
import { FilterProvider } from "../contexts";

export const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="lg:w-3/4">
        <FilterProvider>
          <LeftPanel />
        </FilterProvider>
      </div>
    </div>
  );
};