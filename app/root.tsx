// ./app/root.tsx


import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css"

// https://remix.run/docs/en/v1/api/conventions#meta
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix with Apollo Client",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
  return[{rel: "stylesheet", href: styles}]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
