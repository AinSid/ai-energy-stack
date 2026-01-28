import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

function Layer({ position, color, layerIndex, width = 2.4, height = 0.12, depth = 2.4, glow = false, onSelect, isHovered, onHover }) {
    const mesh = useRef()
    const [localHovered, setLocalHovered] = useState(false)

    const highlighted = isHovered || localHovered

    useFrame((state) => {
        if (mesh.current) {
            const t = state.clock.elapsedTime
            // Further reduced intensity for subtler glow
            const intensity = (glow || highlighted) ? 0.8 + Math.sin(t * 3) * 0.2 : 0.05
            mesh.current.material.emissiveIntensity = THREE.MathUtils.lerp(
                mesh.current.material.emissiveIntensity,
                intensity,
                0.1
            )

            const targetY = highlighted ? 0.06 : 0
            mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, targetY, 0.1)

            const targetScale = highlighted ? 1.01 : 1
            mesh.current.scale.x = THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, 0.1)
            mesh.current.scale.z = THREE.MathUtils.lerp(mesh.current.scale.z, targetScale, 0.1)
        }
    })

    return (
        <group position={position}>
            <RoundedBox
                ref={mesh}
                args={[width, height, depth]}
                radius={0.04}
                smoothness={4}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setLocalHovered(true);
                    onHover(layerIndex);
                    document.body.style.cursor = 'pointer'
                }}
                onPointerOut={(e) => {
                    setLocalHovered(false);
                    onHover(null);
                    document.body.style.cursor = 'auto'
                }}
                onClick={(e) => { e.stopPropagation(); onSelect(layerIndex) }}
            >
                <meshPhysicalMaterial
                    color={highlighted ? '#2a2a2a' : (color === '#222222' ? '#1a1a1a' : (color === '#333333' ? '#2d2d2d' : color))}
                    transparent
                    opacity={highlighted ? 0.6 : 0.88}
                    metalness={1}
                    roughness={0}
                    emissive={highlighted ? '#bae6fd' : color}
                    emissiveIntensity={highlighted ? 0.4 : 0.05}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    reflectivity={1}
                    envMapIntensity={4}
                />
            </RoundedBox>
        </group>
    )
}

export default function EnergyStack({ onLayerSelect, hoveredLayer, onLayerHover, ...props }) {
    const group = useRef()

    return (
        <group ref={group} {...props}>
            <group position={[0.5, 0, 0]}>
                <Layer layerIndex={0} position={[0, 1.8, 0]} width={1.8} height={0.10} depth={1.8} color="#bbbbbb" glow onSelect={onLayerSelect} isHovered={hoveredLayer === 0} onHover={onLayerHover} />
                <Layer layerIndex={1} position={[0, 1.35, 0]} width={2.2} height={0.12} depth={2.2} color="#ff0000" onSelect={onLayerSelect} isHovered={hoveredLayer === 1} onHover={onLayerHover} />
                <Layer layerIndex={2} position={[0, 0.75, 0]} width={2.6} height={0.18} depth={2.6} color="#888888" onSelect={onLayerSelect} isHovered={hoveredLayer === 2} onHover={onLayerHover} />
                <Layer layerIndex={3} position={[0, 0.0, 0]} width={3.0} height={0.22} depth={3.0} color="#666666" onSelect={onLayerSelect} isHovered={hoveredLayer === 3} onHover={onLayerHover} />
                <Layer layerIndex={4} position={[0, -0.95, 0]} width={3.4} height={0.28} depth={3.4} color="#555555" onSelect={onLayerSelect} isHovered={hoveredLayer === 4} onHover={onLayerHover} />
                <Layer layerIndex={5} position={[0, -2.1, 0]} width={3.8} height={0.35} depth={3.8} color="#444444" onSelect={onLayerSelect} isHovered={hoveredLayer === 5} onHover={onLayerHover} />

                <mesh position={[0, -0.15, 0]}>
                    <cylinderGeometry args={[0.025, 0.025, 4.5, 32]} />
                    <meshPhysicalMaterial
                        color="#00d4ff"
                        emissive="#00d4ff"
                        emissiveIntensity={1.5}
                        transparent
                        opacity={0.7}
                        metalness={1}
                        roughness={0}
                    />
                </mesh>
            </group>
        </group>
    )
}
