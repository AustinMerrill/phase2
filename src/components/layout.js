/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
 
  return (
    <div className="flex flex-col justify-between h-screen items-center p-5  container mx-auto ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}



export default Layout
