import React from "react";
import styles from "../../styles/ReadingComprehension.module.css";

const ReadingComprehension = () => {
  // 假设文章文本和问题已经定义在某处
  const passageA = [
    "Trust is fundamental to life. If you can’t trust anything, life becomes intolerable. You can’t have relationships without trust, let alone good ones.",
    'In the workplace, too, trust is 26 . An organization without trust will be full of fear and 27 . If you work for a boss who doesn’t trust their employees to do things right, you’ll have a 28 time. They’ll be checking up on you all the time, correcting "mistakes" and 29 reminding you to do this or that.',
    "Organizations are always trying to cut costs. Think of all the additional tasks caused by lack of trust. Audit (审计) departments only exist because of it. Companies keep large volumes of 31 because they don't trust their suppliers, their contractors or their customers. Probably more than half of all administrative work is only there because of an ever-existing sense that “you can't trust anyone these days.” If even a small part of such valueless work could be 32, the savings would run into millions of dollars.",
  ];
  const options = {
    A: "constantly",
    B: "credible",
    C: "essential",
    D: "exploring",
    E: "gather",
    F: "load",
    G: "miserable",
    H: "pressure",
    I: "properly",
    J: "records",
    K: "removed",
    L: "stacks",
    M: "suspicion",
    N: "tracked",
    O: "watching",
  };
  const questionsA = [
    // 每个问题是一个对象，包含问题编号和选项
    {
      number: 26,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 27,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 28,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 29,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 30,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 31,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 32,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 33,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 34,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
    {
      number: 35,
      options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
      ],
    },
  ];

  const passageB = [
    "A) This is the land of opportunity. If that weren't already imp lied by the landscape—rolling green hills, palm trees, sun-kissed flowers—then it's evident in the many stories of people who grew up poor in these sleepy neighborhoods and rose to enormous success. People like Tri Tran, who fled Vietnam on a boat in 1986, showed up in San Jose with nothing, made it to MIT, and then founded the food-delivery start-up Munchery, which is valued at $300 million.",
    "B) Indeed, data suggests that this is one of the best places to grow up poor in America. A child born in the early 1980s into a low-income family in San Jose had a 12.9 percent chance of becoming a high earner as an adult, according to a landmark study released in 2014 by the economist Raj Chetty and his colleagues from Harvard and Berkeley. That number—12.9 percent—may not seem remarkable, but it was: Kids in San Jose whose families fell in the bottom quintile (五分位数) of income nationally had the best shot in the country at reaching the top quintile.",
    "C) By contrast, just 4.4 percent of poor kids in Charlotte moved up to the top; in Detroit the figure was 5.5 percent. San Jose had social mobility comparable to Denmark's and Canada's and higher than other progressive cities such as Boston and Minneapolis.",
    "D) The reasons kids in San Jose performed so well might seem obvious. Some of the world's most innovative companies are located here, providing opportunities such as the one seized by a 12-year-old Mountain View resident named Steve Jobs when he called William Hewlett to ask for spare parts and subsequently received a summer job. This is a city of immigrants—38 percent of the city's population today is foreign-born—and immigrants and their children have historically experienced significant upward mobility in America. The city has long had a large foreign-born population (26.5 percent in 1990), leading to broader diversity, which, the Harvard and Berkeley economists say, is a good predictor of mobility.",
    "E) Indeed, the streets of San Jose seem, in some ways, to embody the best of America. It's possible to drive in a matter of minutes from sleek (光亮的) office towers near the airport where people pitch ideas to investors, to single-family homes with orange trees in their yards, or to a Vietnamese mall. The libraries here offer programs in 17 languages, and there are areas filled with small businesses owned by Vietnamese immigrants, Mexican immigrants, Korean immigrants, and Filipino immigrants, to name a few.",
    "F) But researchers aren't sure exactly why poor kids in San Jose did so well. The city has a low prevalence of children growing up in single-parent families, and a low level of concentrated poverty, both factors that usually mean a city allows for good intergenerational mobility. But San Jose also performs poorly on some of the measures correlated with good mobility. It is one of the most unequal places out of the 741 that the researchers measured, and it has high degrees of racial and economic segregation (隔离). Its schools underperform based on how much money there is in the area, said Ben Scuderi, a predoctoral fellow at the Equality of Opportunity Project at Harvard, which uses big data to study how to improve economic opportunities for low-income children. “There's a lot going on here which we don't totally understand,” he said. “It's interesting, because it kind of defies our expectations.”",
    "G) The Chetty data shows that neighborhoods and places mattered for children born in the San Jose area of the 1980s. Whether the city still allows for upward mobility of poor kids today, though, is up for debate. Some of the indicators such as income inequality, measured by the Equality of Opportunity Project for the year 2000, have only worsened in the past 16 years.",
    "H) Some San Jose residents say that as inequality has grown in recent years, upward mobility has become much more difficult to achieve. As Silicon Valley has become home to more successful companies, the flood of people to the area has caused housing prices to skyrocket. By most measures, San Jose is no longer a place where low-income, or even middle-income families, can afford to live. Rents in San Jose grew 42.6 percent between 2006 and 2014, which was the largest increase in the country during that time period. The city has a growing homelessness problem, which it tried to address by shutting down “The Jungle,” one of the largest homeless encampments (临时住地) in the nation, in 2014. Inequality is extreme: The Human Development Index—a measure of life expectancy, education and per capita (人均的) income—gives East San Jose a score of 4.85 out of 10, while nearby Cupertino, where Apple's headquarters sits, receives a 9.26. San Jose used to have a happy mix of factors—cheap housing, closeness to a rapidly developing industry, tightly-knit immigrant communities—that together opened up the possibility of prosperity for even its poorest residents. But in recent years, housing prices have skyrocketed, the region's rich and poor have segregated, and middle-class jobs have disappeared. Given this, the future for the region's poor doesn't look nearly as bright as it once did.",
    "I) Leaders in San Jose are determined to make sure that the city regains its status as a place where even poor kids can access the resources to succeed. With Silicon Valley in its backyard, it certainly has the chance to do so. “I think there is a broad consciousness in the Valley that we can do better than to leave thousands of our neighbors behind through a period of extraordinary success,” San Jose Mayor Sam Liccardo said.",
    "J) But in today's America—a land of rising inequality, increasing segregation, and stagnating (不增长的) middle-class wages—can the San Jose region really once again become a place of opportunity?",
    "K) The idea that those at the bottom can rise to the top is central to America's ideas about itself. That such mobility has become more difficult in San Jose raises questions about the endurance of that foundational belief. After all, if the one-time land of opportunity can't be fixed, what does that say for the rest of America?",
  ];

  const questionsB = [
    {
      Number: 36,
      Statement:
        "According to some people living in San Jose, it has become much harder for the poor to get ahead due to the increased inequality.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 37,
      Statement:
        "In American history, immigrants used to have a good chance to move upward in society.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 38,
      Statement:
        "If the problems of San Jose can't be solved, one of America's fundamental beliefs about itself can be shaken.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 39,
      Statement:
        "San Jose was among the best cities in America for poor kids to move up the social ladder.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 40,
      Statement:
        "Whether poor kids in San Jose today still have the chance to move upward is questionable.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 41,
      Statement:
        "San Jose's officials are resolved to give poor kids access to the resources necessary for success in life.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 42,
      Statement:
        "San Jose appears to manifest some of the best features of America.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 43,
      Statement:
        "As far as social mobility is concerned, San Jose beat many other progressive cities in America.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 44,
      Statement:
        "Due to some changes like increases in housing prices in San Jose, the prospects for its poor people have dimmed.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
    {
      Number: 45,
      Statement:
        "Researchers do not have a clear idea why poor children in San Jose achieved such great success several decades ago.",
      Options: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
    },
  ];

  const PassageOne = [
    "Three children in every classroom have a diagnosable mental health condition. Half of these are behavioural disorders, while one third are emotional disorders such as stress, anxiety and depression, which often become outwardly apparent through self-harm. There was an astonishing 52 per cent jump in hospital admissions for children and young people who had harmed themselves between 2009 and 2015.",
    "Schools and teachers have consistently reported the scale of the problem since 2009. Last year, over half of teachers reported that more of their pupils experience mental health problems than in the past. But teachers also consistently report how ill-equipped they feel to meet pupils' mental health needs, and often cite a lack of training, expertise and support from the National Health Service (英国国家医疗服务体系).",
    "Part of the reason for the increased pressure on schools is that there are now fewer ‘early intervention (干预)’ and low-level mental health services based in the community. Cuts to local authority budgets since 2010 have resulted in a significant decline of these services, despite strong evidence of their effectiveness in preventing crises further down the line.The only way to break the pressures on both mental health services and schools is to reinvest in early intervention services inside schools.",
    "There are strong arguments for why schools are best placed to provide mental health services. Schools see young people more than any other service, which gives them a unique ability to get to hard-to-reach children and young people and build meaningful relationships with them over time. Recent studies have shown that children and young people largely prefer to see a counsellor in school rather than in an outside environment. Young people have reported that for low-level conditions such as stress and anxiety, a clinical setting can sometimes be daunting (令人却步的).",
    "There are already examples of innovative schools which combine mental health and wellbeing provision with a strong academic curriculum. This will, though, require a huge cultural shift. Politicians, policymakers, commissioners and school leaders must be brave enough to make the leap towards reimagining schools as providers of health as well as education services.",
  ];

  const questionsOne = [
    {
      Number: 46,
      Statement: "What are teachers complaining about?",
      Options: [
        {
          key: "A",
          text: "There are too many students requiring special attention.",
        },
        {
          key: "B",
          text: "They are under too much stress counselling needy students.",
        },
        {
          key: "C",
          text: "Schools are inadequately equipped to implement any intervention.",
        },
        {
          key: "D",
          text: "They lack the necessary resources to address pupils' mental problems.",
        },
      ],
    },
    {
      Number: 47,
      Statement:
        "What do we learn from the passage about community health services in Britain?",
      Options: [
        {
          key: "A",
          text: "They have deteriorated due to budget cuts.",
        },
        {
          key: "B",
          text: "They facilitate local residents' everyday lives.",
        },
        {
          key: "C",
          text: "They prove ineffective in helping mental patients.",
        },
        {
          key: "D",
          text: "They cover preventative care for the local residents.",
        },
      ],
    },
    {
      Number: 48,
      Statement:
        "Where does the author suggest mental health services be placed?",
      Options: [
        {
          key: "A",
          text: "At home.",
        },
        {
          key: "B",
          text: "At school.",
        },
        {
          key: "C",
          text: "In hospitals.",
        },
        {
          key: "D",
          text: "In communities.",
        },
      ],
    },
    {
      Number: 49,
      Statement: "What do we learn from the recent studies?",
      Options: [
        {
          key: "A",
          text: "Students prefer to rely on peers to relieve stress and anxiety.",
        },
        {
          key: "B",
          text: "Young people are keen on building meaningful relationships.",
        },
        {
          key: "C",
          text: "Students are more comfortable seeking counselling in school.",
        },
        {
          key: "D",
          text: "Young people benefit from various kinds of outdoor activities.",
        },
      ],
    },
    {
      Number: 50,
      Statement:
        "What does the author mean by a cultural shift (Line 2, Para. 6)?",
      Options: [
        {
          key: "A",
          text: "Simplification of schools' academic curriculums.",
        },
        {
          key: "B",
          text: "Parents' involvement in schools' policy-making.",
        },
        {
          key: "C",
          text: "A change in teachers' attitudes to mental health.",
        },
        {
          key: "D",
          text: "A change in the conception of what schools are.",
        },
      ],
    },
  ];

  const passageTwo = [
    "Picture this: You're at a movie theater food stand loading up on snacks. You have a choice of a small, medium or large soda. The small is $3.50 and the large is $5.50. It's a tough decision: The small size may not last you through the whole movie, but $5.50 for some sugary drink seems ridiculous. But there's a third option, a medium soda for $5.25. Medium may be the perfect amount of soda for you, but the large is only a quarter more. If you're like most people, you end up buying the large (and taking a bathroom break midshow).",
    "If you're wondering who would buy the medium soda, the answer is almost no one. In fact, there's a good chance the marketing department purposely priced the medium soda as a decoy (诱饵), making you more likely to buy the large soda rather than the small.",
    "I have written about this peculiarity in human nature before with my friend Dan Ariely, who studied this phenomenon extensively after noticing pricing for subscriptions (订阅) to The Economist. The digital subscription was $59, the print subscription was $125, and the print plus digital subscription was also $125. No one in their right mind would buy the print subscription when you could get digital as well for the same price, so why was it even an option? Ariely ran an experiment and found that when only the two “real” choices were offered, more people chose the less-expensive digital subscription. But the addition of the bad option made people much more likely to choose the more expensive print plus digital option.",
    "Brain scientists call this effect “asymmetric dominance” and it means that people gravitate toward the choice nearest a clearly inferior option. Marketing professors call it the decoy effect, which is certainly easier to remember. Lucky for consumers, almost no one in the business community understands it.",
    "The decoy effect works because of the way our brains assign value when making choices. Value is almost never absolute; rather, we decide an object's value relative to our other choices. If more options are introduced, the value equation changes.",
  ];

  const questionsTwo = [
    {
      Number: 51,
      Statement: "Why does the author ask us to imagine buying food in the movie theater?",
      Options: [
        {
          key: "A",
          text: "To illustrate people's peculiar shopping behavior.",
        },
        {
          key: "B",
          text: "To illustrate the increasing variety of snacks there.",
        },
        {
          key: "C",
          text: "To show how hard it can be to choose a drink there.",
        },
        {
          key: "D",
          text: "To show how popular snacks are among movie fans.",
        },
      ],
    },
    {
      Number: 52,
      Statement:
        "Why is the medium soda priced the way it is?",
      Options: [
        {
          key: "A",
          text: "To attract more customers to buy it.",
        },
        {
          key: "B",
          text: "To show the price matches the amount.",
        },
        {
          key: "C",
          text: "To ensure customers drink the right amount of soda.",
        },
        {
          key: "D",
          text: "To make customers believe they are getting a bargain.",
        },
      ],
    },
    {
      Number: 53,
      Statement:
        "What do we learn from Dan Ariely's experiment?",
      Options: [
        {
          key: "A",
          text: "Lower-priced goods attract more customers.",
        },
        {
          key: "B",
          text: "The Economist's promotional strategy works.",
        },
        {
          key: "C",
          text: "The Economist's print edition turns out to sell the best.",
        },
        {
          key: "D",
          text: "More readers choose the digital over the print edition.",
        },
      ],
    },
    {
      Number: 54,
      Statement: "For what purpose is “the bad option” (Line 6, Para.3) added?",
      Options: [
        {
          key: "A",
          text: "To cater to the peculiar needs of some customers.",
        },
        {
          key: "B",
          text: "To help customers to make more rational choices.",
        },
        {
          key: "C",
          text: "To trap customers into buying the more pricey item.",
        },
        {
          key: "D",
          text: "To provide customers with a greater variety of goods.",
        },
      ],
    },
    {
      Number: 55,
      Statement:
        "How do we assess the value of a commodity, according to the passage?",
      Options: [
        {
          key: "A",
          text: "By considering its usefulness.",
        },
        {
          key: "B",
          text: "By comparing it with other choices.",
        },
        {
          key: "C",
          text: "By taking its quality into account.",
        },
        {
          key: "D",
          text: "By examining its value equation.",
        },
      ],
    },
  ];

  return (
    <div className={styles.comprehensionContainer}>
      {/* Section A */}
      <h1>Part3 Reading Comprehension</h1>
      <section className={styles.section}>
        <h2>Section A</h2>
        {passageA.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <div className={styles.optionsContainer}>
          {Object.entries(options).map(([key, value]) => (
            <p key={key} className={styles.optionItem}>
              {key}) {value}
            </p>
          ))}
        </div>
        {questionsA.map((question) => (
          <div key={question.number} className={styles.questionContainer}>
            <p className={styles.questionTitle}>Question {question.number}</p>
            {question.options.map((option) => (
              <button key={option}>{option}</button>
            ))}
          </div>
        ))}
      </section>

      {/* Section B */}
      <section className={styles.section}>
        <h2>Section B</h2>
        {passageB.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        {questionsB.map((question) => (
          <div key={question.Number} className={styles.questionContainer}>
            {/* 渲染问题描述 */}
            <p className={styles.questionTitle}>
              {question.Number}: {question.Statement}
            </p>
            <div className={styles.optionsContainer}>
              {/* 只渲染选项的标识符 */}
              {question.Options.map((optionKey) => (
                <button key={optionKey} className={styles.optionButton}>
                  {optionKey}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Section C */}
      <section className={styles.section}>
        <h2>Section C</h2>
        <p>
          <b>Directions:</b>There are 2 passages in this section. Each passage
          is followed by some questions or unfinished statements. For each of
          them there are four choices marked A), B), C) and D). You should
          decide on the best choice and mark the corresponding letter on Answer
          Sheet 2 with a single line through the centre.
        </p>

        {/* Passage One */}
        <b>Passage One</b>
        <br />
        <b>Questions 46 to 50 are based on the following passage.</b>
        {PassageOne.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        {questionsOne.map((question) => (
          <div key={question.Number} className={styles.questionContainer}>
            <p className={styles.questionTitle}>
              {question.Number}: {question.Statement}
            </p>
            <div className={styles.optionsContainer}>
              {question.Options.map((option) => (
                <button key={option.key} className={styles.optionButton}>
                  {option.key}) {option.text}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Passage Two */}
        <b>Passage Two</b>
        <br />
        <b>Questions 51 to 55 are based on the following passage.</b>
        {passageTwo.map((paragraph, index) => (
          <p key={`passageTwo-${index}`} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        {questionsTwo.map((question) => (
          <div
            key={`questionD-${question.Number}`}
            className={styles.questionContainer}
          >
            <p className={styles.questionTitle}>
              {question.Number}: {question.Statement}
            </p>
            <div className={styles.optionsContainer}>
              {question.Options.map((option) => (
                <button
                  key={`optionD-${option.key}`}
                  className={styles.optionButton}
                >
                  {option.key}) {option.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ReadingComprehension;
