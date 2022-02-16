import { Alert, Linking } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

export const linkOpener = async (url: string): Promise<void> => {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url);
    } else if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      throw new Error(`Cannot open link. If you wish to manually open link: ${url}`);
    }
  } catch (err: any) {
    Alert.alert(err.name, err.message);
  }
};
