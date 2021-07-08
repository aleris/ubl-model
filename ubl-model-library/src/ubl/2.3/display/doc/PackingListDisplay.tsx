import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PackingList } from  '../../model/doc/PackingList'
import { PackingListField, PackingListFieldMeta, PackingListTypeName } from  '../../meta/doc/PackingListMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentDistributionDisplay } from '../cac/DocumentDistributionDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PackingList, void>
  packingList: PackingList[] | undefined
  renderContext: RenderContext
}

export const PackingListSubElementsMap: SubElementsTemplatesMap<PackingListField, PackingList, void> = new Map([
    [
      PackingListField.UBLExtensions,
      { meta: PackingListFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PackingListField.UBLExtensions}
          meta={PackingListFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.UBLVersionID,
      { meta: PackingListFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackingListField.UBLVersionID}
          meta={PackingListFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.CustomizationID,
      { meta: PackingListFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackingListField.CustomizationID}
          meta={PackingListFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.ProfileID,
      { meta: PackingListFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackingListField.ProfileID}
          meta={PackingListFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.ProfileExecutionID,
      { meta: PackingListFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackingListField.ProfileExecutionID}
          meta={PackingListFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.ID,
      { meta: PackingListFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackingListField.ID}
          meta={PackingListFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.UUID,
      { meta: PackingListFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackingListField.UUID}
          meta={PackingListFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.IssueDate,
      { meta: PackingListFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PackingListField.IssueDate}
          meta={PackingListFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.IssueTime,
      { meta: PackingListFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PackingListField.IssueTime}
          meta={PackingListFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.Name,
      { meta: PackingListFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PackingListField.Name}
          meta={PackingListFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.Description,
      { meta: PackingListFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PackingListField.Description}
          meta={PackingListFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.Note,
      { meta: PackingListFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PackingListField.Note}
          meta={PackingListFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.VersionID,
      { meta: PackingListFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackingListField.VersionID}
          meta={PackingListFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.OtherInstruction,
      { meta: PackingListFieldMeta.OtherInstruction,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PackingListField.OtherInstruction}
          meta={PackingListFieldMeta.OtherInstruction}
          fieldConfig={fieldConfig}
          text={value?.OtherInstruction}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.ConsignorParty,
      { meta: PackingListFieldMeta.ConsignorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PackingListField.ConsignorParty}
          meta={PackingListFieldMeta.ConsignorParty}
          fieldConfig={fieldConfig}
          party={value?.ConsignorParty}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.CarrierParty,
      { meta: PackingListFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PackingListField.CarrierParty}
          meta={PackingListFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.FreightForwarderParty,
      { meta: PackingListFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PackingListField.FreightForwarderParty}
          meta={PackingListFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.Shipment,
      { meta: PackingListFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={PackingListField.Shipment}
          meta={PackingListFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.DocumentReference,
      { meta: PackingListFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={PackingListField.DocumentReference}
          meta={PackingListFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.DocumentDistribution,
      { meta: PackingListFieldMeta.DocumentDistribution,
        template: ({value, renderContext, fieldConfig}) => <DocumentDistributionDisplay
          key={PackingListField.DocumentDistribution}
          meta={PackingListFieldMeta.DocumentDistribution}
          fieldConfig={fieldConfig}
          documentDistribution={value?.DocumentDistribution}
          renderContext={renderContext}
        />}
    ],

    [
      PackingListField.Signature,
      { meta: PackingListFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={PackingListField.Signature}
          meta={PackingListFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function PackingListDisplay<TFieldMeta>({ meta, fieldConfig, packingList, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PackingListTypeName,
    meta,
    fieldConfig,
    packingList,
    renderContext,
    PackingListSubElementsMap,
  )
}
