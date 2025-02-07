import React from "react";
import getIdentifier from "./capabilities/getIdentifier";
import DynamicComponent from "./DynamicComponent";

export default function Route({ path }) {
  const identifier = getIdentifier(path);
  return (
    <DynamicComponent
      system={{
        scope: `${identifier}_road`,
        module: "./route",
      }}
    />
  );
}
