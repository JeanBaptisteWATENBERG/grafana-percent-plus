import { ThresholdsMode, ThresholdsConfig } from '@grafana/data';

export interface PercentPanelOptions {
  percentOf: string;
  over: string;
  decimal: number;
  valueFontSize: string;
  percentFontSize: string;
  maxValue: string;
}

export const defaults: PercentPanelOptions = {
  percentOf: '',
  over: '',
  decimal: -1,
  valueFontSize: '80',
  percentFontSize: '50',
  maxValue: 'Infinity',
};

export const defaultThresholds: ThresholdsConfig = {
  mode: ThresholdsMode.Absolute,
  steps: [
    { value: -Infinity, color: 'red' },
    { value: 95, color: 'orange' },
    { value: 99, color: 'yellow' },
    { value: 100, color: 'green' },
  ],
};
