import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Catalogue } from  '../../model/doc/Catalogue'
import { CatalogueField, CatalogueFieldMeta, CatalogueTypeName } from  '../../meta/doc/CatalogueMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CatalogueLineDisplay } from '../cac/CatalogueLineDisplay'
import { CatalogueReferenceDisplay } from '../cac/CatalogueReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractDisplay } from '../cac/ContractDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
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
  fieldConfig?: FieldConfig<Catalogue, void>
  catalogue: Catalogue[] | undefined
  renderContext: RenderContext
}

export const CatalogueSubElementsMap: SubElementsTemplatesMap<CatalogueField, Catalogue, void> = new Map([
    [
      CatalogueField.UBLExtensions,
      { meta: CatalogueFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueField.UBLExtensions}
          meta={CatalogueFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.UBLVersionID,
      { meta: CatalogueFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.UBLVersionID}
          meta={CatalogueFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.CustomizationID,
      { meta: CatalogueFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.CustomizationID}
          meta={CatalogueFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ProfileID,
      { meta: CatalogueFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.ProfileID}
          meta={CatalogueFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ProfileExecutionID,
      { meta: CatalogueFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.ProfileExecutionID}
          meta={CatalogueFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ID,
      { meta: CatalogueFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.ID}
          meta={CatalogueFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.UUID,
      { meta: CatalogueFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.UUID}
          meta={CatalogueFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ActionCode,
      { meta: CatalogueFieldMeta.ActionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CatalogueField.ActionCode}
          meta={CatalogueFieldMeta.ActionCode}
          fieldConfig={fieldConfig}
          code={value?.ActionCode}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.Name,
      { meta: CatalogueFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueField.Name}
          meta={CatalogueFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.IssueDate,
      { meta: CatalogueFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueField.IssueDate}
          meta={CatalogueFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.IssueTime,
      { meta: CatalogueFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueField.IssueTime}
          meta={CatalogueFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.RevisionDate,
      { meta: CatalogueFieldMeta.RevisionDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueField.RevisionDate}
          meta={CatalogueFieldMeta.RevisionDate}
          fieldConfig={fieldConfig}
          date={value?.RevisionDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.RevisionTime,
      { meta: CatalogueFieldMeta.RevisionTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueField.RevisionTime}
          meta={CatalogueFieldMeta.RevisionTime}
          fieldConfig={fieldConfig}
          time={value?.RevisionTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.Note,
      { meta: CatalogueFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueField.Note}
          meta={CatalogueFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.Description,
      { meta: CatalogueFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueField.Description}
          meta={CatalogueFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.VersionID,
      { meta: CatalogueFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.VersionID}
          meta={CatalogueFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.PreviousVersionID,
      { meta: CatalogueFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueField.PreviousVersionID}
          meta={CatalogueFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.LineCountNumeric,
      { meta: CatalogueFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={CatalogueField.LineCountNumeric}
          meta={CatalogueFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ValidityPeriod,
      { meta: CatalogueFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CatalogueField.ValidityPeriod}
          meta={CatalogueFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ReferencedContract,
      { meta: CatalogueFieldMeta.ReferencedContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={CatalogueField.ReferencedContract}
          meta={CatalogueFieldMeta.ReferencedContract}
          fieldConfig={fieldConfig}
          contract={value?.ReferencedContract}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.SourceCatalogueReference,
      { meta: CatalogueFieldMeta.SourceCatalogueReference,
        template: ({value, renderContext, fieldConfig}) => <CatalogueReferenceDisplay
          key={CatalogueField.SourceCatalogueReference}
          meta={CatalogueFieldMeta.SourceCatalogueReference}
          fieldConfig={fieldConfig}
          catalogueReference={value?.SourceCatalogueReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.DocumentReference,
      { meta: CatalogueFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CatalogueField.DocumentReference}
          meta={CatalogueFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.Signature,
      { meta: CatalogueFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CatalogueField.Signature}
          meta={CatalogueFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ProviderParty,
      { meta: CatalogueFieldMeta.ProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueField.ProviderParty}
          meta={CatalogueFieldMeta.ProviderParty}
          fieldConfig={fieldConfig}
          party={value?.ProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ReceiverParty,
      { meta: CatalogueFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueField.ReceiverParty}
          meta={CatalogueFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.SellerSupplierParty,
      { meta: CatalogueFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CatalogueField.SellerSupplierParty}
          meta={CatalogueFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.ContractorCustomerParty,
      { meta: CatalogueFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CatalogueField.ContractorCustomerParty}
          meta={CatalogueFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.TradingTerms,
      { meta: CatalogueFieldMeta.TradingTerms,
        template: ({value, renderContext, fieldConfig}) => <TradingTermsDisplay
          key={CatalogueField.TradingTerms}
          meta={CatalogueFieldMeta.TradingTerms}
          fieldConfig={fieldConfig}
          tradingTerms={value?.TradingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueField.CatalogueLine,
      { meta: CatalogueFieldMeta.CatalogueLine,
        template: ({value, renderContext, fieldConfig}) => <CatalogueLineDisplay
          key={CatalogueField.CatalogueLine}
          meta={CatalogueFieldMeta.CatalogueLine}
          fieldConfig={fieldConfig}
          catalogueLine={value?.CatalogueLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueDisplay<TFieldMeta>({ meta, fieldConfig, catalogue, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueTypeName,
    meta,
    fieldConfig,
    catalogue,
    renderContext,
    CatalogueSubElementsMap,
  )
}
