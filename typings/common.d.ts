export type Ex<I, T, O> = I extends T ? O : never;
export type Exs<I, T, O> = I extends T ? never : O;
export type Eu<I, T, O1, O2> = I extends T ? O1 : O2;

export type PromiseLikeEx<I, T, O> = Ex<I, T, Promise<O>>;
export type PromiseLikeExs<I, T, O> = Exs<I, T, Promise<O>>;

export type PromiseLikeEu<I, T, O> = Eu<I, T, Promise<O>, O>;
export type PromiseLikeEus<I, T, O> = Eu<I, T, Promise<O>, O>;

export type PromiseOr<I> = I | Promise<I>;
