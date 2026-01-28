export const layerInfo = [
    {
        title: "1. THE MODEL",
        subtitle: "Inference & Training",
        description: "Think of this layer as the brain of the system. It represents the software models that demand energy to learn and to answer questions. As these models get smarter, they require exponentially more power to operate. The economic narrative has shifted from training to inference—while training a model like GPT-4 is a massive one-time energy spike, 'reasoning' models that think for seconds or minutes before answering are creating a permanent, scaling baseload demand.",
        stat: "60% Inference Load",
        color: "#ffffff",
        challenge: "The 'Jevons Paradox' of Intelligence. Hardware optimization has reduced unit costs 280-fold, but usage volume has grown 31x. We are not saving energy; we are inducing massive new demand.",
        bottleneck: "Reasoning models (like o1) now consume 0.3Wh - 1Wh per query, shifting the energy load from a 'datacenter' problem to a 'national grid' problem."
    },
    {
        title: "2. THE CHIP",
        subtitle: "The Thermal Wall",
        description: "This layer is the engine. The silicon chips that do the math have become so dense that they generate heat levels traditional fans can't manage. We have crossed the 1,000 Watt barrier per chip (vs 200W historically). To sustain Moore's Law, designers are packaging multiple massive dies together, creating a density of heat that defies physics. The heat flux now exceeds the capacity of air cooling, making liquid cooling a thermodynamic necessity.",
        stat: "1,200 Watts / Chip",
        color: "#ff4444",
        challenge: "Thermodynamics at the nanometer scale. We are packing multiple massive dies together to sustain Moore's Law, creating a heat flux that exceeds the physical capacity of air cooling.",
        bottleneck: "The end of the Air Cooled Era. Chips now draw 1,000W+ each. Liquid cooling is no longer an option but a requirement to prevent thermal shutdown."
    },
    {
        title: "3. THE RACK",
        subtitle: "The Density Shift",
        description: "The unit of compute has shifted from the single server to the entire rack. The Nvidia GB200 NVL72 is a rack-scale computer containing 72 GPUs acting as a single entity. A single rack now consumes 120 kilowatts (kW)—compared to just 7 kW for a legacy rack. To save power, engineers use copper cabling instead of fiber, but this limits cable length to 0.8 meters, forcing the hardware into a dense 'thermal bomb' configuration.",
        stat: "120 kW / Rack",
        color: "#666666",
        challenge: "The copper paradox. To save 20kW of power per rack, engineers use copper cables instead of fiber. But copper only works over 0.8 meters, forcing 72 GPUs into a single dense cabinet.",
        bottleneck: "A thermal bomb. This density creates a rack that consumes 120kW (vs 7kW legacy), requiring direct-to-chip liquid cooling plumbing that most facilities cannot support."
    },
    {
        title: "4. THE FACILITY",
        subtitle: "The Gigawatt Campus",
        description: "These are no longer just warehouses; they are gigawatt-scale industrial plants that consume as much electricity as a medium-sized city. We are witnessing the emergence of single sites designed for 1 GW of power (e.g., Stargate). Construction costs have hit $11.3 million per MW. Water usage is also critical, with demand projected to reach 6.6 trillion liters by 2030, driving a shift to zero-water closed-loop cooling systems.",
        stat: "1 GW Capacity",
        color: "#444444",
        challenge: "Capital intensity. These are gigawatt-scale industrial plants. Construction costs have hit $11.3 million per MW, with supply chains for cooling and backup power stretched to the breaking point.",
        bottleneck: "Water usage. AI demand is projected to consume 4.2-6.6 trillion liters of water by 2030, forcing a mandatory shift to zero-water cooling designs in regulated regions."
    },
    {
        title: "5. THE GRID",
        subtitle: "The Long Wait",
        description: "The grid is currently the biggest bottleneck. As of 2025, there are over 2.6 Terawatts of generation capacity stuck in interconnection queues—waiting years just for permission to plug in. Even with permission, hardware is missing: Large Power Transformers (LPTs) needed to step down voltage have lead times of 210 weeks (4 years). You can buy GPUs today, but you might not be able to energize them until 2029.",
        stat: "5 Year Queue",
        color: "#333333",
        challenge: "The 2.6 Terawatt Queue. There is twice as much generation capacity stuck waiting for grid connection permission than the entire installed capacity of the US grid.",
        bottleneck: "The Transformer Shortage. Large Power Transformers (LPTs) needed to step down voltage have lead times of 120-210 weeks. You can buy chips today but can't plug them in until 2029."
    },
    {
        title: "6. THE ELECTRON",
        subtitle: "The Clean Firm Source",
        description: "This is the source. Since AI needs to run 24/7 (99.999% uptime), it cannot rely solely on intermittent wind or solar. This reliability gap has forced Big Tech to become the primary financier of nuclear energy. Microsoft is restarting Three Mile Island; Oracle is designing campuses with small modular reactors (SMRs). The sector is moving beyond the grid to 'behind-the-meter' deals to secure massive, carbon-free baseload power.",
        stat: "99.999% Uptime",
        color: "#222222",
        challenge: "The reliability gap. Solar/Wind are intermittent; AI is constant. This forces tech companies to act as utilities, financing their own nuclear and geothermal plants.",
        bottleneck: "Regulatory moats. Federal regulators (FERC) are pushing back against 'behind-the-meter' deals that take existing power plants offline for private AI use."
    }
]
