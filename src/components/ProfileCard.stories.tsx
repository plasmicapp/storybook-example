import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import ProfileCard, {ProfileCardProps} from "./ProfileCard";

export default {
    title: 'Example/ProfileCard',
    component: ProfileCard,
} as Meta;

const Template: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const BaseVariant = Template.bind({});
BaseVariant.args = {};

// Display more variants like so:
//
// export const VariantA = Template.bind({});
// VariantA.args = {...};
//
// export const VariantB = Template.bind({});
// VariantB.args = {...};
