import { PanelPlugin } from '@grafana/data';
import { PercentPanelOptions, defaults } from './types';
import { PercentPanel } from './PercentPanel';
import { PercentEditor } from './PercentEditor';

export const plugin = new PanelPlugin<PercentPanelOptions>(PercentPanel).setDefaults(defaults).setEditor(PercentEditor);
