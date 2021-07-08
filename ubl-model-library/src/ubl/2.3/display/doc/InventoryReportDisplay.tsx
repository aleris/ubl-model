import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { InventoryReport } from  '../../model/doc/InventoryReport'
import { InventoryReportField, InventoryReportFieldMeta, InventoryReportTypeName } from  '../../meta/doc/InventoryReportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { InventoryReportLineDisplay } from '../cac/InventoryReportLineDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<InventoryReport, void>
  inventoryReport: InventoryReport[] | undefined
  renderContext: RenderContext
}

export const InventoryReportSubElementsMap: SubElementsTemplatesMap<InventoryReportField, InventoryReport, void> = new Map([
    [
      InventoryReportField.UBLExtensions,
      { meta: InventoryReportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={InventoryReportField.UBLExtensions}
          meta={InventoryReportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.UBLVersionID,
      { meta: InventoryReportFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InventoryReportField.UBLVersionID}
          meta={InventoryReportFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.CustomizationID,
      { meta: InventoryReportFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InventoryReportField.CustomizationID}
          meta={InventoryReportFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.ProfileID,
      { meta: InventoryReportFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InventoryReportField.ProfileID}
          meta={InventoryReportFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.ProfileExecutionID,
      { meta: InventoryReportFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InventoryReportField.ProfileExecutionID}
          meta={InventoryReportFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.ID,
      { meta: InventoryReportFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InventoryReportField.ID}
          meta={InventoryReportFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.CopyIndicator,
      { meta: InventoryReportFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={InventoryReportField.CopyIndicator}
          meta={InventoryReportFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.UUID,
      { meta: InventoryReportFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InventoryReportField.UUID}
          meta={InventoryReportFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.IssueDate,
      { meta: InventoryReportFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={InventoryReportField.IssueDate}
          meta={InventoryReportFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.IssueTime,
      { meta: InventoryReportFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={InventoryReportField.IssueTime}
          meta={InventoryReportFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.Note,
      { meta: InventoryReportFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InventoryReportField.Note}
          meta={InventoryReportFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.DocumentCurrencyCode,
      { meta: InventoryReportFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InventoryReportField.DocumentCurrencyCode}
          meta={InventoryReportFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.InventoryPeriod,
      { meta: InventoryReportFieldMeta.InventoryPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={InventoryReportField.InventoryPeriod}
          meta={InventoryReportFieldMeta.InventoryPeriod}
          fieldConfig={fieldConfig}
          period={value?.InventoryPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.DocumentReference,
      { meta: InventoryReportFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InventoryReportField.DocumentReference}
          meta={InventoryReportFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.Signature,
      { meta: InventoryReportFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={InventoryReportField.Signature}
          meta={InventoryReportFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.RetailerCustomerParty,
      { meta: InventoryReportFieldMeta.RetailerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={InventoryReportField.RetailerCustomerParty}
          meta={InventoryReportFieldMeta.RetailerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.RetailerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.InventoryReportingParty,
      { meta: InventoryReportFieldMeta.InventoryReportingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={InventoryReportField.InventoryReportingParty}
          meta={InventoryReportFieldMeta.InventoryReportingParty}
          fieldConfig={fieldConfig}
          party={value?.InventoryReportingParty}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.SellerSupplierParty,
      { meta: InventoryReportFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={InventoryReportField.SellerSupplierParty}
          meta={InventoryReportFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportField.InventoryReportLine,
      { meta: InventoryReportFieldMeta.InventoryReportLine,
        template: ({value, renderContext, fieldConfig}) => <InventoryReportLineDisplay
          key={InventoryReportField.InventoryReportLine}
          meta={InventoryReportFieldMeta.InventoryReportLine}
          fieldConfig={fieldConfig}
          inventoryReportLine={value?.InventoryReportLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function InventoryReportDisplay<TFieldMeta>({ meta, fieldConfig, inventoryReport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    InventoryReportTypeName,
    meta,
    fieldConfig,
    inventoryReport,
    renderContext,
    InventoryReportSubElementsMap,
  )
}
