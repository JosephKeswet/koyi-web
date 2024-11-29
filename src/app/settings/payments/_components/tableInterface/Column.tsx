import { SettingsPaymentTableHeader } from "@/lib/constants/enums";

const ColumnConfig = [
  { id: 'transactionId', header: SettingsPaymentTableHeader.TransactionId },
  { id: 'withdrawalAmount', header: SettingsPaymentTableHeader.WithdrawalAmount },
  { id: 'paymentMethod', header: SettingsPaymentTableHeader.PaymentMethod },
  { id: 'accountDetails', header: SettingsPaymentTableHeader.AccountDetails },
  { id: 'status', header: SettingsPaymentTableHeader.Status },
  { id: 'dateInitiated', header: SettingsPaymentTableHeader.DateInitiated },
];

// function to create columns
const createColumnsFromConfig = (config: any[]) => config.map((c) => ({
  accessorKey: c.id,
  header: c.header,
  cell: (info: { getValue: () => any; }) => {
    const value = info.getValue(); 

    if (c.id === "accountDetails") {
      if (Array.isArray(value) && value.length > 0) {
        // Assuming accountDetails is an array of objects with required data
        return value.map((account, index) => (
          <div key={index} className='flex flex-col items-start justify-start'>
            <p className=''>{account.accountNumber}</p>
            <p className=''>{account.accountName}</p>
          </div>
        ));
      }
      return "No product details";
    }

    return String(value);
  },
}));

const columns = createColumnsFromConfig(ColumnConfig);

export { columns };
