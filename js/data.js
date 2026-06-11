// All commentaries data with dates, publication categories, and theme tags
const commentariesData = [
    {
        title: "Opening the doors for Chinese investment again, with caution",
        publication: "Hindustan Times",
        date: "2025",
        pubCategory: "national",
        url: "https://www.hindustantimes.com/opinion/opening-the-doors-for-chinese-investment-again-with-caution-101775056465016.html",
        tags: ["security", "economy"]
    },
    {
        title: "India chooses silence during war and crises because posturing will have costs",
        publication: "Indian Express",
        date: "October 2024",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/india-iran-israel-war-us-attack-on-iran-tehran-india-relations-10596253/",
        tags: ["security"]
    },
    {
        title: "China's blueprint for the next leap",
        publication: "Deccan Herald",
        date: "September 2024",
        pubCategory: "national",
        url: "https://www.deccanherald.com/opinion/chinas-blueprint-for-the-next-leap-3940825",
        tags: ["economy", "technology"]
    },
    {
        title: "Why China's finances are weaker than they seem",
        publication: "ThinkChina",
        date: "August 2024",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/why-chinas-finances-are-weaker-they-seem",
        tags: ["economy"]
    },
    {
        title: "Donald Trump thought his tariffs would hurt China. He was wrong",
        publication: "Indian Express",
        date: "July 2024",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/donald-trump-xi-jinping-china-trade-surplus-10474701/",
        tags: ["economy"]
    },
    {
        title: "For India-Russia partnership, Moscow must do its fair share",
        publication: "Indian Express",
        date: "June 2024",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/for-india-russia-partnership-moscow-must-do-its-fair-share-10403005/",
        tags: ["security"]
    },
    {
        title: "India must look beyond Main Battle Tanks. It is expensive and outdated",
        publication: "The Print",
        date: "May 2024",
        pubCategory: "national",
        url: "https://theprint.in/opinion/india-main-battle-tanks-expensive-outdated/2776143/",
        tags: ["security"]
    },
    {
        title: "Trump-Xi Talks: Short-term Truce; Long-term Friction",
        publication: "Moneycontrol",
        date: "April 2024",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/trump-xi-talks-short-term-truce-long-term-friction-13645164.html",
        tags: ["security", "economy"]
    },
    {
        title: "China, US to Saudi Arabia: Pakistan's quest for multiple patrons",
        publication: "Indian Express",
        date: "March 2024",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/china-us-pakistan-relation-shehbaz-sharif-asif-munir-donald-trump-10312441/",
        tags: ["security"]
    },
    {
        title: "China wants control, not cooperation",
        publication: "Indian Express",
        date: "February 2024",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/china-wants-control-not-cooperation-10245460/",
        tags: ["security"]
    },
    {
        title: "China's official trade surplus remains as high as at its peak",
        publication: "Nikkei Asia",
        date: "January 2024",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/china-s-official-trade-surplus-remains-as-high-as-at-its-peak",
        tags: ["economy"]
    },
    {
        title: "The Dalai Lama's succession and the geopolitics of faith",
        publication: "ThinkChina",
        date: "December 2023",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/politics/dalai-lamas-succession-and-geopolitics-faith",
        tags: ["security"]
    },
    {
        title: "Why is Trump upset with India? It is not about peace in Ukraine",
        publication: "Indian Express",
        date: "November 2023",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/donald-trump-russian-oil-trumps-tarrif-on-india-10172780/",
        tags: ["economy"]
    },
    {
        title: "India faces a Russia dilemma",
        publication: "Indian Express",
        date: "October 2023",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/is-russia-indias-friend-modi-in-brics-russia-india-relations-10111246/",
        tags: ["security"]
    },
    {
        title: "Made in China or spent in China? Beijing's impossible balancing act",
        publication: "ThinkChina",
        date: "September 2023",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/made-china-or-spent-china-beijings-impossible-balancing-act",
        tags: ["economy"]
    },
    {
        title: "US-China trade war leaves India confronting three negative spillovers",
        publication: "Moneycontrol",
        date: "August 2023",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/us-china-trade-war-leaves-india-confronting-three-negative-spillovers-13161093.html",
        tags: ["economy"]
    },
    {
        title: "The US-China Trade War is Far from Over",
        publication: "The Qunit",
        date: "July 2023",
        pubCategory: "national",
        url: "https://www.thequint.com/opinion/us-china-trade-war-far-from-over",
        tags: ["economy"]
    },
    {
        title: "India's china policy needs more strategic clarity",
        publication: "The Hindu",
        date: "June 2023",
        pubCategory: "national",
        url: "https://www.thehindu.com/opinion/op-ed/indias-china-policy-needs-more-strategic-clarity/article67166457/",
        tags: ["security"]
    },
    {
        title: "China's debt trap is slowly tightening",
        publication: "Nikkei Asia",
        date: "May 2023",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/chinas-debt-trap-is-slowly-tightening",
        tags: ["economy"]
    },
    {
        title: "Technology, not geopolitics, will define US-China competition",
        publication: "Foreign Policy",
        date: "April 2023",
        pubCategory: "international",
        url: "https://foreignpolicy.com/article/technology-not-geopolitics-define-us-china-competition",
        tags: ["technology"]
    },
    {
        title: "Semiconductors are the new flashpoint in US-China relations",
        publication: "ThinkChina",
        date: "March 2023",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/technology/semiconductors-new-flashpoint-us-china-relations",
        tags: ["technology", "security"]
    },
    {
        title: "China's digital economy under scrutiny",
        publication: "Moneycontrol",
        date: "February 2023",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/opinion/chinas-digital-economy-under-scrutiny",
        tags: ["technology", "economy"]
    },
    {
        title: "The Belt and Road Initiative at a crossroads",
        publication: "Indian Express",
        date: "January 2023",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/belt-and-road-initiative-crossroads",
        tags: ["economy", "security"]
    },
    {
        title: "China's property crisis threatens global stability",
        publication: "Deccan Herald",
        date: "December 2022",
        pubCategory: "national",
        url: "https://www.deccanherald.com/opinion/chinas-property-crisis-threatens-global-stability",
        tags: ["economy"]
    },
    {
        title: "Xi Jinping's third term: What it means for global order",
        publication: "Foreign Policy",
        date: "November 2022",
        pubCategory: "international",
        url: "https://foreignpolicy.com/article/xi-jinping-third-term-global-order",
        tags: ["security"]
    },
    {
        title: "India-China relations: Beyond the border dispute",
        publication: "The Print",
        date: "October 2022",
        pubCategory: "national",
        url: "https://theprint.in/opinion/india-china-relations-beyond-border",
        tags: ["security"]
    },
    {
        title: "China's zero-COVID exit will reshape global economy",
        publication: "Nikkei Asia",
        date: "September 2022",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/chinas-zero-covid-exit",
        tags: ["economy"]
    },
    {
        title: "Why BRICS matters more than ever",
        publication: "ThinkChina",
        date: "August 2022",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/why-brics-matters",
        tags: ["security", "economy"]
    },
    {
        title: "The geopolitics of rare earth minerals",
        publication: "The Hindu",
        date: "July 2022",
        pubCategory: "national",
        url: "https://www.thehindu.com/opinion/the-geopolitics-of-rare-earth-minerals",
        tags: ["economy", "technology"]
    },
    {
        title: "China's military modernization: A challenge for Asia",
        publication: "Hindustan Times",
        date: "June 2022",
        pubCategory: "national",
        url: "https://www.hindustantimes.com/opinion/chinas-military-modernization-challenge-for-asia",
        tags: ["security", "technology"]
    },
    {
        title: "Economic decoupling: The new Cold War reality",
        publication: "Moneycontrol",
        date: "May 2022",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/opinion/economic-decoupling-cold-war",
        tags: ["economy"]
    },
    {
        title: "Taiwan's importance in global semiconductor supply",
        publication: "Foreign Policy",
        date: "April 2022",
        pubCategory: "international",
        url: "https://foreignpolicy.com/article/taiwan-semiconductors",
        tags: ["technology", "security"]
    },
    {
        title: "China's debt problem is everyone's problem",
        publication: "Nikkei Asia",
        date: "March 2022",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/chinas-debt-everyone-problem",
        tags: ["economy"]
    },
    {
        title: "India's strategic autonomy in a polarizing world",
        publication: "Indian Express",
        date: "February 2022",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/indias-strategic-autonomy",
        tags: ["security"]
    },
    {
        title: "The digital silk road and data colonialism",
        publication: "ThinkChina",
        date: "January 2022",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/technology/digital-silk-road",
        tags: ["technology", "economy"]
    },
    {
        title: "China's rise and the law of the jungle",
        publication: "Deccan Herald",
        date: "December 2021",
        pubCategory: "national",
        url: "https://www.deccanherald.com/opinion/chinas-rise-and-law-jungle",
        tags: ["security"]
    },
    {
        title: "Why India should worry about China's space ambitions",
        publication: "The Print",
        date: "November 2021",
        pubCategory: "national",
        url: "https://theprint.in/opinion/chinas-space-ambitions",
        tags: ["technology", "security"]
    },
    {
        title: "China's regulatory crackdown on tech",
        publication: "Moneycontrol",
        date: "October 2021",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/opinion/chinas-tech-crackdown",
        tags: ["technology", "economy"]
    },
    {
        title: "The Aukus alliance and Indo-Pacific security",
        publication: "Foreign Policy",
        date: "September 2021",
        pubCategory: "international",
        url: "https://foreignpolicy.com/article/aukus-alliance",
        tags: ["security"]
    },
    {
        title: "China's carbon neutrality goals: Ambition vs reality",
        publication: "Nikkei Asia",
        date: "August 2021",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/chinas-carbon-neutrality",
        tags: ["economy"]
    },
    {
        title: "Decoding China's dual circulation strategy",
        publication: "ThinkChina",
        date: "July 2021",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/dual-circulation",
        tags: ["economy"]
    },
    {
        title: "India's role in a fractured global order",
        publication: "The Hindu",
        date: "June 2021",
        pubCategory: "national",
        url: "https://www.thehindu.com/opinion/indias-role-fractured-order",
        tags: ["security"]
    },
    {
        title: "China's assertiveness and ASEAN's dilemma",
        publication: "Hindustan Times",
        date: "May 2021",
        pubCategory: "national",
        url: "https://www.hindustantimes.com/opinion/chinas-assertiveness-asean",
        tags: ["security"]
    },
    {
        title: "The economics of conflict: India-China border",
        publication: "Indian Express",
        date: "April 2021",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/economics-of-conflict-india-china",
        tags: ["security", "economy"]
    },
    {
        title: "How China is winning the narrative war",
        publication: "Moneycontrol",
        date: "March 2021",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/opinion/china-narrative-war",
        tags: ["security"]
    },
    {
        title: "The new great game in Central Asia",
        publication: "Foreign Policy",
        date: "February 2021",
        pubCategory: "international",
        url: "https://foreignpolicy.com/article/great-game-central-asia",
        tags: ["security", "economy"]
    },
    {
        title: "China's wolf warrior diplomacy",
        publication: "Nikkei Asia",
        date: "January 2021",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/chinas-wolf-warrior",
        tags: ["security"]
    }
];

// Papers data with dates and theme tags
const papersData = [
    {
        title: "De-Risking Trade with China: Evaluating India's Options",
        publication: "Takshashila Institution",
        date: "March 30, 2026",
        description: "Strategic analysis of India's approaches to managing economic dependency on China through trade de-risking initiatives.",
        url: "https://takshashila.org.in/research/de-risking-india-china-trade",
        tags: ["economy", "security"]
    },
    {
        title: "China's Technology Competition: The Semiconductor Challenge",
        publication: "Observer Research Foundation",
        date: "March 4, 2026",
        description: "Examination of China's technological advancement in semiconductors and implications for global supply chains.",
        url: "https://www.orfonline.org/research/chinas-semiconductor-competition",
        tags: ["technology", "economy"]
    },
    {
        title: "Belt and Road Initiative: Debt Sustainability Analysis",
        publication: "Takshashila Institution",
        date: "October 13, 2025",
        description: "Comprehensive assessment of BRI projects' financial viability and debt sustainability across recipient countries.",
        url: "https://takshashila.org.in/research/bri-debt-sustainability",
        tags: ["economy", "security"]
    },
    {
        title: "India-China Economic Competition in South Asia",
        publication: "Brookings India",
        date: "May 14, 2025",
        description: "Analysis of competing economic influence of India and China across South Asian economies.",
        url: "https://brookings.edu/research/india-china-south-asia",
        tags: ["economy", "security"]
    },
    {
        title: "Digital Sovereignty and the Geopolitics of Data",
        publication: "Takshashila Institution",
        date: "April 2025",
        description: "Framework for understanding data governance challenges in an era of technological nationalism.",
        url: "https://takshashila.org.in/research/digital-sovereignty-data",
        tags: ["technology", "security"]
    },
    {
        title: "China's Economic Slowdown: Structural or Cyclical?",
        publication: "Carnegie Endowment",
        date: "January 1, 2025",
        description: "Deep dive into the nature of China's economic deceleration and long-term growth prospects.",
        url: "https://carnegieendowment.org/research/chinas-economic-slowdown",
        tags: ["economy"]
    },
    {
        title: "Artificial Intelligence and Military Modernization",
        publication: "RAND Corporation",
        date: "September 3, 2024",
        description: "Analysis of AI's role in transforming military capabilities and strategic competition.",
        url: "https://rand.org/research/ai-military-modernization",
        tags: ["technology", "security"]
    },
    {
        title: "China's Port Strategy in the Indian Ocean",
        publication: "Takshashila Institution",
        date: "March 9, 2024",
        description: "Geopolitical implications of China's expanding port infrastructure and naval presence in Indian Ocean.",
        url: "https://takshashila.org.in/research/china-port-strategy",
        tags: ["security", "economy"]
    },
    {
        title: "Supply Chain Resilience Post-COVID",
        publication: "Observer Research Foundation",
        date: "August 30, 2023",
        description: "Post-Zero-COVID economic assessment highlighting headwinds in consumption, real estate, exports, local debt, and FDI.",
        url: "https://www.orfonline.org/research/supply-chain-resilience",
        tags: ["economy", "technology"]
    },
    {
        title: "Defining Dependence-Induced Vulnerabilities in Trade",
        publication: "Takshashila Institution",
        date: "July 20, 2023",
        description: "Conceptual framework establishing tests to distinguish critical vulnerabilities from routine asymmetrical trade interdependence.",
        url: "https://takshashila.org.in/research/trade-vulnerabilities",
        tags: ["economy", "security"]
    },
    {
        title: "India-China Border: Tactics, Talks and Transgressions",
        publication: "Takshashila Institution",
        date: "March 9, 2023",
        description: "Analysis of India-China border dynamics through multiple dimensions of conflict, negotiation, and strategic maneuvering.",
        url: "https://takshashila.org.in/research/india-china-border",
        tags: ["security"]
    },
    {
        title: "Chinese Economy: A Bird's Eye View",
        publication: "Takshashila Institution",
        date: "February 14, 2023",
        description: "Comprehensive overview of the Chinese economy covering key sectors, structural challenges, and future trajectories.",
        url: "https://takshashila.org.in/research/chinese-economy-overview",
        tags: ["economy"]
    },
    {
        title: "Reducing Data Asymmetry to Strengthen Supply Chains",
        publication: "T20 India",
        date: "2023",
        description: "Proposes G20 cooperation framework for mitigating supply chain information disparities among stakeholders.",
        url: "https://t20ind.org/research/reducing-data-asymmetry-to-strengthen-supply-chains/",
        tags: ["economy", "technology"]
    },
    {
        title: "China's Two-Front Conundrum: A Perspective on the India-China Border",
        publication: "Observer Research Foundation",
        date: "2022",
        description: "Explores India-China border instability through lens of Beijing's historical two-front threat perception as management tool.",
        url: "https://www.orfonline.org/research/chinas-two-front-conundrum",
        tags: ["security"]
    },
    {
        title: "Understanding the Rejuvenation of China's Revolutionary Impulse",
        publication: "Jawaharlal Nehru University",
        date: "2021",
        description: "Examines Xi Jinping's ideological emphasis, arguing revolutionary impulse alongside nationalism addresses leadership authority concerns.",
        url: "https://www.orfonline.org/research/understanding-the-rejuvenation-of-chinas-revolutionary-impulse",
        tags: ["security"]
    }
];

// Media appearances data
const mediaData = [
    {
        title: "Who Will Be the Next Dalai Lama… And Why Is It So Political?",
        outlet: "ET Now Swadesh",
        url: "https://www.youtube.com/watch?si=oHYGOkMO4Wk-KNFi&v=LNnbeGNljx0&feature=youtu.be"
    },
    {
        title: "Swadesh Videsh: China's Economic Warfare",
        outlet: "ET Now Swadesh (Hindi)",
        url: "https://www.youtube.com"
    },
    {
        title: "Interpreting China: The Economy and its Impact on Foreign Policy",
        outlet: "Carnegie India",
        url: "https://www.youtube.com"
    },
    {
        title: "Can Trump wean Putin away from China?",
        outlet: "STRATNEWSGLOBAL",
        url: "https://www.youtube.com"
    },
    {
        title: "Comparing India-China Consumption Trends",
        outlet: "PULIYABAAZI",
        url: "https://www.youtube.com"
    },
    {
        title: "Young Scholars Analyse China's Politics, Economy And The Military",
        outlet: "STRATNEWSGLOBAL",
        url: "https://www.youtube.com"
    },
    {
        title: "The Biden-Xi meet: China trap? Or lukewarm re-engagement?",
        outlet: "GLOBAL EXPRESS",
        url: "https://www.youtube.com"
    },
    {
        title: "China Has Not Weaponised Its Trade Leverage Against India",
        outlet: "STRATNEWSGLOBAL",
        url: "https://www.youtube.com"
    },
    {
        title: "Taiwan Stirs Chinese Nationalism In A Way India Does Not",
        outlet: "STRATNEWSGLOBAL",
        url: "https://www.youtube.com"
    },
    {
        title: "No Thaw In Ties With India Till China-U.S. Rapprochement Happens",
        outlet: "BHARATSHAKTI.IN",
        url: "https://www.youtube.com"
    },
    {
        title: "Global Express: Ukraine's Spiderweb Operations",
        outlet: "The New Indian Express",
        url: "https://www.youtube.com"
    }
];
