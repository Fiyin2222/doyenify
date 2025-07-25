import Navbar from "../components/Navbar"
import Background from "../assets/BG.png"
import CuriousMan from "../assets/CuroiusMan.png"
import MindMan from "../assets/MindMan.png"
import Togetherness from "../assets/Togetherness.png"

export default function Header() {
    return (
        <div
            className="w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Background})` }}
        >   
            
            <Navbar />
            {/* Centered Heading */}
            <div className="flex flex-col gap-9 justify-center m-20">
                <h1 className="text-[var(--primaryGreen)] text-xl md:text-2xl font-bold text-center">
                    Welcome to Doyenify Technologies
                </h1>
                <p className="text-white text-center w-3/5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi nibh phasellus morbi. Sit interdum faucibus urna, aliquam risus erat nunc, nibh. Odio vitae</p>
                <button className="bg-[var(--grey)] text-white w-50 self-center justify-center items-center py-2 font-bold border-2 border-white rounded-full">View Our Work</button>
            </div>

            <div className="md:flex justify-center gap-8">
                <div className="flex gap-3 justify-center items-center bg-white w-50 h-23">
                    <img src={CuriousMan} className="w-12 h-15" alt="Curious Man" />
                    <p className="font-medium text-2xl">30k<br></br>
                        <span className="text-[13px]">Complete Projects</span></p>
                </div>
                <div className="flex gap-3 justify-center items-center bg-white w-50 h-23">
                    <img src={MindMan} className="w-12 h-15" alt="Curious Man" />
                    <p className="font-medium text-2xl">13k<br></br>
                        <span className="text-[13px]">Experience Team</span></p>
                </div>
                <div className="flex gap-3 justify-center items-center bg-white w-50 h-23">
                    <img src={Togetherness} className="w-12 h-15" alt="Curious Man" />
                    <p className="font-medium text-2xl">27k<br></br>
                        <span className="text-[13px]">Active on clients</span></p>
                </div>
            </div>

        </div>
    )
}
 