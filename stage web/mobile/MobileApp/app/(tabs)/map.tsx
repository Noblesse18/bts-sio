import React from "react";
import { WebView } from "react-native-webview";

export default function PlanLouvre() {
  return (
    <WebView
      source={{ uri: "https://www.louvre.fr/plan-map-musee-du-louvre" }}
    />
  );
}
