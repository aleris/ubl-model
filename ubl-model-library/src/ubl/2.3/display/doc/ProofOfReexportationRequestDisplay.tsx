import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProofOfReexportationRequest } from  '../../model/doc/ProofOfReexportationRequest'
import { ProofOfReexportationRequestField, ProofOfReexportationRequestFieldMeta, ProofOfReexportationRequestTypeName } from  '../../meta/doc/ProofOfReexportationRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProofOfReexportationRequest, void>
  proofOfReexportationRequest: ProofOfReexportationRequest[] | undefined
  renderContext: RenderContext
}

export const ProofOfReexportationRequestSubElementsMap: SubElementsTemplatesMap<ProofOfReexportationRequestField, ProofOfReexportationRequest, void> = new Map([
    [
      ProofOfReexportationRequestField.UBLExtensions,
      { meta: ProofOfReexportationRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProofOfReexportationRequestField.UBLExtensions}
          meta={ProofOfReexportationRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.UBLVersionID,
      { meta: ProofOfReexportationRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.UBLVersionID}
          meta={ProofOfReexportationRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.CustomizationID,
      { meta: ProofOfReexportationRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.CustomizationID}
          meta={ProofOfReexportationRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.ProfileID,
      { meta: ProofOfReexportationRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.ProfileID}
          meta={ProofOfReexportationRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.ProfileExecutionID,
      { meta: ProofOfReexportationRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.ProfileExecutionID}
          meta={ProofOfReexportationRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.ID,
      { meta: ProofOfReexportationRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.ID}
          meta={ProofOfReexportationRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.UUID,
      { meta: ProofOfReexportationRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.UUID}
          meta={ProofOfReexportationRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.IssueDate,
      { meta: ProofOfReexportationRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ProofOfReexportationRequestField.IssueDate}
          meta={ProofOfReexportationRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.IssueTime,
      { meta: ProofOfReexportationRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ProofOfReexportationRequestField.IssueTime}
          meta={ProofOfReexportationRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.Note,
      { meta: ProofOfReexportationRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProofOfReexportationRequestField.Note}
          meta={ProofOfReexportationRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.VersionID,
      { meta: ProofOfReexportationRequestFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.VersionID}
          meta={ProofOfReexportationRequestFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.GoodsItemPassportID,
      { meta: ProofOfReexportationRequestFieldMeta.GoodsItemPassportID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.GoodsItemPassportID}
          meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportID}
          fieldConfig={fieldConfig}
          identifier={value?.GoodsItemPassportID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.GoodsItemPassportCounterfoilID,
      { meta: ProofOfReexportationRequestFieldMeta.GoodsItemPassportCounterfoilID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProofOfReexportationRequestField.GoodsItemPassportCounterfoilID}
          meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportCounterfoilID}
          fieldConfig={fieldConfig}
          identifier={value?.GoodsItemPassportCounterfoilID}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.IssuerParty,
      { meta: ProofOfReexportationRequestFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ProofOfReexportationRequestField.IssuerParty}
          meta={ProofOfReexportationRequestFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.AdditionalDocumentReference,
      { meta: ProofOfReexportationRequestFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProofOfReexportationRequestField.AdditionalDocumentReference}
          meta={ProofOfReexportationRequestFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProofOfReexportationRequestField.Signature,
      { meta: ProofOfReexportationRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ProofOfReexportationRequestField.Signature}
          meta={ProofOfReexportationRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProofOfReexportationRequestDisplay<TFieldMeta>({ meta, fieldConfig, proofOfReexportationRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProofOfReexportationRequestTypeName,
    meta,
    fieldConfig,
    proofOfReexportationRequest,
    renderContext,
    ProofOfReexportationRequestSubElementsMap,
  )
}
