import React from 'react';
export type EventCallback = (e: MouseEvent) => unknown;
export type ElRef = ((instance: HTMLDivElement | null) => void) | React.MutableRefObject<HTMLDivElement | null>;
export declare const useClickOutside: (elRef: ElRef, callback: EventCallback) => void;
