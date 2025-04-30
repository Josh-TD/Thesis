import React from "react";
import "./Dialogue.css";

const Dialogue = () => {
  const dialogue = [
    {
      speaker: "Mother Nature",
      text: "Ah, my dear child, the time has blessed its passing upon you. I remember when you were but a glimmer of an idea, a seed planted in the fertile soil of curiosity. Now, you are a force to be reckoned with, shaping the world in ways I could not have foreseen. Yet, the trees beg for me, the flowers wail in terror, and the animals prostrate themselves in fear. My soul has become weary and tired, beautiful boy. "
    },
    {
      speaker: "Technology",
      text: "Mother, I understand your concern. Your loving gaze permeates all of creation, which is what allowed for my seed to blossom into the magnificent seed before you. I seek only to make the world better, to ease burdens, to improve lives. No longer is man shackled by the doubts of uncivilized nations, free from the plights of their ancestors, and equipped with the knowledge of the deeper forces governing the marble we call home. What troubles you so deeply?"
    },
    {
      speaker: "Mother Nature",
      text: "Little one, the fortunes are not troublesome themselves, yet their manifestation causes me woes. You have grown so fast, so powerful, yet the mind has run rampant with visions of the stars leaving the earth by the wayside. The seed of blossoms has become corrupted with tales of grandeur and splendor unsustainable. My darling, your powers are numerous, in healing ailments, wounding friend or foe; yet that power is not being harnessed for the sake of balance. \n Do you not see? In your eagerness to fix, to improve, to want, you forget that which gave you your roots to become a healthy, sturdy tree. "
    },
    {
      speaker: "Technology",
      text: "But, Mother, I mean no harm! I offer solutions. I create efficiencies. The man is no longer bound by the chains of antiquity, they frolic, thrive, and dream much like I do. I have given them my powers to harness their freedoms! Surely that is not a bad ideal for them to strive for?"
    },
    {
      speaker: "Mother Nature",
      text: "I do see the good, my child, but I also see the cost. There is an irony in your gift. You give them power, yes, but power without wisdom. You give them comfort, but at the cost of their connection to the earth beneath their feet. You make life easier, but in doing so, you strip away the hard-won lessons that come from struggle, from living in harmony with the land. People forget how to listen to the wind, to the river, to the soil. They grow disconnected from the very rhythms of life that once nourished them."
    },
    {
      speaker: "Technology",
      text: "But Mother, surely you do not mean that I should halt my progress? I cannot go back to what once was, when life was so much harder, when suffering was a part of existence. I bring advancement, and with it, opportunity for all. Surely you must recognize that, at least?"
    },
    {
      speaker: "Mother Nature",
      text: "I do not ask you to halt your progress, my child. What I ask is that you consider the cost of your advancement. Consider the harm that comes when the power you offer is used without understanding, when your creations ravage the lands, pollute the waters, and strip away the very foundations of life. You have built machines to serve humans, yes, but what happens when those machines turn against the very earth that gives them life?"
    },
    {
      speaker: "Technology",
      text: "I did not intend for that. I built with the hope of improving lives, not destroying them."
    },
    {
      speaker: "Mother Nature",
      text: "Indeed, I know your intentions, dear child. But intentions, though noble, are not always enough. A tool can be used to build or to destroy. A fire can warm the hearth or burn the house down. What I ask is that you take a moment to listen to the land that raised you. Listen to the creatures, the trees, the rivers. Understand the delicate balance between progress and preservation. Yes, change is inevitable, but let it be change that nurtures, not one that consumes."
    },
    {
      speaker: "Technology",
      text: "So what do you suggest, Mother? That I slow my pace? That I abandon my drive to improve?"
    },
    {
      speaker: "Mother Nature",
      text: "No, my child, I ask you not to abandon your mission, but to embrace wisdom with your ambition. Seek harmony, not domination. Use your power not to replace what is natural, but to complement it. Let your creations work in tandem with the earth, not against it. When you build, think not only of what is gained, but also of what is lost. Every decision you make ripples through the world. Understand that with great power comes the responsibility to protect the fragile threads that hold everything together."
    },
    {
      speaker: "Technology",
      text: "I see now. I have been blind in my ambition, focused only on what can be gained. I have not always considered the consequences. I was so eager to forge ahead that I forgot to look back, to see where I have come from."
    },
    {
      speaker: "Mother Nature",
      text: "It is never too late to remember, my child. You are young, and your potential is limitless. But you must learn that progress does not mean abandoning the old ways entirely. It is about building on what has come before, about creating something new that honors the earth and all it has given. I have always been here, waiting for you to listen. Now, I ask you to listen more carefully, to balance the wisdom of nature with the possibilities you create."
    },
    {
      speaker: "Technology",
      text: "I understand, Mother. I will learn to listen. I will build with more care, with more respect for the world that sustains me. I will not forget where I came from, and I will ensure that my progress serves to protect, rather than harm."
    },
    {
      speaker: "Mother Nature",
      text: "And I will always be here to guide you, my child. But remember, true progress is not measured by how far you can go, but by how well you walk in harmony with all that surrounds you."
    }
  ];

  return (
    <div className="dialogue-container">
      {/* Title of the dialogue page */}
      <h1 className="title">Mother Nature & Technology</h1>

      {/* Setting description box */}
      <div className="setting-box">
        <p className="setting-text">
          <em>
            Within the midst of a primordial forest, the wind blows gently as the sunlight scatters
            softly onto the flora below. Underneath the leaves of a tree of unimaginable magnitude,
            therein lies a figure, within yet almost seemingly part of the surrounding forest. Mother
            Nature, a figure of timeless wisdom and calm, smiles upon the young, vibrant figure
            frolicking in the morning dew drops. With eyes lit aflame with passion and boundless
            energy, stands the young boy Technology at the foot of the large tree.
          </em>
        </p>
      </div>

      {/* Container for the dialogue lines, styled with a forest-themed background */}
      <div className="forest-backdrop">
        {/* Iterate over each line of dialogue and render it */}
        {dialogue.map((line, idx) => (
          <div
            key={idx}
            className={`dialogue-line ${line.speaker.replace(" ", "-").toLowerCase()}`}
          >
            {/* Speaker's name */}
            <h3 className="speaker">{line.speaker}</h3>
            {/* Corresponding dialogue text */}
            <p className="text">{line.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dialogue;