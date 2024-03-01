/* global JSGlobals */

export const isFeatureFlagEnabled = (flag) => JSGlobals?.featureFlags?.[flag];
