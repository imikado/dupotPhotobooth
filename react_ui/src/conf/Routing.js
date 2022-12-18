import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import PreviewPicturePage from "../Pages/PreviewPicturePage";

import TakeAPicture from "../Pages/TakeAPicturePage";

export default function Routing() {
  return (
    <Routes>
      <Route path="takeAPicture" element={<TakeAPicture />} />
      <Route path="previewPicture" element={<PreviewPicturePage />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
