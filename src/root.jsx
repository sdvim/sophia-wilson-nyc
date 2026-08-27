// @refresh reload
import { metadata, themeColors, themeStyles } from "./data";
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

const faviconVersion = `fredoka-one-${themeColors.siteName.slice(1)}`;

export default function Root() {
  return (
    <Html lang="en" style={themeStyles}>
      <Head>
        <Title>{metadata.title}</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content={metadata.description} />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" preload />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" sizes="any" href={`/favicon.svg?v=${faviconVersion}`} />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Body>
        <ErrorBoundary>
          <nav>
            <h1>
              <A href="/">Sophia Wilson</A>
            </h1>
            <A href="/about">/about</A>
          </nav>
          <Suspense>
            <main>
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
