import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Enquiry } from  '../../model/doc/Enquiry'
import { EnquiryField, EnquiryFieldMeta, EnquiryTypeName } from  '../../meta/doc/EnquiryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AttachmentDisplay } from '../cac/AttachmentDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Enquiry, void>
  enquiry: Enquiry[] | undefined
  renderContext: RenderContext
}

export const EnquirySubElementsMap: SubElementsTemplatesMap<EnquiryField, Enquiry, void> = new Map([
    [
      EnquiryField.UBLExtensions,
      { meta: EnquiryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EnquiryField.UBLExtensions}
          meta={EnquiryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.UBLVersionID,
      { meta: EnquiryFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryField.UBLVersionID}
          meta={EnquiryFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.CustomizationID,
      { meta: EnquiryFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryField.CustomizationID}
          meta={EnquiryFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.ProfileID,
      { meta: EnquiryFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryField.ProfileID}
          meta={EnquiryFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.ProfileExecutionID,
      { meta: EnquiryFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryField.ProfileExecutionID}
          meta={EnquiryFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.ID,
      { meta: EnquiryFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryField.ID}
          meta={EnquiryFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.CopyIndicator,
      { meta: EnquiryFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={EnquiryField.CopyIndicator}
          meta={EnquiryFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.UUID,
      { meta: EnquiryFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryField.UUID}
          meta={EnquiryFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.IssueDate,
      { meta: EnquiryFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={EnquiryField.IssueDate}
          meta={EnquiryFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.IssueTime,
      { meta: EnquiryFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={EnquiryField.IssueTime}
          meta={EnquiryFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.LatestReplyDate,
      { meta: EnquiryFieldMeta.LatestReplyDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={EnquiryField.LatestReplyDate}
          meta={EnquiryFieldMeta.LatestReplyDate}
          fieldConfig={fieldConfig}
          date={value?.LatestReplyDate}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.LatestReplyTime,
      { meta: EnquiryFieldMeta.LatestReplyTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={EnquiryField.LatestReplyTime}
          meta={EnquiryFieldMeta.LatestReplyTime}
          fieldConfig={fieldConfig}
          time={value?.LatestReplyTime}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.Description,
      { meta: EnquiryFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EnquiryField.Description}
          meta={EnquiryFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.Signature,
      { meta: EnquiryFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={EnquiryField.Signature}
          meta={EnquiryFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.RequestorParty,
      { meta: EnquiryFieldMeta.RequestorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EnquiryField.RequestorParty}
          meta={EnquiryFieldMeta.RequestorParty}
          fieldConfig={fieldConfig}
          party={value?.RequestorParty}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.ResponderParty,
      { meta: EnquiryFieldMeta.ResponderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EnquiryField.ResponderParty}
          meta={EnquiryFieldMeta.ResponderParty}
          fieldConfig={fieldConfig}
          party={value?.ResponderParty}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.AdditionalDocumentReference,
      { meta: EnquiryFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={EnquiryField.AdditionalDocumentReference}
          meta={EnquiryFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryField.Attachment,
      { meta: EnquiryFieldMeta.Attachment,
        template: ({value, renderContext, fieldConfig}) => <AttachmentDisplay
          key={EnquiryField.Attachment}
          meta={EnquiryFieldMeta.Attachment}
          fieldConfig={fieldConfig}
          attachment={value?.Attachment}
          renderContext={renderContext}
        />}
    ]
]) 

export function EnquiryDisplay<TFieldMeta>({ meta, fieldConfig, enquiry, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EnquiryTypeName,
    meta,
    fieldConfig,
    enquiry,
    renderContext,
    EnquirySubElementsMap,
  )
}
