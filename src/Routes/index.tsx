import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { CREATOR_TOKEN_MINT, HOME } from "./routes";
//types
interface ILazyComponentTypes {
  children: React.ReactElement;
}

const HomePage = lazy(() => import("../pages/HomePage"));
const CreatorTokenMintPage = lazy(() => import("../pages/CreatorTokenMintPage"));

const routes = [
  {
    path: HOME,
    Component: HomePage
  },
  {
    path: CREATOR_TOKEN_MINT,
    Component: CreatorTokenMintPage
  }
];

const LazyComponent: FC<ILazyComponentTypes> = ({ children }): JSX.Element => (
  <Suspense fallback={<>...Loading</>}>{children}</Suspense>
);

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <LazyComponent>
                <Component />
              </LazyComponent>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
