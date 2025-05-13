export type kimo = {
  id: number;
  title: string;
};

export type Element = {
  id: number;
  name: string;
  element: kimo[];
};

export type DataForm = {
  title: string;
  subTitle: string;
  id: number;
  name: Element[] | undefined;
};
