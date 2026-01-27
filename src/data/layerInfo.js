export const layerInfo = [
    {
        title: "1. THE MODEL",
        subtitle: "Inference & Training",
        description: "Think of this as the brain - the actual AI that answers your questions or generates images. It's a massive neural network with billions of parameters that need to be constantly fed data and calculations. Technically, models like GPT-5 or Claude require thousands of GPUs running matrix multiplications in parallel, processing trillions of floating-point operations per second. The energy demand comes from the sheer computational intensity: every inference request activates billions of parameters, and training runs can take months of continuous compute across entire data centers.",
        stat: "100B+ Params",
        color: "#ffffff"
    },
    {
        title: "2. THE CHIP",
        subtitle: "H100 GPU Cluster",
        description: "This is the workhorse - specialized processors designed to crunch numbers incredibly fast. Each NVIDIA H100 GPU is like having thousands of tiny calculators working simultaneously. Under the hood, it delivers 4 petaFLOPS using Tensor Cores optimized for AI workloads, with 80GB of high-bandwidth memory feeding data at 3TB/s. The energy problem: each chip draws 700 watts continuously - as much as seven gaming PCs or a microwave running 24/7. At scale, thousands of these chips create thermal densities that push the limits of physics.",
        stat: "700 Watts / Chip",
        color: "#ff4444"
    },
    {
        title: "3. THE RACK",
        subtitle: "High-Density Compute",
        description: "A rack is essentially a tall cabinet that holds multiple servers stacked vertically. It's the physical housing that connects chips together and manages their power and cooling. Technically, a 42U rack with 8 H100 servers requires high-speed NVLink and InfiniBand interconnects running at terabit speeds, with liquid cooling systems using cold plates and heat exchangers. The energy challenge: a single rack draws 100+ kilowatts - more than 30 homes - creating heat so intense that traditional air cooling completely fails. Any cooling system failure can destroy millions in hardware within minutes.",
        stat: "100 kW / Rack",
        color: "#666666"
    },
    {
        title: "4. THE FACILITY",
        subtitle: "Data Center",
        description: "The data center is a massive warehouse filled with thousands of racks, designed to keep everything running 24/7. It's the building that houses the entire operation with redundant power and cooling. Inside, you'll find 10,000+ racks connected by miles of fiber optic cables, with multiple utility feeds, backup generators, and battery banks ensuring 99.999% uptime. The energy equation: facilities consume 50-100 megawatts total, with 30-40% going purely to cooling systems - chillers, cooling towers, and pumps working constantly to prevent thermal shutdown. Power Usage Effectiveness (PUE) becomes critical: every watt wasted on overhead is a watt not computing.",
        stat: "50-100 MW",
        color: "#444444"
    },
    {
        title: "5. THE GRID",
        subtitle: "Transmission & Substation",
        description: "The grid connection is the high-voltage power line that brings electricity from power plants to your data center. It's the critical link between generation and consumption. Technically, this requires 345kV transmission lines and dedicated substations with transformers to step down voltage, plus switchgear and protection systems. The energy bottleneck: building this infrastructure takes 5-7 years due to environmental permits, right-of-way negotiations, and construction timelines. A single mile of transmission line costs $3-5 million, and substations add another $50-100 million. The mismatch is stark: AI companies can deploy new models in months, but the grid infrastructure takes half a decade.",
        stat: "345 kV Lines",
        color: "#333333"
    },
    {
        title: "6. GENERATION",
        subtitle: "Power Plants",
        description: "This is the source - actual power plants that generate electricity from fuel or natural resources. They convert energy from nuclear reactions, burning gas, or renewable sources into electrical power. At the technical level, training next-gen models requires 1-2 gigawatts of continuous baseload power - equivalent to a large nuclear reactor running for 6-12 months straight. The energy reality: nuclear plants take 10-15 years to build at $10-20 billion each. Natural gas is faster (3-5 years) but faces carbon pricing. Renewables are clean but intermittent, requiring massive battery storage that doesn't yet exist at scale. The emerging solution: co-locating data centers directly at power plants to bypass grid constraints entirely.",
        stat: "Gigawatt Scale",
        color: "#222222"
    }
]
