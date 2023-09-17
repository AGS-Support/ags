import * as React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import { useQuickLinks } from "../../../hooks/use-quicklinks"

const Quicklinks = ({ headline, links }) => {
  const services = useQuickLinks()

  return (
    <section className="quick-links angle-border angle-border-top angle-border-brand">
      <div className="container">
        <div className="content ">
          <h2 className="pt-10 margin-reset">{parse(headline)}</h2>
          <div className="block quickLinks:flex quickLinks:justify-between">
            <ul className="list-reset list-inline mr-10">
              {services.map(service => {
                return (
                  <li key={service.slug} className="mb-4 md:mb-0">
                    <Link
                      to={`services/${service.slug}`}
                      className="text-white underline font-normal"
                    >
                      {service.services.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mb-5 mt-10 flex flex-col md:my-0 md:flex-row gap-2">
              <a
                href={`${process.env.GATSBY_CALENDLY_URL}`}
                className="font-bold rounded-lg border-2   text-center w-[100%]   mb-5 md:mb-0 bg-brand border-white text-white block quickLinks:inline quickLinks:w-auto p-4"
              >
                Book a free call
              </a>
              <Link
                to="contact-us"
                className="font-bold rounded-lg border-2   text-center w-full   mb-5 md:mb-0 bg-secondary border-secondary text-white block quickLinks:inline quickLinks:w-auto p-4"
              >
                Call us now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quicklinks
