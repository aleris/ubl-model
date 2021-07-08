import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderReceipt } from  '../../model/doc/TenderReceipt'
import { TenderReceiptField, TenderReceiptFieldMeta, TenderReceiptTypeName } from  '../../meta/doc/TenderReceiptMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
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
  fieldConfig?: FieldConfig<TenderReceipt, void>
  tenderReceipt: TenderReceipt[] | undefined
  renderContext: RenderContext
}

export const TenderReceiptSubElementsMap: SubElementsTemplatesMap<TenderReceiptField, TenderReceipt, void> = new Map([
    [
      TenderReceiptField.UBLExtensions,
      { meta: TenderReceiptFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderReceiptField.UBLExtensions}
          meta={TenderReceiptFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.UBLVersionID,
      { meta: TenderReceiptFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderReceiptField.UBLVersionID}
          meta={TenderReceiptFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.CustomizationID,
      { meta: TenderReceiptFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderReceiptField.CustomizationID}
          meta={TenderReceiptFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.ProfileID,
      { meta: TenderReceiptFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderReceiptField.ProfileID}
          meta={TenderReceiptFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.ProfileExecutionID,
      { meta: TenderReceiptFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderReceiptField.ProfileExecutionID}
          meta={TenderReceiptFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.ID,
      { meta: TenderReceiptFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderReceiptField.ID}
          meta={TenderReceiptFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.CopyIndicator,
      { meta: TenderReceiptFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderReceiptField.CopyIndicator}
          meta={TenderReceiptFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.UUID,
      { meta: TenderReceiptFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderReceiptField.UUID}
          meta={TenderReceiptFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.ContractFolderID,
      { meta: TenderReceiptFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderReceiptField.ContractFolderID}
          meta={TenderReceiptFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.IssueDate,
      { meta: TenderReceiptFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderReceiptField.IssueDate}
          meta={TenderReceiptFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.IssueTime,
      { meta: TenderReceiptFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderReceiptField.IssueTime}
          meta={TenderReceiptFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.ContractName,
      { meta: TenderReceiptFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderReceiptField.ContractName}
          meta={TenderReceiptFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.Note,
      { meta: TenderReceiptFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderReceiptField.Note}
          meta={TenderReceiptFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.RegisteredDate,
      { meta: TenderReceiptFieldMeta.RegisteredDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderReceiptField.RegisteredDate}
          meta={TenderReceiptFieldMeta.RegisteredDate}
          fieldConfig={fieldConfig}
          date={value?.RegisteredDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.RegisteredTime,
      { meta: TenderReceiptFieldMeta.RegisteredTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderReceiptField.RegisteredTime}
          meta={TenderReceiptFieldMeta.RegisteredTime}
          fieldConfig={fieldConfig}
          time={value?.RegisteredTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.TenderDocumentReference,
      { meta: TenderReceiptFieldMeta.TenderDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderReceiptField.TenderDocumentReference}
          meta={TenderReceiptFieldMeta.TenderDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TenderDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.Signature,
      { meta: TenderReceiptFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TenderReceiptField.Signature}
          meta={TenderReceiptFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.SenderParty,
      { meta: TenderReceiptFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderReceiptField.SenderParty}
          meta={TenderReceiptFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderReceiptField.ReceiverParty,
      { meta: TenderReceiptFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderReceiptField.ReceiverParty}
          meta={TenderReceiptFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderReceiptDisplay<TFieldMeta>({ meta, fieldConfig, tenderReceipt, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderReceiptTypeName,
    meta,
    fieldConfig,
    tenderReceipt,
    renderContext,
    TenderReceiptSubElementsMap,
  )
}
