import { NextFont } from "@next/font/dist/types";
import { StaticImageData } from "next/image";

export type HeadTitleInterface = JSX.Element;

export interface NavbarType {
  font?: NextFont;
  data?: object[];
}

export type If<T extends boolean, A, B = null> = T extends true
  ? A
  : T extends false
  ? B
  : A | B;

export type BitFieldResolvable<T> =
  | RecursiveReadonlyArray<T | `${bigint}`>
  | T
  | bigint
  | `${bigint}`;

export type RecursiveReadonlyArray<T> = ReadonlyArray<
  RecursiveReadonlyArray<T> | T
>;
/**
 * @example
 * const e = '' as toType<'me' | 'you'>
 * // e = 'me' / 'you' | ['me', 'you']
 */
export type toTypeArray<T> = RecursiveReadonlyArray<T> | T;

export interface TypeDataValueFooter {
  v: string;
  l?: string;
}
export interface TypeDataFooter {
  n: string;
  v: TypeDataValueFooter[];
}

export interface DataMember {
  name: string;
  image?: string | StaticImageData;
  description: toTypeArray<string>;
  role: string;
}

export interface DataProduk {
  name: string;
  image: string;
  description: toTypeArray<string>;
}
