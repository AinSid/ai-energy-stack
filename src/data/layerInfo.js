export const layerInfo = [
    {
        title: "1. THE MODEL",
        subtitle: "Inference & Training (Software Layer)",
        stat: "60% Inference Load",
        color: "#ffffff",
        blocks: [
            {
                type: "text",
                title: "Overview",
                content: "Think of this layer as the brain of the system. It represents the software models that demand energy to learn and to answer questions. As these models get smarter, they require exponentially more power to operate."
            },
            {
                type: "text",
                title: "The Jevons Paradox of Intelligence",
                content: "The economic narrative of AI has shifted from training to inference. Training is the massive one-time energy expenditure required to create a foundation model. Inference is the continuous process of querying that model. While training a frontier model like GPT-4 requires a massive energy spike, inference represents a permanent and scaling baseload demand. Recent analysis indicates that inference now accounts for more than 50% of the total lifecycle carbon emissions of a Large Language Model. Hardware optimizations have reduced the cost of generating a single token of intelligence. However, the total volume of tokens generated has exploded. This is a classic manifestation of Jevons Paradox. In 2025 alone, while inference costs dropped roughly 280-fold due to quantization and better chips, usage volume grew 31x. This drove net energy consumption significantly higher."
            },
            {
                type: "text",
                title: "The Rise of Reasoning Models",
                content: "A critical driver of this energy intensity is the architectural shift toward reasoning models. Unlike standard LLMs that predict the next word immediately, reasoning models think for seconds or minutes before outputting a response. They run thousands of internal simulation steps to verify their answers. A single complex query can now consume 0.3 Wh to 1 Wh of energy. When scaled to billions of daily queries, the aggregate energy load moves from the scale of a data center to the scale of a national power grid."
            },
            {
                type: "table",
                title: "Energy Profile of AI Workloads",
                headers: ["Metric", "Training Phase", "Inference Phase"],
                rows: [
                    ["Energy Profile", "Spiky, massive bursts (Months)", "Continuous, baseload (Years)"],
                    ["Share of Lifecycle CO2", "~40%", "~60% and growing"],
                    ["Economic Driver", "CAPEX (One-time asset creation)", "OPEX (Cost of Goods Sold)"]
                ]
            }
        ]
    },
    {
        title: "2. THE CHIP",
        subtitle: "The Thermal Wall (Silicon Layer)",
        stat: "1,200 Watts / Chip",
        color: "#ff4444",
        blocks: [
            {
                type: "text",
                title: "Simplified Overview",
                content: "This layer represents the engine of the AI stack. The silicon chips that do the math have become so dense and powerful that they now generate heat levels that traditional fans and air cooling can no longer manage."
            },
            {
                type: "text",
                title: "Thermodynamics at the Nanometer Scale",
                content: "For over a decade, the Thermal Design Power (TDP) of server processors hovered in the manageable range of 200W to 400W. The generative AI boom has shattered this ceiling. To sustain Moore's Law, chip designers are no longer just shrinking transistors. They are packaging multiple massive dies together. This creates a density of heat that defies traditional physics. The industry has crossed the 1,000 Watt barrier. The Nvidia Blackwell B200 draws between 1,000W and 1,200W per package. AMD’s competing MI355X accelerator pushes this even further to 1,400W."
            },
            {
                type: "text",
                title: "The Physical Limit of Air",
                content: "At these power densities, the heat flux exceeds the capacity of air to effectively remove heat. Air cooling relies on fans blowing ambient air over heat sinks. To cool a 1,200W chip, the required airflow would generate deafening acoustic levels and parasitic fan power consumption that renders the system economically unviable. This marks the end of the Air Cooled Era. The industry is forced to transition to liquid cooling not as an option but as a thermodynamic necessity."
            },
            {
                type: "table",
                title: "The Power Density Escalation",
                headers: ["Accelerator", "Release Year", "Power Draw (TDP)", "Cooling Requirement"],
                rows: [
                    ["Nvidia H100", "2022", "700W", "Air / Liquid Hybrid"],
                    ["Nvidia B200", "2025", "1,000W - 1,200W", "Liquid Mandatory (Dense)"],
                    ["AMD MI355X", "2025", "1,400W", "Liquid Mandatory"]
                ]
            }
        ]
    },
    {
        title: "3. THE RACK",
        subtitle: "The Density Shift (System Layer)",
        stat: "120 kW / Rack",
        color: "#666666",
        blocks: [
            {
                type: "text",
                title: "Overview",
                content: "The rack is the physical cabinet that holds the servers. It has transformed from a simple storage shelf into a complex plumbing system that must deliver massive amounts of power and liquid coolant to a very small space."
            },
            {
                type: "text",
                title: "The NVL72 Standard",
                content: "The unit of compute has shifted from the single server to the entire rack. The Nvidia GB200 NVL72 is a rack-scale computer containing 72 GPUs and 36 CPUs acting as a single logical entity. The power implications are staggering. A single rack now consumes 120 kilowatts (kW). For context, the average legacy enterprise rack consumes just 7 kW."
            },
            {
                type: "text",
                title: "The Copper Paradox",
                content: "A key innovation driving this density is the use of copper cabling. Engineers chose copper cabling over fiber optics for internal communication to save power. Fiber optics require transceivers that consume significant power. By using copper, the rack saves approximately 20 kW of power. However, copper loses signal integrity over long distances. To work, the cables cannot exceed roughly 0.8 meters. This forces the entire 72 GPU cluster to be packed into a single cabinet with zero wasted space. This creates a thermal bomb that can only be cooled by liquid."
            },
            {
                type: "table",
                title: "Rack Power Evolution",
                headers: ["Era", "Typical Density", "Cooling Method"],
                rows: [
                    ["Legacy Cloud", "7-10 kW", "Standard Air (CRAC)"],
                    ["Early AI (2023)", "40 kW", "High Performance Air"],
                    ["Frontier AI (2026)", "120 kW", "Liquid (Direct-to-Chip)"]
                ]
            }
        ]
    },
    {
        title: "4. THE FACILITY",
        subtitle: "The Gigawatt Campus (Construction Layer)",
        stat: "1 GW Capacity",
        color: "#444444",
        blocks: [
            {
                type: "text",
                title: "Overview",
                content: "This layer is the physical building that houses the computers. These are no longer just warehouses. They are gigawatt-scale industrial plants that consume as much electricity and water as a medium-sized city."
            },
            {
                type: "text",
                title: "From Mega to Giga",
                content: "The AI Factory is physically distinct from the cloud data centers of the 2010s. We are witnessing the emergence of the Gigawatt Campus. These are single sites designed to consume 1 GW of power. Examples include the Microsoft and OpenAI Stargate project which targets 5 GW of capacity. Oracle is also designing a 1 GW campus supported by three dedicated small modular reactors."
            },
            {
                type: "text",
                title: "Capital Intensity and Water Usage",
                content: "The cost of building these facilities has skyrocketed due to supply chain constraints and the complexity of Mechanical, Electrical, and Plumbing (MEP) systems. The current construction cost is estimated at $11.3 million per MW. Water usage is another critical constraint. AI demand is projected to consume 4.2 to 6.6 trillion liters of water annually by 2030. In response, hyperscalers like Microsoft are deploying zero water designs that utilize closed-loop liquid cooling systems to mitigate environmental impact in water-stressed regions."
            },
            {
                type: "table",
                title: "Global Data Center CAPEX Forecast (2025-2030)",
                headers: ["Segment", "Investment"],
                rows: [
                    ["Computing Hardware", "~$4.3 Trillion"],
                    ["Energizers (MEP)", "~$1.3 Trillion"],
                    ["Construction & Shell", "~$1.0 Trillion"],
                    ["Total", "~$6.7 Trillion"]
                ]
            }
        ]
    },
    {
        title: "5. THE GRID",
        subtitle: "The Long Wait (Transmission Layer)",
        stat: "2.6 TW Queue",
        color: "#333333",
        blocks: [
            {
                type: "text",
                title: "Overview",
                content: "The grid represents the wires, substations, and transformers needed to deliver electricity to the facility. This is currently the biggest bottleneck because the equipment is sold out and the regulatory process to connect takes years."
            },
            {
                type: "text",
                title: "The 2.6 Terawatt Queue",
                content: "The US electrical grid has become the single largest bottleneck in the AI stack. As of 2025, there are over 2.6 Terawatts (TW) of generation capacity stuck in interconnection queues. These are projects waiting for permission to plug into the grid. This volume is more than twice the total installed generating capacity of the entire United States. The median wait time for a new interconnection agreement has ballooned to 5 years."
            },
            {
                type: "text",
                title: "The Transformer Shortage",
                content: "Even if permission is granted, the physical hardware is missing. Large Power Transformers (LPTs) are the massive grid components that step down voltage. They are facing a critical supply chain crisis. Lead times for these components have hit 120 to 210 weeks. Prices have risen 60 to 80 percent since 2020 due to shortages of electrical steel and skilled labor. This implies that companies can buy GPUs today but may not be able to energize them until 2029 without stockpiled electrical infrastructure."
            },
            {
                type: "text",
                title: "Regulatory Moats",
                content: "In late 2024, the Federal Energy Regulatory Commission (FERC) rejected a deal between Amazon and Talen Energy to co-locate a data center directly at a nuclear plant. This ruling signaled that behind-the-meter deals will face stiff regulatory resistance. The regulators are concerned that taking existing power plants off the grid for private AI use raises costs for regular consumers."
            }
        ]
    },
    {
        title: "6. THE ELECTRON",
        subtitle: "The Clean Firm Source (Generation Layer)",
        stat: "99.999% Uptime",
        color: "#222222",
        blocks: [
            {
                type: "text",
                title: "Overview",
                content: "This is the fuel source itself. Since AI needs to run 24 hours a day, it cannot rely solely on wind or solar power. This has forced tech companies to buy nuclear power plants to guarantee a steady flow of carbon-free electricity."
            },
            {
                type: "text",
                title: "The Nuclear Renaissance",
                content: "Solar and wind power are intermittent. AI training requires 99.999% uptime. This reliability gap has made Big Tech the primary financier of a new nuclear age. In a historic 2024 deal, Microsoft signed a 20-year Power Purchase Agreement to restart the Three Mile Island Unit 1 nuclear reactor. This will secure 835 MW of carbon-free baseload power specifically for AI."
            },
            {
                type: "text",
                title: "Small Modular Reactors and Geothermal",
                content: "For future capacity, companies like Oracle and Google are investing in Small Modular Reactors (SMRs) and geothermal energy. Oracle plans to power a 1 GW campus with three SMRs. Google has partnered with Fervo Energy to use fracking technology to tap into subterranean heat reservoirs for clean baseload power. However, SMR timelines are slipping. While promising, designs from companies like NuScale and Oklo are not expected to be commercially operational at scale until 2030 or later."
            },
            {
                type: "table",
                title: "The Race for Baseload Power",
                headers: ["Source", "Availability", "Carbon", "Scalability Status"],
                rows: [
                    ["Nuclear (Restart)", "2028", "Zero", "Low (Limited sites)"],
                    ["Nuclear (SMR)", "2030+", "Zero", "High (Factory built)"],
                    ["Geothermal", "Now", "Zero", "Medium (Geo dependent)"],
                    ["Natural Gas", "Now", "High", "High (But high carbon)"]
                ]
            }
        ]
    }
]
