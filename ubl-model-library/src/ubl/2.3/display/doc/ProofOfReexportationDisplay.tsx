import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProofOfReexportation } from  '../../model/doc/ProofOfReexportation'
import { ProofOfReexportationField, ProofOfReexportationFieldMeta, ProofOfReexportationTypeName } from  '../../meta/doc/ProofOfReexportationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AttachmentDisplay } from '../cac/AttachmentDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EvidenceDisplay } from '../cac/EvidenceDisplay'
import { GoodsItemPassportCounterfoilDisplay } from '../cac/GoodsItemPassportCounterfoilDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProofOfReexportation, void>
  proofOfReexportation: ProofOfReexportation[] | undefined
  renderContext: RenderContext
}

export const ProofOfReexportationSubElementsMap: SubElementsTemplatesMap<ProofOfReexportationField, ProofOfReexportation, void> = new Map([
    [
      ProofOfReexportationField.UBLExtensions,
      { meta: ProofOfReexportationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProofOfReexportationField.UBLExtensions}
          meta={ProofOfReexportationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.UBLVersionID,
      { meta: ProofOfReexportationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationField.UBLVersionID}
          meta={ProofOfReexportationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.CustomizationID,
      { meta: ProofOfReexportationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationField.CustomizationID}
          meta={ProofOfReexportationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.ProfileID,
      { meta: ProofOfReexportationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationField.ProfileID}
          meta={ProofOfReexportationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.ProfileExecutionID,
      { meta: ProofOfReexportationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationField.ProfileExecutionID}
          meta={ProofOfReexportationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.ID,
      { meta: ProofOfReexportationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationField.ID}
          meta={ProofOfReexportationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.UUID,
      { meta: ProofOfReexportationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationField.UUID}
          meta={ProofOfReexportationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.IssueDate,
      { meta: ProofOfReexportationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ProofOfReexportationField.IssueDate}
          meta={ProofOfReexportationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.IssueTime,
      { meta: ProofOfReexportationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ProofOfReexportationField.IssueTime}
          meta={ProofOfReexportationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.Note,
      { meta: ProofOfReexportationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProofOfReexportationField.Note}
          meta={ProofOfReexportationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.VersionID,
      { meta: ProofOfReexportationFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationField.VersionID}
          meta={ProofOfReexportationFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.IssuerParty,
      { meta: ProofOfReexportationFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ProofOfReexportationField.IssuerParty}
          meta={ProofOfReexportationFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.GoodsItemPassportCounterfoil,
      { meta: ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemPassportCounterfoilDisplay
          key={ProofOfReexportationField.GoodsItemPassportCounterfoil}
          meta={ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil}
          fieldConfig={fieldConfig}
          goodsItemPassportCounterfoil={value?.GoodsItemPassportCounterfoil}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.ReexportationEvidence,
      { meta: ProofOfReexportationFieldMeta.ReexportationEvidence,
        template: ({value, renderContext, fieldConfig}) => <EvidenceDisplay
          key={ProofOfReexportationField.ReexportationEvidence}
          meta={ProofOfReexportationFieldMeta.ReexportationEvidence}
          fieldConfig={fieldConfig}
          evidence={value?.ReexportationEvidence}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.GoodsItemPassportAttachment,
      { meta: ProofOfReexportationFieldMeta.GoodsItemPassportAttachment,
        template: ({value, renderContext, fieldConfig}) => <AttachmentDisplay
          key={ProofOfReexportationField.GoodsItemPassportAttachment}
          meta={ProofOfReexportationFieldMeta.GoodsItemPassportAttachment}
          fieldConfig={fieldConfig}
          attachment={value?.GoodsItemPassportAttachment}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.AdditionalDocumentReference,
      { meta: ProofOfReexportationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProofOfReexportationField.AdditionalDocumentReference}
          meta={ProofOfReexportationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationField.Signature,
      { meta: ProofOfReexportationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ProofOfReexportationField.Signature}
          meta={ProofOfReexportationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProofOfReexportationDisplay<TFieldMeta>({ meta, fieldConfig, proofOfReexportation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProofOfReexportationTypeName,
    meta,
    fieldConfig,
    proofOfReexportation,
    renderContext,
    ProofOfReexportationSubElementsMap,
  )
}
