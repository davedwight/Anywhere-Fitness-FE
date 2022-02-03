import React from "react";
import { Link } from "react-router-dom";
import video1 from "../assets/fitt_hero.webm";
import video2 from "../assets/fitt_hero.mp4";
import poster from "../assets/poster.png";
import "../styles/Home.css";

const Home = () => {
    return (
        <div>
            <section className="hero">
                <video
                    playsInLine
                    autoPlay
                    muted
                    loop
                    poster={poster}
                    id="bgvid"
                >
                    <source src={video1} type="video/webm" />
                    <source src={video2} type="video/mp4" />
                </video>
                <div className="hero-text">
                    <h1>
                        Your own personal trainer. <br></br>Anywhere, anytime.
                    </h1>
                    <h3>
                        The easiest way to stay committed to your goals, no
                        matter where you are.
                    </h3>

                    <Link className="signup" to="/signup">
                        <button className="signup-button">Sign Up</button>
                    </Link>
                </div>
            </section>
        </div>

        // <div>
        //     <section className="hero">
        //         <video
        //             playsinline
        //             autoplay
        //             muted
        //             loop
        //             poster="../assets/poster.png"
        //             id="bgvid"
        //         >
        //             <source src="../assets/fitt_hero.webm" type="video/webm" />
        //             <source src="../assets/fitt_hero.mp4" type="video/mp4" />
        //         </video>
        //         <div className="hero-text">
        //             <h1>Workout anytime, anywhere</h1>
        //             <h3>Fitness wherever you want it with personal coaching</h3>
        //         </div>
        //     </section>
        //     <section>
        //         <h2>How it works</h2>
        //     </section>
        // </div>
    );
};

export default Home;
