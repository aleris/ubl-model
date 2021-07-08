import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsCertificate } from  '../../model/doc/GoodsCertificate'
import { GoodsCertificateField, GoodsCertificateFieldMeta, GoodsCertificateTypeName } from  '../../meta/doc/GoodsCertificateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from '../cac/AddressDisplay'
import { AttestationDisplay } from '../cac/AttestationDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { GoodsProcessingDisplay } from '../cac/GoodsProcessingDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<GoodsCertificate, void>
  goodsCertificate: GoodsCertificate[] | undefined
  renderContext: RenderContext
}

export const GoodsCertificateSubElementsMap: SubElementsTemplatesMap<GoodsCertificateField, GoodsCertificate, void> = new Map([
    [
      GoodsCertificateField.UBLExtensions,
      { meta: GoodsCertificateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GoodsCertificateField.UBLExtensions}
          meta={GoodsCertificateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.UBLVersionID,
      { meta: GoodsCertificateFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsCertificateField.UBLVersionID}
          meta={GoodsCertificateFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.CustomizationID,
      { meta: GoodsCertificateFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsCertificateField.CustomizationID}
          meta={GoodsCertificateFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ProfileID,
      { meta: GoodsCertificateFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsCertificateField.ProfileID}
          meta={GoodsCertificateFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ProfileExecutionID,
      { meta: GoodsCertificateFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsCertificateField.ProfileExecutionID}
          meta={GoodsCertificateFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ID,
      { meta: GoodsCertificateFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsCertificateField.ID}
          meta={GoodsCertificateFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.UUID,
      { meta: GoodsCertificateFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsCertificateField.UUID}
          meta={GoodsCertificateFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.IssueDate,
      { meta: GoodsCertificateFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={GoodsCertificateField.IssueDate}
          meta={GoodsCertificateFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.IssueTime,
      { meta: GoodsCertificateFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={GoodsCertificateField.IssueTime}
          meta={GoodsCertificateFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.TypeCode,
      { meta: GoodsCertificateFieldMeta.TypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={GoodsCertificateField.TypeCode}
          meta={GoodsCertificateFieldMeta.TypeCode}
          fieldConfig={fieldConfig}
          code={value?.TypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.Description,
      { meta: GoodsCertificateFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsCertificateField.Description}
          meta={GoodsCertificateFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.Note,
      { meta: GoodsCertificateFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsCertificateField.Note}
          meta={GoodsCertificateFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.VersionID,
      { meta: GoodsCertificateFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsCertificateField.VersionID}
          meta={GoodsCertificateFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ValidityPeriod,
      { meta: GoodsCertificateFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={GoodsCertificateField.ValidityPeriod}
          meta={GoodsCertificateFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ApplicableTerritoryAddress,
      { meta: GoodsCertificateFieldMeta.ApplicableTerritoryAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={GoodsCertificateField.ApplicableTerritoryAddress}
          meta={GoodsCertificateFieldMeta.ApplicableTerritoryAddress}
          fieldConfig={fieldConfig}
          address={value?.ApplicableTerritoryAddress}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ExporterParty,
      { meta: GoodsCertificateFieldMeta.ExporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.ExporterParty}
          meta={GoodsCertificateFieldMeta.ExporterParty}
          fieldConfig={fieldConfig}
          party={value?.ExporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ImporterParty,
      { meta: GoodsCertificateFieldMeta.ImporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.ImporterParty}
          meta={GoodsCertificateFieldMeta.ImporterParty}
          fieldConfig={fieldConfig}
          party={value?.ImporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.WarehouseParty,
      { meta: GoodsCertificateFieldMeta.WarehouseParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.WarehouseParty}
          meta={GoodsCertificateFieldMeta.WarehouseParty}
          fieldConfig={fieldConfig}
          party={value?.WarehouseParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ConsignorParty,
      { meta: GoodsCertificateFieldMeta.ConsignorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.ConsignorParty}
          meta={GoodsCertificateFieldMeta.ConsignorParty}
          fieldConfig={fieldConfig}
          party={value?.ConsignorParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.ConsigneeParty,
      { meta: GoodsCertificateFieldMeta.ConsigneeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.ConsigneeParty}
          meta={GoodsCertificateFieldMeta.ConsigneeParty}
          fieldConfig={fieldConfig}
          party={value?.ConsigneeParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.FreightForwarderParty,
      { meta: GoodsCertificateFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.FreightForwarderParty}
          meta={GoodsCertificateFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.IssuerParty,
      { meta: GoodsCertificateFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.IssuerParty}
          meta={GoodsCertificateFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.LegalAuthorityParty,
      { meta: GoodsCertificateFieldMeta.LegalAuthorityParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsCertificateField.LegalAuthorityParty}
          meta={GoodsCertificateFieldMeta.LegalAuthorityParty}
          fieldConfig={fieldConfig}
          party={value?.LegalAuthorityParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.Shipment,
      { meta: GoodsCertificateFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={GoodsCertificateField.Shipment}
          meta={GoodsCertificateFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.Attestation,
      { meta: GoodsCertificateFieldMeta.Attestation,
        template: ({value, renderContext, fieldConfig}) => <AttestationDisplay
          key={GoodsCertificateField.Attestation}
          meta={GoodsCertificateFieldMeta.Attestation}
          fieldConfig={fieldConfig}
          attestation={value?.Attestation}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.GoodsProcessing,
      { meta: GoodsCertificateFieldMeta.GoodsProcessing,
        template: ({value, renderContext, fieldConfig}) => <GoodsProcessingDisplay
          key={GoodsCertificateField.GoodsProcessing}
          meta={GoodsCertificateFieldMeta.GoodsProcessing}
          fieldConfig={fieldConfig}
          goodsProcessing={value?.GoodsProcessing}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.OriginalDocumentReference,
      { meta: GoodsCertificateFieldMeta.OriginalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsCertificateField.OriginalDocumentReference}
          meta={GoodsCertificateFieldMeta.OriginalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.PreviousDocumentReference,
      { meta: GoodsCertificateFieldMeta.PreviousDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsCertificateField.PreviousDocumentReference}
          meta={GoodsCertificateFieldMeta.PreviousDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.PreviousDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.AdditionalDocumentReference,
      { meta: GoodsCertificateFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsCertificateField.AdditionalDocumentReference}
          meta={GoodsCertificateFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsCertificateField.Signature,
      { meta: GoodsCertificateFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={GoodsCertificateField.Signature}
          meta={GoodsCertificateFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function GoodsCertificateDisplay<TFieldMeta>({ meta, fieldConfig, goodsCertificate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GoodsCertificateTypeName,
    meta,
    fieldConfig,
    goodsCertificate,
    renderContext,
    GoodsCertificateSubElementsMap,
  )
}
