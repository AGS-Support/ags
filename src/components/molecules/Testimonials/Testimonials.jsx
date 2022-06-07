import React from "react"
import PropTypes from "prop-types"
import Masonry from "react-masonry-css"

import Title from "../../atoms/Title"

import { TestimonialCard } from "../../organisms/Cards"

const Testimonials = ({ headline, testimonials, background }) => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    720: 1,
  }

  return (
    <>
      {headline && (
        <Title variant="h2" className="text-center">
          {headline}
        </Title>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              headline={testimonial.testimonials.title}
              testimonial={testimonial.testimonials.content}
              numStars={5}
              background={background}
              key={`testimonial-${index}`}
            />
          )
        })}
      </Masonry>
    </>
  )
}

Testimonials.defaultProps = {
  headline: "",
  testimonials: [],
  background: "tint",
}

Testimonials.propTypes = {
  headline: PropTypes.string,
  testimonials: PropTypes.array,
  background: PropTypes.oneOf(["", "white", "tint", "primary"]),
}

export default Testimonials
