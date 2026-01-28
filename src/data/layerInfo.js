export const layerInfo = [
    {
        title: "1. THE MODEL",
        subtitle: "Inference & Training",
        description: "Think of this layer as the brain of the system. It represents the software models that demand energy to learn and to answer questions. As these models get smarter, they require exponentially more power to operate. The economic narrative has shifted from training to inference—while training a model like GPT-4 is a massive one-time energy spike, 'reasoning' models that think for seconds or minutes before answering are creating a permanent, scaling baseload demand.",
        stat: "60% Inference Load",
        color: "#ffffff"
    },
    {
        title: "2. THE CHIP",
        subtitle: "The Thermal Wall",
        description: "This layer is the engine. The silicon chips that do the math have become so dense that they generate heat levels traditional fans can't manage. We have crossed the 1,000 Watt barrier per chip (vs 200W historically). To sustain Moore's Law, designers are packaging multiple massive dies together, creating a density of heat that defies physics. The heat flux now exceeds the capacity of air cooling, making liquid cooling a thermodynamic necessity.",
        stat: "1,200 Watts / Chip",
        color: "#ff4444"
    },
    {
        title: "3. THE RACK",
        subtitle: "The Density Shift",
        description: "The unit of compute has shifted from the single server to the entire rack. The Nvidia GB200 NVL72 is a rack-scale computer containing 72 GPUs acting as a single entity. A single rack now consumes 120 kilowatts (kW)—compared to just 7 kW for a legacy rack. To save power, engineers use copper cabling instead of fiber, but this limits cable length to 0.8 meters, forcing the hardware into a dense 'thermal bomb' configuration.",
        stat: "120 kW / Rack",
        color: "#666666"
    },
    {
        title: "4. THE FACILITY",
        subtitle: "The Gigawatt Campus",
        description: "These are no longer just warehouses; they are gigawatt-scale industrial plants that consume as much electricity as a medium-sized city. We are witnessing the emergence of single sites designed for 1 GW of power (e.g., Stargate). Construction costs have hit $11.3 million per MW. Water usage is also critical, with demand projected to reach 6.6 trillion liters by 2030, driving a shift to zero-water closed-loop cooling systems.",
        stat: "1 GW Capacity",
        color: "#444444"
    },
    {
        title: "5. THE GRID",
        subtitle: "The Long Wait",
        description: "The grid is currently the biggest bottleneck. As of 2025, there are over 2.6 Terawatts of generation capacity stuck in interconnection queues—waiting years just for permission to plug in. Even with permission, hardware is missing: Large Power Transformers (LPTs) needed to step down voltage have lead times of 210 weeks (4 years). You can buy GPUs today, but you might not be able to energize them until 2029.",
        stat: "5 Year Queue",
        color: "#333333"
    },
    {
        title: "6. THE ELECTRON",
        subtitle: "The Clean Firm Source",
        description: "This is the source. Since AI needs to run 24/7 (99.999% uptime), it cannot rely solely on intermittent wind or solar. This reliability gap has forced Big Tech to become the primary financier of nuclear energy. Microsoft is restarting Three Mile Island; Oracle is designing campuses with small modular reactors (SMRs). The sector is moving beyond the grid to 'behind-the-meter' deals to secure massive, carbon-free baseload power.",
        stat: "99.999% Uptime",
        color: "#222222"
    }
]
