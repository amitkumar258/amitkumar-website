// All commentaries data
const commentariesData = [
    {
        title: "Opening the doors for Chinese investment again, with caution",
        publication: "Hindustan Times",
        url: "https://www.hindustantimes.com/opinion/opening-the-doors-for-chinese-investment-again-with-caution-101775056465016.html",
        category: "hindustan-times"
    },
    {
        title: "India chooses silence during war and crises because posturing will have costs",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/india-iran-israel-war-us-attack-on-iran-tehran-india-relations-10596253/",
        category: "indian-express"
    },
    {
        title: "China's blueprint for the next leap",
        publication: "Deccan Herald",
        url: "https://www.deccanherald.com/opinion/chinas-blueprint-for-the-next-leap-3940825",
        category: "others"
    },
    {
        title: "Why China's finances are weaker than they seem",
        publication: "ThinkChina",
        url: "https://www.thinkchina.sg/economy/why-chinas-finances-are-weaker-they-seem",
        category: "others"
    },
    {
        title: "Donald Trump thought his tariffs would hurt China. He was wrong",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/donald-trump-xi-jinping-china-trade-surplus-10474701/",
        category: "indian-express"
    },
    {
        title: "For India-Russia partnership, Moscow must do its fair share",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/for-india-russia-partnership-moscow-must-do-its-fair-share-10403005/",
        category: "indian-express"
    },
    {
        title: "India must look beyond Main Battle Tanks. It is expensive and outdated",
        publication: "The Print",
        url: "https://theprint.in/opinion/india-main-battle-tanks-expensive-outdated/2776143/",
        category: "others"
    },
    {
        title: "Trump-Xi Talks: Short-term Truce; Long-term Friction",
        publication: "Moneycontrol",
        url: "https://www.moneycontrol.com/news/opinion/trump-xi-talks-short-term-truce-long-term-friction-13645164.html",
        category: "moneycontrol"
    },
    {
        title: "China, US to Saudi Arabia: Pakistan's quest for multiple patrons",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/china-us-pakistan-relation-shehbaz-sharif-asif-munir-donald-trump-10312441/",
        category: "indian-express"
    },
    {
        title: "China wants control, not cooperation",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/china-wants-control-not-cooperation-10245460/",
        category: "indian-express"
    },
    {
        title: "China's official trade surplus remains as high as at its peak",
        publication: "Nikkei Asia",
        url: "https://asia.nikkei.com/opinion/china-s-official-trade-surplus-remains-as-high-as-at-its-peak",
        category: "nikkei-asia"
    },
    {
        title: "The Dalai Lama's succession and the geopolitics of faith",
        publication: "ThinkChina",
        url: "https://www.thinkchina.sg/politics/dalai-lamas-succession-and-geopolitics-faith",
        category: "others"
    },
    {
        title: "Why is Trump upset with India? It is not about peace in Ukraine",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/donald-trump-russian-oil-trumps-tarrif-on-india-10172780/",
        category: "indian-express"
    },
    {
        title: "India faces a Russia dilemma",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/is-russia-indias-friend-modi-in-brics-russia-india-relations-10111246/",
        category: "indian-express"
    },
    {
        title: "Made in China or spent in China? Beijing's impossible balancing act",
        publication: "ThinkChina",
        url: "https://www.thinkchina.sg/economy/made-china-or-spent-china-beijings-impossible-balancing-act",
        category: "others"
    },
    {
        title: "US-China trade war leaves India confronting three negative spillovers",
        publication: "Moneycontrol",
        url: "https://www.moneycontrol.com/news/opinion/us-china-trade-war-leaves-india-confronting-three-negative-spillovers-13161093.html",
        category: "moneycontrol"
    },
    {
        title: "The US-China Trade War is Far from Over",
        publication: "Takshashila",
        url: "https://takshashila.org.in/blogs/the-us-china-trade-war-is-far-from-over",
        category: "others"
    },
    {
        title: "China's duplicity on display during the India-Pakistan conflict",
        publication: "Firstpost",
        url: "https://www.firstpost.com/opinion/chinas-duplicity-on-display-during-the-india-pakistan-conflict-13890777.html",
        category: "others"
    },
    {
        title: "Protracted conflict between India & Pakistan will mean tough choices for Russia & China",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/pakistan-india-conflict-russia-china-tough-choice-10000220/",
        category: "indian-express"
    },
    {
        title: "In global trade war, China is unlikely to blink first",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/global-trade-war-us-china-trump-reciprocal-tariffs-9936569/",
        category: "indian-express"
    },
    {
        title: "Digging Deep: Tunnel Boring Machines and India's China Challenge",
        publication: "Takshashila",
        url: "https://takshashila.org.in/content/blogs/digging-deep.html",
        category: "others"
    },
    {
        title: "Is India warming up to Chinese investment?",
        publication: "ThinkChina",
        url: "https://www.thinkchina.sg/economy/india-warming-chinese-investment",
        category: "others"
    },
    {
        title: "India's waning interest in Shanghai Cooperation Organisation",
        publication: "Deccan Herald",
        url: "https://www.deccanherald.com/opinion/indias-waning-interest-in-shanghai-cooperation-organisation-3244075",
        category: "others"
    },
    {
        title: "China isn't ready to shift to a consumption-driven economy",
        publication: "Nikkei Asia",
        url: "https://asia.nikkei.com/Opinion/China-isn-t-ready-to-shift-to-a-consumption-driven-economy",
        category: "nikkei-asia"
    },
    {
        title: "Power Asymmetry between China and Russia",
        publication: "The Hindu",
        url: "https://www.thehindu.com/news/international/power-asymmetry-between-china-and-russia/article68653066.ece",
        category: "others"
    },
    {
        title: "The US Can Accelerate India's Rise as a Legacy Chip Hub",
        publication: "The Diplomat",
        url: "https://thediplomat.com/2024/08/the-us-can-accelerate-indias-rise-as-a-legacy-chip-hub/",
        category: "others"
    },
    {
        title: "India is well placed to become the 'next China' and drive global growth",
        publication: "Nikkei Asia",
        url: "https://asia.nikkei.com/Opinion/India-is-well-placed-to-become-the-next-China-and-drive-global-growth",
        category: "nikkei-asia"
    },
    {
        title: "India-China Consumption Comparison",
        publication: "The Hindu",
        url: "https://www.thehindu.com/business/Economy/india-china-consumption-comparison/article68197627.ece",
        category: "others"
    },
    {
        title: "China's Electronics Domestic Substitution Mandate Is a Sign of Weakness",
        publication: "Takshashila",
        url: "https://takshashila.org.in/blogs/chinas-electronics-domestic-substitution-mandate-is-a-sign-of-weakness",
        category: "others"
    },
    {
        title: "How recent Maldives parliamentary election results are a silver lining for India",
        publication: "Firstpost",
        url: "https://www.firstpost.com/opinion/how-recent-maldives-parliamentary-election-results-are-a-silver-lining-for-india-13764173.html",
        category: "others"
    },
    {
        title: "Warmer Moscow-Beijing ties are a chilling signal for New Delhi",
        publication: "Indian Express",
        url: "https://indianexpress.com/article/opinion/columns/warmer-moscow-beijing-ties-india-chilling-signal-9282828/",
        category: "indian-express"
    },
    {
        title: "The Hidden Dangers in China's GDP Numbers",
        publication: "Foreign Policy",
        url: "https://foreignpolicy.com/2024/03/11/china-economy-gdp-deflation-consumption/",
        category: "others"
    },
    {
        title: "India gains semiconductor momentum but the policy mix can be even better",
        publication: "Moneycontrol",
        url: "https://www.moneycontrol.com/news/opinion/india-gains-semiconductor-momentum-but-the-policy-mix-can-be-even-better-12417121.html",
        category: "moneycontrol"
    },
    {
        title: "Biden-Xi Summit: Challenge is to continue US-China engagements despite tensions",
        publication: "Moneycontrol",
        url: "https://www.moneycontrol.com/news/opinion/what-to-expect-from-the-joe-biden-xi-jinping-summit-11742331.html",
        category: "moneycontrol"
    },
    {
        title: "Growing US-China chip rivalry presents India with its geopolitical moment",
        publication: "Moneycontrol",
        url: "https://www.moneycontrol.com/news/opinion/growing-us-china-chip-rivalry-presents-india-with-its-geopolitical-moment-11703201.html",
        category: "moneycontrol"
    },
    {
        title: "The signals from this 'Made in China' smartphone story",
        publication: "The Hindu",
        url: "https://www.thehindu.com/opinion/op-ed/the-signals-from-this-made-in-china-smartphone-story/article67296120.ece",
        category: "others"
    },
    {
        title: "In the chip war, US has the edge over China",
        publication: "Hindustan Times",
        url: "https://www.hindustantimes.com/opinion/in-the-chip-war-us-has-the-edge-over-china-101690900110589.html",
        category: "hindustan-times"
    },
    {
        title: "Explained | China's 'developmental' security approach",
        publication: "The Hindu",
        url: "https://www.thehindu.com/news/international/explained-chinas-developmental-security-approach/article66982632.ece",
        category: "others"
    },
    {
        title: "US-China Chip War: What Might The Future Hold?",
        publication: "Interstellar",
        url: "https://interstellar.news/us-china-chip-war-what-might-the-future-hold/",
        category: "others"
    },
    {
        title: "U.S. Seeks To Deny China Access To Key Semiconductor Technologies",
        publication: "StratNewsGlobal",
        url: "https://stratnewsglobal.com/premium/u-s-seeks-to-deny-china-access-to-key-semiconductor-technologies/",
        category: "others"
    },
    {
        title: "Is Trust a Foregone Conclusion in India-Russia Relations? It's All About China",
        publication: "The Quint",
        url: "https://www.thequint.com/opinion/is-trust-foregone-conclusion-india-russia-relations-it-is-about-china",
        category: "others"
    },
    {
        title: "India's Policy Towards China Must Leverage Latter's Two-Front Situation",
        publication: "The Quint",
        url: "https://www.thequint.com/opinion/india-china-policy-two-front-situation-us-indo-pacific",
        category: "others"
    },
    {
        title: "'Two Sessions' Later, How China's Contradictory Policies Will Impact India",
        publication: "The Quint",
        url: "https://www.thequint.com/opinion/two-sessions-later-india-china-partnership-might-usher-in-new-age-diplomacy",
        category: "others"
    },
    {
        title: "Xi's legacy in the 'New Era'",
        publication: "ORF",
        url: "https://www.orfonline.org/expert-speak/xis-legacy-in-the-new-era",
        category: "others"
    },
    {
        title: "China's renewed push to tame religion",
        publication: "ORF",
        url: "https://www.orfonline.org/expert-speak/chinas-renewed-push-to-tame-religion",
        category: "others"
    },
    {
        title: "One-upmanship at the top shows cracks in China's system",
        publication: "ORF",
        url: "https://www.orfonline.org/expert-speak/one-upmanship-at-the-top-shows-cracks-in-chinas-system",
        category: "others"
    },
    {
        title: "Taiwan's Evolving Security Concerns and Prospects of Cross-Strait Unification",
        publication: "VIF",
        url: "https://www.vifindia.org/article/2021/september/17/taiwans-evolving-security-concerns-and-prospects-of-cross-strait-unification",
        category: "others"
    },
    {
        title: "The Two Tales of Pakistan's Geography",
        publication: "VIF",
        url: "https://www.vifindia.org/article/2021/september/02/the-two-tales-of-pakistans-geography",
        category: "others"
    },
    {
        title: "A Crisis Looms as the Chinese Communist Party Celebrates its Centenary Year",
        publication: "The Diplomatist",
        url: "https://diplomatist.com/2021/07/02/a-crisis-looms-as-the-chinese-communist-party-celebrates-its-centenary-year/",
        category: "others"
    },
    {
        title: "Why not an 'end of history' for China?",
        publication: "The Diplomatist",
        url: "https://diplomatist.com/2021/06/07/why-not-an-end-of-history-for-china/",
        category: "others"
    }
];

// Papers data
const papersData = [
    {
        title: "Sand Slipping Through Fingers",
        publication: "Takshashila Institution",
        date: "March 30, 2026",
        description: "Analysis of U.S. resilience against Chinese export restrictions via supply chain diversification and domestic capability development.",
        url: "https://takshashila.org.in/content/publications/China-Ga-Ge-Export-Restrictions-29032026.html"
    },
    {
        title: "Previewing China's 15th Five-Year Plan",
        publication: "Takshashila Institution",
        date: "March 4, 2026",
        description: "Assessment based on draft recommendations from China's October 2025 central committee plenum regarding economic plans for 2026-2030.",
        url: "https://takshashila.org.in/content/publications/15-FYP-China-04-03-2026.html"
    },
    {
        title: "India Must Look Beyond Main Battle Tanks",
        publication: "Takshashila Institution",
        date: "October 13, 2025",
        description: "Argues MBTs will become obsolete on transparent battlefields and recommends India invest in asymmetric capabilities instead.",
        url: "https://takshashila.org.in/content/publications/20251013_Main_Battle_Tanks.html"
    },
    {
        title: "Can China's Local Governments Pull the Weight of the Country's Economy?",
        publication: "Takshashila Institution",
        date: "May 14, 2025",
        description: "Examines fiscal imbalance in Chinese local governments due to falling revenues, rising expenditures, and accumulated hidden debt.",
        url: "https://takshashila.org.in/content/publications/20250514-chinas-local-governments.html"
    },
    {
        title: "The Pulls and Pushes Within the Chinese Economy",
        publication: "Carnegie Endowment",
        date: "April 2025",
        description: "Explores how past economic success created structural problems and why traditional stimulus options lack viability amid debt concerns.",
        url: "https://carnegieendowment.org/research/2025/04/views-from-taipei-essays-by-young-indian-scholars-on-china"
    },
    {
        title: "De-risking India's Trade with China: Identifying Strategic and Critical Vulnerabilities",
        publication: "Takshashila Institution",
        date: "January 1, 2025",
        description: "Identifies strategic vulnerabilities in India's import dependence, focusing on organic chemicals, machinery, and electrical equipment.",
        url: "https://takshashila.org.in/content/publications/20250101-Derisking-Indias-Trade-With-China.html"
    },
    {
        title: "China-Russia Relationship: Assessing the Power Asymmetry",
        publication: "Takshashila Institution",
        date: "September 3, 2024",
        description: "Analyzes Moscow's dependence on Beijing across geopolitical alignment, economic integration, and military cooperation dimensions.",
        url: "https://takshashila.org.in/content/publications/20240903-china-russia-power-asymmetry.html"
    },
    {
        title: "Geo-consumerism and India-China Competition",
        publication: "Takshashila Institution",
        date: "March 9, 2024",
        description: "Comparative consumption analysis revealing India's consumption figures disproportionately exceed China's relative to economic size.",
        url: "https://takshashila.org.in/content/publications/20240309-geoconsumerism-india-china-competition.html"
    },
    {
        title: "Assessing the Latest Developments in the Chinese Economy",
        publication: "Takshashila Institution",
        date: "August 30, 2023",
        description: "Post-Zero-COVID economic assessment highlighting headwinds in consumption, real estate, exports, local debt, and FDI.",
        url: "https://takshashila.org.in/content/publications/20230830-latest-developments-chinese-economy.html"
    },
    {
        title: "Defining Dependence-induced Vulnerabilities in Asymmetrical Trade Interdependence",
        publication: "Takshashila Institution",
        date: "July 20, 2023",
        description: "Conceptual framework establishing tests to distinguish critical vulnerabilities from routine asymmetrical trade interdependence.",
        url: "https://takshashila.org.in/content/publications/20230720-vulnerabilities-asymmetrical-trade-independence.html"
    },
    {
        title: "India-China Border: Tactics, Talks and Transgressions",
        publication: "Takshashila Institution",
        date: "March 9, 2023",
        description: "Analysis of India-China border dynamics through multiple dimensions of conflict, negotiation, and strategic maneuvering.",
        url: "https://takshashila.org.in/content/publications/20230309-india-china-border-tactics-talks.html"
    },
    {
        title: "Chinese Economy: A Bird's Eye View",
        publication: "Takshashila Institution",
        date: "February 14, 2023",
        description: "Comprehensive overview of the Chinese economy covering key sectors, structural challenges, and future trajectories.",
        url: "https://takshashila.org.in/content/publications/20230214-chinese-economy-birds-eye-view.html"
    },
    {
        title: "Reducing Data Asymmetry to Strengthen Supply Chains",
        publication: "T20 India",
        date: "2023",
        description: "Proposes G20 cooperation framework for mitigating supply chain information disparities among stakeholders.",
        url: "https://t20ind.org/research/reducing-data-asymmetry-to-strengthen-supply-chains/"
    },
    {
        title: "China's Two-Front Conundrum: A Perspective on the India-China Border Situation",
        publication: "Observer Research Foundation",
        date: "2022",
        description: "Explores India-China border instability through lens of Beijing's historical two-front threat perception as management tool.",
        url: "https://www.orfonline.org/research/chinas-two-front-conundrum"
    },
    {
        title: "Understanding the Rejuvenation of China's Revolutionary Impulse",
        publication: "Jawaharlal Nehru University",
        date: "2021",
        description: "Examines Xi Jinping's ideological emphasis, arguing revolutionary impulse alongside nationalism addresses leadership authority concerns.",
        url: "https://pure.jgu.edu.in/id/eprint/4632/"
    }
];

// Media appearances data
const mediaData = [
    {
        title: "Who Will Be the Next Dalai Lama… And Why Is It So Political?",
        outlet: "ET Now Swadesh"
    },
    {
        title: "Swadesh Videsh: China's Economic Warfare",
        outlet: "ET Now Swadesh (Hindi)"
    },
    {
        title: "Interpreting China: The Economy and its Impact on Foreign Policy",
        outlet: "Carnegie India"
    },
    {
        title: "Can Trump wean Putin away from China?",
        outlet: "STRATNEWSGLOBAL"
    },
    {
        title: "Comparing India-China Consumption Trends",
        outlet: "PULIYABAAZI"
    },
    {
        title: "Young Scholars Analyse China's Politics, Economy And The Military On SNG Roundtable",
        outlet: "STRATNEWSGLOBAL"
    },
    {
        title: "The Biden-Xi meet: China trap? Or lukewarm re-engagement?",
        outlet: "GLOBAL EXPRESS"
    },
    {
        title: "China Has Not Weaponised Its Trade Leverage Against India",
        outlet: "STRATNEWSGLOBAL"
    },
    {
        title: "Taiwan Stirs Chinese Nationalism In A Way India Does Not",
        outlet: "STRATNEWSGLOBAL"
    },
    {
        title: "No Thaw In Ties With India Till China-U.S. Rapprochement Happens",
        outlet: "BHARATSHAKTI.IN"
    },
    {
        title: "Global Express: Ukraine's Spiderweb Operations",
        outlet: "The New Indian Express"
    }
];
