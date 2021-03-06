import fs from 'fs'
import { Invoice } from '../../ubl/2.2/doc/Invoice'

export function example22() {
    console.log('Example with UBL JSON version 2.2 model:')
    const json = JSON.parse(fs.readFileSync(`./src/example/2.2/UBL-Invoice-2.1-Example.json`, 'utf8'))
    const model = json['Invoice'][0] as Invoice
    console.log('ID:', model.ID?.[0]?._)
    console.log('Accounting Supplier Name:', model.AccountingSupplierParty?.[0]?.Party?.[0]?.PartyName?.[0]?.Name?.[0]._)
    console.log('Payable Amount:', model.LegalMonetaryTotal?.[0].PayableAmount?.[0]._)
    console.log('Invoice Line 5 / Item Name:', model.InvoiceLine?.[4]?.Item?.[0]?.Name?.[0]._)
    console.log('Due Date (undefined):', model.DueDate?.[0]?._)
}
