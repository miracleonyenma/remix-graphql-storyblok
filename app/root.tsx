// ./app/root.tsx

import { storyblokInit } from "@storyblok/react";

import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Feature from "./components/Feature";

import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import Hero from "./components/Hero";
import SiteHeader from "./components/SiteHeader";
import ArticleHero from "./components/ArticleHero";
import Content from "./components/Content";

// https://remix.run/docs/en/v1/api/conventions#meta
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix with Apollo Client",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const components = {
  grid: Grid,
  page: Page,
  teaser: Teaser,
  feature: Feature,
  hero: Hero,
  "Article Hero": ArticleHero,
  content: Content,
};

storyblokInit({
  accessToken: "access token here",
  components,
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SiteHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
