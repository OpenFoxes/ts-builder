/**
 * Builder Pattern for types and interfaces
 *
 * Generates an immutable builder, so every setter creates a new builder-instance
 */
export class TsBuilderImmutable<T, G> {
  private constructor(private fields: G) {}

  /**
   * Sets a property to a certain value
   * @param key Name of the property
   * @param value Target value
   */
  set<K extends keyof T>(
    key: K,
    value: T[K],
  ): TsBuilderImmutable<T, G & Pick<T, K>> {
    this.fields = { ...this.fields, [key]: value };

    return this as TsBuilderImmutable<T, G & Pick<T, K>>;
  }

  /**
   * Builds the target object
   *
   * Only available if necessary properties are set
   */
  build(this: TsBuilderImmutable<T, T>): T {
    return this.fields;
  }

  /**
   * Creates a builder for a specific type or interface
   */
  static makeBuilderFor<T>(): TsBuilderImmutable<T, {}> {
    return new TsBuilderImmutable<T, {}>({});
  }
}
