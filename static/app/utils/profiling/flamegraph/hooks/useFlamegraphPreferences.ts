import {useContext} from 'react';

import type {FlamegraphState} from '../flamegraphStateProvider/flamegraphContext';
import {FlamegraphStateValueContext} from '../flamegraphStateProvider/flamegraphContext';

export function useFlamegraphPreferences(): FlamegraphState['preferences'] {
  const context = useContext(FlamegraphStateValueContext);

  if (context === null) {
    throw new Error('useFlamegraphPreferences called outside of FlamegraphStateProvider');
  }

  return context[0].preferences;
}
