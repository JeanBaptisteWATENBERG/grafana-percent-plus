import { Threshold } from '@grafana/data';

export interface PercentPanelOptions {
  percentOf: string;
  over: string;
  decimal: number;
  thresholds: Threshold[];
  valueFontSize: string;
  percentFontSize: string;
}

export const defaults: PercentPanelOptions = {
  percentOf: '',
  over: '',
  decimal: -1,
  thresholds: [{ value: -Infinity, color: 'red' }, { value: 95, color: 'red' }, { value: 99, color: 'orange' }, { value: 100, color: 'green' }],
  valueFontSize: '80',
  percentFontSize: '50',
};
