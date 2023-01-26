/* eslint-disable consistent-return */
import { getAuthToken, getSpreadSheetValues } from './googleServices';

// Created the sheetname with link
// Read more for to understand https://developers.google.com/sheets/api/guides/concepts#expandable-1
const spreadsheetId =
  typeof process.env.GOOGLE_SPREADSHEET_ID === 'string'
    ? process.env.GOOGLE_SPREADSHEET_ID
    : '';
const sheetName = `${process.env.GOOGLE_SPREADSHEET_NAME}!10:20`;

const getSpreadSheetData = async () => {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth,
    });
    console.log(
      'output for getSpreadSheetValues',
      JSON.stringify(response.data, null, 2)
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export { getSpreadSheetData };
