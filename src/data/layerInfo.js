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
            },
            {
                type: "text",
                title: "The Agentic Multiplier",
                content: "Beyond simple reasoning, the industry is moving toward Agentic AI workflows. Unlike a chatbot that provides a single answer to a single question, an AI agent is designed to perform multi-step tasks autonomously. An agentic workflow involves planning, acting, reflecting, and looping until a goal is achieved. Industry analysis suggests that a fully autonomous agentic workflow could consume 25 times more tokens than a standard interaction. This creates a 'Token Multiplier' effect where a single user request triggers a cascade of internal queries, massively inflating the energy cost per task. This shift changes the economics of the stack. The cost of intelligence is moving from a Capital Expenditure (CAPEX) model, where companies pay once to train a model, to an Operating Expenditure (OPEX) model, where the cost scales linearly with every second the model spends 'thinking.' As models like OpenAI's o1 and DeepSeek-R1 become standard, the energy density per user session will increase, potentially offsetting efficiency gains made in hardware."
            },
            {
                type: "table",
                title: "The Cost of Thinking (Inference Tiers)",
                headers: ["Interaction Type", "Description", "Estimated Energy Factor"],
                rows: [
                    ["Standard Query", "Direct answer (GPT-4o)", "1x (Baseline)"],
                    ["Reasoning Query", "Chain-of-Thought (o1/R1)", "10x - 30x"],
                    ["Agentic Task", "Autonomous loops & planning", "25x - 100x"]
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
            },
            {
                type: "text",
                title: "The Packaging Bottleneck",
                content: "While the GPU die itself grabs headlines, the true physical constraint in the supply chain is often the advanced packaging. Technologies like TSMC's Chip-on-Wafer-on-Substrate (CoWoS) are required to stitch the logic die to the High Bandwidth Memory (HBM) stacks. This 2.5D packaging process is complex and capacity-constrained. Forecasts indicate that CoWoS capacity must double annually through 2026 to meet the demand for AI accelerators. Furthermore, the memory architecture is becoming a dominant power consumer. The shift to HBM3e memory provides massive bandwidth (up to 8 TB/s on the B200) but also increases the thermal load. As memory stacks grow higher (12-hi to 16-hi stacks), the thermal resistance increases, making the cooling of the memory modules just as critical as the cooling of the logic die. Alternative architectures like the Cerebras Wafer Scale Engine (CS-3) avoid this packaging bottleneck by using an entire silicon wafer as a single chip, but this creates a unique challenge of powering and cooling a singular 23,000-watt device."
            },
            {
                type: "table",
                title: "Chip Architecture & Memory Comparison",
                headers: ["Chip", "Memory Capacity", "Bandwidth", "Packaging Technology"],
                rows: [
                    ["Nvidia H100", "80 GB HBM3", "3.35 TB/s", "TSMC CoWoS-S"],
                    ["Nvidia B200", "192 GB HBM3e", "8.0 TB/s", "TSMC CoWoS-L"],
                    ["AMD MI325X", "256 GB HBM3e", "6.0 TB/s", "2.5D Silicon Interposer"],
                    ["Cerebras CS-3", "44 GB (On-Chip)", "21 PB/s", "Wafer Scale (No Package)"]
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
            },
            {
                type: "text",
                title: "48V Power and Leakage Risks",
                content: "Delivering 120 kW to a single rack requires a fundamental change in electrical distribution. Data centers are shifting from 12-volt to 48-volt bus bars. Higher voltage reduces the current required to deliver the same amount of power (Power = Voltage x Current). Lower current minimizes resistive power loss and allows for thinner copper bus bars, which saves critical weight and space inside the dense rack chassis. The transition to liquid cooling also introduces a new mechanical risk: leakage. The industry is adopting 'blind mate' liquid connectors that allow server blades to be inserted into the rack manifold without manual plumbing connections. These connectors must maintain a zero-leakage standard over thousands of mating cycles. A single coolant leak in a high-voltage rack could be catastrophic. This has driven strict manufacturing tolerances for OCP ORV3 compliant connectors to ensure reliability."
            },
            {
                type: "table",
                title: "Power Distribution Efficiency",
                headers: ["Bus Voltage", "Current for 1000W", "Resistive Loss", "Cable Thickness"],
                rows: [
                    ["12 Volt", "83.3 Amps", "High", "Thick / Heavy"],
                    ["48 Volt", "20.8 Amps", "Low (~16x less loss)", "Thin / Light"]
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
            },
            {
                type: "text",
                title: "Heat Reuse and Backup Power",
                content: "The high operating temperatures of AI chips (often running at 60°C or higher) have turned data centers into viable heat sources for district heating. Unlike legacy servers that produced low-grade heat, liquid-cooled AI racks produce hot water that can be piped directly into municipal heating networks. Projects in Dublin and Finland are already utilizing this waste heat to warm nearby university campuses and homes, turning a waste product into a municipal asset. Backup power systems are also decarbonizing. Operators are moving away from traditional diesel generators toward Hydrotreated Vegetable Oil (HVO), a renewable fuel that drops into existing engines but reduces net carbon emissions by up to 90%. Additionally, Battery Energy Storage Systems (BESS) are being deployed to handle short-duration peak loads, reducing the need to fire up generators during minor grid fluctuations."
            },
            {
                type: "table",
                title: "Backup Power Technologies",
                headers: ["Technology", "Primary Use Case", "Carbon Impact", "Trend"],
                rows: [
                    ["Diesel Gen", "Long-duration outages", "High", "Phasing out / Legacy"],
                    ["HVO Fuel", "Sustainable backup", "Low (-90% CO2)", "Rapid adoption"],
                    ["BESS (Battery)", "Peak shaving / Short backup", "Zero (at point of use)", "High growth"]
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
            },
            {
                type: "text",
                title: "Grid Enhancing Technologies (GETs)",
                content: "Because building new transmission lines takes a decade, utilities are turning to Grid Enhancing Technologies (GETs) to squeeze more capacity out of existing wires. Dynamic Line Rating (DLR) uses sensors to monitor real-time wind speed and temperature on power lines. On cool or windy days, these lines can safely carry 30% to 40% more current than their conservative static rating allows. Data centers are also evolving into Virtual Power Plants (VPPs). By integrating their massive battery backups and flexible compute workloads with the grid, they can provide demand response services. During grid emergencies, a data center can switch to 'island mode' (running entirely on its own batteries or generators) to free up hundreds of megawatts of capacity for the public grid, acting as a stabilizer rather than just a load."
            },
            {
                type: "table",
                title: "Capacity Gains from GETs",
                headers: ["Technology", "Mechanism", "Potential Capacity Gain"],
                rows: [
                    ["Static Rating", "Fixed conservative limit", "0% (Baseline)"],
                    ["Ambient Adjusted", "Seasonal temperature adjustments", "15 - 25%"],
                    ["Dynamic Line Rating", "Real-time wind/temp sensors", "30 - 40%"]
                ]
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
            },
            {
                type: "text",
                title: "Geothermal and Hydrogen",
                content: "Enhanced Geothermal Systems (EGS) offer a distinct advantage over wind and solar: a capacity factor exceeding 90%. New drilling techniques derived from the oil and gas industry allow companies like Fervo Energy to create artificial reservoirs in hot rock, enabling baseload clean power in regions previously thought unsuitable for geothermal. Natural gas remains a critical bridge fuel, but the technology is evolving. Manufacturers like GE Vernova are deploying gas turbines capable of burning a blend of natural gas and hydrogen. These units can currently handle up to 50% hydrogen by volume, with a roadmap to 100% capability. This allows data centers to build gas infrastructure today that can transition to green hydrogen fuel as supply chains mature, future-proofing their massive investments."
            },
            {
                type: "table",
                title: "Capacity Factor Comparison",
                headers: ["Energy Source", "Capacity Factor (Uptime)", "Reliability for AI"],
                rows: [
                    ["Geothermal", "> 90%", "Excellent"],
                    ["Nuclear", "> 92%", "Excellent"],
                    ["Wind", "35% - 45%", "Poor (Requires Storage)"],
                    ["Solar PV", "20% - 30%", "Poor (Requires Storage)"]
                ]
            }
        ]
    }
]
