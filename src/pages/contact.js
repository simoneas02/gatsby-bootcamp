import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact</h1>
    <p>
      You can found me on
      <a
        href="https://twitter.com/samorim02"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      or on
      <a
        href="https://github.com/simoneas02"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      .
    </p>
  </Layout>
)

export default ContactPage
