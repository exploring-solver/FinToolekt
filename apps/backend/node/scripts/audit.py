import pandas as pd
import sys
import os

def log_progress(message, log_file):
    with open(log_file, 'a') as f:
        f.write(message + '\n')

# Load the Excel file
file_path = sys.argv[1]
unique_id = sys.argv[2]  # Get the unique identifier
log_file = sys.argv[3]   # Get the log file path

log_progress('Loading Excel file', log_file)
df = pd.read_excel(file_path, sheet_name='sheet6')

# Implementing the audit logic for the report
def remove_duplicate_payments(df):
    df = df.drop_duplicates(subset=['Document Number', 'Amount in Doc. Curr.'])
    return df

# Apply the duplicate payment filter
log_progress('Removing duplicate payments', log_file)
df_cleaned = remove_duplicate_payments(df)

# Additional controls and checks
log_progress('Applying date filters', log_file)
df_cleaned = df_cleaned[(df_cleaned['Document Date'] >= '2023-01-01') & (df_cleaned['Document Date'] <= '2023-12-31')]

# Ensure the 'processed' directory exists
processed_dir = 'processed'
if not os.path.exists(processed_dir):
    os.makedirs(processed_dir)

# Save the cleaned data to a new Excel file with a unique name
output_file_path = os.path.join(processed_dir, f'{unique_id}_cleaned_excel_file.xlsx')
log_progress('Saving cleaned data to Excel file', log_file)
df_cleaned.to_excel(output_file_path, index=False)

# Load the vendor master sheet
vendor_master_sheet = 'vendor_master'
log_progress('Loading Vendor Master sheet', log_file)
vendor_df = pd.read_excel(file_path, sheet_name=vendor_master_sheet)

# Implementing controls to reduce operational loss in the vendor master
log_progress('Filtering Vendor Master sheet', log_file)
vendor_df = vendor_df[vendor_df['VAT Reg. No.'].notnull()]
vendor_df = vendor_df[vendor_df['IBAN'].notnull() & vendor_df['SWIFT/BIC'].notnull()]

# Save the cleaned vendor master data to a new Excel file with a unique name
vendor_output_file_path = os.path.join(processed_dir, f'{unique_id}_cleaned_vendor_master.xlsx')
log_progress('Saving cleaned Vendor Master data to Excel file', log_file)
vendor_df.to_excel(vendor_output_file_path, index=False)

# Output the paths of the cleaned files
log_progress('Processing completed', log_file)
print(output_file_path)
print(vendor_output_file_path)
