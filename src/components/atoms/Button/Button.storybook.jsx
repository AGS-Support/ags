import React from "react"
import PropTypes from "prop-types"

const ButtonStoryBook = ({
  children,
  to,
  variant,
  type,
  className,
  size,
  width,
  arrowPosition,
}) => {
  if (type === "calendly") {
    to = "https://calendly.com"
  }
  const padding = {
    sm: "2",
    md: "4",
    lg: "6",
  }

  className += ` p-${padding[size]}`

  className +=
    width === "grow"
      ? " block md:inline-block md:w-[250px]"
      : " block md:inline md:w-auto"

  switch (variant) {
    case "primary":
      className += " bg-primary border-primary text-white"
      break
    case "secondary":
      className += " bg-secondary border-secondary text-white"
      break
    case "primary-outline":
      className += " bg-white border-primary text-primary"
      break
    case "secondary-outline":
      className += " bg-white border-secondary text-primary"
      break
    case "white-outline":
      className += " bg-primary border-white text-white"
      break
    case "tertiary":
      className = " text-primary underline"
      break
    default:
      className += " "
  }

  if (variant === "tertiary") {
    switch (type) {
      case "internal":
        return (
          <>
            {arrowPosition === "left" && "← "}
            <a href={to} className={className}>
              {children}
            </a>
            {arrowPosition === "right" && " →"}
          </>
        )

      case "external":
        return (
          <>
            {arrowPosition === "left" && "← "}
            <a href={to} className={className}>
              {children}
            </a>
            {arrowPosition === "right" && " →"}
          </>
        )

      case "calendly":
        return (
          <a href="https://calendly.com" className={className}>
            {children}
          </a>
        )

      default:
        return null
    }
  }

  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}
ButtonStoryBook.defaultProps = {
  to: "",
  variant: "primary",
  width: "normal",
  size: "md",
  type: "internal",
  className:
    "font-bold rounded rounded-lg border-2   text-center w-[100%]   mb-5 md:mb-0",
  arrowPosition: "right",
}

ButtonStoryBook.propTypes = {
  variant: PropTypes.oneOf([
    "",
    "primary",
    "secondary",
    "primary-outline",
    "secondary-outline",
    "tertiary",
    "white-outline",
  ]),
  type: PropTypes.oneOf(["internal", "external", "calendly"]),
  arrowPosition: PropTypes.oneOf(["left", "right"]),
  width: PropTypes.oneOf(["", "normal", "wide", "grow"]),
}

export default ButtonStoryBook
