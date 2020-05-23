import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFound = () => (
  <Layout>
    <h1>Page not found</h1>
    <p>
      <Link to="/">Head Home</Link>
    </p>
  </Layout>
)

export default NotFound
