export type Faq = {
  id?: number;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: 1,
    question: "SMM panels - what are they?",
    answer:
      "An SMM panel is an online shop that you can visit to purchase SMM services at great prices.",
  },
  {
    id: 2,
    question: "What SMM services can I find on this panel?",
    answer:
      "We sell different types of SMM services — likes, followers, views, etc.",
  },
  {
    id: 3,
    question: "Are SMM services on your panel safe to buy?",
    answer: "Sure! Your accounts won't get banned.",
  },
  {
    id: 4,
    question: "How does a mass order work?",
    answer:
      "It's possible to place multiple orders with different links at once with the help of the mass order feature.",
  },
  {
    id: 5,
    question: "What does Drip-feed mean?",
    answer:
      "Grow your accounts as fast as you want with the help of Drip-feed. How it works: let's say you want 2000 likes on your post. Instead of getting all 2000 at once, you can get 200 each day for 10 days.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "To change the email address associated with your account, go to your Account Settings and select Change Email. Follow the instructions to update your email securely.",
  },
];
