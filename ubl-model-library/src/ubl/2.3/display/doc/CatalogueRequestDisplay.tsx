import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueRequest } from  '../../model/doc/CatalogueRequest'
import { CatalogueRequestField, CatalogueRequestFieldMeta, CatalogueRequestTypeName } from  '../../meta/doc/CatalogueRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from '../cac/AddressDisplay'
import { CatalogueReferenceDisplay } from '../cac/CatalogueReferenceDisplay'
import { CatalogueRequestLineDisplay } from '../cac/CatalogueRequestLineDisplay'
import { ClassificationSchemeDisplay } from '../cac/ClassificationSchemeDisplay'
import { ContractDisplay } from '../cac/ContractDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LanguageDisplay } from '../cac/LanguageDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TradingTermsDisplay } from '../cac/TradingTermsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CatalogueRequest, void>
  catalogueRequest: CatalogueRequest[] | undefined
  renderContext: RenderContext
}

export const CatalogueRequestSubElementsMap: SubElementsTemplatesMap<CatalogueRequestField, CatalogueRequest, void> = new Map([
    [
      CatalogueRequestField.UBLExtensions,
      { meta: CatalogueRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueRequestField.UBLExtensions}
          meta={CatalogueRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.UBLVersionID,
      { meta: CatalogueRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueRequestField.UBLVersionID}
          meta={CatalogueRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.CustomizationID,
      { meta: CatalogueRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueRequestField.CustomizationID}
          meta={CatalogueRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ProfileID,
      { meta: CatalogueRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueRequestField.ProfileID}
          meta={CatalogueRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ProfileExecutionID,
      { meta: CatalogueRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueRequestField.ProfileExecutionID}
          meta={CatalogueRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ID,
      { meta: CatalogueRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueRequestField.ID}
          meta={CatalogueRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.UUID,
      { meta: CatalogueRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueRequestField.UUID}
          meta={CatalogueRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.Name,
      { meta: CatalogueRequestFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueRequestField.Name}
          meta={CatalogueRequestFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.IssueDate,
      { meta: CatalogueRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueRequestField.IssueDate}
          meta={CatalogueRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.IssueTime,
      { meta: CatalogueRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueRequestField.IssueTime}
          meta={CatalogueRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.Note,
      { meta: CatalogueRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueRequestField.Note}
          meta={CatalogueRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.Description,
      { meta: CatalogueRequestFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueRequestField.Description}
          meta={CatalogueRequestFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.PricingUpdateRequestIndicator,
      { meta: CatalogueRequestFieldMeta.PricingUpdateRequestIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={CatalogueRequestField.PricingUpdateRequestIndicator}
          meta={CatalogueRequestFieldMeta.PricingUpdateRequestIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PricingUpdateRequestIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ItemUpdateRequestIndicator,
      { meta: CatalogueRequestFieldMeta.ItemUpdateRequestIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={CatalogueRequestField.ItemUpdateRequestIndicator}
          meta={CatalogueRequestFieldMeta.ItemUpdateRequestIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ItemUpdateRequestIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.LineCountNumeric,
      { meta: CatalogueRequestFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={CatalogueRequestField.LineCountNumeric}
          meta={CatalogueRequestFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ValidityPeriod,
      { meta: CatalogueRequestFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CatalogueRequestField.ValidityPeriod}
          meta={CatalogueRequestFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.Signature,
      { meta: CatalogueRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CatalogueRequestField.Signature}
          meta={CatalogueRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ReceiverParty,
      { meta: CatalogueRequestFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueRequestField.ReceiverParty}
          meta={CatalogueRequestFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ProviderParty,
      { meta: CatalogueRequestFieldMeta.ProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueRequestField.ProviderParty}
          meta={CatalogueRequestFieldMeta.ProviderParty}
          fieldConfig={fieldConfig}
          party={value?.ProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.SellerSupplierParty,
      { meta: CatalogueRequestFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CatalogueRequestField.SellerSupplierParty}
          meta={CatalogueRequestFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ContractorCustomerParty,
      { meta: CatalogueRequestFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CatalogueRequestField.ContractorCustomerParty}
          meta={CatalogueRequestFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.RequestedCatalogueReference,
      { meta: CatalogueRequestFieldMeta.RequestedCatalogueReference,
        template: ({value, renderContext, fieldConfig}) => <CatalogueReferenceDisplay
          key={CatalogueRequestField.RequestedCatalogueReference}
          meta={CatalogueRequestFieldMeta.RequestedCatalogueReference}
          fieldConfig={fieldConfig}
          catalogueReference={value?.RequestedCatalogueReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ReferencedContract,
      { meta: CatalogueRequestFieldMeta.ReferencedContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={CatalogueRequestField.ReferencedContract}
          meta={CatalogueRequestFieldMeta.ReferencedContract}
          fieldConfig={fieldConfig}
          contract={value?.ReferencedContract}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.TradingTerms,
      { meta: CatalogueRequestFieldMeta.TradingTerms,
        template: ({value, renderContext, fieldConfig}) => <TradingTermsDisplay
          key={CatalogueRequestField.TradingTerms}
          meta={CatalogueRequestFieldMeta.TradingTerms}
          fieldConfig={fieldConfig}
          tradingTerms={value?.TradingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.DocumentReference,
      { meta: CatalogueRequestFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CatalogueRequestField.DocumentReference}
          meta={CatalogueRequestFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.ApplicableTerritoryAddress,
      { meta: CatalogueRequestFieldMeta.ApplicableTerritoryAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={CatalogueRequestField.ApplicableTerritoryAddress}
          meta={CatalogueRequestFieldMeta.ApplicableTerritoryAddress}
          fieldConfig={fieldConfig}
          address={value?.ApplicableTerritoryAddress}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.RequestedLanguage,
      { meta: CatalogueRequestFieldMeta.RequestedLanguage,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={CatalogueRequestField.RequestedLanguage}
          meta={CatalogueRequestFieldMeta.RequestedLanguage}
          fieldConfig={fieldConfig}
          language={value?.RequestedLanguage}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.RequestedClassificationScheme,
      { meta: CatalogueRequestFieldMeta.RequestedClassificationScheme,
        template: ({value, renderContext, fieldConfig}) => <ClassificationSchemeDisplay
          key={CatalogueRequestField.RequestedClassificationScheme}
          meta={CatalogueRequestFieldMeta.RequestedClassificationScheme}
          fieldConfig={fieldConfig}
          classificationScheme={value?.RequestedClassificationScheme}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestField.CatalogueRequestLine,
      { meta: CatalogueRequestFieldMeta.CatalogueRequestLine,
        template: ({value, renderContext, fieldConfig}) => <CatalogueRequestLineDisplay
          key={CatalogueRequestField.CatalogueRequestLine}
          meta={CatalogueRequestFieldMeta.CatalogueRequestLine}
          fieldConfig={fieldConfig}
          catalogueRequestLine={value?.CatalogueRequestLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueRequestDisplay<TFieldMeta>({ meta, fieldConfig, catalogueRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueRequestTypeName,
    meta,
    fieldConfig,
    catalogueRequest,
    renderContext,
    CatalogueRequestSubElementsMap,
  )
}
