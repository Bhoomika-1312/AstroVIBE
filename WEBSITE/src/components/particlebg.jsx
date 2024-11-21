import particlesconfig from "./particle-config";
import Particles from "react-tsparticles";
console.log("hey")
const Particlebg = () => {
  return (
    <Particles
      id="tsparticles"
      options={particlesconfig}>
    </Particles>
  )
}

export default Particlebg;
