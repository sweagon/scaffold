import Button from "../../utils/Button"
import Heading from "../../utils/Heading"
import Section from "../../utils/Section"

const Hero = () => {
  return (
    <Section id="intro" ariaLabel="Introduction section" className="bg-blue-500 text-white">
      <Heading level={1} className="text-center">
        This is a Heading 1
      </Heading>
      <p>This is the introduction section.</p>
      <Button
        variant="secondary"
        size="medium"
        onClick={() => alert('Primary Button Clicked!')}
        className="custom-class"
      >
        Primary Button
      </Button>
    </Section>
  )
}

export default Hero
