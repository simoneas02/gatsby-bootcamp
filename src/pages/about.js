import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      I love codes and in my free time I usually spend a lot of time toshare
      with the world about my journing as a developer.
    </p>

    <p>
      <Link to="/contact">Want to work with me? Reach out.</Link>
    </p>
  </Layout>
)

export default AboutPage
