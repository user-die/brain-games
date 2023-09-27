#!/usr/bin/env node

import { brainPrime } from '../src/games/brain-prime.js';
import { makeCycle } from '../src/generalFunctions.js';

makeCycle('Answer "yes" if given number is prime. Otherwise answer "no".', brainPrime)
