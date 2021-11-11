import React from "react";
import DynamicComponent from "./DynamicComponent";

export default function Route({ path }) {
  const identifier = path === "/" || typeof path === "undefined" ? "default" : path;
  return (
    <DynamicComponent
      system={{
        url: `${window.routeManifest.CDN_HOST}/${identifier}/${window.routeManifest[path]}`,
        scope: `${identifier}_road`,
        module: "./route",
      }}
    />
  );
}
