import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useState } from 'react';

const Hero = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-center py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-6xl font-extrabold text-white mb-6">Explore the Universe of Opportunities</h1>
                <p className="text-xl text-gray-200 mb-8">Join us on a journey to discover endless possibilities with our expert guidance.</p>
                <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                    Get Started
                </button>
                <div className="h-96 mt-12">
                    <Canvas>
                        <ambientLight intensity={0.3} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Stars />
                        <mesh
                            onPointerOver={() => setHovered(true)}
                            onPointerOut={() => setHovered(false)}
                            scale={hovered ? 1.2 : 1}
                            position={[0, 0, 0]}
                        >
                            <icosahedronGeometry args={[1, 0]} />
                            <meshStandardMaterial color={hovered ? "lightblue" : "skyblue"} />
                        </mesh>
                        <OrbitControls />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Hero;