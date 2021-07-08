import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemPassport } from  '../../model/doc/GoodsItemPassport'
import { GoodsItemPassportField, GoodsItemPassportFieldMeta, GoodsItemPassportTypeName } from  '../../meta/doc/GoodsItemPassportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentDistributionDisplay } from '../cac/DocumentDistributionDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EndorsementDisplay } from '../cac/EndorsementDisplay'
import { GoodsItemPassportCounterfoilDisplay } from '../cac/GoodsItemPassportCounterfoilDisplay'
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
  fieldConfig?: FieldConfig<GoodsItemPassport, void>
  goodsItemPassport: GoodsItemPassport[] | undefined
  renderContext: RenderContext
}

export const GoodsItemPassportSubElementsMap: SubElementsTemplatesMap<GoodsItemPassportField, GoodsItemPassport, void> = new Map([
    [
      GoodsItemPassportField.UBLExtensions,
      { meta: GoodsItemPassportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GoodsItemPassportField.UBLExtensions}
          meta={GoodsItemPassportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.UBLVersionID,
      { meta: GoodsItemPassportFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportField.UBLVersionID}
          meta={GoodsItemPassportFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.CustomizationID,
      { meta: GoodsItemPassportFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportField.CustomizationID}
          meta={GoodsItemPassportFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ProfileID,
      { meta: GoodsItemPassportFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportField.ProfileID}
          meta={GoodsItemPassportFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ProfileExecutionID,
      { meta: GoodsItemPassportFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportField.ProfileExecutionID}
          meta={GoodsItemPassportFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ID,
      { meta: GoodsItemPassportFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportField.ID}
          meta={GoodsItemPassportFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.UUID,
      { meta: GoodsItemPassportFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportField.UUID}
          meta={GoodsItemPassportFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.IssueDate,
      { meta: GoodsItemPassportFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={GoodsItemPassportField.IssueDate}
          meta={GoodsItemPassportFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.IssueTime,
      { meta: GoodsItemPassportFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={GoodsItemPassportField.IssueTime}
          meta={GoodsItemPassportFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.Note,
      { meta: GoodsItemPassportFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsItemPassportField.Note}
          meta={GoodsItemPassportFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.VersionID,
      { meta: GoodsItemPassportFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportField.VersionID}
          meta={GoodsItemPassportFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ExportReasonCode,
      { meta: GoodsItemPassportFieldMeta.ExportReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={GoodsItemPassportField.ExportReasonCode}
          meta={GoodsItemPassportFieldMeta.ExportReasonCode}
          fieldConfig={fieldConfig}
          code={value?.ExportReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ExportReason,
      { meta: GoodsItemPassportFieldMeta.ExportReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsItemPassportField.ExportReason}
          meta={GoodsItemPassportFieldMeta.ExportReason}
          fieldConfig={fieldConfig}
          text={value?.ExportReason}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ValidityPeriod,
      { meta: GoodsItemPassportFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={GoodsItemPassportField.ValidityPeriod}
          meta={GoodsItemPassportFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.IssuerParty,
      { meta: GoodsItemPassportFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemPassportField.IssuerParty}
          meta={GoodsItemPassportFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.HolderParty,
      { meta: GoodsItemPassportFieldMeta.HolderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemPassportField.HolderParty}
          meta={GoodsItemPassportFieldMeta.HolderParty}
          fieldConfig={fieldConfig}
          party={value?.HolderParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.RepresentativeParty,
      { meta: GoodsItemPassportFieldMeta.RepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemPassportField.RepresentativeParty}
          meta={GoodsItemPassportFieldMeta.RepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.RepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ExportingCustomsParty,
      { meta: GoodsItemPassportFieldMeta.ExportingCustomsParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemPassportField.ExportingCustomsParty}
          meta={GoodsItemPassportFieldMeta.ExportingCustomsParty}
          fieldConfig={fieldConfig}
          party={value?.ExportingCustomsParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ImportingCustomsParty,
      { meta: GoodsItemPassportFieldMeta.ImportingCustomsParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemPassportField.ImportingCustomsParty}
          meta={GoodsItemPassportFieldMeta.ImportingCustomsParty}
          fieldConfig={fieldConfig}
          party={value?.ImportingCustomsParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ImportingGuarantorParty,
      { meta: GoodsItemPassportFieldMeta.ImportingGuarantorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemPassportField.ImportingGuarantorParty}
          meta={GoodsItemPassportFieldMeta.ImportingGuarantorParty}
          fieldConfig={fieldConfig}
          party={value?.ImportingGuarantorParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.ExportingGuarantorParty,
      { meta: GoodsItemPassportFieldMeta.ExportingGuarantorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemPassportField.ExportingGuarantorParty}
          meta={GoodsItemPassportFieldMeta.ExportingGuarantorParty}
          fieldConfig={fieldConfig}
          party={value?.ExportingGuarantorParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.Shipment,
      { meta: GoodsItemPassportFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={GoodsItemPassportField.Shipment}
          meta={GoodsItemPassportFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.GoodsItemPassportCounterfoil,
      { meta: GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemPassportCounterfoilDisplay
          key={GoodsItemPassportField.GoodsItemPassportCounterfoil}
          meta={GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil}
          fieldConfig={fieldConfig}
          goodsItemPassportCounterfoil={value?.GoodsItemPassportCounterfoil}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.IssuerEndorsement,
      { meta: GoodsItemPassportFieldMeta.IssuerEndorsement,
        template: ({value, renderContext, fieldConfig}) => <EndorsementDisplay
          key={GoodsItemPassportField.IssuerEndorsement}
          meta={GoodsItemPassportFieldMeta.IssuerEndorsement}
          fieldConfig={fieldConfig}
          endorsement={value?.IssuerEndorsement}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.AdditionalDocumentReference,
      { meta: GoodsItemPassportFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsItemPassportField.AdditionalDocumentReference}
          meta={GoodsItemPassportFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.DocumentDistribution,
      { meta: GoodsItemPassportFieldMeta.DocumentDistribution,
        template: ({value, renderContext, fieldConfig}) => <DocumentDistributionDisplay
          key={GoodsItemPassportField.DocumentDistribution}
          meta={GoodsItemPassportFieldMeta.DocumentDistribution}
          fieldConfig={fieldConfig}
          documentDistribution={value?.DocumentDistribution}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportField.Signature,
      { meta: GoodsItemPassportFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={GoodsItemPassportField.Signature}
          meta={GoodsItemPassportFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function GoodsItemPassportDisplay<TFieldMeta>({ meta, fieldConfig, goodsItemPassport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GoodsItemPassportTypeName,
    meta,
    fieldConfig,
    goodsItemPassport,
    renderContext,
    GoodsItemPassportSubElementsMap,
  )
}
