import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueItemSpecificationUpdate } from  '../../model/doc/CatalogueItemSpecificationUpdate'
import { CatalogueItemSpecificationUpdateField, CatalogueItemSpecificationUpdateFieldMeta, CatalogueItemSpecificationUpdateTypeName } from  '../../meta/doc/CatalogueItemSpecificationUpdateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CatalogueItemSpecificationUpdateLineDisplay } from '../cac/CatalogueItemSpecificationUpdateLineDisplay'
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
  fieldConfig?: FieldConfig<CatalogueItemSpecificationUpdate, void>
  catalogueItemSpecificationUpdate: CatalogueItemSpecificationUpdate[] | undefined
  renderContext: RenderContext
}

export const CatalogueItemSpecificationUpdateSubElementsMap: SubElementsTemplatesMap<CatalogueItemSpecificationUpdateField, CatalogueItemSpecificationUpdate, void> = new Map([
    [
      CatalogueItemSpecificationUpdateField.UBLExtensions,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueItemSpecificationUpdateField.UBLExtensions}
          meta={CatalogueItemSpecificationUpdateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.UBLVersionID,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateField.UBLVersionID}
          meta={CatalogueItemSpecificationUpdateFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.CustomizationID,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateField.CustomizationID}
          meta={CatalogueItemSpecificationUpdateFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ProfileID,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateField.ProfileID}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ProfileExecutionID,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateField.ProfileExecutionID}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ID,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateField.ID}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.UUID,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateField.UUID}
          meta={CatalogueItemSpecificationUpdateFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.Name,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueItemSpecificationUpdateField.Name}
          meta={CatalogueItemSpecificationUpdateFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.IssueDate,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueItemSpecificationUpdateField.IssueDate}
          meta={CatalogueItemSpecificationUpdateFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.IssueTime,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueItemSpecificationUpdateField.IssueTime}
          meta={CatalogueItemSpecificationUpdateFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.RevisionDate,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.RevisionDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueItemSpecificationUpdateField.RevisionDate}
          meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionDate}
          fieldConfig={fieldConfig}
          date={value?.RevisionDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.RevisionTime,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.RevisionTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueItemSpecificationUpdateField.RevisionTime}
          meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionTime}
          fieldConfig={fieldConfig}
          time={value?.RevisionTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.Note,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueItemSpecificationUpdateField.Note}
          meta={CatalogueItemSpecificationUpdateFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.Description,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueItemSpecificationUpdateField.Description}
          meta={CatalogueItemSpecificationUpdateFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.VersionID,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueItemSpecificationUpdateField.VersionID}
          meta={CatalogueItemSpecificationUpdateFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.LineCountNumeric,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={CatalogueItemSpecificationUpdateField.LineCountNumeric}
          meta={CatalogueItemSpecificationUpdateFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ValidityPeriod,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CatalogueItemSpecificationUpdateField.ValidityPeriod}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.RelatedCatalogueReference,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.RelatedCatalogueReference,
        template: ({value, renderContext, fieldConfig}) => <CatalogueReferenceDisplay
          key={CatalogueItemSpecificationUpdateField.RelatedCatalogueReference}
          meta={CatalogueItemSpecificationUpdateFieldMeta.RelatedCatalogueReference}
          fieldConfig={fieldConfig}
          catalogueReference={value?.RelatedCatalogueReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ReferencedContract,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={CatalogueItemSpecificationUpdateField.ReferencedContract}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract}
          fieldConfig={fieldConfig}
          contract={value?.ReferencedContract}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.Signature,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CatalogueItemSpecificationUpdateField.Signature}
          meta={CatalogueItemSpecificationUpdateFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ProviderParty,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueItemSpecificationUpdateField.ProviderParty}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProviderParty}
          fieldConfig={fieldConfig}
          party={value?.ProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ReceiverParty,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueItemSpecificationUpdateField.ReceiverParty}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.SellerSupplierParty,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CatalogueItemSpecificationUpdateField.SellerSupplierParty}
          meta={CatalogueItemSpecificationUpdateFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.ContractorCustomerParty,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CatalogueItemSpecificationUpdateField.ContractorCustomerParty}
          meta={CatalogueItemSpecificationUpdateFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.TradingTerms,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.TradingTerms,
        template: ({value, renderContext, fieldConfig}) => <TradingTermsDisplay
          key={CatalogueItemSpecificationUpdateField.TradingTerms}
          meta={CatalogueItemSpecificationUpdateFieldMeta.TradingTerms}
          fieldConfig={fieldConfig}
          tradingTerms={value?.TradingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.DefaultLanguage,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.DefaultLanguage,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={CatalogueItemSpecificationUpdateField.DefaultLanguage}
          meta={CatalogueItemSpecificationUpdateFieldMeta.DefaultLanguage}
          fieldConfig={fieldConfig}
          language={value?.DefaultLanguage}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueItemSpecificationUpdateField.CatalogueItemSpecificationUpdateLine,
      { meta: CatalogueItemSpecificationUpdateFieldMeta.CatalogueItemSpecificationUpdateLine,
        template: ({value, renderContext, fieldConfig}) => <CatalogueItemSpecificationUpdateLineDisplay
          key={CatalogueItemSpecificationUpdateField.CatalogueItemSpecificationUpdateLine}
          meta={CatalogueItemSpecificationUpdateFieldMeta.CatalogueItemSpecificationUpdateLine}
          fieldConfig={fieldConfig}
          catalogueItemSpecificationUpdateLine={value?.CatalogueItemSpecificationUpdateLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueItemSpecificationUpdateDisplay<TFieldMeta>({ meta, fieldConfig, catalogueItemSpecificationUpdate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueItemSpecificationUpdateTypeName,
    meta,
    fieldConfig,
    catalogueItemSpecificationUpdate,
    renderContext,
    CatalogueItemSpecificationUpdateSubElementsMap,
  )
}
