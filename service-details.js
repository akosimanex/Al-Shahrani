const details = {
  "general-construction": {
    title: "General Construction - Excellence in Every Detail",
    intro:
      "At AL SHAHRANI TECHNICAL SERVICES L.L.C, we do not just build structures. We craft lasting foundations with precision, expertise, and specialized knowledge in Gypsum Works.",
    points: [
      "Gypsum Installations - false ceilings, partitions, and design elements.",
      "Concrete Works - footings, slabs, beams, and columns.",
      "Blockwork, Plastering and Masonry - strength, accuracy, and durability.",
      "Screeding, Tiling and Waterproofing - flawless finishes that last.",
      "Internal and External Wall Finishes - aesthetics and protection combined.",
      "Demolition, Excavation and Backfilling - efficient site preparation.",
      "Site Fencing and Hoarding - safety and security at every stage."
    ],
    outro:
      "From concept to completion, we get the essentials right and elevate every detail."
  },
  "mep-services": {
    title: "MEP (Mechanical, Electrical, Plumbing) Services",
    intro:
      "Our MEP services go beyond installation. We deliver complete, reliable solutions so systems operate flawlessly from day one and for years to come.",
    points: [
      "Mechanical Systems - HVAC installation, testing, and preventive maintenance.",
      "Electrical Systems - wiring, panels, lighting, and energy-efficient solutions.",
      "Plumbing Systems - water supply, drainage, and sanitation solutions.",
      "Preventive and Corrective Maintenance - keeping systems safe, efficient, and uninterrupted.",
      "Deep Cleaning and Post-Construction Services - ensuring optimal performance after installation.",
      "Annual Maintenance Contracts (AMCs) - long-term support tailored to your needs."
    ],
    outro:
      "From setup to upkeep, we ensure your MEP systems perform at their best - reliably, efficiently, and safely."
  },
  "construction-management": {
    title: "Construction Management",
    intro:
      "We do not just manage projects. We lead them with precision, control, and accountability, ensuring every detail is executed on time and within budget.",
    points: [
      "Project Planning and Scheduling - efficient timelines and resource allocation.",
      "Cost Management and Budget Control - maximizing value without compromise.",
      "Quality Assurance and Safety Oversight - maintaining the highest industry standards.",
      "Coordination of Trades and Subcontractors - seamless collaboration across all disciplines.",
      "Site Supervision and Progress Monitoring - proactive problem-solving and reporting.",
      "Risk Management and Compliance - safeguarding projects against delays and regulatory issues."
    ],
    outro:
      "We transform visions into reality with disciplined execution, expert oversight, and unwavering commitment to excellence."
  },
  "interior-design-build": {
    title: "Interior Design and Build",
    intro:
      "Transform your space with exceptional design, flawless execution, and uncompromising quality through complete interior solutions that combine style, function, and innovation.",
    points: [
      "Concept and Space Planning - strategic layouts, mood boards, and photorealistic 3D visualizations.",
      "Design Detailing and Material Selection - premium finishes, textures, and furnishings tailored to your vision.",
      "Partitioning and Architectural Elements - gypsum, glass, and custom structures for optimal space use.",
      "Flooring Solutions - tile, parquet, vinyl, and carpet installations executed to perfection.",
      "Walls and Surfaces - paint, limewash, cladding, and wallpaper finishes.",
      "Ceiling Systems - gypsum, stretch, and acoustic ceilings for aesthetics and function.",
      "Custom Joinery and Millwork - cabinets, counters, shelving, and bespoke fittings.",
      "Furniture and FF&E - procurement, placement, and installation of curated furnishings.",
      "Project Management and Handover - end-to-end supervision for timely delivery."
    ],
    outro:
      "We do not just design interiors. We create spaces that inspire, impress, and endure."
  },
  "our-process": {
    title: "Our Process",
    intro:
      "At Al Shahrani Technical Services L.L.C, we deliver excellence through a structured, end-to-end process that ensures quality, efficiency, and innovation.",
    points: [
      "Understanding and Consultation - listen closely to your goals and define a clear roadmap.",
      "Strategic Planning and Design - develop plans, layouts, and visualizations that balance aesthetics and functionality.",
      "Precision Execution - execute fit-outs, partitioning, flooring, ceilings, and custom joinery with meticulous detail.",
      "Integration and Finishing - install furniture, fixtures, and finishes for complete functionality.",
      "Supervision and Quality Assurance - rigorous checks for timely delivery and flawless results.",
      "Handover and Ongoing Support - professional turnover and guidance to keep spaces at peak performance."
    ],
    outro:
      "We do not just complete projects. We craft spaces that inspire, impress, and endure."
  },
  "why-choose-us": {
    title: "Why Choose Al Shahrani Technical Services L.L.C",
    intro:
      "Clients choose us for consistency, technical depth, and delivery discipline across every project phase.",
    points: [
      "Proven Excellence - decades of experience delivering precision, innovation, and quality.",
      "ISO Certified - commitment to international standards and professional consistency.",
      "End-to-End Solutions - complete turnkey services from design to execution.",
      "Skilled Professionals - technical mastery, creativity, and attention to detail.",
      "Timely and Efficient Delivery - schedule and budget discipline without quality compromise.",
      "Customer-Centric Approach - we listen, advise, and deliver spaces that exceed expectations."
    ],
    outro:
      "Your success criteria drive our planning, execution, and handover quality."
  }
};

const params = new URLSearchParams(window.location.search);
const tab = params.get("tab");
const selected = details[tab] || details["general-construction"];

document.body.dataset.tab = details[tab] ? tab : "general-construction";
document.title = `${selected.title} | ASTS`;
document.getElementById("detail-title").textContent = selected.title;
document.getElementById("detail-intro").textContent = selected.intro;
document.getElementById("detail-outro").textContent = selected.outro;

const list = document.getElementById("detail-points");
list.innerHTML = "";
selected.points.forEach((point) => {
  const li = document.createElement("li");
  li.textContent = point;
  list.appendChild(li);
});
