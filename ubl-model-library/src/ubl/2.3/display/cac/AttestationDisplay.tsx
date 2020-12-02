import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Attestation } from  '../../model/cac/Attestation'
import { AttestationFieldMeta } from  '../../meta/cac/AttestationMeta'
import AttestationLineDisplay from './AttestationLineDisplay'
import { AttestationLine } from '../../model/cac/AttestationLine'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Attestation
  meta: FieldMeta<T>
}

export default function AttestationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AttestationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AttestationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttestationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AttestationFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AttestationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={AttestationFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AttestationFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationFieldMeta.AttestationLine} 
          value={value.AttestationLine}
          itemDisplay={ (itemValue: AttestationLine, key: string | number) =>
            <AttestationLineDisplay key={key} meta={AttestationFieldMeta.AttestationLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
