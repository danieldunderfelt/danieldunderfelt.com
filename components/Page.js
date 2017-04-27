import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Head from 'next/head'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 1em;
`

@observer
class Page extends Component {

  render() {

    return (
      <div>
        <Head>
          <title>Daniel Dunderfelt</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One|Work+Sans:300,700" rel="stylesheet" />
          {/*<link rel='shortcut icon' type='image/x-icon' href='/static/favicon.png'/>*/}
          <meta property="og:title" content="Media Match LIVE"/>
          <meta property="og:description" content="Website for the Media Match app with live statistics."/>
          <meta property="og:image" content="https://mediamatch.live/static/mediamatch_share.jpg"/>
          <meta property="og:url" content="https://mediamatch.live"/>
          <meta name="twitter:card" content="summary_large_image"/>

          <meta property="og:site_name" content="Media Match LIVE"/>
          <meta name="twitter:image:alt" content="Media Match LIVE"/>
        </Head>
        <PageWrapper>
          { this.props.children }
        </PageWrapper>

        <style jsx global>{`
          html {
            font-family: 'Work Sans';
            font-weight: 300;
            font-size: 120%;
          }
          body {
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}

export default Page

