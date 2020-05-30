import React, { PropsWithChildren } from 'react';
import { PanelProps, getColorFromHexRgbOrName } from '@grafana/data';
import { PercentPanelOptions } from 'types';

interface Props extends PanelProps<PercentPanelOptions> {}

const BASE_FONT_SIZE = 38;

function SpanValue({
  fontSizePercent,
  className,
  children,
}: PropsWithChildren<{ fontSizePercent: string; className: string }>) {
  const pixelSize = (parseInt(fontSizePercent, 10) / 100) * BASE_FONT_SIZE;
  return (
    <span className={className} style={{ fontSize: pixelSize + 'px' }}>
      {children}
    </span>
  );
}

export const PercentPanel = (props: Props) => {
  const { options, data, fieldConfig } = props;

  console.log(props);

  const panelRef = React.useCallback((panel: HTMLDivElement, color: string) => {
    if (panel) {
      const panelContainer = panel.closest<HTMLDivElement>('.panel-container');
      if (panelContainer) {
        panelContainer.style.background = color;
      }
    }
  }, []);

  const percentOfSerie = data.series.find(serie => serie.name === options.percentOf);
  const percentOverSerie = data.series.find(serie => serie.name === options.over);

  if (!percentOfSerie || !percentOverSerie) {
    return <p>Selected series are not available</p>;
  }

  const percentOfField = percentOfSerie.fields.find(field => field.name === 'Value');
  const percentOverField = percentOverSerie.fields.find(field => field.name === 'Value');

  if (!percentOfField || !percentOverField) {
    return <p>Selected fields are not available</p>;
  }

  const percentOfSum = percentOfField.values.toArray().reduce((sum, current) => sum + current, 0);
  const percentOverSum = percentOverField.values.toArray().reduce((sum, current) => sum + current, 0);

  const maxValue = Number(options.maxValue);
  const rawPercent = (percentOfSum * 100) / percentOverSum;
  const percent = isNaN(maxValue) ? rawPercent : Math.min(rawPercent, maxValue);

  const applyableThreshold = [...fieldConfig.defaults.thresholds?.steps]
    .sort((thresholdA, thresholdB) => thresholdB.value - thresholdA.value)
    .find(threshold => threshold.value <= percent) || { color: 'transparent' };

  return (
    <div
      className="singlestat-panel"
      style={{ background: getColorFromHexRgbOrName(applyableThreshold.color) }}
      ref={(panel: HTMLDivElement) => panelRef(panel, getColorFromHexRgbOrName(applyableThreshold.color))}
    >
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
};
