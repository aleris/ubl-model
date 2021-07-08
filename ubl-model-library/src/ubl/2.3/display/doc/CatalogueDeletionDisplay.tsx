import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueDeletion } from  '../../model/doc/CatalogueDeletion'
import { CatalogueDeletionField, CatalogueDeletionFieldMeta, CatalogueDeletionTypeName } from  '../../meta/doc/CatalogueDeletionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CatalogueReferenceDisplay } from '../cac/CatalogueReferenceDisplay'
import { ContractDisplay } from '../cac/ContractDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CatalogueDeletion, void>
  catalogueDeletion: CatalogueDeletion[] | undefined
  renderContext: RenderContext
}

export const CatalogueDeletionSubElementsMap: SubElementsTemplatesMap<CatalogueDeletionField, CatalogueDeletion, void> = new Map([
    [
      CatalogueDeletionField.UBLExtensions,
      { meta: CatalogueDeletionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueDeletionField.UBLExtensions}
          meta={CatalogueDeletionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.UBLVersionID,
      { meta: CatalogueDeletionFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueDeletionField.UBLVersionID}
          meta={CatalogueDeletionFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.CustomizationID,
      { meta: CatalogueDeletionFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueDeletionField.CustomizationID}
          meta={CatalogueDeletionFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ProfileID,
      { meta: CatalogueDeletionFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueDeletionField.ProfileID}
          meta={CatalogueDeletionFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ProfileExecutionID,
      { meta: CatalogueDeletionFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueDeletionField.ProfileExecutionID}
          meta={CatalogueDeletionFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ID,
      { meta: CatalogueDeletionFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueDeletionField.ID}
          meta={CatalogueDeletionFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.UUID,
      { meta: CatalogueDeletionFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueDeletionField.UUID}
          meta={CatalogueDeletionFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.Name,
      { meta: CatalogueDeletionFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueDeletionField.Name}
          meta={CatalogueDeletionFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.IssueDate,
      { meta: CatalogueDeletionFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueDeletionField.IssueDate}
          meta={CatalogueDeletionFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.IssueTime,
      { meta: CatalogueDeletionFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueDeletionField.IssueTime}
          meta={CatalogueDeletionFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.EffectiveDate,
      { meta: CatalogueDeletionFieldMeta.EffectiveDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueDeletionField.EffectiveDate}
          meta={CatalogueDeletionFieldMeta.EffectiveDate}
          fieldConfig={fieldConfig}
          date={value?.EffectiveDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.EffectiveTime,
      { meta: CatalogueDeletionFieldMeta.EffectiveTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueDeletionField.EffectiveTime}
          meta={CatalogueDeletionFieldMeta.EffectiveTime}
          fieldConfig={fieldConfig}
          time={value?.EffectiveTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.Note,
      { meta: CatalogueDeletionFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueDeletionField.Note}
          meta={CatalogueDeletionFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.VersionID,
      { meta: CatalogueDeletionFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueDeletionField.VersionID}
          meta={CatalogueDeletionFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.Description,
      { meta: CatalogueDeletionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueDeletionField.Description}
          meta={CatalogueDeletionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ValidityPeriod,
      { meta: CatalogueDeletionFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CatalogueDeletionField.ValidityPeriod}
          meta={CatalogueDeletionFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.DeletedCatalogueReference,
      { meta: CatalogueDeletionFieldMeta.DeletedCatalogueReference,
        template: ({value, renderContext, fieldConfig}) => <CatalogueReferenceDisplay
          key={CatalogueDeletionField.DeletedCatalogueReference}
          meta={CatalogueDeletionFieldMeta.DeletedCatalogueReference}
          fieldConfig={fieldConfig}
          catalogueReference={value?.DeletedCatalogueReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ReferencedContract,
      { meta: CatalogueDeletionFieldMeta.ReferencedContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={CatalogueDeletionField.ReferencedContract}
          meta={CatalogueDeletionFieldMeta.ReferencedContract}
          fieldConfig={fieldConfig}
          contract={value?.ReferencedContract}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.Signature,
      { meta: CatalogueDeletionFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CatalogueDeletionField.Signature}
          meta={CatalogueDeletionFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ReceiverParty,
      { meta: CatalogueDeletionFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueDeletionField.ReceiverParty}
          meta={CatalogueDeletionFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ProviderParty,
      { meta: CatalogueDeletionFieldMeta.ProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueDeletionField.ProviderParty}
          meta={CatalogueDeletionFieldMeta.ProviderParty}
          fieldConfig={fieldConfig}
          party={value?.ProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.SellerSupplierParty,
      { meta: CatalogueDeletionFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CatalogueDeletionField.SellerSupplierParty}
          meta={CatalogueDeletionFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueDeletionField.ContractorCustomerParty,
      { meta: CatalogueDeletionFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CatalogueDeletionField.ContractorCustomerParty}
          meta={CatalogueDeletionFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueDeletionDisplay<TFieldMeta>({ meta, fieldConfig, catalogueDeletion, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueDeletionTypeName,
    meta,
    fieldConfig,
    catalogueDeletion,
    renderContext,
    CatalogueDeletionSubElementsMap,
  )
}
