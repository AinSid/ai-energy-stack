import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import { AnimatePresence, motion } from 'framer-motion'
import EnergyStack from './components/EnergyStack'
import { layerInfo } from './data/layerInfo'

function App() {
    const [selectedLayerIndex, setSelectedLayerIndex] = useState(null)
    const [hoveredLayer, setHoveredLayer] = useState(null)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const activeLayer = selectedLayerIndex !== null ? layerInfo[selectedLayerIndex] : null

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="w-full h-screen bg-brand-dark relative overflow-hidden">
            {/* 3D Scene */}
            <div className={`w-full h-full transition-all duration-700 ${selectedLayerIndex !== null ? 'opacity-30 scale-95 blur-sm' : ''}`}>
                <Canvas camera={{ position: isMobile ? [11, 8, 11] : [6, 4, 6], fov: isMobile ? 45 : 40 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.25} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#00d4ff" />

                        <EnergyStack
                            position={isMobile ? [-1.8, -2.5, 0] : [-1, 0, 0]}
                            onLayerSelect={setSelectedLayerIndex}
                            hoveredLayer={hoveredLayer}
                            onLayerHover={setHoveredLayer}
                        />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate={!selectedLayerIndex}
                            autoRotateSpeed={0.5}
                        />
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <Environment
                            files="/textures/golden_gate_reflection.jpg"
                            background={false}
                            intensity={1.2}
                        />
                    </Suspense>
                </Canvas>
            </div>

            <div className={`absolute top-0 left-0 w-full p-6 md:p-16 z-10 pointer-events-none transition-opacity duration-500 ${selectedLayerIndex !== null ? 'opacity-0' : 'opacity-100'} ${isMobile ? 'bg-gradient-to-b from-black via-black/80 to-transparent pb-32' : ''}`}>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 uppercase">
                    THE AI ENERGY STACK
                </h1>
                <p className="text-gray-400 text-sm md:text-2xl max-w-2xl leading-relaxed font-light">
                    Frontier AI isn't limited by code. It's limited by physics.
                </p>
                <div className="mt-4 md:mt-8 max-w-lg">
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-2">
                        This interactive guide visualizes the physical infrastructure required to power frontier AI. From GPU clusters to the power grid, these are the critical layers bridging the gap between code and physics.
                    </p>
                    <p className="text-brand-blue font-medium text-[10px] md:text-xs uppercase tracking-widest animate-pulse">
                        Click any layer to explore
                    </p>
                </div>
            </div>

            {/* Mobile Labels - Right Side */}
            <div className={`md:hidden absolute right-4 top-[50%] -translate-y-1/2 z-10 pointer-events-none transition-opacity duration-500 ${selectedLayerIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col space-y-8 pointer-events-auto items-end">
                    {layerInfo.map((layer, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2"
                            onClick={() => setSelectedLayerIndex(index)}
                        >
                            <span className="text-white/80 text-[10px] font-mono uppercase tracking-wider text-right">{layer.title.split('. ')[1] || layer.title}</span>
                            <div className="w-6 h-[1px] bg-brand-blue/50"></div>
                            <span className="text-brand-blue font-mono text-xs font-bold">{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Labels Overlay - Desktop - Pure DOM, no 3D */}
            <div className={`hidden md:block absolute right-[32%] top-1/2 z-10 pointer-events-none transition-opacity duration-500 ${selectedLayerIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                <div className="relative" style={{ height: '600px', transform: 'translateY(-50%)' }}>
                    {[
                        { label: 'AI Compute Model', index: 0, top: '10%' },
                        { label: 'GPU Cluster', index: 1, top: '24%' },
                        { label: 'Rack Infrastructure', index: 2, top: '40%' },
                        { label: 'Hyperscale Facility', index: 3, top: '56%' },
                        { label: 'Grid Interconnect', index: 4, top: '72%' },
                        { label: 'Generation Source', index: 5, top: '90%' },
                    ].map((item) => (
                        <div
                            key={item.index}
                            className={`absolute flex items-center space-x-4 cursor-pointer pointer-events-auto transition-all duration-300 ${hoveredLayer === item.index ? 'scale-105' : ''}`}
                            style={{ top: item.top, transform: 'translateY(-50%)' }}
                            onClick={() => setSelectedLayerIndex(item.index)}
                            onMouseEnter={() => setHoveredLayer(item.index)}
                            onMouseLeave={() => setHoveredLayer(null)}
                        >
                            <div className={`h-[2px] transition-all duration-300 ${hoveredLayer === item.index ? 'w-16 bg-brand-blue shadow-[0_0_10px_#00d4ff]' : 'w-10 bg-white/30 group-hover:bg-white/60'}`} />
                            <div className={`flex items-center space-x-3 transition-all duration-300 ${hoveredLayer === item.index ? 'text-white drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]' : 'text-white/70'}`}>
                                <span className={`font-mono text-lg font-bold ${hoveredLayer === item.index ? 'text-brand-blue' : ''}`}>
                                    {item.index + 1}.
                                </span>
                                <span className="font-mono text-base font-semibold uppercase tracking-[0.1em] whitespace-nowrap">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {activeLayer && (
                    <div className="absolute inset-0 z-50 flex items-start md:items-center justify-center p-4 pt-2 md:pt-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            onClick={() => setSelectedLayerIndex(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-5xl h-[82vh] md:h-[80vh] bg-black/90 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedLayerIndex(null)}
                                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                ✕
                            </button>

                            <div className="w-full md:w-1/3 bg-gray-900/50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col justify-between relative overflow-hidden shrink-0">
                                <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-3xl" style={{ backgroundColor: activeLayer.color }} />

                                <div>
                                    <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">LAYER {selectedLayerIndex + 1}</div>
                                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 md:mb-4 text-white">{activeLayer.title}</h2>
                                    <h3 className="text-base md:text-xl text-white font-light">{activeLayer.subtitle}</h3>
                                </div>

                                <div className="mt-4 md:mt-12 flex md:block items-baseline gap-4">
                                    <div className="text-2xl md:text-4xl font-mono text-white font-bold mb-1">{activeLayer.stat}</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-wider">Estimated Scale</div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 p-6 md:p-12 overflow-y-auto flex-1">
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 md:mb-8">
                                    {activeLayer.description}
                                </p>

                                <div className="space-y-6 md:space-y-8">
                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold text-white mb-2 md:mb-3 flex items-center">
                                            <span className="w-2 h-2 rounded-full mr-2 bg-brand-blue"></span>
                                            THE CHALLENGE
                                        </h4>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                            Scaling this layer faces significant physical/economic hurdles.
                                            We need 10x improvement here to support next-gen models.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold text-white mb-2 md:mb-3 flex items-center">
                                            <span className="w-2 h-2 rounded-full mr-2 bg-brand-hot"></span>
                                            BOTTLENECK STATUS
                                        </h4>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                            Currently operating at near-capacity. Lead times for components in this layer range from 18-36 months.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="hidden md:block absolute bottom-6 right-6 z-10 text-right pointer-events-none">
                <div className="text-brand-blue/60 font-mono text-[10px] tracking-wider">
                    SYSTEM STATUS: <span className="text-white/80 animate-pulse">ONLINE</span>
                </div>
            </div>
        </div>
    )
}

export default App
