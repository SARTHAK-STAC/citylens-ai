import pandas as pd

df = pd.read_csv("../data/cleaned_311.csv", low_memory=False)

# Convert dates
df["Created Date"] = pd.to_datetime(df["Created Date"], errors="coerce")
df["Closed Date"] = pd.to_datetime(df["Closed Date"], errors="coerce")

# Resolution time
df["Resolution Hours"] = (
    df["Closed Date"] - df["Created Date"]
).dt.total_seconds() / 3600

print("Total Complaints:", len(df))
print("Open Complaints:", (df["Status"] == "Open").sum())
print("Closed Complaints:", (df["Status"] == "Closed").sum())
print("Average Resolution Time (hours):")
print(round(df["Resolution Hours"].mean(), 2))