import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleBubble = () => {
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
                particles: {
                    number: { value: 400, density: { enable: false, height: 800, width: 800 } },
                    color: { value: "#fff" },
                    shape: {
                        type: "circle",
                        options: {
                            stroke: { width: 0, color: "#000000" },
                            image: { src: "img/github.svg", width: 100, height: 100 },
                            polygon: { nb_sides: 5 },
                        }
                    },
                    opacity: {
                        value: 0.5,
                        animation: { enable: false, speed: 1, sync: false }
                    },
                    size: {
                        value: 10,
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
                    line_linked: {
                        enable: false,
                        distance: 500,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 2
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "bottom",
                        random: false,
                        straight: false,
                        outModes: "out",
                        // bounce: false,
                        attract: { enable: false, rotate: { x: 600, y: 1200 } }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onHover: { enable: true, mode: "bubble" },
                        onClick: { enable: true, mode: "repulse" },
                        resize: { enable: true }
                    },
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 0.5 } },
                        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                },
                retina_detect: true
            }}
        />
    );
};

export default ParticleBubble;