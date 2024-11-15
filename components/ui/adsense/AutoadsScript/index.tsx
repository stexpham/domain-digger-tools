import Script from 'next/script';

export const Adsense = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      data-full-width-responsive="false"
    />
  );
};
