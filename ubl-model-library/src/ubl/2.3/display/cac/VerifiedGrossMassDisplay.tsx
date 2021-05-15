import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { VerifiedGrossMass } from  '../../model/cac/VerifiedGrossMass'
import { VerifiedGrossMassFieldMeta } from  '../../meta/cac/VerifiedGrossMassMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: VerifiedGrossMass | undefined
  meta: FieldMeta<T>
}

export default function VerifiedGrossMassDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-VerifiedGrossMass">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={VerifiedGrossMassFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={VerifiedGrossMassFieldMeta.ID}
          />

          <DateDisplay
            label="Weighing Date"
            value={value.WeighingDate?.[0]}
            meta={VerifiedGrossMassFieldMeta.WeighingDate}
          />

          <TimeDisplay
            label="Weighing Time"
            value={value.WeighingTime?.[0]}
            meta={VerifiedGrossMassFieldMeta.WeighingTime}
          />

          <CodeDisplay
            label="Weighing Method Code"
            value={value.WeighingMethodCode?.[0]}
            meta={VerifiedGrossMassFieldMeta.WeighingMethodCode}
          />

          <IdentifierDisplay
            label="Weighing Device Identifier"
            value={value.WeighingDeviceID?.[0]}
            meta={VerifiedGrossMassFieldMeta.WeighingDeviceID}
          />

          <TextDisplay
            label="Weighing Device Type"
            value={value.WeighingDeviceType?.[0]}
            meta={VerifiedGrossMassFieldMeta.WeighingDeviceType}
          />

          <MeasureDisplay
            label="Gross Mass"
            value={value.GrossMassMeasure?.[0]}
            meta={VerifiedGrossMassFieldMeta.GrossMassMeasure}
          />

          <PartyDisplay
            label="Weighing Party"
            value={value.WeighingParty?.[0]}
            meta={VerifiedGrossMassFieldMeta.WeighingParty}
          />

          <PartyDisplay
            label="Shipper Party"
            value={value.ShipperParty?.[0]}
            meta={VerifiedGrossMassFieldMeta.ShipperParty}
          />

          <PartyDisplay
            label="Responsible Party"
            value={value.ResponsibleParty?.[0]}
            meta={VerifiedGrossMassFieldMeta.ResponsibleParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={VerifiedGrossMassFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={VerifiedGrossMassFieldMeta.DocumentReference}
              />
            }
          />
        </div>
    </div>
  )
}
