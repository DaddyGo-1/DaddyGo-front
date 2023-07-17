import React from 'react';
import {AuthProvider} from './AuthContext';

import { combineComponents } from '../utilities/CombineComponents';
const providers = [
  AuthProvider,

]
export const AppContextProvider = combineComponents(...providers);