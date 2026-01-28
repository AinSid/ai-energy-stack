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
    const [showAbout, setShowAbout] = useState(false)
    const activeLayer = selectedLayerIndex !== null ? layerInfo[selectedLayerIndex] : null

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="w-full h-screen bg-brand-dark relative overflow-hidden">
            {/* Top Right About Link */}
            <button
                className="hidden md:block absolute top-6 right-6 z-20 text-white/70 hover:text-white font-mono text-sm tracking-widest uppercase transition-colors"
                onClick={() => setShowAbout(true)}
            >
                [ About ]
            </button>

            {/* 3D Scene */}
            <div className={`w-full h-full transition-all duration-700 ${selectedLayerIndex !== null || showAbout ? 'opacity-30 scale-95 blur-sm' : ''}`}>
                <Canvas camera={{ position: isMobile ? [11, 8, 11] : [6, 4, 6], fov: isMobile ? 45 : 40 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.25} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#00d4ff" />

                        <EnergyStack
                            position={isMobile ? [-2.0, -1.0, 0] : [-1, 0, 0]}
                            onLayerSelect={setSelectedLayerIndex}
                            hoveredLayer={hoveredLayer}
                            onLayerHover={setHoveredLayer}
                        />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate={!selectedLayerIndex && !showAbout}
                            autoRotateSpeed={0.5}
                        />
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <Environment
                            files="/textures/golden_gate_reflection.jpg"
                            background={false}
                            intensity={1.2}
                            environmentRotation={[0, (100 * Math.PI) / 180, 0]}
                        />
                    </Suspense>
                </Canvas>
            </div>

            <div className={`absolute top-0 left-0 w-full p-6 md:p-16 z-10 pointer-events-none transition-opacity duration-500 ${selectedLayerIndex !== null || showAbout ? 'opacity-0' : 'opacity-100'} ${isMobile ? 'bg-gradient-to-b from-black via-black/80 to-transparent pb-32' : ''}`}>
                <div
                    className="cursor-pointer group mb-6 inline-block pointer-events-auto"
                    onClick={() => setShowAbout(true)}
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 uppercase group-hover:to-white transition-all">
                        THE AI ENERGY STACK
                    </h1>
                    <p className="text-brand-blue text-xs md:text-sm font-mono uppercase tracking-[0.2em] group-hover:text-brand-blue/80 transition-colors">
                        The Physics of Intelligence
                    </p>
                </div>
                <div className="mt-4 md:mt-8 max-w-lg pointer-events-auto">
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4">
                        <strong className="text-white font-medium">The primary bottleneck to intelligence today is power.</strong> We are visualizing the $6.7 trillion machine required to turn electricity into thought, mapping the bottlenecks from the nanometer-scale chip to the gigawatt-scale nuclear reactor. This is the physical reality behind the digital revolution.
                    </p>
                    <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-8">
                        <button
                            className="text-brand-blue font-medium text-xs uppercase tracking-widest hover:text-white transition-colors text-left"
                            onClick={() => setShowAbout(true)}
                        >
                            {isMobile ? "Learn more" : "Learn more about this project."}
                        </button>
                        <p className="text-gray-500 font-medium text-[10px] md:text-xs uppercase tracking-widest animate-pulse">
                            {isMobile ? "Click a layer to explore" : "Click a layer to explore details →"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Labels - Right Side */}
            <div className={`md:hidden absolute right-4 top-[55%] -translate-y-1/2 z-10 pointer-events-none transition-opacity duration-500 ${selectedLayerIndex !== null || showAbout ? 'opacity-0' : 'opacity-100'}`}>
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
            <div className={`hidden md:block absolute right-[32%] top-1/2 z-10 pointer-events-none transition-opacity duration-500 ${selectedLayerIndex !== null || showAbout ? 'opacity-0' : 'opacity-100'}`}>
                <div className="relative" style={{ height: '600px', transform: 'translateY(-50%)' }}>
                    {[
                        { label: 'The Model', index: 0, top: '10%' },
                        { label: 'The Chip', index: 1, top: '24%' },
                        { label: 'The Rack', index: 2, top: '40%' },
                        { label: 'The Facility', index: 3, top: '56%' },
                        { label: 'The Grid', index: 4, top: '72%' },
                        { label: 'The Electron', index: 5, top: '90%' },
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

            {/* About Modal */}
            <AnimatePresence>
                {showAbout && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            onClick={() => setShowAbout(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl max-h-[85vh] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-y-auto p-8 md:p-12 z-50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowAbout(false)}
                                className="absolute top-6 right-6 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                                Mapping the Power Usage of Artificial Intelligence
                            </h2>

                            <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                                <p>
                                    The global technology sector is navigating a fundamental regime change. For the past twenty years, the digital economy was defined by software efficiency and the virtualization of resources. As of 2026, the paradigm has inverted. The rise of Generative AI and Large Language Models (LLMs) has transitioned the industry into a phase of massive physical capital intensity. The primary constraints are no longer code or silicon availability. They are now thermodynamics, electron delivery, and construction supply chains.
                                </p>
                                <p>
                                    This project maps the AI Energy Stack, which is the vertically integrated value chain required to power the next generation of intelligence. We estimate that global data center capital expenditures (CAPEX) will cumulatively reach $6.7 trillion by 2030. This investment wave is driven by a singular reality. The computational density required for frontier model training and inference has outpaced the existing capabilities of the global power grid and traditional air-cooled facility designs.
                                </p>
                                <p>
                                    From the microscopic architecture of the transistor to the macroscopic regulation of the electrical grid, this visualization tracks where the capital is flowing, where the bottlenecks are forming, and why the technology sector is rapidly becoming the world's largest financier of nuclear energy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Layer Modal Overlay */}
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
                            className="relative w-full max-w-5xl h-[82vh] md:h-[80vh] bg-black/90 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50"
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
                                    <div className="text-lg md:text-4xl font-mono text-white font-bold mb-1">{activeLayer.stat}</div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 p-6 md:p-12 overflow-y-auto flex-1">
                                <div className="space-y-8">
                                    {activeLayer.blocks.map((block, index) => {
                                        if (block.type === 'text') {
                                            return (
                                                <div key={index}>
                                                    {block.title && block.title !== 'Overview' && block.title !== 'Simplified Overview' && (
                                                        <h4 className="text-xs md:text-sm font-bold text-white mb-3 flex items-center uppercase tracking-wider">
                                                            <span className={`w-2 h-2 rounded-full mr-3 ${index % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-hot'}`}></span>
                                                            {block.title}
                                                        </h4>
                                                    )}
                                                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                                        {block.content}
                                                    </p>
                                                </div>
                                            )
                                        } else if (block.type === 'table') {
                                            return (
                                                <div key={index} className="mt-8 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                                                    {block.title && (
                                                        <div className="bg-white/5 px-4 py-3 border-b border-white/10">
                                                            <h4 className="text-xs font-bold text-white/90 uppercase tracking-wider">
                                                                {block.title}
                                                            </h4>
                                                        </div>
                                                    )}
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left text-[10px] md:text-sm">
                                                            <thead>
                                                                <tr className="bg-white/5 text-gray-400 font-mono text-[10px] md:text-xs uppercase">
                                                                    {block.headers.map((header, i) => (
                                                                        <th key={i} className="px-4 py-3 font-medium whitespace-nowrap">
                                                                            {header}
                                                                        </th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-white/5">
                                                                {block.rows.map((row, rIndex) => (
                                                                    <tr key={rIndex} className="hover:bg-white/5 transition-colors">
                                                                        {row.map((cell, cIndex) => (
                                                                            <td key={cIndex} className={`px-4 py-3 text-gray-300 border-r border-white/5 last:border-0 ${cIndex === 0 ? 'font-medium text-white' : ''}`}>
                                                                                {cell}
                                                                            </td>
                                                                        ))}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return null
                                    })}
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
