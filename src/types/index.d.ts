interface LabelValuePair<T = string> {
  label: string;
  value: T;
}

interface ServiceList {
  title: string;
  services: Service[];
}

interface Service {
  id: string;
  service: string;
  rate: number;
  minOrder: number;
  maxOrder: number;
  description: string;
}
