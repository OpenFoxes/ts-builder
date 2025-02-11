import TsBuilder from "@openfoxes/ts-builder";

interface Frog {
  name: string;
  color: "green" | "red";
  calm: boolean;
}

// Use the TsBuilder:
const frogBuilder = TsBuilder.makeBuilderFor<Frog>();
const frog = frogBuilder
  .set("name", "Klaus")
  .set("color", "green")
  .set("calm", true)
  .build();
