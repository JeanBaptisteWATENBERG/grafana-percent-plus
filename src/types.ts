import { ThresholdsConfig, ThresholdsMode } from '@grafana/data';

export interface PercentPanelOptions {
  percentOf: string;
  over: string;
  decimal: number;
  thresholds: ThresholdsConfig;
  valueFontSize: string;
  percentFontSize: string;
  maxValue: string;
}

export const defaults: PercentPanelOptions = {
  percentOf: '',
  over: '',
  decimal: -1,
  thresholds: {
    mode: ThresholdsMode.Percentage,
    steps: [{ value: -Infinity, color: 'red' }, { value: 95, color: 'red' }, { value: 99, color: 'orange' }, { value: 100, color: 'green' }]
  },
  valueFontSize: '80',
  percentFontSize: '50',
  maxValue: 'Infinity'
};
