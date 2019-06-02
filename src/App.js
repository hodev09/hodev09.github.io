import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavMain from "./Components/NavBar/NavMain";

const RouterItem = lazy(() => import("./Components/Routes/RouterItem"));

const App = () => {
  useEffect(() => {
    document.title = "Dev's Page";
  });

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
