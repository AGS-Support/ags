import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Cta from "../components/CTA"
import Section from "../components/Section"
import Partners from "../components/Partners"

const CustomerStoriesPage = ({ data }) => {
  const stories = data.allWpCustomerStory.nodes
  const pageData = data.wpPage.customerStoriesPage
  const callToAction = pageData.callToAction

  return (
    <Layout>
      <Seo title="Customer Stories" />
      <section className="">
        <div className="inner-container">
          <div className="content title">
            <h1 className="text-center">{pageData.title}</h1>
            {pageData.content && <p>{parse(pageData.content)}</p>}
          </div>
        </div>
      </section>
      <Section background="light">
        {stories.map((storyItem, index) => {
          const story = storyItem.customerStories
          const storyImage = getImage(story.logo?.localFile)
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 p-4 shadow-md mb-8 bg-white">
              <div style={{ maxWidth: "100%", width: "200px" }}>
                <GatsbyImage
                  image={storyImage}
                  objectFit="contain"
                  alt="Service Image"
                />
              </div>
              <div>
                <h2 className="margin-reset">{story.customerName}</h2>
                <p className="text-para">{story.challenge}</p>
                <Link to={storyItem.uri}>Learn More →</Link>
              </div>
            </div>
          )
        })}
      </Section>
      <section>
        <div className="container">
          <div className="content text-center">
            <h2>Who We Work With</h2>
            <Partners />
          </div>
        </div>
      </section>

      <Cta {...callToAction} />
    </Layout>
  )
}
export default CustomerStoriesPage

export const query = graphql`
  query StoriesPageQuery {
    allWpCustomerStory(sort: { fields: menuOrder, order: ASC }) {
      nodes {
        uri
        customerStories {
          customerName
          challenge
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }

    wpPage(
      tags: { nodes: { elemMatch: { slug: { eq: "customer-stories" } } } }
    ) {
      customerStoriesPage {
        title
        content
        callToAction {
          background
          headline
          content
          button {
            text
            link
            externalUrl
            internalUrl {
              ... on WpPage {
                uri
              }
            }
          }
        }
      }
    }
  }
`
