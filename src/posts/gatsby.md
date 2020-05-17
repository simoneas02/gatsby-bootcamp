---
title: "Cool Gatsby Bootcamp"
date: "2020-05-17"
---

I just launched a new bootcamp!

# Topics Covered

1. Gatsby
2. GraphQL
3. React

import { graphql, useStaticQuery } from "gatsby"
const data = useStaticQuery(graphql`query { site { siteMetadata { author } } }`)
{data.site.siteMetadata.author}
