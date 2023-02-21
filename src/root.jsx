// @refresh reload
import { metadata } from "./data";
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
export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>{metadata.title}</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content={metadata.description} />
      </Head>
      <Body>
        <ErrorBoundary>
          <A href="/">Sophia Wilson</A>
          <A href="/about">About</A>
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
