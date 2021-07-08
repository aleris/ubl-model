import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PhysicalAttribute } from  '../../model/cac/PhysicalAttribute'
import { PhysicalAttributeField, PhysicalAttributeFieldMeta, PhysicalAttributeTypeName } from  '../../meta/cac/PhysicalAttributeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PhysicalAttribute, void>
  physicalAttribute: PhysicalAttribute[] | undefined
  renderContext: RenderContext
}

export const PhysicalAttributeSubElementsMap: SubElementsTemplatesMap<PhysicalAttributeField, PhysicalAttribute, void> = new Map([
    [
      PhysicalAttributeField.UBLExtensions,
      { meta: PhysicalAttributeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PhysicalAttributeField.UBLExtensions}
          meta={PhysicalAttributeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PhysicalAttributeField.AttributeID,
      { meta: PhysicalAttributeFieldMeta.AttributeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PhysicalAttributeField.AttributeID}
          meta={PhysicalAttributeFieldMeta.AttributeID}
          fieldConfig={fieldConfig}
          identifier={value?.AttributeID}
          renderContext={renderContext}
        />}
    ],

    [
      PhysicalAttributeField.PositionCode,
      { meta: PhysicalAttributeFieldMeta.PositionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PhysicalAttributeField.PositionCode}
          meta={PhysicalAttributeFieldMeta.PositionCode}
          fieldConfig={fieldConfig}
          code={value?.PositionCode}
          renderContext={renderContext}
        />}
    ],

    [
      PhysicalAttributeField.DescriptionCode,
      { meta: PhysicalAttributeFieldMeta.DescriptionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PhysicalAttributeField.DescriptionCode}
          meta={PhysicalAttributeFieldMeta.DescriptionCode}
          fieldConfig={fieldConfig}
          code={value?.DescriptionCode}
          renderContext={renderContext}
        />}
    ],

    [
      PhysicalAttributeField.Description,
      { meta: PhysicalAttributeFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PhysicalAttributeField.Description}
          meta={PhysicalAttributeFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function PhysicalAttributeDisplay<TFieldMeta>({ meta, fieldConfig, physicalAttribute, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PhysicalAttributeTypeName,
    meta,
    fieldConfig,
    physicalAttribute,
    renderContext,
    PhysicalAttributeSubElementsMap,
  )
}
