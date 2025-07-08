import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./Router";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter basename="/kidsgamesapp">
        <RouterProvider router={router}></RouterProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
