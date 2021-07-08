import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DependentPriceReference } from  '../../model/cac/DependentPriceReference'
import { DependentPriceReferenceField, DependentPriceReferenceFieldMeta, DependentPriceReferenceTypeName } from  '../../meta/cac/DependentPriceReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DependentPriceReference, void>
  dependentPriceReference: DependentPriceReference[] | undefined
  renderContext: RenderContext
}

export const DependentPriceReferenceSubElementsMap: SubElementsTemplatesMap<DependentPriceReferenceField, DependentPriceReference, void> = new Map([
    [
      DependentPriceReferenceField.UBLExtensions,
      { meta: DependentPriceReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DependentPriceReferenceField.UBLExtensions}
          meta={DependentPriceReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DependentPriceReferenceField.Percent,
      { meta: DependentPriceReferenceFieldMeta.Percent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={DependentPriceReferenceField.Percent}
          meta={DependentPriceReferenceFieldMeta.Percent}
          fieldConfig={fieldConfig}
          numeric={value?.Percent}
          renderContext={renderContext}
        />}
    ],

    [
      DependentPriceReferenceField.LocationAddress,
      { meta: DependentPriceReferenceFieldMeta.LocationAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={DependentPriceReferenceField.LocationAddress}
          meta={DependentPriceReferenceFieldMeta.LocationAddress}
          fieldConfig={fieldConfig}
          address={value?.LocationAddress}
          renderContext={renderContext}
        />}
    ],

    [
      DependentPriceReferenceField.DependentLineReference,
      { meta: DependentPriceReferenceFieldMeta.DependentLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={DependentPriceReferenceField.DependentLineReference}
          meta={DependentPriceReferenceFieldMeta.DependentLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.DependentLineReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function DependentPriceReferenceDisplay<TFieldMeta>({ meta, fieldConfig, dependentPriceReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DependentPriceReferenceTypeName,
    meta,
    fieldConfig,
    dependentPriceReference,
    renderContext,
    DependentPriceReferenceSubElementsMap,
  )
}
