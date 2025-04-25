import { Stack } from "expo-router";
import "@/global.css";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '@/drizzle/migrations';
import { Suspense } from "react";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { DATABASE_NAME } from "@/lib/constants";
import { ActivityIndicator } from "react-native";


export default function RootLayout() {
  const expoDb = openDatabaseSync("db.db");

  const db = drizzle(expoDb);
  const { success, error } = useMigrations(db, migrations);

  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      {/* <Text>{success ? "Migration successful!" : error}</Text> */}
      <SQLiteProvider databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense>
        <Stack />
      </SQLiteProvider>


    </Suspense>
  )
}


