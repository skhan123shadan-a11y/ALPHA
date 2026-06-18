import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shadan.alphaai',
  appName: 'Alpha AI',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true
  }
};

export default config;
