export type Signal = {
  id: string;
  signal: string;
  meaning: string;
  missed: string;
};

export const signals: Signal[] = [
  {
    id: "01",
    signal: "A prospect quietly removes a competitor's tool from their public stack.",
    meaning: "A buying decision has already been made internally. The replacement search is next.",
    missed: "Most teams wait for an RFP. By then, the shortlist is closed.",
  },
  {
    id: "02",
    signal: "A company posts three roles for the same function in two weeks.",
    meaning: "An initiative is being staffed, not explored. Budget exists.",
    missed: "Headcount signals are read as growth. They are usually a roadmap.",
  },
  {
    id: "03",
    signal: "A new VP starts and immediately publishes nothing.",
    meaning: "They are listening, mapping, and quietly rebuilding. The first 60 days decide vendors.",
    missed: "Outreach assumes they want to be impressed. They want to be understood.",
  },
  {
    id: "04",
    signal: "A product page gains a pricing table where there was none.",
    meaning: "The company has moved from exploration to defense. Margins matter now.",
    missed: "It looks like maturity. It is often pressure.",
  },
  {
    id: "05",
    signal: "Documentation gets a sudden style overhaul.",
    meaning: "An enterprise deal forced it. Procurement is in the room.",
    missed: "Design changes are read as branding. They are frequently a contract.",
  },
  {
    id: "06",
    signal: "A founder stops posting about the product and starts posting about the category.",
    meaning: "They are preparing the market for a narrative shift, usually before a raise or a pivot.",
    missed: "Followers see thought leadership. Operators see positioning.",
  },
  {
    id: "07",
    signal: "Three customers of the same vendor churn within a quarter, quietly.",
    meaning: "A structural problem, not a sales problem. The category is opening.",
    missed: "Win-loss reports treat each as isolated. They rarely are.",
  },
  {
    id: "08",
    signal: "An engineering team open-sources an internal tool.",
    meaning: "They have decided it is no longer a moat. Something larger is being built behind it.",
    missed: "It is read as generosity. It is usually a clearing of the deck.",
  },
  {
    id: "09",
    signal: "A buyer asks for references after the second call, not the fifth.",
    meaning: "Internal approval is happening in parallel. The decision window is days, not weeks.",
    missed: "Sellers slow down to nurture. The buyer has already moved on without them.",
  },
  {
    id: "10",
    signal: "A company removes case studies from its homepage.",
    meaning: "The audience has changed. They are selling up, or selling differently.",
    missed: "It looks like a redesign. It is a repositioning.",
  },
];