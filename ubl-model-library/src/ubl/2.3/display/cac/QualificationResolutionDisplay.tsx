import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualificationResolution } from  '../../model/cac/QualificationResolution'
import { QualificationResolutionFieldMeta } from  '../../meta/cac/QualificationResolutionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: QualificationResolution
  meta: FieldMeta<T>
}

export default function QualificationResolutionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={QualificationResolutionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={QualificationResolutionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationResolutionFieldMeta.AdmissionCode} 
          value={value.AdmissionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualificationResolutionFieldMeta.AdmissionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationResolutionFieldMeta.ExclusionReason} 
          value={value.ExclusionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationResolutionFieldMeta.ExclusionReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationResolutionFieldMeta.Resolution} 
          value={value.Resolution}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationResolutionFieldMeta.Resolution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationResolutionFieldMeta.ResolutionDate} 
          value={value.ResolutionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={QualificationResolutionFieldMeta.ResolutionDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationResolutionFieldMeta.ResolutionTime} 
          value={value.ResolutionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={QualificationResolutionFieldMeta.ResolutionTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationResolutionFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={QualificationResolutionFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
