import { Link, LinkProps } from '@tanstack/react-router';

export default function NavLink({ to, children }: LinkProps) {
  return (
    <Link
      to={to}
      activeProps={{
        className: 'font-bold',
      }}
      className="hover:bg-sky-700 transition p-4"
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
}
