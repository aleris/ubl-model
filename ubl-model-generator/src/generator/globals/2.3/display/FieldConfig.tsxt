import React, { ReactNode } from 'react'
import { RenderContext } from './RenderContext'
import { DefaultTemplate } from './templates/DefaultTemplate'

export enum FieldLayout {
  Block = 'Block',
  Inline = 'Inline'
}

export enum FieldDirection {
  Vertical = 'Vertical',
  Horizontal = 'Horizontal'
}

export enum FieldSize {
  Small = 'Small',
  Medium = 'Medium',
  Big = 'Big',
}

export enum FieldSpacing {
  Spaced = 'Spaced',
  Compact = 'Compact',
}

export type FieldConfig<TValue> = {
  showLabel?: boolean
  showColon?: boolean
  size?: FieldSize
  layout?: FieldLayout
  direction?: FieldDirection
  spacing?: FieldSpacing
  template?: (value: TValue, renderContext: RenderContext, elementsMap: Map<any, ConfigurableFieldDisplay<TValue>>) => ReactNode
}

export const DefaultFieldConfig: FieldConfig<any> = {
  size: FieldSize.Medium,
  showLabel: false,
  showColon: true,
  layout: FieldLayout.Block,
  direction: FieldDirection.Vertical,
  spacing: FieldSpacing.Compact,
  template: (value: any, renderContext: RenderContext, elementsMap) => <DefaultTemplate elementsMap={elementsMap} />
}

export type ConfigurableFieldDisplay<TValue>
  = (value: TValue, renderContext: RenderContext, fieldConfig?: FieldConfig<TValue>) => ReactNode
