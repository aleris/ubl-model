import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BusinessCard } from  '../../model/doc/BusinessCard'
import { BusinessCardField, BusinessCardFieldMeta, BusinessCardTypeName } from  '../../meta/doc/BusinessCardMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CapabilityDisplay } from '../cac/CapabilityDisplay'
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
  fieldConfig?: FieldConfig<BusinessCard, void>
  businessCard: BusinessCard[] | undefined
  renderContext: RenderContext
}

export const BusinessCardSubElementsMap: SubElementsTemplatesMap<BusinessCardField, BusinessCard, void> = new Map([
    [
      BusinessCardField.UBLExtensions,
      { meta: BusinessCardFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={BusinessCardField.UBLExtensions}
          meta={BusinessCardFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.UBLVersionID,
      { meta: BusinessCardFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.UBLVersionID}
          meta={BusinessCardFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.CustomizationID,
      { meta: BusinessCardFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.CustomizationID}
          meta={BusinessCardFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.ProfileID,
      { meta: BusinessCardFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.ProfileID}
          meta={BusinessCardFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.ProfileExecutionID,
      { meta: BusinessCardFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.ProfileExecutionID}
          meta={BusinessCardFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.ID,
      { meta: BusinessCardFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.ID}
          meta={BusinessCardFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.UUID,
      { meta: BusinessCardFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.UUID}
          meta={BusinessCardFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.IssueDate,
      { meta: BusinessCardFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={BusinessCardField.IssueDate}
          meta={BusinessCardFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.IssueTime,
      { meta: BusinessCardFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={BusinessCardField.IssueTime}
          meta={BusinessCardFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.VersionID,
      { meta: BusinessCardFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.VersionID}
          meta={BusinessCardFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.PreviousVersionID,
      { meta: BusinessCardFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BusinessCardField.PreviousVersionID}
          meta={BusinessCardFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.BriefDescription,
      { meta: BusinessCardFieldMeta.BriefDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={BusinessCardField.BriefDescription}
          meta={BusinessCardFieldMeta.BriefDescription}
          fieldConfig={fieldConfig}
          text={value?.BriefDescription}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.Signature,
      { meta: BusinessCardFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={BusinessCardField.Signature}
          meta={BusinessCardFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.SenderParty,
      { meta: BusinessCardFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={BusinessCardField.SenderParty}
          meta={BusinessCardFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.ReceiverParty,
      { meta: BusinessCardFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={BusinessCardField.ReceiverParty}
          meta={BusinessCardFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.BusinessParty,
      { meta: BusinessCardFieldMeta.BusinessParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={BusinessCardField.BusinessParty}
          meta={BusinessCardFieldMeta.BusinessParty}
          fieldConfig={fieldConfig}
          party={value?.BusinessParty}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.BrochureDocumentReference,
      { meta: BusinessCardFieldMeta.BrochureDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BusinessCardField.BrochureDocumentReference}
          meta={BusinessCardFieldMeta.BrochureDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.BrochureDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.AdditionalDocumentReference,
      { meta: BusinessCardFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BusinessCardField.AdditionalDocumentReference}
          meta={BusinessCardFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BusinessCardField.BusinessCapability,
      { meta: BusinessCardFieldMeta.BusinessCapability,
        template: ({value, renderContext, fieldConfig}) => <CapabilityDisplay
          key={BusinessCardField.BusinessCapability}
          meta={BusinessCardFieldMeta.BusinessCapability}
          fieldConfig={fieldConfig}
          capability={value?.BusinessCapability}
          renderContext={renderContext}
        />}
    ]
]) 

export function BusinessCardDisplay<TFieldMeta>({ meta, fieldConfig, businessCard, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    BusinessCardTypeName,
    meta,
    fieldConfig,
    businessCard,
    renderContext,
    BusinessCardSubElementsMap,
  )
}
