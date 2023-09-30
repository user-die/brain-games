#!/usr/bin/env node

import brainCalc from '../src/games/brain-calc';
import { makeCycle } from '../src/generalFunctions';

makeCycle('What is the result of the expression?', brainCalc);
