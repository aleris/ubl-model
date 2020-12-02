import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemPassportCounterfoil } from  '../../model/cac/GoodsItemPassportCounterfoil'
import { GoodsItemPassportCounterfoilFieldMeta } from  '../../meta/cac/GoodsItemPassportCounterfoilMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import GoodsItemDisplay from './GoodsItemDisplay'
import { GoodsItem } from '../../model/cac/GoodsItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: GoodsItemPassportCounterfoil
  meta: FieldMeta<T>
}

export default function GoodsItemPassportCounterfoilDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItemPassportID} 
          value={value.GoodsItemPassportID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItemPassportID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.FinalReexportationDate} 
          value={value.FinalReexportationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.FinalReexportationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.CustomsOfficeLocation} 
          value={value.CustomsOfficeLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.CustomsOfficeLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference} 
          value={value.ExportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference} 
          value={value.ImportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference} 
          value={value.ReexportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference} 
          value={value.ReimportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportCounterfoilFieldMeta.VoucherDocumentReference} 
          value={value.VoucherDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsItemPassportCounterfoilFieldMeta.VoucherDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
