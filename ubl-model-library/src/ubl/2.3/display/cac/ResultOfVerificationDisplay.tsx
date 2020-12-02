import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ResultOfVerification } from  '../../model/cac/ResultOfVerification'
import { ResultOfVerificationFieldMeta } from  '../../meta/cac/ResultOfVerificationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ResultOfVerification
  meta: FieldMeta<T>
}

export default function ResultOfVerificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ResultOfVerificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.ValidatorID} 
          value={value.ValidatorID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ResultOfVerificationFieldMeta.ValidatorID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.ValidationResultCode} 
          value={value.ValidationResultCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ResultOfVerificationFieldMeta.ValidationResultCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.ValidationDate} 
          value={value.ValidationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ResultOfVerificationFieldMeta.ValidationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.ValidationTime} 
          value={value.ValidationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ResultOfVerificationFieldMeta.ValidationTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.ValidateProcess} 
          value={value.ValidateProcess}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ResultOfVerificationFieldMeta.ValidateProcess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.ValidateTool} 
          value={value.ValidateTool}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ResultOfVerificationFieldMeta.ValidateTool} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.ValidateToolVersion} 
          value={value.ValidateToolVersion}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ResultOfVerificationFieldMeta.ValidateToolVersion} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResultOfVerificationFieldMeta.SignatoryParty} 
          value={value.SignatoryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ResultOfVerificationFieldMeta.SignatoryParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
