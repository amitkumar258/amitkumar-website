// All commentaries data with dates, publication categories, and theme tags
// Updated from user-provided document with 45 commentaries
const commentariesData = [
    {
        title: "China's critical minerals export ban falls short",
        publication: "ThinkChina",
        date: "21/04/2026",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/chinas-critical-minerals-export-ban-falls-short",
        tags: ["economy", "technology", "china", "US"]
    },
    {
        title: "Opening the doors for Chinese investment again, with caution",
        publication: "Hindustan Times",
        date: "01/04/2026",
        pubCategory: "national",
        url: "https://www.hindustantimes.com/opinion/opening-the-doors-for-chinese-investment-again-with-caution-101775056465016.html",
        tags: ["security", "economy", "china", "india"]
    },
    {
        title: "India chooses silence during war and crises because posturing will have costs",
        publication: "Indian Express",
        date: "23/03/2026",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/india-iran-israel-war-us-attack-on-iran-tehran-india-relations-10596253/",
        tags: ["security", "india", "russia"]
    },
    {
        title: "China's blueprint for the next leap",
        publication: "Deccan Herald",
        date: "22/03/2026",
        pubCategory: "national",
        url: "https://www.deccanherald.com/opinion/chinas-blueprint-for-the-next-leap-3940825",
        tags: ["economy", "technology", "china"]
    },
    {
        title: "Why China's finances are weaker than they seem",
        publication: "ThinkChina",
        date: "19/03/2026",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/why-chinas-finances-are-weaker-they-seem",
        tags: ["economy", "china"]
    },
    {
        title: "Donald Trump thought his tariffs would hurt China. He was wrong",
        publication: "Indian Express",
        date: "15/01/2026",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/donald-trump-xi-jinping-china-trade-surplus-10474701/",
        tags: ["economy", "US", "china"]
    },
    {
        title: "For India-Russia partnership, Moscow must do its fair share",
        publication: "Indian Express",
        date: "05/12/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/for-india-russia-partnership-moscow-must-do-its-fair-share-10403005/",
        tags: ["security", "india", "russia"]
    },
    {
        title: "Putin in Delhi: Russia is an indispensable partner. But the consequences of its actions cannot be left for India to deal with",
        publication: "Indian Express",
        date: "04/12/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/putin-in-delhi-india-russia-relations-ukraine-war-10401435/",
        tags: ["security", "india", "russia"]
    },
    {
        title: "India must look beyond Main Battle Tanks. It is expensive and outdated",
        publication: "The Print",
        date: "03/11/2025",
        pubCategory: "national",
        url: "https://theprint.in/opinion/india-main-battle-tanks-expensive-outdated/2776143/",
        tags: ["security", "india"]
    },
    {
        title: "China, US to Saudi Arabia: Pakistan's quest for multiple patrons",
        publication: "Indian Express",
        date: "17/10/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/china-us-pakistan-relation-shehbaz-sharif-asif-munir-donald-trump-10312441/",
        tags: ["security", "china", "US", "pakistan"]
    },
    {
        title: "China wants control, not cooperation",
        publication: "Indian Express",
        date: "12/09/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/china-wants-control/",
        tags: ["security", "china", "russia"]
    },
    {
        title: "Trouble Triangulating: The US, China and Russia",
        publication: "Eye on China",
        date: "27/08/2025",
        pubCategory: "national",
        url: "https://eyeonchina.substack.com/p/trouble-triangulating?utm_source=publication-search",
        tags: ["US", "china", "russia", "security"]
    },
    {
        title: "China's official trade surplus remains as high as at its peak",
        publication: "Nikkei Asia",
        date: "12/08/2025",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/china-s-official-trade-surplus-remains-as-high-as-at-its-peak",
        tags: ["economy", "china"]
    },
    {
        title: "Dalai Lama's succession and geopolitics of faith",
        publication: "ThinkChina",
        date: "11/08/2025",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/politics/dalai-lamas-succession-and-geopolitics-faith",
        tags: ["security", "china", "india"]
    },
    {
        title: "Why is Trump upset with India? It is not about peace in Ukraine",
        publication: "Indian Express",
        date: "06/08/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/donald-trump-russian-oil-trumps-tarrif-on-india-10172780/",
        tags: ["economy", "US", "india"]
    },
    {
        title: "India faces a Russia dilemma",
        publication: "Indian Express",
        date: "09/07/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/is-russia-indias-friend-modi-in-brics-russia-india-relations-10111246/",
        tags: ["security", "india", "russia"]
    },
    {
        title: "Made in China or spent in China? Beijing's impossible balancing act",
        publication: "ThinkChina",
        date: "01/07/2025",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/made-china-or-spent-china-beijings-impossible-balancing-act",
        tags: ["economy", "china"]
    },
    {
        title: "US-China trade war leaves India confronting three negative spillovers",
        publication: "Moneycontrol",
        date: "23/06/2025",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/us-china-trade-war-leaves-india-confronting-three-negative-spillovers-13161093.html",
        tags: ["economy", "US", "china", "india"]
    },
    {
        title: "China's duplicity on display during the India-Pakistan conflict",
        publication: "Firstpost",
        date: "25/05/2025",
        pubCategory: "national",
        url: "https://www.firstpost.com/opinion/chinas-duplicity-on-display-during-the-india-pakistan-conflict-13890777.html",
        tags: ["security", "china", "india"]
    },
    {
        title: "Protracted conflict between India and Pakistan will mean tough choices for Russia and China",
        publication: "Indian Express",
        date: "13/05/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/pakistan-india-conflict-russia-china-tough-choice-10000220/",
        tags: ["security", "india", "russia", "china", "pakistan"]
    },
    {
        title: "In global trade war, China is unlikely to blink first. It has options to counter Trump",
        publication: "Indian Express",
        date: "10/04/2025",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/global-trade-war-us-china-trump-reciprocal-tariffs-9936569/",
        tags: ["economy", "US", "china"]
    },
    {
        title: "Digging Deep: Tunnel Boring Machines and India's China Challenge",
        publication: "Takshashila Institution",
        date: "22/01/2025",
        pubCategory: "national",
        url: "https://takshashila.org.in/content/blogs/digging-deep.html",
        tags: ["security", "india", "china"]
    },
    {
        title: "Trump-Xi talks: Short-term truce, long-term friction",
        publication: "Moneycontrol",
        date: "20/12/2024",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/trump-xi-talks-short-term-truce-long-term-friction-13645164.html",
        tags: ["economy", "US", "china"]
    },
    {
        title: "A Silicon Curtain: Examining the Implications of US Export Controls on Chips",
        publication: "Takshashila Institution",
        date: "03/12/2024",
        pubCategory: "national",
        url: "https://takshashila.org.in/content/blogs/silicon-curtain.html",
        tags: ["technology", "security", "china", "US"]
    },
    {
        title: "India warming to Chinese investment?",
        publication: "ThinkChina",
        date: "02/12/2024",
        pubCategory: "international",
        url: "https://www.thinkchina.sg/economy/india-warming-chinese-investment",
        tags: ["economy", "security", "china", "india"]
    },
    {
        title: "India's waning interest in Shanghai Cooperation Organisation",
        publication: "Deccan Herald",
        date: "22/10/2024",
        pubCategory: "national",
        url: "https://www.deccanherald.com/opinion/indias-waning-interest-in-shanghai-cooperation-organisation-3244075",
        tags: ["security", "india", "china", "russia"]
    },
    {
        title: "China isn't ready to shift to a consumption-driven economy",
        publication: "Nikkei Asia",
        date: "28/09/2024",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/china-isn-t-ready-to-shift-to-a-consumption-driven-economy",
        tags: ["economy", "china"]
    },
    {
        title: "Power asymmetry between China and Russia",
        publication: "The Hindu",
        date: "13/09/2024",
        pubCategory: "national",
        url: "https://www.thehindu.com/news/international/power-asymmetry-between-china-and-russia/article68653066.ece",
        tags: ["security", "china", "russia"]
    },
    {
        title: "The US Can Accelerate India's Rise as a Legacy Chip Hub",
        publication: "The Diplomat",
        date: "14/08/2024",
        pubCategory: "international",
        url: "https://thediplomat.com/2024/08/the-us-can-accelerate-indias-rise-as-a-legacy-chip-hub/",
        tags: ["technology", "economy", "US", "india"]
    },
    {
        title: "India is well placed to become the next China and drive global growth",
        publication: "Nikkei Asia",
        date: "09/08/2024",
        pubCategory: "international",
        url: "https://asia.nikkei.com/opinion/india-is-well-placed-to-become-the-next-china-and-drive-global-growth",
        tags: ["economy", "india", "china"]
    },
    {
        title: "India-China consumption comparison",
        publication: "The Hindu",
        date: "20/05/2024",
        pubCategory: "national",
        url: "https://www.thehindu.com/business/Economy/india-china-consumption-comparison/article68197627.ece",
        tags: ["economy", "india", "china"]
    },
    {
        title: "China's Electronics Domestic Substitution Mandate Is a Sign of Weakness",
        publication: "Takshashila Institution",
        date: "28/04/2024",
        pubCategory: "national",
        url: "https://legion.takshashila.org.in/blogs/chinas-electronics-domestic-substitution-mandate-is-a-sign-of-weakness",
        tags: ["china", "technology", "economy"]
    },
    {
        title: "How recent Maldives parliamentary election results are a silver lining for India",
        publication: "Firstpost",
        date: "26/04/2024",
        pubCategory: "national",
        url: "https://www.firstpost.com/opinion/how-recent-maldives-parliamentary-election-results-are-a-silver-lining-for-india-13764173.html",
        tags: ["security", "india"]
    },
    {
        title: "Warmer Moscow-Beijing ties are a chilling signal for New Delhi",
        publication: "Indian Express",
        date: "21/04/2024",
        pubCategory: "national",
        url: "https://indianexpress.com/article/opinion/columns/warmer-moscow-beijing-ties-india-chilling-signal-9282828/",
        tags: ["security", "russia", "china", "india"]
    },
    {
        title: "The Hidden Dangers in China's GDP Numbers",
        publication: "Foreign Policy",
        date: "11/03/2024",
        pubCategory: "international",
        url: "https://foreignpolicy.com/author/amit-kumar/",
        tags: ["economy", "china"]
    },
    {
        title: "India gains semiconductor momentum, but the policy mix can be even better",
        publication: "Moneycontrol",
        date: "07/03/2024",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/india-gains-semiconductor-momentum-but-the-policy-mix-can-be-even-better-12417121.html",
        tags: ["technology", "economy", "india"]
    },
    {
        title: "What to expect from the Joe Biden-Xi Jinping summit",
        publication: "Moneycontrol",
        date: "15/11/2023",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/what-to-expect-from-the-joe-biden-xi-jinping-summit-11742331.html",
        tags: ["security", "US", "china"]
    },
    {
        title: "Growing US-China chip rivalry presents India with its geopolitical moment",
        publication: "Moneycontrol",
        date: "09/11/2023",
        pubCategory: "national",
        url: "https://www.moneycontrol.com/news/opinion/growing-us-china-chip-rivalry-presents-india-with-its-geopolitical-moment-11703201.html",
        tags: ["technology", "security", "US", "china", "india"]
    },
    {
        title: "India-US Ties: Despite Nijjar Storm, All's Well on the Western Front",
        publication: "The Quint",
        date: "29/09/2023",
        pubCategory: "national",
        url: "https://www.thequint.com/opinion/india-us-bilateral-ties-nijjar-killing-canada-justin-trudeau-diplomatic-strategic-partnership",
        tags: ["security", "india", "US"]
    },
    {
        title: "The signals from this 'Made in China' smartphone story",
        publication: "The Hindu",
        date: "12/09/2023",
        pubCategory: "national",
        url: "https://www.thehindu.com/opinion/op-ed/the-signals-from-this-made-in-china-smartphone-story/article67296120.ece",
        tags: ["technology", "china"]
    },
    {
        title: "Using coercive economic tools as strategic leverage",
        publication: "StratNewsGlobal",
        date: "14/08/2023",
        pubCategory: "national",
        url: "https://stratnewsglobal.com/premium/using-coercive-economic-tools-as-strategic-leverage/",
        tags: ["economy", "security", "china"]
    },
    {
        title: "In the chip war, US has the edge over China",
        publication: "Hindustan Times",
        date: "01/08/2023",
        pubCategory: "national",
        url: "https://www.hindustantimes.com/opinion/in-the-chip-war-us-has-the-edge-over-china-101690900110589.html",
        tags: ["technology", "security", "US", "china"]
    },
    {
        title: "Explained | China's 'developmental' security approach",
        publication: "The Hindu",
        date: "19/06/2023",
        pubCategory: "national",
        url: "https://www.thehindu.com/news/international/explained-chinas-developmental-security-approach/article66982632.ece",
        tags: ["security", "china"]
    },
    {
        title: "Is Trust a Foregone Conclusion in India-Russia Relations? It's All About China",
        publication: "The Quint",
        date: "29/04/2023",
        pubCategory: "national",
        url: "https://www.thequint.com/opinion/is-trust-foregone-conclusion-india-russia-relations-it-is-about-china",
        tags: ["security", "india", "russia", "china"]
    },
    {
        title: "India's Policy Towards China Must Leverage Latter's Two-Front Situation",
        publication: "The Quint",
        date: "03/04/2023",
        pubCategory: "national",
        url: "https://www.thequint.com/opinion/india-china-policy-two-front-situation-us-indo-pacific",
        tags: ["security", "india", "china", "US"]
    },
    {
        title: "'Two Sessions' Later, How China's Contradictory Policies Will Impact India",
        publication: "The Quint",
        date: "28/03/2023",
        pubCategory: "national",
        url: "https://www.thequint.com/opinion/two-sessions-later-india-china-partnership-might-usher-in-new-age-diplomacy",
        tags: ["economy", "china", "india"]
    },
    {
        title: "Xi's legacy in the 'New Era'",
        publication: "ORF Expert Speak",
        date: "12/10/2022",
        pubCategory: "national",
        url: "https://www.orfonline.org/expert-speak/xi-s-legacy-in-the-new-era",
        tags: ["security", "china"]
    },
    {
        title: "How Xi Jinping used 'revolution' instead of 'nationalism' to take control of China",
        publication: "The Print",
        date: "02/10/2022",
        pubCategory: "national",
        url: "https://theprint.in/opinion/how-xi-jinping-used-revolution-instead-of-nationalism-to-take-control-of-china/1149691/",
        tags: ["security", "china"]
    },
    {
        title: "China's renewed push to tame religion",
        publication: "ORF Expert Speak",
        date: "14/09/2022",
        pubCategory: "national",
        url: "https://www.orfonline.org/expert-speak/chinas-renewed-push-to-tame-religion",
        tags: ["security", "china"]
    },
    {
        title: "Is Li coming out of Xi's shadow? His assertiveness is visible",
        publication: "The Print",
        date: "21/06/2022",
        pubCategory: "national",
        url: "https://theprint.in/opinion/is-li-coming-out-of-xis-shadow-his-assertiveness-is-visible/1004415/",
        tags: ["security", "china"]
    },
    {
        title: "One-upmanship at the top shows cracks in China's system",
        publication: "ORF Expert Speak",
        date: "16/06/2022",
        pubCategory: "national",
        url: "https://www.orfonline.org/expert-speak/one-upmanship-at-the-top-shows-cracks-in-chinas-system",
        tags: ["security", "china"]
    },
    {
        title: "Taiwan's evolving security concerns and prospects of cross-strait unification",
        publication: "VIF India",
        date: "17/09/2021",
        pubCategory: "national",
        url: "https://www.vifindia.org/article/2021/september/17/taiwans-evolving-security-concerns-and-prospects-of-cross-strait-unification",
        tags: ["security", "china", "US"]
    },
    {
        title: "The two tales of Pakistan's geography",
        publication: "VIF India",
        date: "02/09/2021",
        pubCategory: "national",
        url: "https://www.vifindia.org/article/2021/september/02/the-two-tales-of-pakistans-geography",
        tags: ["security", "india"]
    },
    {
        title: "A Crisis Looms as the Chinese Communist Party Celebrates its Centenary Year",
        publication: "The Diplomatist",
        date: "02/07/2021",
        pubCategory: "national",
        url: "https://diplomatist.com/a-crisis-looms-as-the-chinese-communist-party-celebrates-its-centenary-year/",
        tags: ["security", "china"]
    },
    {
        title: "Why not an 'end of history' for China?",
        publication: "The Diplomatist",
        date: "07/06/2021",
        pubCategory: "national",
        url: "https://diplomatist.com/why-not-an-end-of-history-for-china/",
        tags: ["security", "china"]
    }
];

// Papers data — newest to oldest
const papersData = [
    {
        title: "Sand Slipping Through Fingers",
        publication: "Takshashila Institution",
        date: "30/03/2026",
        coAuthor: "Pranay Kotasthane",
        url: "https://takshashila.org.in/content/publications/China-Ga-Ge-Export-Restrictions-29032026.html",
        tags: ["china", "US", "economy", "critical-minerals"]
    },
    {
        title: "Previewing China's 15th Five-Year Plan",
        publication: "Takshashila Institution",
        date: "04/03/2026",
        coAuthor: "Manoj Kewalramani",
        url: "https://takshashila.org.in/content/publications/15-FYP-China-04-03-2026.html",
        tags: ["china", "economy", "domestic-politics", "security"]
    },
    {
        title: "Faultlines & Fallouts",
        publication: "Takshashila Institution",
        date: "19/12/2025",
        coAuthor: "Anushka Saxena, Manoj Kewalramani",
        url: "https://takshashila.org.in/content/publications/20251219-Taiwan-Workshop-Report.html",
        tags: ["china", "security", "technology", "economy", "taiwan"]
    },
    {
        title: "India Must Look Beyond Main Battle Tanks",
        publication: "Takshashila Institution",
        date: "12/10/2025",
        coAuthor: "Satya S. Sahu",
        url: "https://takshashila.org.in/content/publications/20251013_Main_Battle_Tanks.html",
        tags: ["defence", "security", "china", "pakistan"]
    },
    {
        title: "China's Local Governments: Can They Pull the Weight of the Country's Economy?",
        publication: "Takshashila Institution",
        date: "14/05/2025",
        coAuthor: "",
        url: "https://takshashila.org.in/content/publications/20250514-chinas-local-governments.html",
        tags: ["china", "economy"]
    },
    {
        title: "The Pulls and Pushes Within the Chinese Economy",
        publication: "Carnegie Endowment",
        date: "29/04/2025",
        coAuthor: "",
        url: "https://carnegieendowment.org/research/2025/04/views-from-taipei-essays-by-young-indian-scholars-on-china",
        tags: ["china", "economy"]
    },
    {
        title: "De-risking India's Trade with China: Identifying Strategic and Critical Vulnerabilities",
        publication: "Takshashila Institution",
        date: "01/01/2025",
        coAuthor: "",
        url: "https://takshashila.org.in/content/publications/20250101-Derisking-Indias-Trade-With-China.html",
        tags: ["security", "trade", "economy", "dependence", "china"]
    },
    {
        title: "Pulse of the People: State of India-China Relations",
        publication: "Takshashila Institution",
        date: "17/12/2024",
        coAuthor: "Anushka Saxena, Manoj Kewalramani",
        url: "https://takshashila.org.in/content/publications/20241217-pulse-of-the-people.html",
        tags: ["india", "china", "security"]
    },
    {
        title: "USA's Options to Counter China's Increasing Dominance in Legacy Chips",
        publication: "Takshashila Institution",
        date: "07/10/2024",
        coAuthor: "Satya S. Sahu",
        url: "https://takshashila.org.in/content/publications/20241007-usa-counter-chinas-dominance-chips.html",
        tags: ["china", "technology", "security"]
    },
    {
        title: "China-Russia Relationship: Assessing the Power Asymmetry",
        publication: "Takshashila Institution",
        date: "03/09/2024",
        coAuthor: "",
        url: "https://takshashila.org.in/content/publications/20240903-china-russia-power-asymmetry.html",
        tags: ["china", "russia", "security"]
    },
    {
        title: "Geo-consumerism and India-China Competition: A Comparative Assessment of Consumption Data",
        publication: "Takshashila Institution",
        date: "09/03/2024",
        coAuthor: "",
        url: "https://takshashila.org.in/content/publications/20240309-geoconsumerism-india-china-competition.html",
        tags: ["india", "china", "security", "economy"]
    },
    {
        title: "Assessing the Global and Local Landscape of Critical Technologies",
        publication: "Takshashila Institution",
        date: "01/02/2024",
        coAuthor: "",
        url: "https://takshashila.org.in/content/publications/20240201-Assessing-the-Global-and-Local-Landscape-of-Critical-Technologies.html",
        tags: ["technology", "china"]
    },
    {
        title: "Assessing the Latest Developments in the Chinese Economy",
        publication: "Takshashila Institution",
        date: "30/08/2023",
        coAuthor: "Anushka Saxena, Manoj Kewalramani",
        url: "https://takshashila.org.in/content/publications/20230830-latest-developments-chinese-economy.html",
        tags: ["china", "economy"]
    },
    {
        title: "Defining Strategic and Critical Vulnerabilities in Asymmetrical Trade Interdependence",
        publication: "IPPR",
        date: "01/08/2023",
        coAuthor: "",
        url: "https://ippr.in/index.php/ippr/article/view/214",
        tags: ["security", "economy", "trade", "dependence"]
    },
    {
        title: "Defining Dependence-Induced Vulnerabilities in Asymmetrical Trade Interdependence: A Conceptual Framework",
        publication: "Takshashila Institution",
        date: "20/07/2023",
        coAuthor: "",
        url: "https://takshashila.org.in/content/publications/20230720-vulnerabilities-asymmetrical-trade-independence.html",
        tags: ["security", "economy", "trade", "dependence"]
    },
    {
        title: "Reducing Data Asymmetry to Strengthen Supply Chains",
        publication: "T20 India",
        date: "01/05/2023",
        coAuthor: "Anushka Saxena",
        url: "https://takshashila.org.in/content/publications/assets/T20_PolicyBrief_TF1_Data-Asymmetry-SupplyChain.pdf",
        tags: ["economy", "supply-chains"]
    },
    {
        title: "India-China Border: Tactics, Talks and Transgressions",
        publication: "Takshashila Institution",
        date: "09/03/2023",
        coAuthor: "",
        url: "https://takshashila.org.in/content/publications/20230309-india-china-border-tactics-talks.html",
        tags: ["security", "china", "india"]
    },
    {
        title: "China's Two-Front Conundrum: A Perspective on the India-China Border Situation",
        publication: "ORF",
        date: "07/03/2023",
        coAuthor: "",
        url: "https://www.orfonline.org/research/chinas-two-front-conundrum",
        tags: ["security", "china", "india"]
    },
    {
        title: "Chinese Economy: A Bird's Eye View",
        publication: "Takshashila Institution",
        date: "14/02/2023",
        coAuthor: "Anushka Saxena",
        url: "https://takshashila.org.in/content/publications/20230214-chinese-economy-birds-eye-view.html",
        tags: ["china", "economy", "domestic-politics"]
    },
    {
        title: "Understanding the Rejuvenation of China's Revolutionary Impulse",
        publication: "ORF",
        date: "15/09/2022",
        coAuthor: "",
        url: "https://www.orfonline.org/research/understanding-the-rejuvenation-of-chinas-revolutionary-impulse",
        tags: ["china", "domestic-politics", "elite-politics"]
    },
    {
        title: "How Has the Growing Rift in Oceania Enabled China's Rise in the Region?",
        publication: "VIF India",
        date: "21/11/2021",
        coAuthor: "",
        url: "https://www.vifindia.org/paper/2021/november/24/how-has-the-growing-rift-in-oceania-enabled-china-s-rise-in-the-region",
        tags: ["security", "china", "indo-pacific"]
    }
];
// Media appearances data
// Media data — newest to oldest
const mediaData = [
    {
        title: "Why is China's Xi Jinping visiting North Korea now?",
        outlet: "TRT World Now",
        date: "09/06/2026",
        url: "https://www.youtube.com/watch?v=LNnbeGNljx0"
    },
    {
        title: "Taming the Dragon",
        outlet: "Puliyabaazi Podcast",
        date: "28/05/2026",
        url: "https://www.youtube.com/watch?v=gwJ20Q_-izE"
    },
    {
        title: "Rare Earth को लेकर China से आई गुड न्यूज़, भारतीय कंपनियों को मिला लाइसेंस",
        outlet: "ET NOW Swadesh Videsh",
        date: "31/10/2025",
        url: "https://www.youtube.com/watch?v=640i4vouzYM"
    },
    {
        title: "REAL HISTORY of India-China Relations | Trump vs Modi",
        outlet: "Jai Hind with Aditya",
        date: "31/10/2025",
        url: "https://www.youtube.com/watch?v=4xUglOJMabU"
    },
    {
        title: "Swadesh Vishesh: क्या India और China फिर बन रहे दोस्त या बात कुछ और है?",
        outlet: "ET NOW Swadesh Videsh",
        date: "19/08/2025",
        url: "https://www.youtube.com/watch?v=_TFiK5GSJVU"
    },
    {
        title: "Who Will Be the Next Dalai Lama… And Why Is It So Political?",
        outlet: "BFM 89.9",
        date: "18/08/2025",
        url: "https://www.bfm.my/content/podcast/who-will-be-the-next-dalai-lama-and-why-is-it-so-political",
        thumbnail: "https://www.bfm.my/images/bfm_share.jpg"
    },
    {
        title: "Swadesh Vishesh: कितना बड़ा है Rare Earth मिनरल्स का संकट?",
        outlet: "ET NOW Swadesh Videsh",
        date: "04/07/2025",
        url: "https://www.youtube.com/watch?v=S6rAolH4xDg"
    },
    {
        title: "G7 & the Great Game: Canada PM Carney to paper over Khalistan cracks for Modi's visit?",
        outlet: "The New Indian Express",
        date: "14/06/2025",
        url: "https://www.youtube.com/watch?v=MKjumw5o0RM"
    },
    {
        title: "Global Express | Who's Actually Behind Ukraine's Drone Attack on Russia?",
        outlet: "The New Indian Express",
        date: "07/06/2025",
        url: "https://www.youtube.com/watch?v=XV8MzwDf4MA"
    },
    {
        title: "Interpreting China: The Economy and Its Impact on Foreign Policy",
        outlet: "Carnegie India",
        date: "15/05/2025",
        url: "https://carnegieendowment.org/india/podcasts/interpreting-india/interpreting-china-the-economy-and-its-impact-on-foreign-policy",
        thumbnail: "https://assets.carnegieendowment.org/_/eyJrZXkiOiJzdGF0aWMvbWVkaWEvaW1hZ2VzL0ludGVycHJldGluZyBJbmRpYSBhamRrLTMucG5nIn0="
    },
    {
        title: "How The Oval Office Row Impacts A Ukraine Peace Deal",
        outlet: "StratNewsGlobal",
        date: "02/03/2025",
        url: "https://www.youtube.com/watch?v=NrXXIkV-y1c"
    },
    {
        title: "Comparing India-China Consumption Trends",
        outlet: "Puliyabaazi Podcast",
        date: "22/11/2024",
        url: "https://www.youtube.com/watch?v=7GNdB53GbHE"
    },
    {
        title: "China's Politics, Economy And The Military || SNG Roundtable",
        outlet: "StratNewsGlobal",
        date: "04/07/2024",
        url: "https://www.youtube.com/watch?v=Bu32wqYh24Q"
    },
    {
        title: "Global Express: The Biden-Xi meet: China trap? Or lukewarm re-engagement?",
        outlet: "The New Indian Express",
        date: "19/11/2023",
        url: "https://www.youtube.com/watch?v=9xljeeWwWrg"
    },
    {
        title: "China Has Not Weaponised Its Trade Leverage Against India",
        outlet: "StratNewsGlobal",
        date: "08/08/2023",
        url: "https://www.youtube.com/watch?v=Pz1whcM-Et8"
    },
    {
        title: "No Thaw In Ties With India Till China-U.S. Rapprochement Happens",
        outlet: "Bharat Shakti",
        date: "21/03/2023",
        url: "https://www.youtube.com/watch?v=2B6Uyk7FvX0"
    }
];
