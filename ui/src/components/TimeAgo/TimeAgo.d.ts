import { FC } from 'react';
import { TimeAgoProps } from './TimeAgo.types';
export declare const getTimeUnits: (secondsAgo: number) => {
    daysAgo: number;
    hoursAgo: number;
    minutesAgo: number;
};
export declare const getFormattedTimeAgoEn: (secondsAgo: number) => string;
export declare const getFormattedTimeAgoEs: (secondsAgo: number) => string;
declare const TimeAgo: FC<TimeAgoProps>;
export default TimeAgo;
