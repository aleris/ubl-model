import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemIdentification } from  '../../model/cac/ItemIdentification'
import { ItemIdentificationField, ItemIdentificationFieldMeta, ItemIdentificationTypeName } from  '../../meta/cac/ItemIdentificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DimensionDisplay } from './DimensionDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PhysicalAttributeDisplay } from './PhysicalAttributeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemIdentification, void>
  itemIdentification: ItemIdentification[] | undefined
  renderContext: RenderContext
}

export const ItemIdentificationSubElementsMap: SubElementsTemplatesMap<ItemIdentificationField, ItemIdentification, void> = new Map([
    [
      ItemIdentificationField.UBLExtensions,
      { meta: ItemIdentificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemIdentificationField.UBLExtensions}
          meta={ItemIdentificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemIdentificationField.ID,
      { meta: ItemIdentificationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemIdentificationField.ID}
          meta={ItemIdentificationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemIdentificationField.ExtendedID,
      { meta: ItemIdentificationFieldMeta.ExtendedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemIdentificationField.ExtendedID}
          meta={ItemIdentificationFieldMeta.ExtendedID}
          fieldConfig={fieldConfig}
          identifier={value?.ExtendedID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemIdentificationField.BarcodeSymbologyID,
      { meta: ItemIdentificationFieldMeta.BarcodeSymbologyID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemIdentificationField.BarcodeSymbologyID}
          meta={ItemIdentificationFieldMeta.BarcodeSymbologyID}
          fieldConfig={fieldConfig}
          identifier={value?.BarcodeSymbologyID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemIdentificationField.IssuerScopeID,
      { meta: ItemIdentificationFieldMeta.IssuerScopeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemIdentificationField.IssuerScopeID}
          meta={ItemIdentificationFieldMeta.IssuerScopeID}
          fieldConfig={fieldConfig}
          identifier={value?.IssuerScopeID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemIdentificationField.PhysicalAttribute,
      { meta: ItemIdentificationFieldMeta.PhysicalAttribute,
        template: ({value, renderContext, fieldConfig}) => <PhysicalAttributeDisplay
          key={ItemIdentificationField.PhysicalAttribute}
          meta={ItemIdentificationFieldMeta.PhysicalAttribute}
          fieldConfig={fieldConfig}
          physicalAttribute={value?.PhysicalAttribute}
          renderContext={renderContext}
        />}
    ],

    [
      ItemIdentificationField.MeasurementDimension,
      { meta: ItemIdentificationFieldMeta.MeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={ItemIdentificationField.MeasurementDimension}
          meta={ItemIdentificationFieldMeta.MeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.MeasurementDimension}
          renderContext={renderContext}
        />}
    ],

    [
      ItemIdentificationField.IssuerParty,
      { meta: ItemIdentificationFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ItemIdentificationField.IssuerParty}
          meta={ItemIdentificationFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemIdentificationDisplay<TFieldMeta>({ meta, fieldConfig, itemIdentification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemIdentificationTypeName,
    meta,
    fieldConfig,
    itemIdentification,
    renderContext,
    ItemIdentificationSubElementsMap,
  )
}
