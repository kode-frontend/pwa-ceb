import { ThemeProvider } from "@context/ThemeProvider";
import { router } from "@shared/utils/router";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
