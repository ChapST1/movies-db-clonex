/**
 * https://github.com/microsoft/TypeScript/issues/25760#issuecomment-405931434
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
