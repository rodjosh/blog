import Text from './Text'

export default {
    title: 'text',
    component: Text
}

const Template = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
    letterSpacing : 2,
    fontSize :"2rem",
    fontWeight:"700",
    lineHeight:"1.2"
}