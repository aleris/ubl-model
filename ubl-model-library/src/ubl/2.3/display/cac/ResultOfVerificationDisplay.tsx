import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: ResultOfVerification
  meta: FieldMeta<T>
}

export default function ResultOfVerificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ResultOfVerification ubl-ResultOfVerificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ResultOfVerification ubl-UBLExtensions"
          meta={ResultOfVerificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResultOfVerification ubl-Identifier ubl-ValidatorID"
          meta={ResultOfVerificationFieldMeta.ValidatorID} 
          value={value.ValidatorID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Validator"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.ValidatorID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResultOfVerification ubl-Code ubl-ValidationResultCode"
          meta={ResultOfVerificationFieldMeta.ValidationResultCode} 
          value={value.ValidationResultCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Validation Result Code"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.ValidationResultCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResultOfVerification ubl-Date ubl-ValidationDate"
          meta={ResultOfVerificationFieldMeta.ValidationDate} 
          value={value.ValidationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Validation Date"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.ValidationDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResultOfVerification ubl-Time ubl-ValidationTime"
          meta={ResultOfVerificationFieldMeta.ValidationTime} 
          value={value.ValidationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Validation Time"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.ValidationTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResultOfVerification ubl-Text ubl-ValidateProcess"
          meta={ResultOfVerificationFieldMeta.ValidateProcess} 
          value={value.ValidateProcess}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Validate Process"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.ValidateProcess}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResultOfVerification ubl-Text ubl-ValidateTool"
          meta={ResultOfVerificationFieldMeta.ValidateTool} 
          value={value.ValidateTool}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Validate Tool"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.ValidateTool}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResultOfVerification ubl-Text ubl-ValidateToolVersion"
          meta={ResultOfVerificationFieldMeta.ValidateToolVersion} 
          value={value.ValidateToolVersion}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Validate Tool Version"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.ValidateToolVersion}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ResultOfVerification ubl-Party ubl-SignatoryParty"
          meta={ResultOfVerificationFieldMeta.SignatoryParty} 
          value={value.SignatoryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Signatory Party"
              value={itemValue}
              meta={ResultOfVerificationFieldMeta.SignatoryParty}
            />
          }
        />
        </div>
    </div>
  )
}
