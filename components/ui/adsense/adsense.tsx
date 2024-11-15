import Script from 'next/script'
import React from 'react'

const Adsense = () => {
  return (
    <Script
     async 
     src= {"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8760087281022633"}
     crossOrigin= "anonymous"
     strategy='afterInteractive'
    />
  )
}

export default Adsense