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
import Header2 from "../components/header2"

const Layout = ({ children }) => {
 
  return (
    <div className="container flex flex-col items-center justify-between h-screen p-5 mx-auto ">
      {/* <Header /> */}
      <Header2 />
      <main>{children}</main>
      <Footer />
    </div>
  )
}



export default Layout
