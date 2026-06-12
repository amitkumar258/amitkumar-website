// All commentaries data with dates, publication categories, and theme tags
// Updated from user-provided document with 45 commentaries
const commentariesData = [
    {
        title: "China's critical minerals export ban falls short",
        publication: "ThinkChina",
        date: "21/04/2026",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/",
        tags: ["economy", "technology"]
    },
    {
        title: "Opening the doors for Chinese investment again, with caution",
        publication: "Hindustan Times",
        date: "01/04/2026",
        pubCategory: "national",
        url: "https://www.hindustantimes.com/opinion/opening-the-doors-for-chinese-investment-again-with-caution-101775056465016.html",
        tags: ["security", "economy"]
    },
    {
        title: "India chooses silence during war and crises because posturing will have costs",
        publication: "Indian Express",
        date: "23/03/2026",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/india-chooses-silence-during-war/",
        tags: ["security"]
    },
    {
        title: "China's blueprint for the next leap",
        publication: "Deccan Herald",
        date: "22/03/2026",
        pubCategory: "national",
        url: "https://www.deccanherald.com/opinion/chinas-blueprint-for-the-next-leap-3940825",
        tags: ["economy", "technology"]
    },
    {
        title: "Donald Trump thought his tariffs would hurt China. He was wrong",
        publication: "Indian Express",
        date: "15/01/2026",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/trump-tariffs-china/",
        tags: ["economy"]
    },
    {
        title: "For India-Russia partnership, Moscow must do its fair share",
        publication: "Indian Express",
        date: "05/12/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/india-russia-partnership/",
        tags: ["security"]
    },
    {
        title: "Putin in Delhi: Russia is an indispensable partner",
        publication: "Indian Express",
        date: "04/12/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/putin-delhi/",
        tags: ["security"]
    },
    {
        title: "India must look beyond Main Battle Tanks. It is expensive and outdated",
        publication: "The Print",
        date: "03/11/2025",
        pubCategory: "national",
        url: "https://theprint.in/opinion/india-main-battle-tanks-expensive-outdated/2776143/",
        tags: ["security"]
    },
    {
        title: "China, US to Saudi Arabia: Pakistan's quest for multiple patrons",
        publication: "Indian Express",
        date: "17/10/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/pakistan-quest-multiple-patrons/",
        tags: ["security"]
    },
    {
        title: "China wants control, not cooperation",
        publication: "Indian Express",
        date: "12/09/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/china-wants-control/",
        tags: ["security"]
    },
    {
        title: "China's official trade surplus remains as high as at its peak",
        publication: "Nikkei Asia",
        date: "12/08/2025",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/china-s-official-trade-surplus-remains-as-high-as-at-its-peak",
        tags: ["economy"]
    },
    {
        title: "Dalai Lama's succession and geopolitics of faith",
        publication: "ThinkChina",
        date: "11/08/2025",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/politics/dalai-lamas-succession-and-geopolitics-faith",
        tags: ["security"]
    },
    {
        title: "Why is Trump upset with India? It is not about peace in Ukraine",
        publication: "Indian Express",
        date: "06/08/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/trump-upset-india/",
        tags: ["economy"]
    },
    {
        title: "India faces a Russia dilemma",
        publication: "Indian Express",
        date: "09/07/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/india-russia-dilemma/",
        tags: ["security"]
    },
    {
        title: "Made in China or spent in China? Beijing's impossible balancing act",
        publication: "ThinkChina",
        date: "01/07/2025",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/made-in-china-or-spent-in-china-beijings-impossible-balancing-act",
        tags: ["economy"]
    },
    {
        title: "US-China trade war leaves India confronting three negative spillovers",
        publication: "Moneycontrol",
        date: "23/06/2025",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/us-china-trade-war-leaves-india-confronting-three-negative-spillovers-13161093.html",
        tags: ["economy"]
    },
    {
        title: "Protracted conflict between India and Pakistan will mean tough choices for Russia and China",
        publication: "Indian Express",
        date: "13/05/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/protracted-conflict-india-pakistan/",
        tags: ["security"]
    },
    {
        title: "Why China's finances are weaker than they seem",
        publication: "ThinkChina",
        date: "10/05/2025",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/why-chinas-finances-are-weaker-they-seem",
        tags: ["economy"]
    },
    {
        title: "In global trade war, China is unlikely to blink first",
        publication: "Indian Express",
        date: "10/04/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/china-trade-war/",
        tags: ["economy"]
    },
    {
        title: "Trump-Xi talks: Short-term truce, long-term friction",
        publication: "Moneycontrol",
        date: "20/12/2024",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/trump-xi-talks-short-term-truce-long-term-friction-13645164.html",
        tags: ["economy"]
    },
    {
        title: "Using coercive economic tools as strategic leverage",
        publication: "Firstpost",
        date: "18/12/2024",
        pubCategory: "national",
        url: "https://www.firstpost.com/opinion/using-coercive-economic-tools/",
        tags: ["economy", "security"]
    },
    {
        title: "India warming to Chinese investment?",
        publication: "ThinkChina",
        date: "24/10/2024",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/india-warming-chinese-investment",
        tags: ["economy", "security"]
    },
    {
        title: "India's waning interest in Shanghai Cooperation Organisation",
        publication: "Deccan Herald",
        date: "22/10/2024",
        pubCategory: "national",
        url: "https://www.deccanherald.com/opinion/indias-waning-interest-in-shanghai-cooperation-organisation-3244075",
        tags: ["security"]
    },
    {
        title: "China isn't ready to shift to a consumption-driven economy",
        publication: "Nikkei Asia",
        date: "28/09/2024",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/china-isn-t-ready-to-shift-to-a-consumption-driven-economy",
        tags: ["economy"]
    },
    {
        title: "Power asymmetry between China and Russia",
        publication: "The Hindu",
        date: "13/09/2024",
        pubCategory: "national",
        url: "https://www.thehindu.com/news/international/power-asymmetry-between-china-and-russia/article68653066.ece",
        tags: ["security"]
    },
    {
        title: "The US Can Accelerate India's Rise as a Legacy Chip Hub",
        publication: "The Diplomat",
        date: "14/08/2024",
        pubCategory: "international",
        url: "https://thediplomat.com/2024/08/the-us-can-accelerate-indias-rise-as-a-legacy-chip-hub/",
        tags: ["technology", "economy"]
    },
    {
        title: "India is well placed to become the next China and drive global growth",
        publication: "Nikkei Asia",
        date: "09/08/2024",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/india-is-well-placed-to-become-the-next-china-and-drive-global-growth",
        tags: ["economy"]
    },
    {
        title: "India gains semiconductor momentum, but the policy mix can be even better",
        publication: "Moneycontrol",
        date: "23/05/2024",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/india-gains-semiconductor-momentum-but-the-policy-mix-can-be-even-better-12417121.html",
        tags: ["technology", "economy"]
    },
    {
        title: "India-China consumption comparison",
        publication: "The Hindu",
        date: "20/05/2024",
        pubCategory: "national",
        url: "https://www.thehindu.com/business/Economy/india-china-consumption-comparison/article68197627.ece",
        tags: ["economy"]
    },
    {
        title: "How recent Maldives parliamentary election results are a silver lining for India",
        publication: "Firstpost",
        date: "23/04/2024",
        pubCategory: "national",
        url: "https://www.firstpost.com/opinion/how-recent-maldives-parliamentary-election-results-are-a-silver-lining-for-india-13764173.html",
        tags: ["security"]
    },
    {
        title: "Warmer Moscow-Beijing ties are a chilling signal for New Delhi",
        publication: "Indian Express",
        date: "21/04/2024",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/warmer-moscow-beijing-ties/",
        tags: ["security"]
    },
    {
        title: "The Hidden Dangers in China's GDP Numbers",
        publication: "Foreign Policy",
        date: "11/03/2024",
        pubCategory: "international",
        url: "https://foreignpolicy.com/author/amit-kumar/",
        tags: ["economy"]
    },
    {
        title: "Is Trust a Foregone Conclusion in India-Russia Relations? It's All About China",
        publication: "The Quint",
        date: "12/02/2024",
        pubCategory: "national",
        url: "https://www.thequint.com/author/1443855/amit-kumar-32",
        tags: ["security"]
    },
    {
        title: "India-US Ties: Despite Nijjar Storm, All's Well on the Western Front",
        publication: "The Quint",
        date: "24/11/2023",
        pubCategory: "national",
        url: "https://www.thequint.com/author/1443855/amit-kumar-32",
        tags: ["security"]
    },
    {
        title: "What to expect from the Joe Biden-Xi Jinping summit",
        publication: "Moneycontrol",
        date: "15/11/2023",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/what-to-expect-from-the-joe-biden-xi-jinping-summit-11742331.html",
        tags: ["security"]
    },
    {
        title: "Growing US-China chip rivalry presents India with its geopolitical moment",
        publication: "Moneycontrol",
        date: "03/11/2023",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/growing-us-china-chip-rivalry-presents-india-with-its-geopolitical-moment-11703201.html",
        tags: ["technology", "security"]
    },
    {
        title: "The signals from this 'Made in China' smartphone story",
        publication: "The Hindu",
        date: "12/09/2023",
        pubCategory: "national",
        url: "https://www.thehindu.com/opinion/op-ed/the-signals-from-this-made-in-china-smartphone-story/article67296120.ece",
        tags: ["technology"]
    },
    {
        title: "In the chip war, US has the edge over China",
        publication: "Hindustan Times",
        date: "01/08/2023",
        pubCategory: "national",
        url: "https://www.hindustantimes.com/opinion/in-the-chip-war-us-has-the-edge-over-china-101690900110589.html",
        tags: ["technology", "security"]
    },
    {
        title: "Explained | China's 'developmental' security approach",
        publication: "The Hindu",
        date: "19/06/2023",
        pubCategory: "national",
        url: "https://www.thehindu.com/news/international/explained-chinas-developmental-security-approach/article66982632.ece",
        tags: ["security"]
    },
    {
        title: "'Two Sessions' Later, How China's Contradictory Policies Will Impact India",
        publication: "The Quint",
        date: "15/04/2023",
        pubCategory: "national",
        url: "https://www.thequint.com/author/1443855/amit-kumar-32",
        tags: ["economy"]
    },
    {
        title: "India's Policy Towards China Must Leverage Latter's Two-Front Situation",
        publication: "The Quint",
        date: "12/04/2023",
        pubCategory: "national",
        url: "https://www.thequint.com/author/1443855/amit-kumar-32",
        tags: ["security"]
    },
    {
        title: "China's Two-Front Dilemma",
        publication: "ORF Expert Speak",
        date: "02/03/2023",
        pubCategory: "national",
        url: "https://www.orfonline.org/expert-speak/chinas-two-front-conundrum",
        tags: ["security"]
    },
    {
        title: "How Xi Jinping used 'revolution' instead of 'nationalism' to take control of China",
        publication: "The Print",
        date: "02/10/2022",
        pubCategory: "national",
        url: "https://theprint.in/opinion/how-xi-jinping-used-revolution-instead-of-nationalism-to-take-control-of-china/1149691/",
        tags: ["security"]
    },
    {
        title: "Xi's legacy in the 'New Era'",
        publication: "ORF Expert Speak",
        date: "20/09/2022",
        pubCategory: "national",
        url: "https://www.orfonline.org/expert-speak/xi-s-legacy-in-the-new-era",
        tags: ["security"]
    },
    {
        title: "China's renewed push to tame religion",
        publication: "ORF Expert Speak",
        date: "14/09/2022",
        pubCategory: "national",
        url: "https://www.orfonline.org/expert-speak/chinas-renewed-push-to-tame-religion",
        tags: ["security"]
    },
    {
        title: "Is Li coming out of Xi's shadow? His assertiveness is visible",
        publication: "The Print",
        date: "21/06/2022",
        pubCategory: "national",
        url: "https://theprint.in/opinion/is-li-coming-out-of-xis-shadow-his-assertiveness-is-visible/1004415/",
        tags: ["security"]
    },
    {
        title: "One-upmanship at the top shows cracks in China's system",
        publication: "ORF Expert Speak",
        date: "16/06/2022",
        pubCategory: "national",
        url: "https://www.orfonline.org/expert-speak/one-upmanship-at-the-top-shows-cracks-in-chinas-system",
        tags: ["security"]
    },
    {
        title: "Taiwan's evolving security concerns and prospects of cross-strait unification",
        publication: "VIF India",
        date: "17/09/2021",
        pubCategory: "national",
        url: "https://www.vifindia.org/article/2021/september/17/taiwans-evolving-security-concerns-and-prospects-of-cross-strait-unification",
        tags: ["security"]
    },
    {
        title: "The two tales of Pakistan's geography",
        publication: "VIF India",
        date: "02/09/2021",
        pubCategory: "national",
        url: "https://www.vifindia.org/article/2021/september/02/the-two-tales-of-pakistans-geography",
        tags: ["security"]
    },
    {
        title: "A Crisis Looms as the Chinese Communist Party Celebrates its Centenary Year",
        publication: "The Diplomatist",
        date: "02/07/2021",
        pubCategory: "national",
        url: "https://diplomatist.com/a-crisis-looms-as-the-chinese-communist-party-celebrates-its-centenary-year/",
        tags: ["security"]
    },
    {
        title: "Why not an 'end of history' for China?",
        publication: "The Diplomatist",
        date: "07/06/2021",
        pubCategory: "national",
        url: "https://diplomatist.com/why-not-an-end-of-history-for-china/",
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
