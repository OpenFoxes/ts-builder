import TsBuilder from "@openfoxes/ts-builder";

interface Frog {
  name: string;
  color: "green" | "red";
  calm: boolean;
}

// Use the TsBuilder:
const immutableFrogBuilder = TsBuilderImmutable.makeBuilderFor<Frog>();
const frog = immutableFrogBuilder
  .set("name", "Klaus")
  .set("color", "green")
  .set("calm", true)
  .build();

/**
 * In the future the current usages should be possible:
 */

// The js-classic-builder, currently NOT possible:
const classicFrogBuilder = TsBuilder.makeBuilderFor<Frog>();
classicFrogBuilder.set("name", "Klaus").set("color", "green").set("calm", true);
const frog = classicFrogBuilder.build();

// The optimal TsBuilder (using Proxy), currently NOT possible:
const frogBuilder = TsBuilder.makeBuilderFor<Frog>();
const frog = frogBuilder
  .set("name", "Klaus")
  .set("color", "green")
  .set("calm", true)
  .build();
