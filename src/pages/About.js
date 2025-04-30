import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-scroll-container">
      {/* Hero Section */}
      <section className="about-section about-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why does the relationship between VR and Nature Matter?
        </motion.h1>
      </section>

      {/* Floating Content Paragraphs with More Diverse Layout */}
      <section className="about-section about-floating">
        <div className="about-floating-content">
          {paragraphs.map((text, idx) => {
            const layoutClass =
              idx % 5 === 0 ? "center" : idx % 5 === 1 ? "left" : idx % 5 === 2 ? "right" : idx % 5 === 3 ? "split" : "angled";

            return (
              <div key={idx} className={`about-paragraph-wrapper ${layoutClass}`}>
                {(layoutClass === "left" || layoutClass === "split") && (
                  <motion.img
                    src={`/images/inline-${idx}.jpg`}
                    alt={`Decorative ${idx}`}
                    className="inline-image"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <motion.div
                  className="about-paragraph-box"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                >
                  <p>{text}</p>
                </motion.div>
                {(layoutClass === "right" || layoutClass === "angled") && (
                  <motion.img
                    src={`/images/inline-${idx}.jpg`}
                    alt={`Decorative ${idx}`}
                    className="inline-image"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      
      {/* Credits Section */}
      <section className="about-section about-credits">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Made with care — 2025</p>
        </motion.div>
      </section>
    </div>
  );
};

const paragraphs = [
  "Virtual Reality (VR) is becoming the newest frontier of human expansion, with its capability of revolutionizing nearly every facet of modern society. Yet even amongst the sheer amount of progress waiting beyond the horizon, the long term effects of VR may not be yet realized, especially as it pertains to the environment. As VR becomes more and more ubiquitous, we need to carefully examine its impact on environmental sustainability and its potential to exacerbate pre-existing environmental risk factors.",
  "VR, in essence, describes exactly what its potential is: a virtual reality right at your fingertips. That has a promising initial impact on the environment, which is actually a positive: the decrease of commute of working families. Especially within the United States where cars have become increasingly more integrated into our daily lives (and a lack of useful public transportation and loss of “walkable” cities) inevitably produces significant amounts of greenhouse gas emissions. Yet if VR causes people to stay at home rather than commute to work every day, it could significantly reduce our total emissions causing a brighter future for our environment.  Thus, it would seem at first glance that VR can be a great tool to support the nature that surrounds us.",
  "Furthermore, VR has the potential to support environmental conservation efforts. Environmental education could be enhanced by immersive VR experiences that allow users to explore ecosystems, wildlife habitats, and natural wonders from the comfort of their homes or classrooms. Virtual tours of endangered species' habitats, for example, could increase awareness and empathy for conservation issues. This deeper connection with nature, facilitated by VR, may encourage more people to take proactive steps to protect the environment. Yet this is a double edged sword, because if people become too reliant on the virtual realities that surround them, they may instead forgo the natural world for the artificial one easily accessible to them. In an artificial world, one would not have to wrry about factors like climate change and extreme weather conditions because the virtual environment can be tailored to one’s wants and needs. Thus making the real life version less appealing and therefore less important for a person. Due to this, we need to be careful with implementing such without considering the long term effects of how human perception will react.",
  "Another potential benefit of VR lies in the design and testing of products and infrastructures. By using VR for prototyping, companies can minimize the environmental costs associated with physical testing and production. Simulations could prevent significant amounts of research and development waste, which would in turn decrease the amount of items necessary for production on a large scale. Furthermore, as simulations grow better and better, the technology we can implement can become more and more complex and tested with good significance to help the environment. ",
  "Yet for all of the wondrous potential that VR poses, it has significant drawbacks that people fail to realize. One of the most significant concerns lies in the energy consumption of VR devices and data centers. Virtual reality headsets, along with the powerful computers and servers required to run VR experiences, demand substantial amounts of energy. These energy demands would grow faster and faster, and if cleaner energy is not created to keep up with the demand, can backfire and significantly increase pollution before any environmental technological changes can occur. Furthermore, creating significant amounts of energy requires a lot of materials, most notably water and precious minerals. We are already suffering from an overpopulation crisis and clean drinking water has significantly shrunk between the 20th and 21st centuries and like many electronic devices, VR headsets and accessories are made from materials that are often extracted through environmentally destructive practices. The environmental impact of mining and manufacturing these components, coupled with the challenges of e-waste management and water conservation could become a growing problem as VR technology becomes more widespread.",
  "Another issue that must be considered is the lifespan of VR hardware. As VR technology continues to evolve rapidly, older devices may quickly become obsolete, contributing to an increase in electronic waste. This poses a challenge for sustainability, as the disposal of these devices can result in environmental pollution if not properly managed. To mitigate this issue, manufacturers will need to prioritize durability and upgradeability in their designs, ensuring that VR devices remain functional for as long as possible before being discarded.",
  "Finally, the environmental impact of VR could be amplified if it leads to greater consumerism. As VR becomes more accessible and popular, there may be an increase in the production and consumption of related hardware and software. While VR may reduce the need for physical travel or certain forms of entertainment, it could encourage the purchase of new devices, software, and accessories, contributing to overconsumption and waste. Companies may also incentivize consumers to upgrade their VR systems frequently, further fueling the cycle of production and waste.",
  "In order to fully realize the environmental benefits of VR while minimizing its negative impacts, both developers and consumers must be proactive in seeking sustainable practices. For developers, this means creating energy-efficient systems, sourcing materials responsibly, and designing hardware with longer lifespans and recyclability in mind. Similarly, the VR industry can work to create software solutions that run on less resource-intensive devices, helping to minimize the overall energy consumption of the technology. For consumers, the focus should be on mindful consumption. Instead of constantly upgrading to the latest VR hardware, individuals can opt to use existing devices for longer periods of time, while also engaging in responsible recycling when their devices eventually become obsolete. By focusing on sustainability and avoiding unnecessary purchases, consumers can help reduce the environmental impact of the growing VR industry.",
  "Ultimately, the key to minimizing the environmental footprint of VR technology lies in adopting a holistic approach that balances innovation with environmental responsibility. If the VR industry can work in tandem with environmental efforts, the technology could play a vital role in promoting sustainability, enhancing awareness of environmental issues, and reducing the carbon footprint of various sectors. However, this will require careful attention to the life cycle of VR products, from production to disposal, as well as continued innovation in energy efficiency and resource conservation. In conclusion, while VR has the potential to bring about positive changes for the environment by reducing the need for travel and supporting sustainability efforts, it also poses new challenges that must be addressed. By adopting sustainable practices at every stage of development and consumption, VR can help mitigate its environmental impact and become a force for positive change in the fight against climate change."
];

export default About;
