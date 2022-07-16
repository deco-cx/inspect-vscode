/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";
import InspectVSCode from "../islands/InspectVSCode.tsx";

export default function TestRoute({ url }: PageProps<any>) {
  return (
    <>
      <InspectVSCode />
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
