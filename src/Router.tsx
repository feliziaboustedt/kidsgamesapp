import { createBrowserRouter } from "react-router";
import { Layout } from "./Pages/Layout";
import { ColorGame } from "./Components/ColorGame";
import { Home } from "./Pages/Home";
import { BubblePop } from "./Components/BubblePop";
import { CatchTheBubble } from "./Components/CatchTheBubble";
import { GuessTheAnimalSound } from "./Components/GuessTheAnimalSound";

export const router = createBrowserRouter([
  {
    path: "/kidsgamesapp",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colorgame",
        element: <ColorGame />,
      },
      {
        path: "/bubblepop",
        element: <BubblePop />,
      },
      {
        path: "/catchthebubble",
        element: <CatchTheBubble />,
      },
      {
        path: "/guesstheanimal",
        element: <GuessTheAnimalSound />,
      },
    ],
  },
]);
