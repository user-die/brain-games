#!/usr/bin/env node

import { brainGcd } from '../src/games/brain-gcd.js';
import { makeCycle } from '../src/generalFunctions.js';

makeCycle('Find the greatest common divisor of given numbers.', brainGcd)
