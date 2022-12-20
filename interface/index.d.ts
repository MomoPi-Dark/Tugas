import { NextFont } from "@next/font/dist/types";

export interface HeadTitleInterface<T> {
  component: toTypeArrayAndAny<T>;
  nameTitle?: string;
  font?: NextFont;
}

export interface NavbarType {
  font?: NextFont;
  data?: object[];
}

export type BitFieldResolvable<T> = RecursiveReadonlyArray<T> | T;
export type RecursiveReadonlyArray<T> = ReadonlyArray<T>;
/**
 * @example
 * const e = '' as toType<'me' | 'you'>
 * // e = 'me' / 'you' | ['me', 'you']
 */
export type toTypeArrayAndAny<T> = BitFieldResolvable<T>;

export interface TypeDataValueFooter {
  v: string;
  l?: string;
}
export interface TypeDataFooter {
  n: string;
  v: TypeDataValueFooter[];
}
