/* eslint-disable consistent-return */
import { getAuthToken, getSpreadSheetValues } from './googleServices';

// 
const spreadsheetId = '1QJTbq7Yqy5z1CkNbs1FXbG8laWIdnskvNkauUQCXBnQ';
const sheetName = 'Knowledge!10:20';

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
