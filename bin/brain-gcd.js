#!/usr/bin/env node

import brainGcd from '../src/games/brain-gcd';
import { makeCycle } from '../src/generalFunctions';

makeCycle('Find the greatest common divisor of given numbers.', brainGcd);
