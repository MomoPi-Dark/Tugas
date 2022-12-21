import { NextFont } from "@next/font/dist/types";

export interface HeadTitleInterface<T> {
  component: toTypeArray<T>;
  nameTitle?: string;
  font?: NextFont;
}

export interface NavbarType {
  font?: NextFont;
  data?: object[];
}

export type RecursiveReadonlyArray<T> = ReadonlyArray<
  RecursiveReadonlyArray<T>
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
