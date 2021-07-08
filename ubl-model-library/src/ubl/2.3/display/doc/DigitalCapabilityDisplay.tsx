import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalCapability } from  '../../model/doc/DigitalCapability'
import { DigitalCapabilityField, DigitalCapabilityFieldMeta, DigitalCapabilityTypeName } from  '../../meta/doc/DigitalCapabilityMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DigitalProcessDisplay } from '../cac/DigitalProcessDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DigitalCapability, void>
  digitalCapability: DigitalCapability[] | undefined
  renderContext: RenderContext
}

export const DigitalCapabilitySubElementsMap: SubElementsTemplatesMap<DigitalCapabilityField, DigitalCapability, void> = new Map([
    [
      DigitalCapabilityField.UBLExtensions,
      { meta: DigitalCapabilityFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DigitalCapabilityField.UBLExtensions}
          meta={DigitalCapabilityFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.UBLVersionID,
      { meta: DigitalCapabilityFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.UBLVersionID}
          meta={DigitalCapabilityFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.CustomizationID,
      { meta: DigitalCapabilityFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.CustomizationID}
          meta={DigitalCapabilityFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.ProfileID,
      { meta: DigitalCapabilityFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.ProfileID}
          meta={DigitalCapabilityFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.ProfileExecutionID,
      { meta: DigitalCapabilityFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.ProfileExecutionID}
          meta={DigitalCapabilityFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.ID,
      { meta: DigitalCapabilityFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.ID}
          meta={DigitalCapabilityFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.UUID,
      { meta: DigitalCapabilityFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.UUID}
          meta={DigitalCapabilityFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.IssueDate,
      { meta: DigitalCapabilityFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DigitalCapabilityField.IssueDate}
          meta={DigitalCapabilityFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.IssueTime,
      { meta: DigitalCapabilityFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DigitalCapabilityField.IssueTime}
          meta={DigitalCapabilityFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.VersionID,
      { meta: DigitalCapabilityFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.VersionID}
          meta={DigitalCapabilityFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.PreviousVersionID,
      { meta: DigitalCapabilityFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCapabilityField.PreviousVersionID}
          meta={DigitalCapabilityFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.Signature,
      { meta: DigitalCapabilityFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={DigitalCapabilityField.Signature}
          meta={DigitalCapabilityFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.SenderParty,
      { meta: DigitalCapabilityFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DigitalCapabilityField.SenderParty}
          meta={DigitalCapabilityFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.ReceiverParty,
      { meta: DigitalCapabilityFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DigitalCapabilityField.ReceiverParty}
          meta={DigitalCapabilityFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.BusinessParty,
      { meta: DigitalCapabilityFieldMeta.BusinessParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DigitalCapabilityField.BusinessParty}
          meta={DigitalCapabilityFieldMeta.BusinessParty}
          fieldConfig={fieldConfig}
          party={value?.BusinessParty}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCapabilityField.DigitalProcess,
      { meta: DigitalCapabilityFieldMeta.DigitalProcess,
        template: ({value, renderContext, fieldConfig}) => <DigitalProcessDisplay
          key={DigitalCapabilityField.DigitalProcess}
          meta={DigitalCapabilityFieldMeta.DigitalProcess}
          fieldConfig={fieldConfig}
          digitalProcess={value?.DigitalProcess}
          renderContext={renderContext}
        />}
    ]
]) 

export function DigitalCapabilityDisplay<TFieldMeta>({ meta, fieldConfig, digitalCapability, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DigitalCapabilityTypeName,
    meta,
    fieldConfig,
    digitalCapability,
    renderContext,
    DigitalCapabilitySubElementsMap,
  )
}
