const blogData = [
  {
    image: "/images/blog1.png",
    title: "The Search for Exoplanets: New Worlds Beyond Our Solar System",
    author: "Dr. Sarah Whitman",
    date: "2024-09-18",
    views: 8421,
    category: "Celestial Bodies",
    contentParts: {
      intro: `
          In the vast emptiness of space, a mystery has confounded scientists for nearly a century: the existence of dark matter. Unlike ordinary matter—the stuff that makes up stars, planets, and humans—dark matter does not emit, absorb, or reflect light. It’s completely invisible. Yet, its gravitational effects on galaxies and cosmic structures are undeniable.
        `,
      part1: `
          The idea of dark matter first emerged in the 1930s when Swiss astronomer Fritz Zwicky noticed that galaxies within the Coma Cluster were moving much faster than expected. According to Newtonian physics, the visible mass wasn't enough to keep those galaxies gravitationally bound. Zwicky proposed the existence of an unseen “missing mass.”

          Since then, countless observations have confirmed that galaxies rotate in ways that cannot be explained by visible matter alone. The outer edges of spiral galaxies, for instance, move as quickly as the inner regions—something only possible if there’s a massive invisible halo surrounding them.
        `,
      part2: `
          Over time, theories about dark matter evolved. It’s now believed that nearly 27% of the universe’s total mass-energy composition is made of dark matter, dwarfing the mere 5% made of normal matter. But what is it made of? That question remains unanswered.

          Physicists have proposed several candidates. One of the most popular is the Weakly Interacting Massive Particle (WIMP), a hypothetical particle that would interact through gravity and the weak nuclear force, but not electromagnetism—hence its invisibility. Other candidates include axions and sterile neutrinos.
        `,
      conclusion: `
          To detect dark matter, scientists have built underground detectors shielded from cosmic rays, hoping to spot a rare interaction between a dark matter particle and normal matter. So far, these experiments have not yielded definitive results.

          However, in recent years, astronomical surveys using space telescopes like Hubble and ESA’s Euclid mission have begun mapping dark matter by observing how its gravity bends light—a phenomenon called gravitational lensing. These “maps” reveal a cosmic web of dark matter scaffolding the structure of the universe.

          The study of dark matter not only helps explain how galaxies hold together, but also sheds light on the universe’s evolution and fate. If we unlock its secrets, we may uncover a deeper layer of physics that could redefine our understanding of reality itself.
        `,
    },
  },
  {
    image: "/images/blog2.png",
    title: "Journey to the Edge: Exploring the Most Distant Galaxies",
    author: "Leo Grant",
    date: "2024-10-02",
    views: 6317,
    category: "Stars", // صنف النجوم
    contentParts: {
      intro: `
          Take a journey to the furthest parts of the universe as astronomers uncover galaxies billions of light-years away, revealing the cosmos’ earliest moments.
        `,
      part1: `
          These distant galaxies are not only incredibly far but also incredibly faint. Observing them requires powerful telescopes like the James Webb Space Telescope and the Hubble Space Telescope, which can peer back in time to see the universe as it was billions of years ago.
        `,
      part2: `
          Studying these ancient galaxies helps scientists understand how galaxies form and evolve over cosmic time. The light from these galaxies carries information about their age, composition, and rate of star formation.
        `,
      conclusion: `
          As technology improves, astronomers continue pushing the boundaries of observation, bringing us closer to uncovering the origins of the universe and the processes that shaped the galaxies we see today.
        `,
    },
  },
  {
    image: "/images/blog3.png",
    title:
      "The Silent Storms of Jupiter: Unraveling the Secrets of Giant Planets",
    author: "Nadia El-Amin",
    date: "2024-11-11",
    views: 7029,
    category: "Planets", // صنف الكواكب
    contentParts: {
      intro: `
          Jupiter, the largest planet in our solar system, is known for its massive and long-lasting storms that rage silently in its thick atmosphere.
        `,
      part1: `
          These storms, such as the famous Great Red Spot, have intrigued scientists for centuries. They are driven by complex atmospheric dynamics and immense energy flows deep within Jupiter.
        `,
      part2: `
          Researchers study these storms using data from spacecraft like Juno, which orbits Jupiter and sends back detailed images and measurements. Understanding these storms sheds light on the behavior of gas giants in general.
        `,
      conclusion: `
          The insights gained from Jupiter’s storms help scientists learn about planetary weather systems, magnetic fields, and even the formation of our solar system’s giant planets.
        `,
    },
  },
  {
    image: "/images/blog4.png",
    title: "Quantum Computing: A New Era of Processing Power",
    author: "Emily Zhang",
    date: "2024-12-05",
    views: 5194,
    category: "Celestial Bodies",
    contentParts: {
      intro: `
          Quantum computing is poised to revolutionize technology by leveraging the strange behavior of subatomic particles to perform computations far beyond today's capabilities.
        `,
      part1: `
          Traditional computers use bits to represent data as 0s or 1s. Quantum computers use qubits, which can exist in multiple states at once thanks to quantum superposition.
        `,
      part2: `
          Quantum entanglement allows qubits to be linked across distances, making quantum processors exponentially more powerful. Major companies like IBM and Google are racing to build stable quantum machines.
        `,
      conclusion: `
          While still in its infancy, quantum computing has the potential to transform industries such as cryptography, drug discovery, and artificial intelligence.
        `,
    },
  },
  {
    image: "/images/blog5.png",
    title: "The Rise of AI Artists: Creativity in the Age of Algorithms",
    author: "Andre Cole",
    date: "2024-09-22",
    views: 7812,
    category: "Celestial Bodies",
    contentParts: {
      intro: `
          From generating surreal images to composing symphonies, artificial intelligence is stepping into the world of art—blurring the lines between human and machine creativity.
        `,
      part1: `
          Tools like DALL·E, Midjourney, and ChatGPT allow users to create stunning works of art using text prompts. These AI models are trained on vast datasets of existing artwork.
        `,
      part2: `
          Critics argue that AI lacks true creativity and relies on imitation, but others see it as a new medium—empowering people without traditional skills to become creators.
        `,
      conclusion: `
          As AI continues to evolve, the art world must grapple with questions of originality, authorship, and the future of artistic expression.
        `,
    },
  },
  {
    image: "/images/blog6.png",
    title: "Volcanoes on Venus: A Planet That Refuses to Die",
    author: "Dr. Lina Reyes",
    date: "2024-10-19",
    views: 4553,
    category: "Planets",
    contentParts: {
      intro: `
          Once thought to be geologically dead, Venus may still harbor active volcanoes—challenging our assumptions about the inner workings of rocky planets.
        `,
      part1: `
          Recent radar imaging from spacecraft has detected changes in Venusian surface features that suggest volcanic activity. These findings point to a dynamic interior.
        `,
      part2: `
          Understanding Venus's geology offers insights into Earth’s past and future, as both planets share similar sizes and compositions.
        `,
      conclusion: `
          Future missions, like NASA's VERITAS and ESA's EnVision, aim to provide a clearer picture of Venus's geologic life.
        `,
    },
  },
  {
    image: "/images/blog7.png",
    title: "The Ocean’s Twilight Zone: Life Beyond the Sun’s Reach",
    author: "Marina Youssef",
    date: "2024-11-28",
    views: 6039,
    category: "Celestial Bodies",
    contentParts: {
      intro: `
          Deep beneath the ocean’s surface lies the twilight zone—a mysterious region teeming with bizarre creatures adapted to extreme darkness and pressure.
        `,
      part1: `
          Ranging from 200 to 1000 meters deep, this zone contains bioluminescent fish, squid, and strange gelatinous life forms that defy classification.
        `,
      part2: `
          Studying these organisms can reveal new biological mechanisms and inform our understanding of life on other planets.
        `,
      conclusion: `
          The twilight zone remains one of Earth's last unexplored frontiers, bridging oceanography and astrobiology.
        `,
    },
  },
  {
    image: "/images/blog8.png",
    title: "Black Holes and Time Warps: A Journey Through Spacetime",
    author: "Dr. Michael Chen",
    date: "2024-12-15",
    views: 7321,
    category: "Stars",
    contentParts: {
      intro: `
          Black holes, regions of spacetime exhibiting gravitational acceleration so strong that nothing can escape, challenge our understanding of physics.
        `,
      part1: `
          These enigmatic objects warp time and space, and their event horizons mark points of no return. They’re born from collapsing massive stars or through cosmic collisions.
        `,
      part2: `
          Recent observations, including the first image of a black hole’s event horizon, open new windows into gravity and quantum mechanics.
        `,
      conclusion: `
          Black holes remain among the universe’s most intriguing mysteries, holding keys to unifying general relativity and quantum theory.
        `,
    },
  },
  {
    image: "/images/blog9.png",
    title: "Saturn’s Rings: Cosmic Jewels of Our Solar System",
    author: "Hannah Lee",
    date: "2024-10-30",
    views: 6544,
    category: "Planets",
    contentParts: {
      intro: `
          Saturn’s stunning rings are made up of ice and rock particles, creating a magnificent celestial spectacle visible even with small telescopes.
        `,
      part1: `
          The rings’ origin is still debated; they might be remnants of a destroyed moon or captured debris from the early solar system.
        `,
      part2: `
          NASA’s Cassini mission revealed intricate ring structures, waves, and moonlets that shape the rings' dynamics.
        `,
      conclusion: `
          Saturn’s rings continue to fascinate astronomers and serve as natural laboratories for studying planetary ring systems.
        `,
    },
  },
  {
    image: "/images/blog10.png",
    title: "The Search for Exoplanets: New Worlds Beyond Our Solar System",
    author: "Carlos Ramirez",
    date: "2024-11-20",
    views: 7910,
    category: "Planets",
    contentParts: {
      intro: `
          Discovering planets orbiting stars beyond our Sun has opened an exciting frontier in astronomy and the quest for life elsewhere.
        `,
      part1: `
          Techniques like the transit method and radial velocity help identify exoplanets’ size, orbit, and atmosphere.
        `,
      part2: `
          Some exoplanets reside in the “habitable zone,” where conditions might allow liquid water and possibly life.
        `,
      conclusion: `
          Future telescopes aim to characterize exoplanet atmospheres, searching for biosignatures and Earth-like conditions.
        `,
    },
  },
];

export default blogData;
