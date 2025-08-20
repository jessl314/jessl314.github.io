import "./Hero.css"

interface HeroProps {
  onNext: () => void;
  animated: string;
  elevPitch: string;
}
// do something similar for all frontend pages 
// if optional do something like: demoLink?: string;
// and below do demolink = "Not Available"
const Hero = ({ onNext, animated, elevPitch}: HeroProps) => {

    return (
        
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg">Frontend Developer | Designer | Problem Solver</p>
        </div>
    )

}

export default Hero;