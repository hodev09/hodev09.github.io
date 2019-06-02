import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import NavMain from "./Components/NavBar/NavMain";

const RouterItem = lazy(() => import("./Components/Routes/RouterItem"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <NavMain />
          <RouterItem />
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
