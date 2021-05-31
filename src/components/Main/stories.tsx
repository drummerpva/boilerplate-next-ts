import { Meta, Story } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Título', 'React Avançado')}
    description={text(
      'Descrição',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
export const Secondary: Story = () => (
  <Main
    title={text('Título', 'React Avançado 123')}
    description={text(
      'Descrição',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
