#!/usr/bin/env node

import brainProg from '../src/games/brain-progression';
import { makeCycle } from '../src/generalFunctions';

makeCycle('What number is missing in the progression?', brainProg);
