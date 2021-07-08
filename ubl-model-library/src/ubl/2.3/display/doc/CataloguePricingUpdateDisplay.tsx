import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CataloguePricingUpdate } from  '../../model/doc/CataloguePricingUpdate'
import { CataloguePricingUpdateField, CataloguePricingUpdateFieldMeta, CataloguePricingUpdateTypeName } from  '../../meta/doc/CataloguePricingUpdateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CataloguePricingUpdateLineDisplay } from '../cac/CataloguePricingUpdateLineDisplay'
import { CatalogueReferenceDisplay } from '../cac/CatalogueReferenceDisplay'
import { ContractDisplay } from '../cac/ContractDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
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
  fieldConfig?: FieldConfig<CataloguePricingUpdate, void>
  cataloguePricingUpdate: CataloguePricingUpdate[] | undefined
  renderContext: RenderContext
}

export const CataloguePricingUpdateSubElementsMap: SubElementsTemplatesMap<CataloguePricingUpdateField, CataloguePricingUpdate, void> = new Map([
    [
      CataloguePricingUpdateField.UBLExtensions,
      { meta: CataloguePricingUpdateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CataloguePricingUpdateField.UBLExtensions}
          meta={CataloguePricingUpdateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.UBLVersionID,
      { meta: CataloguePricingUpdateFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateField.UBLVersionID}
          meta={CataloguePricingUpdateFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.CustomizationID,
      { meta: CataloguePricingUpdateFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateField.CustomizationID}
          meta={CataloguePricingUpdateFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ProfileID,
      { meta: CataloguePricingUpdateFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateField.ProfileID}
          meta={CataloguePricingUpdateFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ProfileExecutionID,
      { meta: CataloguePricingUpdateFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateField.ProfileExecutionID}
          meta={CataloguePricingUpdateFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ID,
      { meta: CataloguePricingUpdateFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateField.ID}
          meta={CataloguePricingUpdateFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.UUID,
      { meta: CataloguePricingUpdateFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateField.UUID}
          meta={CataloguePricingUpdateFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.Name,
      { meta: CataloguePricingUpdateFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CataloguePricingUpdateField.Name}
          meta={CataloguePricingUpdateFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.IssueDate,
      { meta: CataloguePricingUpdateFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CataloguePricingUpdateField.IssueDate}
          meta={CataloguePricingUpdateFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.IssueTime,
      { meta: CataloguePricingUpdateFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CataloguePricingUpdateField.IssueTime}
          meta={CataloguePricingUpdateFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.RevisionDate,
      { meta: CataloguePricingUpdateFieldMeta.RevisionDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CataloguePricingUpdateField.RevisionDate}
          meta={CataloguePricingUpdateFieldMeta.RevisionDate}
          fieldConfig={fieldConfig}
          date={value?.RevisionDate}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.RevisionTime,
      { meta: CataloguePricingUpdateFieldMeta.RevisionTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CataloguePricingUpdateField.RevisionTime}
          meta={CataloguePricingUpdateFieldMeta.RevisionTime}
          fieldConfig={fieldConfig}
          time={value?.RevisionTime}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.Note,
      { meta: CataloguePricingUpdateFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CataloguePricingUpdateField.Note}
          meta={CataloguePricingUpdateFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.Description,
      { meta: CataloguePricingUpdateFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CataloguePricingUpdateField.Description}
          meta={CataloguePricingUpdateFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.VersionID,
      { meta: CataloguePricingUpdateFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CataloguePricingUpdateField.VersionID}
          meta={CataloguePricingUpdateFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.LineCountNumeric,
      { meta: CataloguePricingUpdateFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={CataloguePricingUpdateField.LineCountNumeric}
          meta={CataloguePricingUpdateFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ValidityPeriod,
      { meta: CataloguePricingUpdateFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CataloguePricingUpdateField.ValidityPeriod}
          meta={CataloguePricingUpdateFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.RelatedCatalogueReference,
      { meta: CataloguePricingUpdateFieldMeta.RelatedCatalogueReference,
        template: ({value, renderContext, fieldConfig}) => <CatalogueReferenceDisplay
          key={CataloguePricingUpdateField.RelatedCatalogueReference}
          meta={CataloguePricingUpdateFieldMeta.RelatedCatalogueReference}
          fieldConfig={fieldConfig}
          catalogueReference={value?.RelatedCatalogueReference}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ReferencedContract,
      { meta: CataloguePricingUpdateFieldMeta.ReferencedContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={CataloguePricingUpdateField.ReferencedContract}
          meta={CataloguePricingUpdateFieldMeta.ReferencedContract}
          fieldConfig={fieldConfig}
          contract={value?.ReferencedContract}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.Signature,
      { meta: CataloguePricingUpdateFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CataloguePricingUpdateField.Signature}
          meta={CataloguePricingUpdateFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ProviderParty,
      { meta: CataloguePricingUpdateFieldMeta.ProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CataloguePricingUpdateField.ProviderParty}
          meta={CataloguePricingUpdateFieldMeta.ProviderParty}
          fieldConfig={fieldConfig}
          party={value?.ProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ReceiverParty,
      { meta: CataloguePricingUpdateFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CataloguePricingUpdateField.ReceiverParty}
          meta={CataloguePricingUpdateFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.SellerSupplierParty,
      { meta: CataloguePricingUpdateFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CataloguePricingUpdateField.SellerSupplierParty}
          meta={CataloguePricingUpdateFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.ContractorCustomerParty,
      { meta: CataloguePricingUpdateFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CataloguePricingUpdateField.ContractorCustomerParty}
          meta={CataloguePricingUpdateFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.TradingTerms,
      { meta: CataloguePricingUpdateFieldMeta.TradingTerms,
        template: ({value, renderContext, fieldConfig}) => <TradingTermsDisplay
          key={CataloguePricingUpdateField.TradingTerms}
          meta={CataloguePricingUpdateFieldMeta.TradingTerms}
          fieldConfig={fieldConfig}
          tradingTerms={value?.TradingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.DefaultLanguage,
      { meta: CataloguePricingUpdateFieldMeta.DefaultLanguage,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={CataloguePricingUpdateField.DefaultLanguage}
          meta={CataloguePricingUpdateFieldMeta.DefaultLanguage}
          fieldConfig={fieldConfig}
          language={value?.DefaultLanguage}
          renderContext={renderContext}
        />}
    ],

    [
      CataloguePricingUpdateField.CataloguePricingUpdateLine,
      { meta: CataloguePricingUpdateFieldMeta.CataloguePricingUpdateLine,
        template: ({value, renderContext, fieldConfig}) => <CataloguePricingUpdateLineDisplay
          key={CataloguePricingUpdateField.CataloguePricingUpdateLine}
          meta={CataloguePricingUpdateFieldMeta.CataloguePricingUpdateLine}
          fieldConfig={fieldConfig}
          cataloguePricingUpdateLine={value?.CataloguePricingUpdateLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function CataloguePricingUpdateDisplay<TFieldMeta>({ meta, fieldConfig, cataloguePricingUpdate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CataloguePricingUpdateTypeName,
    meta,
    fieldConfig,
    cataloguePricingUpdate,
    renderContext,
    CataloguePricingUpdateSubElementsMap,
  )
}
