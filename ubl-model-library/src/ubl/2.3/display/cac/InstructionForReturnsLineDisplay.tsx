import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { InstructionForReturnsLine } from  '../../model/cac/InstructionForReturnsLine'
import { InstructionForReturnsLineField, InstructionForReturnsLineFieldMeta, InstructionForReturnsLineTypeName } from  '../../meta/cac/InstructionForReturnsLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { PartyDisplay } from './PartyDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<InstructionForReturnsLine, void>
  instructionForReturnsLine: InstructionForReturnsLine[] | undefined
  renderContext: RenderContext
}

export const InstructionForReturnsLineSubElementsMap: SubElementsTemplatesMap<InstructionForReturnsLineField, InstructionForReturnsLine, void> = new Map([
    [
      InstructionForReturnsLineField.UBLExtensions,
      { meta: InstructionForReturnsLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={InstructionForReturnsLineField.UBLExtensions}
          meta={InstructionForReturnsLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsLineField.ID,
      { meta: InstructionForReturnsLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InstructionForReturnsLineField.ID}
          meta={InstructionForReturnsLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsLineField.Note,
      { meta: InstructionForReturnsLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InstructionForReturnsLineField.Note}
          meta={InstructionForReturnsLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsLineField.Quantity,
      { meta: InstructionForReturnsLineFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={InstructionForReturnsLineField.Quantity}
          meta={InstructionForReturnsLineFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsLineField.ManufacturerParty,
      { meta: InstructionForReturnsLineFieldMeta.ManufacturerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={InstructionForReturnsLineField.ManufacturerParty}
          meta={InstructionForReturnsLineFieldMeta.ManufacturerParty}
          fieldConfig={fieldConfig}
          party={value?.ManufacturerParty}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsLineField.Item,
      { meta: InstructionForReturnsLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={InstructionForReturnsLineField.Item}
          meta={InstructionForReturnsLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ]
]) 

export function InstructionForReturnsLineDisplay<TFieldMeta>({ meta, fieldConfig, instructionForReturnsLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    InstructionForReturnsLineTypeName,
    meta,
    fieldConfig,
    instructionForReturnsLine,
    renderContext,
    InstructionForReturnsLineSubElementsMap,
  )
}
