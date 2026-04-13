import { Client, Databases, Storage, ID, Account } from "appwrite";

const client = new Client();

// ✅ Get project ID safely
const PROJECT_ID =
  process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "69cca865002c203fe498";

// 🔍 Debug (remove later)
if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
  console.warn("⚠️ ENV PROJECT ID missing, using fallback");
}

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);

export { databases, storage, ID, account };