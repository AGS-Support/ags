import React from "react"
import { Script } from "gatsby"
export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Script src="https://my-example-script" />
    </>
  )
}
