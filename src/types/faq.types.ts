import { TimeStamp } from "@/types/index";

export interface Faq {
  question: string;
  answer: string;
}

export interface FaqResponse extends Faq, TimeStamp {
  _id: string;
}
