import { Toolbar } from '@fluentui/react-components/unstable';

import descriptionMd from './ToolbarDescription.md';
import bestPracticesMd from './ToolbarBestPractices.md';

export { Default } from './ToolbarDefault.stories';
export { Small } from './ToolbarSmall.stories';
export { Medium } from './ToolbarMedium.stories';
export { Large } from './ToolbarLarge.stories';
export { OverflowItems } from './ToolbarOverflow.stories';
export { WithTooltip } from './ToolbarWithTooltip.stories';
export { WithPopover } from './ToolbarWithPopover.stories';
export { Subtle } from './ToolbarSubtle.stories';
export { ControlledToggleButton } from './ToolbarControlledToggleButton.stories';
export { Radio } from './ToolbarRadio.stories';
export { ControlledRadio } from './ToolbarRadioControlled.stories';
export { Vertical } from './ToolbarVertical.stories';
export { VerticalButton } from './ToolbarVerticalButton.stories';
export { FarGroup } from './ToolbarFarGroup.stories';

export default {
  title: 'Preview Components/Toolbar',
  component: Toolbar,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
};
