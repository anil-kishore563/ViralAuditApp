// This is a mock implementation that simulates fetching and analyzing competitor data
// In a real application, this would connect to social media APIs or use a scraping service

interface TrendResult {
  name: string
  engagement: number
  example?: string
}

export async function analyzeCompetitor(
  handle: string,
  platform: string,
  type: "trends" | "hashtags" | "formats",
): Promise<TrendResult[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate mock data based on the handle, platform and type
  // In a real app, this would be actual data from the platform's API

  // Use the handle to seed the random data generation for consistency
  const seed = Array.from(handle).reduce((acc, char) => acc + char.charCodeAt(0), 0)

  if (type === "trends") {
    return generateTrendData(platform, seed)
  } else if (type === "hashtags") {
    return generateHashtagData(platform, seed)
  } else {
    return generateFormatData(platform, seed)
  }
}

function generateTrendData(platform: string, seed: number): TrendResult[] {
  const twitterTrends = [
    { name: "Day in the Life", example: "A day in the life of a software engineer" },
    { name: "Hot Take", example: "Hot take: TypeScript > JavaScript" },
    { name: "Coding Tips", example: "5 VS Code shortcuts that changed my life" },
    { name: "Tech News Reaction", example: "My thoughts on the new MacBook Pro" },
    { name: "Code Roast", example: "Roasting your GitHub repositories" },
    { name: "Career Advice", example: "How I got a job at Google" },
    { name: "Tech Stack Reveal", example: "The tech stack behind my SaaS product" },
    { name: "Tutorial", example: "Building a Twitter clone with React" },
    { name: "Unpopular Opinion", example: "Unpopular opinion: PHP is actually great" },
    { name: "Productivity Hack", example: "This productivity system changed my coding workflow" },
  ]

  const tiktokTrends = [
    { name: "Code Transition", example: "From messy code to clean code transition" },
    { name: "POV: Developer Life", example: "POV: When your code works on the first try" },
    { name: "Tech Unboxing", example: "Unboxing my new developer setup" },
    { name: "Expectation vs Reality", example: "What people think coding is vs what it actually is" },
    { name: "Coding Challenges", example: "Solving this algorithm in 60 seconds" },
    { name: "Tech Humor", example: "When the client asks for 'small changes'" },
    { name: "Screen Recording Tips", example: "3 terminal tricks to look like a pro" },
    { name: "Before/After Projects", example: "My portfolio before and after learning React" },
    { name: "Quick Tutorials", example: "Create this animation in 30 seconds" },
    { name: "Tech Comparisons", example: "React vs Angular: which is better?" },
  ]

  const instagramTrends = [
    { name: "Workspace Setup", example: "My minimal developer workspace" },
    { name: "Code Snippets", example: "This one-liner will save you hours" },
    { name: "Tech Infographics", example: "The evolution of JavaScript frameworks" },
    { name: "Behind the Scenes", example: "How I built my startup in 30 days" },
    { name: "Tech Memes", example: "When you forget a semicolon in JavaScript" },
    { name: "Project Showcase", example: "Just launched my new portfolio website" },
    { name: "Learning Journey", example: "My coding progress: 1 year difference" },
    { name: "Tech Events", example: "Highlights from React Conf 2023" },
    { name: "Coding Quotes", example: "Code is like humor. When you have to explain it, it's bad." },
    { name: "Tech Book Reviews", example: "5 books that made me a better developer" },
  ]

  const youtubeTrends = [
    { name: "Project Build Series", example: "Building a Netflix Clone (Part 1/5)" },
    { name: "Code Reviews", example: "Code reviewing subscribers' projects" },
    { name: "Tech Comparisons", example: "React vs Vue in 2023: Which should you learn?" },
    { name: "Day in the Life", example: "Day in the life of a senior developer" },
    { name: "Coding Challenges", example: "Solving 5 JavaScript interview questions" },
    { name: "Tech News Analysis", example: "What Apple's new M3 chip means for developers" },
    { name: "Deep Dive Tutorials", example: "Understanding React's useEffect hook" },
    { name: "Career Advice", example: "How to negotiate your developer salary" },
    { name: "Tech Stack Explanation", example: "Why we chose Next.js for our startup" },
    { name: "Live Coding", example: "Building a Twitter clone from scratch (3 hour livestream)" },
  ]

  let trends
  switch (platform) {
    case "twitter":
      trends = twitterTrends
      break
    case "tiktok":
      trends = tiktokTrends
      break
    case "instagram":
      trends = instagramTrends
      break
    case "youtube":
      trends = youtubeTrends
      break
    default:
      trends = twitterTrends
  }

  // Shuffle and assign random engagement values
  return shuffleAndAssignEngagement(trends, seed)
}

function generateHashtagData(platform: string, seed: number): TrendResult[] {
  const twitterHashtags = [
    { name: "100DaysOfCode" },
    { name: "WebDev" },
    { name: "JavaScript" },
    { name: "ReactJS" },
    { name: "TechTwitter" },
    { name: "CodeNewbie" },
    { name: "Programming" },
    { name: "DevLife" },
    { name: "FrontEnd" },
    { name: "CodingTips" },
  ]

  const tiktokHashtags = [
    { name: "TechTok" },
    { name: "CodeTok" },
    { name: "LearnToCode" },
    { name: "ProgrammerLife" },
    { name: "TechTutorial" },
    { name: "CodingChallenge" },
    { name: "DevHumor" },
    { name: "TechCareer" },
    { name: "SoftwareEngineering" },
    { name: "CodingTips" },
  ]

  const instagramHashtags = [
    { name: "CodingLife" },
    { name: "ProgrammerHumor" },
    { name: "WebDevelopment" },
    { name: "CodeLife" },
    { name: "TechStack" },
    { name: "DeveloperLife" },
    { name: "CodeIsLife" },
    { name: "TechCommunity" },
    { name: "FullStackDeveloper" },
    { name: "CodingFromHome" },
  ]

  const youtubeHashtags = [
    { name: "CodingTutorial" },
    { name: "WebDevelopment" },
    { name: "LearnToCode" },
    { name: "ProgrammingTips" },
    { name: "DevVlog" },
    { name: "CodeWithMe" },
    { name: "TechTutorial" },
    { name: "SoftwareEngineering" },
    { name: "CodeReview" },
    { name: "ProgrammerLife" },
  ]

  let hashtags
  switch (platform) {
    case "twitter":
      hashtags = twitterHashtags
      break
    case "tiktok":
      hashtags = tiktokHashtags
      break
    case "instagram":
      hashtags = instagramHashtags
      break
    case "youtube":
      hashtags = youtubeHashtags
      break
    default:
      hashtags = twitterHashtags
  }

  return shuffleAndAssignEngagement(hashtags, seed)
}

function generateFormatData(platform: string, seed: number): TrendResult[] {
  const twitterFormats = [
    { name: "Thread (5+ tweets)", example: "1/ Here's how I built a SaaS in 30 days..." },
    { name: "Single Image + Text", example: "Just pushed this new feature to production! [image]" },
    { name: "Poll", example: "Which framework do you prefer? React vs Vue vs Angular vs Svelte" },
    { name: "Quote Tweet + Commentary", example: "This is exactly why I switched to TypeScript 👇" },
    { name: "Short Video Demo", example: "Quick demo of my new VS Code extension" },
    { name: "Text-only Hot Take", example: "Controversial: CSS is harder than JavaScript" },
    { name: "Before/After Screenshots", example: "Refactored this component and improved performance by 40%" },
    { name: "Code Screenshot", example: "This one-liner saved me hours of debugging" },
    { name: "Question to Followers", example: "What's your favorite testing framework and why?" },
    { name: "List Format", example: "5 Git commands every developer should know:" },
  ]

  const tiktokFormats = [
    { name: "Screen Recording Tutorial", example: "How to set up ESLint in 60 seconds" },
    { name: "Transition Reveal", example: "From mockup to finished website" },
    { name: "Pointing to Text Overlay", example: "5 reasons why your website is slow" },
    { name: "Voiceover Code Walkthrough", example: "Let me explain this algorithm" },
    { name: "Green Screen Code", example: "Standing in front of my code explaining a concept" },
    { name: "Day in the Life", example: "POV: Working as a remote developer" },
    { name: "Expectation vs Reality", example: "What I thought coding was vs what it actually is" },
    { name: "Duet with Another Creator", example: "Reacting to another dev's coding tips" },
    { name: "Trending Sound + Coding Content", example: "Using viral sound with coding humor" },
    { name: "Quick Tips with Text Overlay", example: "3 VS Code shortcuts you need to know" },
  ]

  const instagramFormats = [
    { name: "Carousel (Multiple Images)", example: "5 JavaScript concepts explained with diagrams" },
    { name: "Single Image with Code", example: "This pattern will level up your React code" },
    { name: "Workspace Photo", example: "My coding setup for 2023" },
    { name: "Short Tutorial Reel", example: "Create this hover effect in 30 seconds" },
    { name: "Infographic", example: "The history of JavaScript frameworks" },
    { name: "Before/After Project", example: "Website redesign: before and after" },
    { name: "Quote Card", example: "Programming wisdom from senior developers" },
    { name: "Tech Stack Showcase", example: "The tools I use to build web apps in 2023" },
    { name: "Code Snippet", example: "This one-liner will change how you write JavaScript" },
    { name: "Project Demo Video", example: "Just launched: Tour of my new SaaS product" },
  ]

  const youtubeFormats = [
    { name: "Long-form Tutorial (15+ min)", example: "Complete guide to building a REST API with Node.js" },
    { name: "Coding Challenge", example: "Building a Twitter clone in 2 hours" },
    { name: "Code Review", example: "Reviewing subscribers' React projects" },
    { name: "Tech News Analysis", example: "What's new in React 19?" },
    { name: "Livestream Coding Session", example: "Building a full-stack app from scratch (3 hour stream)" },
    { name: "Day in the Life", example: "Day in the life of a senior developer at Google" },
    { name: "Interview Prep", example: "Top 10 JavaScript interview questions" },
    { name: "Tech Comparison", example: "Next.js vs Remix: Which should you choose?" },
    { name: "Project Build Series", example: "Building an Instagram clone (Part 1/5)" },
    { name: "Setup Tour", example: "My 2023 developer workspace tour" },
  ]

  let formats
  switch (platform) {
    case "twitter":
      formats = twitterFormats
      break
    case "tiktok":
      formats = tiktokFormats
      break
    case "instagram":
      formats = instagramFormats
      break
    case "youtube":
      formats = youtubeFormats
      break
    default:
      formats = twitterFormats
  }

  return shuffleAndAssignEngagement(formats, seed)
}

function shuffleAndAssignEngagement(items: TrendResult[], seed: number): TrendResult[] {
  // Simple deterministic shuffle based on the seed
  const shuffled = [...items].sort((a, b) => {
    const hashA = hashString(`${a.name}${seed}`)
    const hashB = hashString(`${b.name}${seed}`)
    return hashA - hashB
  })

  // Assign engagement values with some randomness but ensuring they decrease
  return shuffled.slice(0, 10).map((item, index) => {
    // Base engagement decreases as index increases
    const baseEngagement = 10000 - index * 800

    // Add some randomness based on the seed and item name
    const randomFactor = hashString(`${item.name}${seed}${index}`) % 2000

    return {
      ...item,
      engagement: baseEngagement + randomFactor,
    }
  })
}

// Simple string hash function
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}
