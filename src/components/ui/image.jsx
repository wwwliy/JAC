import * as React from "react"

const Image = React.forwardRef(({ src, fittingType = "fill", className, ...props }, ref) => (
  <img
    ref={ref}
    src={src}
    {...props}
    className={`${className || ""} ${fittingType === "fit" ? "object-contain" : "object-cover"}`.trim()}
  />
))

Image.displayName = "Image"
export { Image }
