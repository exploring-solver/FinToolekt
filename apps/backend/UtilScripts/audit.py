import pandas as pd

# Load the Excel file
file_path = 'vendor_ledger.xlsx'  # Replace with the path to your Excel file
df = pd.read_excel(file_path, sheet_name='sheet6')  # Replace 'Sheet1' with your sheet name

# Display the columns in the Excel file
print("Columns in the Excel file:")
print(df.columns)

# Implementing the audit logic for the report
# Filter for duplicate payment observations
def remove_duplicate_payments(df):
    # Assuming 'Document Number' and 'Amount in Doc. Curr.' are used to identify duplicate payments
    df = df.drop_duplicates(subset=['Document Number', 'Amount in Doc. Curr.'])
    return df

# Apply the duplicate payment filter
df_cleaned = remove_duplicate_payments(df)

# Additional controls and checks can be implemented as needed
# For example, ensuring that 'Document Date' is within a valid range
df_cleaned = df_cleaned[(df_cleaned['Document Date'] >= '2023-01-01') & (df_cleaned['Document Date'] <= '2023-12-31')]

# Save the cleaned data to a new Excel file
output_file_path = 'cleaned_excel_file.xlsx'
df_cleaned.to_excel(output_file_path, index=False)
print(f"Cleaned data saved to {output_file_path}")

# Load the vendor master sheet
vendor_master_sheet = 'vendor_master'  # Replace with the actual sheet name
vendor_df = pd.read_excel(file_path, sheet_name=vendor_master_sheet)

# Display the columns in the vendor master sheet
print("Columns in the Vendor Master sheet:")
print(vendor_df.columns)

# Implementing controls to reduce operational loss in the vendor master
# For example, filtering out vendors with invalid VAT Reg. No.
vendor_df = vendor_df[vendor_df['VAT Reg. No.'].notnull()]

# Filter for vendors with valid bank details
vendor_df = vendor_df[vendor_df['IBAN'].notnull() & vendor_df['SWIFT/BIC'].notnull()]

# Apply additional business logic filters as required
# Save the cleaned vendor master data to a new Excel file
vendor_output_file_path = 'cleaned_vendor_master.xlsx'
vendor_df.to_excel(vendor_output_file_path, index=False)
print(f"Cleaned vendor master data saved to {vendor_output_file_path}")
