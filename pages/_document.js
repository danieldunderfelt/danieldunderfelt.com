import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

class MyDocument extends Document {

  static async getInitialProps({ renderPage }) {
    const page = renderPage()

    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }}/>
    )

    return { ...page, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Daniel Dunderfelt</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-50845459-3', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');` }}></script>
        </body>
      </html>
    )
  }
}

export default MyDocument
