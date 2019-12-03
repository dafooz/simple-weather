# Adding some components in the application

## The `App.tsx` file

As mentionned before, this is the entry point of the application. It is written in typescript using the latest React paradigms. 

* It uses the `useForecast` hook in order to pull out the data for the current location from the OpenWeather API.
* It is written as a functional component

>💡 The code contains some comment in order to make you understand what is happening.

```typescript
<>
      {/* Add the icon registry to have access to all the EvaIcons. Available icons: https://akveo.github.io/eva-icons/#/*/}
      <IconRegistry icons={EvaIconsPack} />
      {/* Application provider for UI Kitten. See https://akveo.github.io/react-native-ui-kitten/ */}
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <View style={ appStyles.container }>
          {/* If the application is loading, show the device loader */}
          { loading && <ActivityIndicator size="large" color="#FFF" /> }
          {/* if the data are loaded, show the app */}
            {!loading && forecast && (
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text>Let's get started!</Text>
              </View>
            )}
          </View>
      </ApplicationProvider>
    </>
```

Some tags in this code may get your attention. Those are not a standard HTML tag but is provided by React Native.

* `View` represents a container (like a div in HTML) and will be transformed into the corresponding native element dependant of the platform.
* `ActivityIndicator` will be transform into the corresponding platform loading indicator
* `Text` that allows us to display texts in the application. 

>💡 In React Native, even though looking very similar to HTML, you cannot simply add a string to display some text. All texts should be wrapped into this `Text` tag. It allows React Native to map this to the correct element displaying texts for the targeted platform running the application.
