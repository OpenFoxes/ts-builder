import { TsBuilderImmutable } from "./index";

describe("TsBuilder", () => {
  describe("Empty builder", () => {
    interface EmptyInterface {}

    it("should create a builder for an empty interface", () => {
      const emptyInterfaceBuilder =
        TsBuilderImmutable.makeBuilderFor<EmptyInterface>();

      expect(emptyInterfaceBuilder).toBeDefined();
    });

    it("should create an empty interface", () => {
      const emptyInterfaceBuilder =
        TsBuilderImmutable.makeBuilderFor<EmptyInterface>();

      expect(emptyInterfaceBuilder.build()).toEqual({});
    });
  });

  describe("Simple interface", () => {
    interface SimpleInterface {
      textValue: string;
      integerValue: number;
      booleanValue: boolean;
    }

    it("should create a builder for a simple interface", () => {
      const simpleInterfaceBuilder =
        TsBuilderImmutable.makeBuilderFor<SimpleInterface>();

      expect(simpleInterfaceBuilder).toBeDefined();
    });

    it("should create a simple interface", () => {
      const simpleInterfaceBuilder =
        TsBuilderImmutable.makeBuilderFor<SimpleInterface>();
      const filledSimpleInterfaceBuilder = simpleInterfaceBuilder
        .set("textValue", "Foo")
        .set("integerValue", 42)
        .set("booleanValue", true);

      expect(filledSimpleInterfaceBuilder.build()).toEqual({
        textValue: "Foo",
        integerValue: 42,
        booleanValue: true,
      });
    });
  });
});
