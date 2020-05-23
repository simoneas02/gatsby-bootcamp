import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>About Me</h1>
    <p>
      I love codes and in my free time I usually spend a lot of time sharing
      with the world about my journey as a developer.
    </p>

    <p>
      <Link to="/contact">Want to work with me? Reach out.</Link>
    </p>
  </Layout>
)

export default AboutPage
