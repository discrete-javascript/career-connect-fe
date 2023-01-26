import { google } from 'googleapis';

// How to configure and get the credentials
// check this link https://thenewstack.io/how-to-use-google-sheets-as-a-database-with-react-and-ssr/#:~:text=Search%20for%20%E2%80%9Csheets%E2%80%9D%20and%20select,the%20Application%20Data%20radio%20button.
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuthToken(): Promise<any> {
  const auth = new google.auth.GoogleAuth({
    keyFile: './nothingtohere.json',
    scopes: SCOPES,
  });
  try {
    const authToken = await auth.getClient();
    return authToken;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function getSpreadSheet({
  spreadsheetId,
  auth,
}: {
  spreadsheetId: string;
  auth: string;
}) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

async function getSpreadSheetValues({
  spreadsheetId,
  auth,
  sheetName,
}: {
  spreadsheetId: string;
  auth: string;
  sheetName: string;
}) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName,
  });
  return res;
}

export { getAuthToken, getSpreadSheet, getSpreadSheetValues };
