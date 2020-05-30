import { PanelPlugin, FieldConfigProperty } from '@grafana/data';
import { PercentPanelOptions, defaults, defaultThresholds } from './types';
import { PercentPanel } from './PercentPanel';
import { PercentEditor } from './PercentEditor';

export const plugin = new PanelPlugin<PercentPanelOptions>(PercentPanel)
  .setDefaults(defaults)
  .useFieldConfig({
    standardOptions: [FieldConfigProperty.Thresholds],
    standardOptionsDefaults: {
      thresholds: defaultThresholds,
    },
  })
  .setNoPadding()
  .setEditor(PercentEditor);
