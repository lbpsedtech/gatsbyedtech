// Example preview.js file

import * as React from "react"
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews"

// Update the path to your Link Resolver
// import { linkResolver } from "../utils/linkResolver"

const PreviewPage = () => {
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage)
