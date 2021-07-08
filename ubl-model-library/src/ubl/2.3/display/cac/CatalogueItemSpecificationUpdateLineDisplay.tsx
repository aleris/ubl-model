import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueItemSpecificationUpdateLine } from  '../../model/cac/CatalogueItemSpecificationUpdateLine'
import { CatalogueItemSpecificationUpdateLineField, CatalogueItemSpecificationUpdateLineFieldMeta, CatalogueItemSpecificationUpdateLineTypeName } from  '../../meta/cac/CatalogueItemSpecificationUpdateLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CustomerPartyDisplay } from './CustomerPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { SupplierPartyDisplay } from './SupplierPartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CatalogueItemSpecificationUpdateLine, void>
  catalogueItemSpecificationUpdateLine: CatalogueItemSpecificationUpdateLine[] | undefined
  renderContext: RenderContext
}

export const CatalogueItemSpecificationUpdateLineSubElementsMap: SubElementsTemplatesMap<CatalogueItemSpecificationUpdateLineField, CatalogueItemSpecificationUpdateLine, void> = new Map([
    [
      CatalogueItemSpecificationUpdateLineField.UBLExtensions,
      { meta: CatalogueItemSpecificationUpdateLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueItemSpecificationUpdateLineField.UBLExtensions}
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateLineField.ID,
      { meta: CatalogueItemSpecificationUpdateLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateLineField.ID}
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateLineField.ContractorCustomerParty,
      { meta: CatalogueItemSpecificationUpdateLineFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CatalogueItemSpecificationUpdateLineField.ContractorCustomerParty}
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateLineField.SellerSupplierParty,
      { meta: CatalogueItemSpecificationUpdateLineFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CatalogueItemSpecificationUpdateLineField.SellerSupplierParty}
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateLineField.Item,
      { meta: CatalogueItemSpecificationUpdateLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={CatalogueItemSpecificationUpdateLineField.Item}
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueItemSpecificationUpdateLineDisplay<TFieldMeta>({ meta, fieldConfig, catalogueItemSpecificationUpdateLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueItemSpecificationUpdateLineTypeName,
    meta,
    fieldConfig,
    catalogueItemSpecificationUpdateLine,
    renderContext,
    CatalogueItemSpecificationUpdateLineSubElementsMap,
  )
}
