import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SupplierConsumption } from  '../../model/cac/SupplierConsumption'
import { SupplierConsumptionField, SupplierConsumptionFieldMeta, SupplierConsumptionTypeName } from  '../../meta/cac/SupplierConsumptionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ConsumptionDisplay } from './ConsumptionDisplay'
import { ConsumptionLineDisplay } from './ConsumptionLineDisplay'
import { ContractDisplay } from './ContractDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SupplierConsumption, void>
  supplierConsumption: SupplierConsumption[] | undefined
  renderContext: RenderContext
}

export const SupplierConsumptionSubElementsMap: SubElementsTemplatesMap<SupplierConsumptionField, SupplierConsumption, void> = new Map([
    [
      SupplierConsumptionField.UBLExtensions,
      { meta: SupplierConsumptionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SupplierConsumptionField.UBLExtensions}
          meta={SupplierConsumptionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierConsumptionField.Description,
      { meta: SupplierConsumptionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SupplierConsumptionField.Description}
          meta={SupplierConsumptionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierConsumptionField.UtilitySupplierParty,
      { meta: SupplierConsumptionFieldMeta.UtilitySupplierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SupplierConsumptionField.UtilitySupplierParty}
          meta={SupplierConsumptionFieldMeta.UtilitySupplierParty}
          fieldConfig={fieldConfig}
          party={value?.UtilitySupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierConsumptionField.UtilityCustomerParty,
      { meta: SupplierConsumptionFieldMeta.UtilityCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SupplierConsumptionField.UtilityCustomerParty}
          meta={SupplierConsumptionFieldMeta.UtilityCustomerParty}
          fieldConfig={fieldConfig}
          party={value?.UtilityCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierConsumptionField.Consumption,
      { meta: SupplierConsumptionFieldMeta.Consumption,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionDisplay
          key={SupplierConsumptionField.Consumption}
          meta={SupplierConsumptionFieldMeta.Consumption}
          fieldConfig={fieldConfig}
          consumption={value?.Consumption}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierConsumptionField.Contract,
      { meta: SupplierConsumptionFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={SupplierConsumptionField.Contract}
          meta={SupplierConsumptionFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierConsumptionField.ConsumptionLine,
      { meta: SupplierConsumptionFieldMeta.ConsumptionLine,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionLineDisplay
          key={SupplierConsumptionField.ConsumptionLine}
          meta={SupplierConsumptionFieldMeta.ConsumptionLine}
          fieldConfig={fieldConfig}
          consumptionLine={value?.ConsumptionLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function SupplierConsumptionDisplay<TFieldMeta>({ meta, fieldConfig, supplierConsumption, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SupplierConsumptionTypeName,
    meta,
    fieldConfig,
    supplierConsumption,
    renderContext,
    SupplierConsumptionSubElementsMap,
  )
}
