import Head from "next/head";

export default function HeadComp({
  title = "Artcrytion",
  description = "The NFT markeplace for digital art",
  image,
  url,
  type = "website",
}) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta key="description" name="description" content={description} />
      <meta
        key="keywords"
        name="keywords"
        content="Artcryption, digital art, NfT marketplace"
      />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="628" />
      <meta key="og:type" property="og:type" content={type} />
      {url && <meta key="og:url" property="og:url" content={url} />}
    </Head>
  );
}
