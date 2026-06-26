import pandas as pd

# Load dataset
df = pd.read_csv(
    "../data/311_Service_Requests_from_2010_to_Present.csv",
    low_memory=False
)

# Select useful columns
df = df[
    [
        "Unique Key",
        "Created Date",
        "Closed Date",
        "Agency",
        "Complaint Type",
        "Descriptor",
        "Borough",
        "City",
        "Status",
        "Latitude",
        "Longitude"
    ]
]

print(df.head())
print(df.info())

# Save cleaned data
df.to_csv("../data/cleaned_311.csv", index=False)

print("✅ Cleaned dataset saved!")