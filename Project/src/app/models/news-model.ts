export interface GetNewsResult {
  head: {
    vars: string[];
  };
  results: {
    bindings: NewsModel[];
  };
}

export interface NewsModel {
  news: News;
  about: About;
  about_ids: AboutIds;
  description: Description;
  source: Source;
  title: Title;
  create_date: CreateDate;
  url: Url;
}

export interface News {
  type: string;
  value: string;
}

export interface About {
  type: string;
  value: string;
}

export interface AboutIds {
  type: string;
  value: string;
}

export interface Description {
  type: string;
  value: string;
}

export interface Source {
  type: string;
  value: string;
}

export interface Title {
  type: string;
  value: string;
}

export interface CreateDate {
  datatype: string;
  type: string;
  value: Date;
}

export interface Url {
  type: string;
  value: string;
}
