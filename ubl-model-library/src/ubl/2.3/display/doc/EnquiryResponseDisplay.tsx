import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnquiryResponse } from  '../../model/doc/EnquiryResponse'
import { EnquiryResponseField, EnquiryResponseFieldMeta, EnquiryResponseTypeName } from  '../../meta/doc/EnquiryResponseMeta'
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
  fieldConfig?: FieldConfig<EnquiryResponse, void>
  enquiryResponse: EnquiryResponse[] | undefined
  renderContext: RenderContext
}

export const EnquiryResponseSubElementsMap: SubElementsTemplatesMap<EnquiryResponseField, EnquiryResponse, void> = new Map([
    [
      EnquiryResponseField.UBLExtensions,
      { meta: EnquiryResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EnquiryResponseField.UBLExtensions}
          meta={EnquiryResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.UBLVersionID,
      { meta: EnquiryResponseFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryResponseField.UBLVersionID}
          meta={EnquiryResponseFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.CustomizationID,
      { meta: EnquiryResponseFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryResponseField.CustomizationID}
          meta={EnquiryResponseFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.ProfileID,
      { meta: EnquiryResponseFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryResponseField.ProfileID}
          meta={EnquiryResponseFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.ProfileExecutionID,
      { meta: EnquiryResponseFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryResponseField.ProfileExecutionID}
          meta={EnquiryResponseFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.ID,
      { meta: EnquiryResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryResponseField.ID}
          meta={EnquiryResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.CopyIndicator,
      { meta: EnquiryResponseFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={EnquiryResponseField.CopyIndicator}
          meta={EnquiryResponseFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.UUID,
      { meta: EnquiryResponseFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EnquiryResponseField.UUID}
          meta={EnquiryResponseFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.IssueDate,
      { meta: EnquiryResponseFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={EnquiryResponseField.IssueDate}
          meta={EnquiryResponseFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.IssueTime,
      { meta: EnquiryResponseFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={EnquiryResponseField.IssueTime}
          meta={EnquiryResponseFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.Description,
      { meta: EnquiryResponseFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EnquiryResponseField.Description}
          meta={EnquiryResponseFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.Signature,
      { meta: EnquiryResponseFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={EnquiryResponseField.Signature}
          meta={EnquiryResponseFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.RequestorParty,
      { meta: EnquiryResponseFieldMeta.RequestorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EnquiryResponseField.RequestorParty}
          meta={EnquiryResponseFieldMeta.RequestorParty}
          fieldConfig={fieldConfig}
          party={value?.RequestorParty}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.ResponderParty,
      { meta: EnquiryResponseFieldMeta.ResponderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EnquiryResponseField.ResponderParty}
          meta={EnquiryResponseFieldMeta.ResponderParty}
          fieldConfig={fieldConfig}
          party={value?.ResponderParty}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.ParentDocumentReference,
      { meta: EnquiryResponseFieldMeta.ParentDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={EnquiryResponseField.ParentDocumentReference}
          meta={EnquiryResponseFieldMeta.ParentDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ParentDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.AdditionalDocumentReference,
      { meta: EnquiryResponseFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={EnquiryResponseField.AdditionalDocumentReference}
          meta={EnquiryResponseFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      EnquiryResponseField.Attachment,
      { meta: EnquiryResponseFieldMeta.Attachment,
        template: ({value, renderContext, fieldConfig}) => <AttachmentDisplay
          key={EnquiryResponseField.Attachment}
          meta={EnquiryResponseFieldMeta.Attachment}
          fieldConfig={fieldConfig}
          attachment={value?.Attachment}
          renderContext={renderContext}
        />}
    ]
]) 

export function EnquiryResponseDisplay<TFieldMeta>({ meta, fieldConfig, enquiryResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EnquiryResponseTypeName,
    meta,
    fieldConfig,
    enquiryResponse,
    renderContext,
    EnquiryResponseSubElementsMap,
  )
}
