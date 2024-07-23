import * as DocumentPicker from 'expo-document-picker';

export async function filePiker(multiple: boolean): Promise<DocumentPicker.DocumentPickerResult> {
  return await DocumentPicker.getDocumentAsync({ type: ['*/*'], multiple });
}
