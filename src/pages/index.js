import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hello!!</h1>
    <p>I'm Simone living in recife</p>
    <p>
      Need a devloper? <Link to="/contact">Contact me.</Link>
    </p>
  </Layout>
)

export default IndexPage
