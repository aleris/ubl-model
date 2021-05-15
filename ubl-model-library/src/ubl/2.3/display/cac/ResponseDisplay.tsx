import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Response } from  '../../model/cac/Response'
import { ResponseFieldMeta } from  '../../meta/cac/ResponseMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import StatusDisplay from './StatusDisplay'
import { Status } from '../../model/cac/Status'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Response | undefined
  meta: FieldMeta<T>
}

export default function ResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Response">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ResponseFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Reference"
            value={value.ReferenceID?.[0]}
            meta={ResponseFieldMeta.ReferenceID}
          />

          <CodeDisplay
            label="Response Code"
            value={value.ResponseCode?.[0]}
            meta={ResponseFieldMeta.ResponseCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ResponseFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ResponseFieldMeta.Description}
              />
            }
          />

          <DateDisplay
            label="Effective Date"
            value={value.EffectiveDate?.[0]}
            meta={ResponseFieldMeta.EffectiveDate}
          />

          <TimeDisplay
            label="Effective Time"
            value={value.EffectiveTime?.[0]}
            meta={ResponseFieldMeta.EffectiveTime}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Status"
            label="Status"
            items={value.Status}
            meta={ResponseFieldMeta.Status} 
            itemDisplay={ (itemValue: Status, key: string | number) =>
              <StatusDisplay
                key={key}
                label="Status"
                value={itemValue}
                meta={ResponseFieldMeta.Status}
              />
            }
          />
        </div>
    </div>
  )
}
