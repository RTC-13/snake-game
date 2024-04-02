// IApplicator.ts

/**
 * Inferface for an Applicator
 */
export default interface IApplicator<T> {
  apply(item: T): void;
}
