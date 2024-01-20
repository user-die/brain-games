#!/usr/bin/env node

import getEven from "../src/games/brain-even.js";
import { makeCycle } from "../src/generalFunctions.js";

makeCycle(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getEven
);
