export type Signal = {
  id: string;
  signal: string;
  meaning: string;
  missed: string;
};

export const signals: Signal[] = [
  {
    id: "01",
    signal: "A competitor's logo quietly disappears from the stack page.",
    meaning: "The decision is already made. The replacement search is next.",
    missed: "Teams wait for the RFP. By then the shortlist is closed.",
  },
  {
    id: "02",
    signal: "Three hires for the same role in two weeks.",
    meaning: "An initiative is being staffed, not explored.",
    missed: "Headcount reads as growth. It's usually a roadmap.",
  },
  {
    id: "03",
    signal: "A new VP starts and publishes nothing.",
    meaning: "Listening, mapping, rebuilding. The first 60 days decide vendors.",
    missed: "Outreach tries to impress. They want to be understood.",
  },
  {
    id: "04",
    signal: "A pricing table appears where there was none.",
    meaning: "Exploration is over. Margins matter now.",
    missed: "Looks like maturity. Usually pressure.",
  },
  {
    id: "05",
    signal: "Docs get a sudden style overhaul.",
    meaning: "An enterprise deal forced it. Procurement is in the room.",
    missed: "Reads as branding. It's a contract.",
  },
  {
    id: "06",
    signal: "A founder stops posting about the product. Starts posting about the category.",
    meaning: "Preparing the market for a narrative shift. A raise or a pivot is near.",
    missed: "Followers see thought leadership. Operators see positioning.",
  },
  {
    id: "07",
    signal: "Three customers of the same vendor churn in one quarter. Quietly.",
    meaning: "Structural, not sales. The category is opening.",
    missed: "Win-loss treats each as isolated. They rarely are.",
  },
  {
    id: "08",
    signal: "An engineering team open-sources an internal tool.",
    meaning: "It's no longer a moat. Something larger is being built behind it.",
    missed: "Reads as generosity. It's a clearing of the deck.",
  },
  {
    id: "09",
    signal: "References asked for on call two, not call five.",
    meaning: "Internal approval is running in parallel. The window is days.",
    missed: "Sellers slow down to nurture. The buyer has already moved.",
  },
  {
    id: "10",
    signal: "Case studies disappear from the homepage.",
    meaning: "The audience has changed. Selling up, or selling differently.",
    missed: "Looks like a redesign. It's a repositioning.",
  },
];