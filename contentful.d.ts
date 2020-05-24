// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlogDataFields {
  /** body */
  body: Document;

  /** title */
  title: string;

  /** slug */
  slug: string;

  /** featured */
  featured?: boolean | undefined;

  /** thumbnail */
  thumbnail?: Asset | undefined;

  /** header */
  header: Asset;
}

export interface IBlogData extends Entry<IBlogDataFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogData";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISiteDataFields {
  /** discordLink */
  discordLink?: string | undefined;
}

export interface ISiteData extends Entry<ISiteDataFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "siteData";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IStreamDataFields {
  /** link */
  link: string;

  /** title */
  title: string;
}

export interface IStreamData extends Entry<IStreamDataFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "streamData";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "blogData" | "siteData" | "streamData";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";