import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: VerifiedGrossMass
  meta: FieldMeta<T>
}

export default function VerifiedGrossMassDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={VerifiedGrossMassFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={VerifiedGrossMassFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.WeighingDate} 
          value={value.WeighingDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={VerifiedGrossMassFieldMeta.WeighingDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.WeighingTime} 
          value={value.WeighingTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={VerifiedGrossMassFieldMeta.WeighingTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.WeighingMethodCode} 
          value={value.WeighingMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={VerifiedGrossMassFieldMeta.WeighingMethodCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.WeighingDeviceID} 
          value={value.WeighingDeviceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={VerifiedGrossMassFieldMeta.WeighingDeviceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.WeighingDeviceType} 
          value={value.WeighingDeviceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={VerifiedGrossMassFieldMeta.WeighingDeviceType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.GrossMassMeasure} 
          value={value.GrossMassMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={VerifiedGrossMassFieldMeta.GrossMassMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.WeighingParty} 
          value={value.WeighingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={VerifiedGrossMassFieldMeta.WeighingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.ShipperParty} 
          value={value.ShipperParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={VerifiedGrossMassFieldMeta.ShipperParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.ResponsibleParty} 
          value={value.ResponsibleParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={VerifiedGrossMassFieldMeta.ResponsibleParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={VerifiedGrossMassFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={VerifiedGrossMassFieldMeta.DocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
