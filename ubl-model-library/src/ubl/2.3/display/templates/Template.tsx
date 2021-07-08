import React, { ReactNode } from 'react'
import { DefaultFieldConfig, FieldConfig } from '../FieldConfig'
import { RenderContext } from '../RenderContext'
import { DefaultTemplate } from './DefaultTemplate'

export type FieldTemplateArgs<TValue> = {
  value: TValue,
  renderContext: RenderContext,
  fieldConfig?: FieldConfig<TValue>
}

export type FieldTemplateRenderer<TValue> = (templateArgs: FieldTemplateArgs<TValue>) => ReactNode

export type ElementTemplateArgs<TValue> = {
  value: TValue,
  renderContext: RenderContext,
  elementsMap?: Map<any, FieldTemplateRenderer<TValue>>
}

export type ElementTemplateRenderer<TValue> = (templateArgs: ElementTemplateArgs<TValue>) => ReactNode

export function renderElementsTemplate<TValue>(
  templateTypeName: string,
  value: TValue,
  renderContext: RenderContext,
  elementsMap?: Map<any, FieldTemplateRenderer<TValue>>,
  fieldConfig?: FieldConfig<TValue>,
) {
  const typeTemplate = renderContext.templates.get(templateTypeName)
  if (typeTemplate !== undefined) {
    return typeTemplate({ value, renderContext, elementsMap })
  }
  const fieldTemplate = fieldConfig?.template ?? DefaultFieldConfig.template ?? (() => null)
  return fieldTemplate({ value, renderContext, elementsMap })
}

export class TemplateSlots<TSlot, TField, TValue> {
  constructor(
    readonly slotFields: Map<TSlot, [TField, FieldConfig<TValue>][]>,
    readonly templateArgs: ElementTemplateArgs<TValue>
  ) { }

  get(slot: TSlot): ReactNode[] {
    const fields = this.slotFields.get(slot)
    if (fields === undefined) {
      return []
    }
    return fields.map(([field, fieldConfig]) => {
      if (fieldConfig.template !== undefined) {
        return fieldConfig.template(templateArgs)
      }
      if (this.templateArgs.elementsMap !== undefined) {
        return this.templateArgs.elementsMap.get(field)?.(templateArgs.value, templateArgs.renderContext, fieldConfig) ?? null
      }
      return <DefaultTemplate value={templateArgs.value} renderContext={templateArgs.renderContext} />
    })
  }
}
