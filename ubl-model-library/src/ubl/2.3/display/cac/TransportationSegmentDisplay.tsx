import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationSegment } from  '../../model/cac/TransportationSegment'
import { TransportationSegmentField, TransportationSegmentFieldMeta, TransportationSegmentTypeName } from  '../../meta/cac/TransportationSegmentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ConsignmentDisplay } from './ConsignmentDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { ShipmentStageDisplay } from './ShipmentStageDisplay'
import { TransportationServiceDisplay } from './TransportationServiceDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportationSegment, void>
  transportationSegment: TransportationSegment[] | undefined
  renderContext: RenderContext
}

export const TransportationSegmentSubElementsMap: SubElementsTemplatesMap<TransportationSegmentField, TransportationSegment, void> = new Map([
    [
      TransportationSegmentField.UBLExtensions,
      { meta: TransportationSegmentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportationSegmentField.UBLExtensions}
          meta={TransportationSegmentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationSegmentField.SequenceNumeric,
      { meta: TransportationSegmentFieldMeta.SequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TransportationSegmentField.SequenceNumeric}
          meta={TransportationSegmentFieldMeta.SequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.SequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationSegmentField.TransportExecutionPlanReferenceID,
      { meta: TransportationSegmentFieldMeta.TransportExecutionPlanReferenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationSegmentField.TransportExecutionPlanReferenceID}
          meta={TransportationSegmentFieldMeta.TransportExecutionPlanReferenceID}
          fieldConfig={fieldConfig}
          identifier={value?.TransportExecutionPlanReferenceID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationSegmentField.TransportationService,
      { meta: TransportationSegmentFieldMeta.TransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={TransportationSegmentField.TransportationService}
          meta={TransportationSegmentFieldMeta.TransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.TransportationService}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationSegmentField.TransportServiceProviderParty,
      { meta: TransportationSegmentFieldMeta.TransportServiceProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportationSegmentField.TransportServiceProviderParty}
          meta={TransportationSegmentFieldMeta.TransportServiceProviderParty}
          fieldConfig={fieldConfig}
          party={value?.TransportServiceProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationSegmentField.ReferencedConsignment,
      { meta: TransportationSegmentFieldMeta.ReferencedConsignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={TransportationSegmentField.ReferencedConsignment}
          meta={TransportationSegmentFieldMeta.ReferencedConsignment}
          fieldConfig={fieldConfig}
          consignment={value?.ReferencedConsignment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationSegmentField.ShipmentStage,
      { meta: TransportationSegmentFieldMeta.ShipmentStage,
        template: ({value, renderContext, fieldConfig}) => <ShipmentStageDisplay
          key={TransportationSegmentField.ShipmentStage}
          meta={TransportationSegmentFieldMeta.ShipmentStage}
          fieldConfig={fieldConfig}
          shipmentStage={value?.ShipmentStage}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportationSegmentDisplay<TFieldMeta>({ meta, fieldConfig, transportationSegment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportationSegmentTypeName,
    meta,
    fieldConfig,
    transportationSegment,
    renderContext,
    TransportationSegmentSubElementsMap,
  )
}
