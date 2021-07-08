import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CustomsDeclaration } from  '../../model/cac/CustomsDeclaration'
import { CustomsDeclarationField, CustomsDeclarationFieldMeta, CustomsDeclarationTypeName } from  '../../meta/cac/CustomsDeclarationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CustomsDeclaration, void>
  customsDeclaration: CustomsDeclaration[] | undefined
  renderContext: RenderContext
}

export const CustomsDeclarationSubElementsMap: SubElementsTemplatesMap<CustomsDeclarationField, CustomsDeclaration, void> = new Map([
    [
      CustomsDeclarationField.UBLExtensions,
      { meta: CustomsDeclarationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CustomsDeclarationField.UBLExtensions}
          meta={CustomsDeclarationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.ID,
      { meta: CustomsDeclarationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CustomsDeclarationField.ID}
          meta={CustomsDeclarationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.ValidityPeriod,
      { meta: CustomsDeclarationFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CustomsDeclarationField.ValidityPeriod}
          meta={CustomsDeclarationFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.ApplicableTerritoryAddress,
      { meta: CustomsDeclarationFieldMeta.ApplicableTerritoryAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={CustomsDeclarationField.ApplicableTerritoryAddress}
          meta={CustomsDeclarationFieldMeta.ApplicableTerritoryAddress}
          fieldConfig={fieldConfig}
          address={value?.ApplicableTerritoryAddress}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.Shipment,
      { meta: CustomsDeclarationFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={CustomsDeclarationField.Shipment}
          meta={CustomsDeclarationFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.CustomsExitOfficeLocation,
      { meta: CustomsDeclarationFieldMeta.CustomsExitOfficeLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={CustomsDeclarationField.CustomsExitOfficeLocation}
          meta={CustomsDeclarationFieldMeta.CustomsExitOfficeLocation}
          fieldConfig={fieldConfig}
          location={value?.CustomsExitOfficeLocation}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.IssuerParty,
      { meta: CustomsDeclarationFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CustomsDeclarationField.IssuerParty}
          meta={CustomsDeclarationFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.ConsignorParty,
      { meta: CustomsDeclarationFieldMeta.ConsignorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CustomsDeclarationField.ConsignorParty}
          meta={CustomsDeclarationFieldMeta.ConsignorParty}
          fieldConfig={fieldConfig}
          party={value?.ConsignorParty}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.ConsigneeParty,
      { meta: CustomsDeclarationFieldMeta.ConsigneeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CustomsDeclarationField.ConsigneeParty}
          meta={CustomsDeclarationFieldMeta.ConsigneeParty}
          fieldConfig={fieldConfig}
          party={value?.ConsigneeParty}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.FreightForwarderParty,
      { meta: CustomsDeclarationFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CustomsDeclarationField.FreightForwarderParty}
          meta={CustomsDeclarationFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.CustomsParty,
      { meta: CustomsDeclarationFieldMeta.CustomsParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CustomsDeclarationField.CustomsParty}
          meta={CustomsDeclarationFieldMeta.CustomsParty}
          fieldConfig={fieldConfig}
          party={value?.CustomsParty}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.PreviousCustomsDeclaration,
      { meta: CustomsDeclarationFieldMeta.PreviousCustomsDeclaration,
        template: ({value, renderContext, fieldConfig}) => <CustomsDeclarationDisplay
          key={CustomsDeclarationField.PreviousCustomsDeclaration}
          meta={CustomsDeclarationFieldMeta.PreviousCustomsDeclaration}
          fieldConfig={fieldConfig}
          customsDeclaration={value?.PreviousCustomsDeclaration}
          renderContext={renderContext}
        />}
    ],

    [
      CustomsDeclarationField.AdditionalDocumentReference,
      { meta: CustomsDeclarationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CustomsDeclarationField.AdditionalDocumentReference}
          meta={CustomsDeclarationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function CustomsDeclarationDisplay<TFieldMeta>({ meta, fieldConfig, customsDeclaration, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CustomsDeclarationTypeName,
    meta,
    fieldConfig,
    customsDeclaration,
    renderContext,
    CustomsDeclarationSubElementsMap,
  )
}
