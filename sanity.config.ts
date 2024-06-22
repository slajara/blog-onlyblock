"use client";

import { visionTool } from "@sanity/vision";
import { StudioNavbar, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  name: "Slajara_Studio",
  title: "Slajara Studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
