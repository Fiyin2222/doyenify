import Phone from "../assets/Phone.png"
import Laptop from "../assets/Laptop.png"
import Code from "../assets/Code.png"

export default function Footer() {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-16">
                <h1 className="text-xl md:text-2xl font-semibold text-center">Explore Our Products</h1>
                <div className="flex gap-8">
                    <div className="text-center">
                        <img src={Phone} className="w-80 h-80"></img>
                        <p>Future of Data Science</p>
                    </div>
                    <div className="text-center">
                        <img src={Laptop} className="w-80 h-80"></img>
                        <p>Data Driven Companies</p>
                    </div>
                    <div className="text-center">
                        <img src={Code} className="w-80 h-80"></img>
                        <p>Deep Learning with Python</p>
                    </div>                    
                </div>
            </div>

        <div className="bg-[var(--secondaryGreen)] text-center pb-10">
            <div className="flex gap-30 justify-center p-20">
                <div className="flex flex-col">
                    <p className="font-semibold">COMPANY</p>
                    <a href="">Our Work</a>
                    <a href="">About Us</a>
                    <a href="">What We Do</a>
                    <a href="">Team</a>
                </div>   
                <div className="flex flex-col">
                    <p>CONTACT</p>
                    <p>info@doyenify.tech</p>
                    <p>+234 804567889</p>
                </div>
                <div className="flex flex-col">
                    <p>ADDRESS</p>
                    <p>120, Abayomi Kofo Victoria Island, Lagos State</p>
                </div>
            </div>
            <p>Copyright, 2023. All rights reserved.</p>
        </div>

        </>
    )
}