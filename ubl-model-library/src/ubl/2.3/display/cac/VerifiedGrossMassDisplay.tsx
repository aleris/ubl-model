import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: VerifiedGrossMass
  meta: FieldMeta<T>
}

export default function VerifiedGrossMassDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-VerifiedGrossMass ubl-VerifiedGrossMassType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-VerifiedGrossMass ubl-UBLExtensions"
          meta={VerifiedGrossMassFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-VerifiedGrossMass ubl-Identifier ubl-ID"
          meta={VerifiedGrossMassFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-VerifiedGrossMass ubl-Date ubl-WeighingDate"
          meta={VerifiedGrossMassFieldMeta.WeighingDate} 
          value={value.WeighingDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Weighing Date"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.WeighingDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-VerifiedGrossMass ubl-Time ubl-WeighingTime"
          meta={VerifiedGrossMassFieldMeta.WeighingTime} 
          value={value.WeighingTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Weighing Time"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.WeighingTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-VerifiedGrossMass ubl-Code ubl-WeighingMethodCode"
          meta={VerifiedGrossMassFieldMeta.WeighingMethodCode} 
          value={value.WeighingMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Weighing Method Code"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.WeighingMethodCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-VerifiedGrossMass ubl-Identifier ubl-WeighingDeviceID"
          meta={VerifiedGrossMassFieldMeta.WeighingDeviceID} 
          value={value.WeighingDeviceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Weighing Device Identifier"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.WeighingDeviceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-VerifiedGrossMass ubl-Text ubl-WeighingDeviceType"
          meta={VerifiedGrossMassFieldMeta.WeighingDeviceType} 
          value={value.WeighingDeviceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Weighing Device Type"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.WeighingDeviceType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-VerifiedGrossMass ubl-Measure ubl-GrossMassMeasure"
          meta={VerifiedGrossMassFieldMeta.GrossMassMeasure} 
          value={value.GrossMassMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Mass"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.GrossMassMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-VerifiedGrossMass ubl-Party ubl-WeighingParty"
          meta={VerifiedGrossMassFieldMeta.WeighingParty} 
          value={value.WeighingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Weighing Party"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.WeighingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-VerifiedGrossMass ubl-Party ubl-ShipperParty"
          meta={VerifiedGrossMassFieldMeta.ShipperParty} 
          value={value.ShipperParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Shipper Party"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.ShipperParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-VerifiedGrossMass ubl-Party ubl-ResponsibleParty"
          meta={VerifiedGrossMassFieldMeta.ResponsibleParty} 
          value={value.ResponsibleParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Responsible Party"
              value={itemValue}
              meta={VerifiedGrossMassFieldMeta.ResponsibleParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-VerifiedGrossMass ubl-DocumentReference"
          meta={VerifiedGrossMassFieldMeta.DocumentReference} 
          value={value.DocumentReference}
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
