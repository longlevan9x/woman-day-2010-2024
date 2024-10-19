import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleHearts = () => {

    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            // await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            // await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded: any = (container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: false,
                            width: 1000,
                            height: 1000
                        }
                    },
                    color: { value: "#ffffff" },
                    shape: {
                        // fill: false,
                        // close: false,
                        type: "image",
                        options: {
                            image: [
                                { src: "/icons/heart-1.png", width: 100, height: 100 },
                                { src: "/icons/heart-2.png", width: 100, height: 100 },
                                { src: "/icons/heart-3.png", width: 100, height: 100 },
                                { src: "/icons/love-1.png", width: 100, height: 100 },
                                { src: "/icons/rose-1.png", width: 100, height: 100 },
                                { src: "/icons/rose-2.png", width: 100, height: 100 },
                                { src: "/icons/rose-3.png", width: 100, height: 100 },
                            ],
                            stroke: { width: 0, color: "#000000" },
                            polygon: { nb_sides: 5 },
                        }
                    },
                    opacity: {
                        value: {
                            max: 1,
                            min: 0.3
                        },
                        animation: { enable: false, speed: 1, mode: "auto", sync: false }
                    },
                    size: {
                        value: {
                            max: 30,
                            min: 5
                        },
                        animation: {
                            destroy: "none",
                            mode: "random",
                            enable: false,
                            speed: 10,
                            sync: false,
                            count: 10,
                            decay: 10,
                            delay: 10,
                            startValue: 'random'
                        },
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: false,
                        opacity: 15,
                        width: 2,
                    },
                    move: {
                        enable: true,
                        speed: 4,
                        direction: "top",
                        // size: true,
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                        attract: { enable: false, rotate: { x: 600, y: 1200 } }
                    }
                },
                interactivity: {
                    //     detect_on: "canvas",
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            // mode: ["grab", "bubble", 'repulse'],
                            mode: 'repulse',
                        },
                        resize: { enable: true },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        remove: {
                            particles_nb: 2
                        }
                    },
                },
                detectRetina: true
            }}
        />
    );
};

export default ParticleHearts;