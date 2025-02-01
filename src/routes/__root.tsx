import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import NavLink from '../components/NavLink';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="px-4 flex text-lg">
        <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
      </div>
      <hr />
      <Outlet />
      {!import.meta.env.PROD && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </>
  );
}
