import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import { TherapistProfile } from "./components/TherapistProfile";
import { About } from "./components/About";
import { TherapistGallery } from "./components/TherapistGallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/therapist/:id",
    Component: TherapistProfile,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/therapists",
    Component: TherapistGallery,
  },
]);