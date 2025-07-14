import { Order } from "@/types";
import { Status } from "@/types/enums";

export const orders: Order[] = [
  {
    id: "2301780",
    link: "https://instagram.com....",
    charge: 3500,
    quantity: 5000,
    service: "Instagram Followers - [ Max: 100K ]",
    status: Status.Completed,
    date: "2022-08-20 16:17:34",
  },
  {
    id: "2301781",
    link: "https://instagram.com....",
    charge: 3500,
    quantity: 5000,
    service: "Instagram Followers - [ Max: 100K ]",
    status: Status.Processing,
    date: "2022-08-20 16:17:34",
  },
  {
    id: "2301782",
    link: "https://instagram.com....",
    charge: 3500,
    quantity: 5000,
    service: "Instagram Followers - [ Max: 100K ]",
    status: Status.InProgress,
    date: "2022-08-20 16:17:34",
  },
  {
    id: "2301783",
    link: "https://instagram.com....",
    charge: 3500,
    quantity: 5000,
    service: "Instagram Followers - [ Max: 100K ]",
    status: Status.Cancelled,
    date: "2022-08-20 16:17:34",
  },
];
