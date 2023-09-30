#!/usr/bin/env node

import getEven from '../src/games/brain-even';
import { makeCycle } from '../src/generalFunctions';

makeCycle('Answer "yes" if the number is even, otherwise answer "no".', getEven);
