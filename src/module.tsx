import { PanelPlugin } from '@grafana/ui';
import { PercentPanelOptions, defaults } from './types';
import { PercentPanel } from './PercentPanel';
import { PercentEditor } from './PercentEditor';

export const plugin = new PanelPlugin<PercentPanelOptions>(PercentPanel).setDefaults(defaults).setEditor(PercentEditor);
