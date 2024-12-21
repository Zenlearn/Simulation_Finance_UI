import os
import re
y='''1	Bidding for New Projects
2	Participating in Tenders
3	Participating in RFQ for New Bids
4	Reaching Out to Old Inactive Customers
5	Organizing Sales Day at Customer Location
6	Responding to Requests for Proposals (RFP)
7	Expanding the Sales Team for New Business Development
8	Re-activating Dormant Sales Channels
9	Strategic Partnership with a Non-Competing Manufacturer
10	Sudden Decrease in Sales due to Market Competition
11	Optimize Pricing Strategy
12	Capturing Seasonal Sales Demand
13	Bid for a New Contract
14	Capturing Market Share from Competitors
15	Cash Flow Crisis Due to Delays in Customer Payments
16	Cash Flow Crisis - Pursue External Financing
17	Cash Flow Crisis - Reduce Operational Costs
18	Capital Investment - New Machinery
19	Merger and Acquisition - Acquire Smaller Competitor
20	Sales Demand Fluctuation Due to New Regulations
21	International Competitor Entry
22	Interest Rate Hike
23	Labor Strike
24	Foreign Exchange Volatility
25	Implementing Additive Manufacturing (3D Printing)
26	Developing a Smart Factory with Digital Twin Technology
27	Implementing Predictive Maintenance Using IoT Data
28	Enhancing Quality Control through Real-Time IoT Monitoring
29	Shifts in Sales Profile Towards Customization and Niche Markets
30	Integration of New Production Processes and Technologies
31	Rapid Technological Advancements and Increased Competition
32	Integration of 3D Printing and Traditional Manufacturing
33	Balancing Design for Manufacturability (DFM) with Aesthetic Design'''
y=y.split('\n')
print(y)

# Define the base directory containing the folders
base_directory = "programs"

# Specify the target file name to process
target_file_name = "target_file.html"

# Define the regex pattern to match the block and capture the `xyz value`
pattern = re.compile(
    r"""<tr>\s*<td>Operating Expenses<\/td>\s*<td>(.*?)<\/td>\s*<!--.*?<tr>\s*<td>Operating Expenses - Payroll<\/td>\s*<td>\1<\/td>\s*<\/tr>\s*<tr>\s*<td>Operating Expenses - Non-Payroll<\/td>\s*<td>0<\/td>\s*<\/tr>\s*<tr>\s*<td>Depreciation and Amortization Expens<\/td>\s*<td>0<\/td>""",
    re.DOTALL,
)

# Define the replacement block, using the captured `xyz value`
replacement_template = """<tr>
    <td>Operating Expenses</td>
    <td>{xyz_value}</td>
</tr>
<tr>
    <td>Operating Expenses - Payroll</td>
    <td>{xyz_value}</td>
</tr>
<tr>
    <td>Operating Expenses - Non-Payroll</td>
    <td>0</td>
</tr>
<tr>
    <td>Depreciation and Amortization Expense</td>
    <td>0</td>
</tr>"""

print("hello")

try: 
    # Walk through the base directory
    for root, dirs, files in os.walk(base_directory):
        # Check if the target file exists in the current directory
        
        # print("hello",files,root,type(root))
        # print(root,'scenarios' in root)
        if 'scenarios/scenario' in root:
            print(root,files)

        for i in files:
            
         if target_file_name in files:
            file_path = os.path.join(root, target_file_name)
            print(f"Processing file: {file_path}")
            try:
                continue
                # Read the file content
                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()

                # Search and replace the matching block
                match = pattern.search(content)
                if match:
                    xyz_value = match.group(1)  # Capture the dynamic `xyz value`
                    replacement = replacement_template.format(xyz_value=xyz_value)
                    updated_content = pattern.sub(replacement, content)

                    # Write the updated content back to the file
                    with open(file_path, "w", encoding="utf-8") as file:
                        file.write(updated_content)
                    print(f"Updated file: {file_path}")
                else:
                    print(f"No matching block found in file: {file_path}")
            except Exception as e:
                print(f"Error processing file {file_path}: {e}")


            

except Exception as e:
            print(f"Error processing file {file_path}: {e}")



