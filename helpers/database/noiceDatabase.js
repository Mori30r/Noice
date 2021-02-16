import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("noice.db");
export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists noice (id text not null, title text not null, note text not null, audioUri text not null, isDone integer not null, isFavorite integer not null, voiceDuration integer not null );",
        [],
        () => {
          resolve();
        },
        (_, err) => reject(err)
      );
    });
  });
};

export const insertNoice = (
  id,
  title,
  note,
  audioUri,
  isDone,
  isFavorite,
  voiceDuration
) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `insert into noice (id, title, note, audioUri, isDone, isFavorite, voiceDuration) values (?, ?, ?, ?, ?, ?, ?);`,
        [id, title, note, audioUri, isDone, isFavorite, voiceDuration],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });
};

export const fetchNoices = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from noice",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });
};
