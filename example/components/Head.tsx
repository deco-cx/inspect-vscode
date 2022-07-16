/** @jsx h */
import { h } from "preact";
import { asset, Head } from "$fresh/runtime.ts";

export interface HeadProps {
  title: string;
  description: string;
  url: URL;
  faviconUrl: string;
  styleUrls: string[];
  themeColor: string;
}

export const props: HeadProps = {
  title: "Inspect VSCode sample site",
  description: "Inspect your components and open VSCode in the correct file.",
  url: new URL("https://github.com/deco-cx/inspect-vscode"),
  faviconUrl: "",
  styleUrls: [],
  themeColor: "#0055fe",
};

export default function HeadComponent() {
  const {
    title,
    description,
    url,
    faviconUrl,
    styleUrls,
    themeColor,
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={themeColor}></meta>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url.href} />
      <link
        rel="shortcut icon"
        href={faviconUrl}
        type="image/x-icon"
      >
      </link>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      </link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      </link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      </link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" data-color="#0055fe">
      </link>
      <meta name="msapplication-TileColor" content="#ffffff"></meta>
      {styleUrls.map((styleUrl: string) => (
        <link rel="stylesheet" href={asset(styleUrl)}></link>
      ))}
    </Head>
  );
}
