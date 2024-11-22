import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HeroSection = () => (
    <section className="bg-secondary text-center py-20">
        <h1 className="text-5xl font-bold text-primary mb-4">Simplifying Your Visa Journey</h1>
        <p className="text-lg text-gray-700">Expert visa consultancy services to make your dreams a reality.</p>
        <div className="h-96">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} />
                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="gold" />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    </section>
);

export default HeroSection;