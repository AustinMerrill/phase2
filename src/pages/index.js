import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <main>
        <div>
          <h1
            id="h1Text"
            class="text-4xl text-left font-bold leading-snug text-gray-700 md:container md:mx-auto lg:w-3/4 lg:text-6xl lg:leading-none md:text-center"
          >
            I help businesses grow by creating software experiences that are
            simple and delightful.
          </h1>
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
