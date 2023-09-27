#!/usr/bin/env node

import { brainProg } from '../src/games/brain-progression.js';
import { makeCycle } from '../src/generalFunctions.js';

makeCycle('What number is missing in the progression?', brainProg)
