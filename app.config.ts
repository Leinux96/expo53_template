import { ExpoConfig, ConfigContext } from "@expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PROD = process.env.APP_VARIANT === "production";

const getAppName = () => {
  if (IS_PROD) {
    return "test";
  }
  if (IS_DEV) {
    return "test";
  }
};

const getSlug = () => {
  if (IS_PROD) {
    return "test";
  }
  if (IS_DEV) {
    return "test";
  }
};

const getScheme = () => {
  if (IS_PROD) {
    return "test";
  }
  if (IS_DEV) {
    return "test";
  }
};

const getBundleIdentifier = () => {
  if (IS_PROD) {
    return "it.wanderingbirds.test";
  }
  if (IS_DEV) {
    return "it.wanderingbirds.test";
  }
};

const getProjectId = () => {
  if (IS_PROD) {
    return "placeholder";
  }
  if (IS_DEV) {
    return "placeholder";
  }
};

const getVersionCode = () => {
  return 35;
};

const getEnvironment = () => {
  if (IS_PROD) {
    return "production";
  }
  if (IS_DEV) {
    return "development";
  }
};

const getAPiUrl = () => {
  let URI = "http://192.168.1.15:8080/";
  if (IS_PROD) {
    return "https://placeholder/";
  }
  if (IS_DEV) {
    return URI;
  }
};

const getGoogleServicesFile = () => {
  if (IS_PROD) {
    return "./google-services.production.json";
  }
  if (IS_DEV) {
    return "./google-services.development.json";
  }
};

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    userInterfaceStyle: "automatic",
    name: getAppName()!,
    slug: getSlug()!,
    owner: "leoch",
    version: "0.1.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: getScheme(),
    newArchEnabled: true,
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      enabled: false,
      fallbackToCacheTimeout: 3,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      buildNumber: "1",
      bundleIdentifier: getBundleIdentifier(),
      config: {
        usesNonExemptEncryption: false,
      },
      infoPlist: {
        CFBundleAllowMixedLocalizations: false,
        CFBundleLocalizations: ["it"],
        CFBundleDevelopmentRegion: "it",
      },
    },
    notification: {
      //  icon: "./assets/images/pushicon.png",
      iosDisplayInForeground: true,
      androidMode: "default",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: getBundleIdentifier(),
      versionCode: getVersionCode(),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/favicon.png",
    },
    plugins: [
       [
        "expo-sqlite",
        {
          enableFTS: true,
          useSQLCipher: true,
          android: {
            // Override the shared configuration for Android
            enableFTS: false,
            useSQLCipher: false
          },
          ios: {
            // You can also override the shared configurations for iOS
            customBuildFlags: ["-DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_SNAPSHOT=1"]
          }
        }
      ],

       [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            minSdkVersion: 29,
            buildToolsVersion: "35.0.0",
            flipper: "0.187.0",
            kotlinVersion: "1.8.21",
            javaVersion: "21",
            kotlinOptions: {
              jvmTarget: "21",
            },
                   
          },
          ios: {
            deploymentTarget: "15.1",
          },
        },
      ],
           
      "expo-asset",
      "expo-secure-store",
      "expo-font",
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
        
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ]
    ],
     "experiments": {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: getProjectId(),
      },
      apiUrl: getAPiUrl(),
      environment: getEnvironment(),
    },
  };
};
