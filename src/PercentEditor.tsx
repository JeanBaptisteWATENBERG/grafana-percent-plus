import React, { PureComponent, ChangeEvent } from 'react';
import { Select, Input } from '@grafana/ui';

import { PercentPanelOptions } from './types';
import { PanelEditorProps, SelectableValue } from '@grafana/data';

export class PercentEditor extends PureComponent<PanelEditorProps<PercentPanelOptions>> {
  onPercentOfChanged = ({ value }: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, percentOf: value || '' });
  };

  onOverChanged = ({ value }: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, over: value || '' });
  };

  onDecimalChanged = ({ value }: SelectableValue<number>) => {
    this.props.onOptionsChange({ ...this.props.options, decimal: value === undefined ? -1 : value });
  };

  onValueFontSizeChanged = ({ value }: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, valueFontSize: value || '' });
  };

  onPercentFontSizeChanged = ({ value }: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, percentFontSize: value || '' });
  };

  onMaxValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onOptionsChange({ ...this.props.options, maxValue: e.target.value || '' });
  };

  render() {
    const { options, data } = this.props;

    const fieldAliases: Array<SelectableValue<string>> = data.series
      .map(serie => {
        return serie.fields
          .filter(field => field.type === 'number')
          .map(() => {
            return { label: serie.name, value: serie.name };
          });
      })
      .reduce((aggregated, current) => [...aggregated, ...current], []);

    const decimalOptions = [
      { label: 'No limit', value: -1 },
      ...[0, 1, 2, 3, 4, 5, 6, 7].map((index: number) => ({ label: `${index}`, value: index })),
    ];

    const fontSizeOptions = [20, 30, 50, 70, 80, 100, 110, 120, 150, 170, 200].map(size => ({
      label: `${size}%`,
      value: `${size}`,
    }));

    return (
      <div className="section" style={{ width: '100%' }}>
        <div className="gf-form">
          <label className="gf-form-label width-9">Percent of</label>
          <div className="gf-form-select-wrapper" style={{ width: '100%' }}>
            <Select
              value={{ label: options.percentOf, value: options.percentOf }}
              options={fieldAliases}
              onChange={this.onPercentOfChanged}
            />
          </div>
        </div>

        <div className="gf-form">
          <label className="gf-form-label width-9">Over</label>
          <div className="gf-form-select-wrapper" style={{ width: '100%' }}>
            <Select
              value={{ label: options.over, value: options.over }}
              options={fieldAliases}
              onChange={this.onOverChanged}
            />
          </div>
        </div>

        <div className="gf-form">
          <label className="gf-form-label width-9">Max value</label>
          <div className="gf-form-select-wrapper" style={{ width: '100%' }}>
            <Input value={options.maxValue} onChange={this.onMaxValueChanged} />
          </div>
        </div>

        <div className="gf-form">
          <label className="gf-form-label width-9">Decimals</label>
          <div className="gf-form-select-wrapper" style={{ width: '100%' }}>
            <Select
              value={decimalOptions.find(decimal => decimal.value === options.decimal)}
              options={decimalOptions}
              onChange={this.onDecimalChanged}
            />
          </div>
        </div>

        <div className="gf-form">
          <label className="gf-form-label width-9">Value font size</label>
          <div className="gf-form-select-wrapper" style={{ width: '100%' }}>
            <Select
              value={fontSizeOptions.find(size => size.value === options.valueFontSize)}
              options={fontSizeOptions}
              onChange={this.onValueFontSizeChanged}
            />
          </div>
        </div>

        <div className="gf-form">
          <label className="gf-form-label width-9">% font size</label>
          <div className="gf-form-select-wrapper" style={{ width: '100%' }}>
            <Select
              value={fontSizeOptions.find(size => size.value === options.percentFontSize)}
              options={fontSizeOptions}
              onChange={this.onPercentFontSizeChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}
