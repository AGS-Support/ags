import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Svg from "react-inlinesvg"

import { useQuickLinks } from "../../hooks/use-quicklinks"
import { useOffices } from "../../hooks/use-offices"
import { useOptions } from "../../hooks/use-options"
import { useOptionsContactDetails } from "../../hooks/use-options-contact-details"
import { useMenuFooter } from "../../hooks/use-menu-footer"
import { useMenuHeader } from "../../hooks/use-menu-header"

import Section from "../../components/Section/Section"

import facebookLogo from "../../assets/icons/facebook.svg"
import LinkedInLogo from "../../assets/icons/linkedin.svg"
import twitterLogo from "../../assets/icons/twitter.svg"

const Footer = () => {
  const services = useQuickLinks()
  const offices = useOffices()
  const options = useOptions()

  let menu = useMenuFooter()
  if (!menu) {
    menu = [
      { label: "Privacy Policy", uri: "/privacy-policy" },
      { label: "Terms & Conditions", uri: "/terms-and-conditions" },
    ]
  }
  let headerMenu = useMenuHeader()
  if (!headerMenu) {
    headerMenu = [
      { label: "Privacy Policy", uri: "/privacy-policy" },
      { label: "Terms & Conditions", uri: "/terms-and-conditions" },
    ]
  }
  const menuLength = menu.length
  const footerOptions = options.indieRidgeOptionsFooter?.footerOptions

  const socialMediaOptions =
    options.indieRidgeOptionsContactDetails?.contactDetailsOptions
      ?.socialMediaAccounts
  const companyInfoOptions =
    options.indieRidgeOptionsCompanyInfo?.companyInfoOptions

  const footerData = {
    blurb: footerOptions?.footerBlurb,
    logos: footerOptions?.logos,
    helpForHeroesLogo: getImage(footerOptions?.helpForHeroesLogo.localFile),
    socialMedia: {
      facebook: socialMediaOptions?.facebook || "",
      linkedIn: socialMediaOptions?.linkedIn || "",
      twitter: socialMediaOptions?.twitter || "",
    },
    companyInfo: {
      companyName: companyInfoOptions?.companyName || "",
      vatNumber: companyInfoOptions?.vatNumber || "",
      companyNumber: companyInfoOptions?.companyNumber || "",
      registeredAddress: companyInfoOptions?.registeredAddress || "",
    },
  }
  const contactDetails = useOptionsContactDetails()

  const svgProps = {
    width: "24",
    height: "24",
  }

  return (
    <footer>
      <section className="bg-header angle-border angle-border-top  angle-border-header md:py-10">
        <div className="container content">
          <div className="grid text-center md:text-left grid-cols-2 md:grid-cols-5">
            {offices.map((office, index) => {
              const officeData = office.offices
              return (
                <div key={`office-${index}`}>
                  <div className="text-dark font-bold">{officeData.title}</div>
                  <div className="text-dark font-bold">
                    {officeData.region || <br />}
                  </div>
                  <div className="text-dark">{parse(officeData.address)}</div>
                </div>
              )
            })}

            <div className="col-span-2 md:col-span-1 text-dark w-[100%]">
              <div className="font-bold">Contact</div>
              <div className="">{contactDetails.telephone}</div>
              <div>{contactDetails.email}</div>
              <div className="mt-5">
                <a
                  className="inline-block h-6 mr-4"
                  href={footerData.socialMedia.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Svg src={LinkedInLogo} fill="#0A66C2" {...svgProps} />
                </a>
                <a
                  className="inline-block h-6 mr-4"
                  href={footerData.socialMedia.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Svg src={facebookLogo} fill="#1877F2" {...svgProps} />
                </a>
                <a
                  className="inline-block h-6"
                  href={footerData.socialMedia.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Svg src={twitterLogo} fill="#1DA1F2" {...svgProps} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-10 md:mt-20">
            <div className="text-para">
              <div className="text-dark font-bold">About Us</div>
              {footerData.blurb && parse(footerData.blurb)}
            </div>

            <div className="text-dark">
              <div className="font-bold">
                {" "}
                <Link to="/services">Services</Link>
              </div>
              <ul>
                {services.map(service => (
                  <li
                    key={`footer-menu-${service.uri}`}
                    className="border-b-2 border-slate py-4"
                  >
                    <Link to={service.uri}>{service.services.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-dark">
              <div className="font-bold">
                <Link to="/">AGS Support</Link>
              </div>
              <ul>
                {headerMenu.map((item, index) => {
                  return (
                    <li
                      key={`footer-menu-${item.uri}`}
                      className="border-b-2 border-slate py-4"
                    >
                      <Link to={item.uri}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="container">
          <div className="block md:flex md:justify-between text-para">
            <div className="">
              {footerData?.logos.map((logo, index) => {
                var logoImage = getImage(logo.localFile)
                return (
                  <GatsbyImage
                    key={`footer-logo-${index}`}
                    image={logoImage}
                    alt="Customer Logo"
                    className="mr-5"
                  />
                )
              })}
            </div>

            <div className="text-left md:text-center mt-10 md:mt-0 text-[0.8rem]">
              VAT No. GB {footerData.companyInfo.vatNumber} Company No.{" "}
              {footerData.companyInfo.companyNumber}
              <br /> Registered Address:{" "}
              {footerData.companyInfo.registeredAddress}
              <br /> © {new Date().getFullYear()}{" "}
              {footerData.companyInfo.companyName}.
              <div className="mt-3">
                {menu.map((item, index) => {
                  return (
                    <div key={`footer-menu-item-${index}`} className="inline">
                      <Link to={item.uri}>{item.label}</Link>
                      {index !== menuLength - 1 && <> | </>}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="block pt-3 md:pt-0">
              <p className="margin-reset">We support Help for Heroes</p>
              <GatsbyImage image={footerData.helpForHeroesLogo} />
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
