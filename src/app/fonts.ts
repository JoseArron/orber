import { Roboto, Roboto_Mono } from "next/font/google";

// ROBOTO
const roboto100 = Roboto({ weight: "100", variable: "--roboto100" });
const roboto300 = Roboto({ weight: "300", variable: "--roboto300" });
const roboto400 = Roboto({ weight: "400", variable: "--roboto400" });
const roboto500 = Roboto({ weight: "500", variable: "--roboto500" });
const roboto700 = Roboto({ weight: "700", variable: "--roboto700" });
const roboto900 = Roboto({ weight: "900", variable: "--roboto900" });

// ROBOTO MONO
const robotoMono300 = Roboto_Mono({
  weight: "300",
  variable: "--robotoMon300",
});

export {
  roboto100,
  roboto300,
  roboto400,
  roboto500,
  roboto700,
  roboto900,
  robotoMono300,
};
