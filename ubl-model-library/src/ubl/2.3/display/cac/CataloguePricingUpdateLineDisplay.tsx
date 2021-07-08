import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CataloguePricingUpdateLine } from  '../../model/cac/CataloguePricingUpdateLine'
import { CataloguePricingUpdateLineField, CataloguePricingUpdateLineFieldMeta, CataloguePricingUpdateLineTypeName } from  '../../meta/cac/CataloguePricingUpdateLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CustomerPartyDisplay } from './CustomerPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemLocationQuantityDisplay } from './ItemLocationQuantityDisplay'
import { SupplierPartyDisplay } from './SupplierPartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CataloguePricingUpdateLine, void>
  cataloguePricingUpdateLine: CataloguePricingUpdateLine[] | undefined
  renderContext: RenderContext
}

export const CataloguePricingUpdateLineSubElementsMap: SubElementsTemplatesMap<CataloguePricingUpdateLineField, CataloguePricingUpdateLine, void> = new Map([
    [
      CataloguePricingUpdateLineField.UBLExtensions,
      { meta: CataloguePricingUpdateLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CataloguePricingUpdateLineField.UBLExtensions}
          meta={CataloguePricingUpdateLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateLineField.ID,
      { meta: CataloguePricingUpdateLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateLineField.ID}
          meta={CataloguePricingUpdateLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateLineField.ContractorCustomerParty,
      { meta: CataloguePricingUpdateLineFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CataloguePricingUpdateLineField.ContractorCustomerParty}
          meta={CataloguePricingUpdateLineFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateLineField.SellerSupplierParty,
      { meta: CataloguePricingUpdateLineFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CataloguePricingUpdateLineField.SellerSupplierParty}
          meta={CataloguePricingUpdateLineFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateLineField.RequiredItemLocationQuantity,
      { meta: CataloguePricingUpdateLineFieldMeta.RequiredItemLocationQuantity,
        template: ({value, renderContext, fieldConfig}) => <ItemLocationQuantityDisplay
          key={CataloguePricingUpdateLineField.RequiredItemLocationQuantity}
          meta={CataloguePricingUpdateLineFieldMeta.RequiredItemLocationQuantity}
          fieldConfig={fieldConfig}
          itemLocationQuantity={value?.RequiredItemLocationQuantity}
          renderContext={renderContext}
        />}
    ]
]) 

export function CataloguePricingUpdateLineDisplay<TFieldMeta>({ meta, fieldConfig, cataloguePricingUpdateLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CataloguePricingUpdateLineTypeName,
    meta,
    fieldConfig,
    cataloguePricingUpdateLine,
    renderContext,
    CataloguePricingUpdateLineSubElementsMap,
  )
}
