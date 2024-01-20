#!/usr/bin/env node

import brainPrime from "./../src/games/brain-prime";
import { makeCycle } from "./../src/generalFunctions";

makeCycle(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  brainPrime
);
