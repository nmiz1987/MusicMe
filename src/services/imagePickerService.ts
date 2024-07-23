import * as ImagePicker from 'expo-image-picker';

export const choosePhotoFromLibrary = async (allowsMultipleSelection: boolean): Promise<ImagePicker.ImagePickerResult> => {
  try {
    const hasPermission = handleImagePickerPermission();
    if (!hasPermission) {
      throw new Error('Denied permission to access the library');
    }

    const result: ImagePicker.ImagePickerResult | ImagePicker.ImagePickerResult[] = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      cameraType: ImagePicker.CameraType.back,
      quality: 1,
      allowsMultipleSelection,
    });

    return result;
  } catch (err) {
    throw new Error(`Failed to get the image from the library ${err}`);
  }
};

export async function handleImagePickerPermission(): Promise<boolean> {
  const hasPermission = await ImagePicker.getMediaLibraryPermissionsAsync();

  if (hasPermission.granted) return true;

  const cameraPermissionInformation = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (cameraPermissionInformation.status === ImagePicker.PermissionStatus.GRANTED) return true;

  if (cameraPermissionInformation.status === ImagePicker.PermissionStatus.DENIED) return false;

  if (cameraPermissionInformation.status === ImagePicker.PermissionStatus.UNDETERMINED) {
    const permissionResponse = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResponse.granted) return true;
  }
  return false;
}
