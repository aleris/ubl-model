import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ResultOfVerification | undefined
  meta: FieldMeta<T>
}

export default function ResultOfVerificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ResultOfVerification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ResultOfVerificationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Validator"
            value={value.ValidatorID?.[0]}
            meta={ResultOfVerificationFieldMeta.ValidatorID}
          />

          <CodeDisplay
            label="Validation Result Code"
            value={value.ValidationResultCode?.[0]}
            meta={ResultOfVerificationFieldMeta.ValidationResultCode}
          />

          <DateDisplay
            label="Validation Date"
            value={value.ValidationDate?.[0]}
            meta={ResultOfVerificationFieldMeta.ValidationDate}
          />

          <TimeDisplay
            label="Validation Time"
            value={value.ValidationTime?.[0]}
            meta={ResultOfVerificationFieldMeta.ValidationTime}
          />

          <TextDisplay
            label="Validate Process"
            value={value.ValidateProcess?.[0]}
            meta={ResultOfVerificationFieldMeta.ValidateProcess}
          />

          <TextDisplay
            label="Validate Tool"
            value={value.ValidateTool?.[0]}
            meta={ResultOfVerificationFieldMeta.ValidateTool}
          />

          <TextDisplay
            label="Validate Tool Version"
            value={value.ValidateToolVersion?.[0]}
            meta={ResultOfVerificationFieldMeta.ValidateToolVersion}
          />

          <PartyDisplay
            label="Signatory Party"
            value={value.SignatoryParty?.[0]}
            meta={ResultOfVerificationFieldMeta.SignatoryParty}
          />
        </div>
    </div>
  )
}
