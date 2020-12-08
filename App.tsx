import { StatusBar } from "expo-status-bar";
import React from "react";
import Player from "./src/screens/Player";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Player />
    </>
  );
}
