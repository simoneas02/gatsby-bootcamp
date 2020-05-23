import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <h1>Hello!!</h1>
    <p>I'm Simone living in recife</p>
    <p>
      Need a devloper? <Link to="/contact">Contact me.</Link>
    </p>
  </Layout>
)

export default IndexPage
