// services/preferencesService.ts
import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase;

export const initPreferencesTable = async () => {
  db = await SQLite.openDatabaseAsync('preferences.db');
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS preferences (
      id INTEGER PRIMARY KEY NOT NULL,
      filter TEXT
    );
  `);
};

export const saveFilter = async (filter: string) => {
  if (!db) db = await SQLite.openDatabaseAsync('preferences.db');
  await db.execAsync(`DELETE FROM preferences;`);
  await db.runAsync('INSERT INTO preferences (filter) VALUES (?);', filter);
};

export const getFilter = async (): Promise<string | null> => {
  if (!db) db = await SQLite.openDatabaseAsync('preferences.db');
  const row = await db.getFirstAsync<{ filter: string }>('SELECT filter FROM preferences LIMIT 1');
  return row?.filter ?? null;
};
