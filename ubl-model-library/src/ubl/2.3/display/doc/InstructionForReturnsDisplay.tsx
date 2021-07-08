import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { InstructionForReturns } from  '../../model/doc/InstructionForReturns'
import { InstructionForReturnsField, InstructionForReturnsFieldMeta, InstructionForReturnsTypeName } from  '../../meta/doc/InstructionForReturnsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { InstructionForReturnsLineDisplay } from '../cac/InstructionForReturnsLineDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<InstructionForReturns, void>
  instructionForReturns: InstructionForReturns[] | undefined
  renderContext: RenderContext
}

export const InstructionForReturnsSubElementsMap: SubElementsTemplatesMap<InstructionForReturnsField, InstructionForReturns, void> = new Map([
    [
      InstructionForReturnsField.UBLExtensions,
      { meta: InstructionForReturnsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={InstructionForReturnsField.UBLExtensions}
          meta={InstructionForReturnsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.UBLVersionID,
      { meta: InstructionForReturnsFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InstructionForReturnsField.UBLVersionID}
          meta={InstructionForReturnsFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.CustomizationID,
      { meta: InstructionForReturnsFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InstructionForReturnsField.CustomizationID}
          meta={InstructionForReturnsFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.ProfileID,
      { meta: InstructionForReturnsFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InstructionForReturnsField.ProfileID}
          meta={InstructionForReturnsFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.ProfileExecutionID,
      { meta: InstructionForReturnsFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InstructionForReturnsField.ProfileExecutionID}
          meta={InstructionForReturnsFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.ID,
      { meta: InstructionForReturnsFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InstructionForReturnsField.ID}
          meta={InstructionForReturnsFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.CopyIndicator,
      { meta: InstructionForReturnsFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={InstructionForReturnsField.CopyIndicator}
          meta={InstructionForReturnsFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.UUID,
      { meta: InstructionForReturnsFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InstructionForReturnsField.UUID}
          meta={InstructionForReturnsFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.IssueDate,
      { meta: InstructionForReturnsFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={InstructionForReturnsField.IssueDate}
          meta={InstructionForReturnsFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.IssueTime,
      { meta: InstructionForReturnsFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={InstructionForReturnsField.IssueTime}
          meta={InstructionForReturnsFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.Note,
      { meta: InstructionForReturnsFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InstructionForReturnsField.Note}
          meta={InstructionForReturnsFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.DocumentReference,
      { meta: InstructionForReturnsFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InstructionForReturnsField.DocumentReference}
          meta={InstructionForReturnsFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.Signature,
      { meta: InstructionForReturnsFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={InstructionForReturnsField.Signature}
          meta={InstructionForReturnsFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.SellerSupplierParty,
      { meta: InstructionForReturnsFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={InstructionForReturnsField.SellerSupplierParty}
          meta={InstructionForReturnsFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.RetailerCustomerParty,
      { meta: InstructionForReturnsFieldMeta.RetailerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={InstructionForReturnsField.RetailerCustomerParty}
          meta={InstructionForReturnsFieldMeta.RetailerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.RetailerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.ManufacturerParty,
      { meta: InstructionForReturnsFieldMeta.ManufacturerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={InstructionForReturnsField.ManufacturerParty}
          meta={InstructionForReturnsFieldMeta.ManufacturerParty}
          fieldConfig={fieldConfig}
          party={value?.ManufacturerParty}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.Shipment,
      { meta: InstructionForReturnsFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={InstructionForReturnsField.Shipment}
          meta={InstructionForReturnsFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      InstructionForReturnsField.InstructionForReturnsLine,
      { meta: InstructionForReturnsFieldMeta.InstructionForReturnsLine,
        template: ({value, renderContext, fieldConfig}) => <InstructionForReturnsLineDisplay
          key={InstructionForReturnsField.InstructionForReturnsLine}
          meta={InstructionForReturnsFieldMeta.InstructionForReturnsLine}
          fieldConfig={fieldConfig}
          instructionForReturnsLine={value?.InstructionForReturnsLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function InstructionForReturnsDisplay<TFieldMeta>({ meta, fieldConfig, instructionForReturns, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    InstructionForReturnsTypeName,
    meta,
    fieldConfig,
    instructionForReturns,
    renderContext,
    InstructionForReturnsSubElementsMap,
  )
}
