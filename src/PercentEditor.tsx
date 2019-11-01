import React, { PureComponent } from 'react';
import { PanelEditorProps, PanelOptionsGrid, Select, ThresholdsEditor } from '@grafana/ui';

import { PercentPanelOptions } from './types';
import { SelectableValue, Threshold } from '@grafana/data';

export class PercentEditor extends PureComponent<PanelEditorProps<PercentPanelOptions>> {
  onPercentOfChanged = ({value}: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, percentOf: value || '' });
  };

  onOverChanged = ({value}: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, over: value || '' });
  };

  onDecimalChanged = ({value}: SelectableValue<number>) => {
    this.props.onOptionsChange({ ...this.props.options, decimal: value === undefined ? -1 : value });
  }

  onThresholdsCHanged = (newThresholds: Threshold[]) => {
    this.props.onOptionsChange({ ...this.props.options, thresholds: newThresholds})
  };

  onValueFontSizeChanged = ({value}: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, valueFontSize: value || '' });
  };

  onPercentFontSizeChanged = ({value}: SelectableValue<string>) => {
    this.props.onOptionsChange({ ...this.props.options, percentFontSize: value || '' });
  };

  render() {
    const { options, data } = this.props;

    const fieldAliases: SelectableValue<string>[] = data.series.map((serie) => {
      return serie.fields.filter(field => field.type === 'number').map((field) => {
        return {label: field.name, value: field.name };
      });
    }).reduce((aggregated, current) => [...aggregated, ...current], []); 

    const decimalOptions = [
      {label: 'No limit', value: -1},
      ...Array(7).fill(undefined).map((_: undefined, index: number) => ({label: `${index}`, value: index}))
    ]

    const fontSizeOptions = [
      20, 30, 50, 70, 80, 100, 110, 120, 150, 170, 200
    ].map(size => ({label: `${size}%`, value: `${size}`}))
    
    return (<PanelOptionsGrid>
      <div className="section gf-form-group">
        <h5 className="section-heading">Percent of</h5>
        <Select
          value={{label: options.percentOf, value: options.percentOf }}
          options={fieldAliases}
          onChange={this.onPercentOfChanged}
        /><br />

        <h5 className="section-heading">Over</h5>
        <Select
          value={{label: options.over, value: options.over }}
          options={fieldAliases}
          onChange={this.onOverChanged}
        /><br />

        <h5 className="section-heading">Decimals</h5>
        <Select
          value={decimalOptions.find(decimal => decimal.value === options.decimal)}
          options={decimalOptions}
          onChange={this.onDecimalChanged}
        /><br />

        <h5 className="section-heading">Value font size</h5>
        <Select
          value={fontSizeOptions.find(size => size.value === options.valueFontSize)}
          options={fontSizeOptions}
          onChange={this.onValueFontSizeChanged}
        /><br />

        <h5 className="section-heading">% font size</h5>
        <Select
          value={fontSizeOptions.find(size => size.value === options.percentFontSize)}
          options={fontSizeOptions}
          onChange={this.onPercentFontSizeChanged}
        />
      </div>

        <ThresholdsEditor thresholds={options.thresholds} onChange={this.onThresholdsCHanged} />
    </PanelOptionsGrid>);
  }
}
