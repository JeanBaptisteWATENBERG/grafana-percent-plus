import React, { PureComponent, PropsWithChildren } from 'react';
import { PanelProps, getColorFromHexRgbOrName } from '@grafana/ui';
import { PercentPanelOptions } from 'types';

interface Props extends PanelProps<PercentPanelOptions> {}

const BASE_FONT_SIZE = 38;

function SpanValue({ fontSizePercent, className, children }: PropsWithChildren<{ fontSizePercent: string; className: string }>) {
  const pixelSize = (parseInt(fontSizePercent, 10) / 100) * BASE_FONT_SIZE;
  return (
    <span className={className} style={{ fontSize: pixelSize + 'px' }}>
      {children}
    </span>
  );
}

export class PercentPanel extends PureComponent<Props> {
  render() {
    const { options, data } = this.props;
    const percentOfSerie = data.series.find(serie => serie.fields.find(field => field.name === options.percentOf));
    const percentOverSerie = data.series.find(serie => serie.fields.find(field => field.name === options.over));

    if (!percentOfSerie || !percentOverSerie) {
      return <p>Selected series are not available</p>;
    }

    const percentOfField = percentOfSerie.fields.find(field => field.name === options.percentOf);
    const percentOverField = percentOverSerie.fields.find(field => field.name === options.over);

    if (!percentOfField || !percentOverField) {
      return <p>Selected fields are not available</p>;
    }

    const percentOfSum = percentOfField.values.toArray().reduce((sum, current) => sum + current, 0);
    const percentOverSum = percentOverField.values.toArray().reduce((sum, current) => sum + current, 0);

    const percent = Math.min((percentOfSum * 100) / percentOverSum, 100);

    const applyableThreshold = [...options.thresholds]
      .sort((thresholdA, thresholdB) => thresholdB.value - thresholdA.value)
      .find(threshold => threshold.value <= percent) || { color: 'transparent' };

    return (
      <div className="singlestat-panel" style={{ background: getColorFromHexRgbOrName(applyableThreshold.color) }}>
        <div className="singlestat-panel-value-container">
          <SpanValue className="singlestat-panel-value" fontSizePercent={options.valueFontSize}>
            {options.decimal !== -1 ? percent.toFixed(options.decimal) : percent}
          </SpanValue>
          <SpanValue className="singlestat-panel-postfix" fontSizePercent={options.percentFontSize}>
            %
          </SpanValue>
        </div>
      </div>
    );
  }
}
