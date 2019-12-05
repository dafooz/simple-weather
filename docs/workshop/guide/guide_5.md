# Adding content in the different components

Our application is in a really good shape so far. We have added the background, made sure it works on all devices even the ones with notch and scaffolded the different components.

It's now time to fill these components with data!

## User location

Head to the `Location.tsx` file under the component folder and replace the `Text` tag with the following:

```typescript
<View style={locationStyles.container}>
  <View>
    <LocationIcon />
  </View>
  <View>
    <LocationText city={city} country={country} />
  </View>
</View>
```

As you can see we use two custom components in order to build our UI:

* `LocationIcon`: one liner component using the Icon component of UI Kitten to display the location icon from the Eva icon pack. (see *components > base > Icons.tsx*)

```typescript
<Icon name="pin-outline" width={20} height={20} fill="#000" />
```

* `LocationText`: also a super small component displaying a `Text` component from React Native containing the city and the country resolving to the device geo-location. (see *components > base > LocationText.tsx*)

Your application should now display something similar to

<img src="../../assets/app/screen_5.png" width="400px"/>

## Current weather

Let's now add the current weather data. Go to the `CurrentWeather.tsx` file and as usual, copy the following code and replace the `Text` tag:

```typescript
<View>
  <WeatherIcon icon={icon} />
</View>
<View>
  <Text style={currentWeatherStyles.short}>{short}</Text>
  <Text style={currentWeatherStyles.long}>{long}</Text>
</View>
```

We once again use a custom component in order to display the correct weather icon based on the API answer. 

This `WeatherIcon` component is a bit more complex than the `LocationIcon` icon we used for the location component (It is located under *components > base > Icons.tsx*).

```typescript
export const WeatherIcon = ({ icon }: { icon: string }) => (
  <Image
    style={styles.weatherIcon}
    source={{
      uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    }}
  />
);
```
This 'icon' is actually an image that is rendered via the `Image` component of React Native. As you can see this component is very similar to the `ImageBackground` component we used to display the application background. 

>💡 Despite the similarity there is a **huge** difference: `Image` in React Native cannot have any content while `ImageBackground` can... 
>
>So depending of what you are trying to achieve, choose the correct one ☝️ 

Your application should now look like

<img src="../../assets/app/screen_6.png" width="400px"/>

## Temperature
In order to add the current temperature information, replace the `Text` tag in the `Temperature.tsx` file with

```typescript
<View style={temperatureStyles.tempContainer}>
  <Text style={temperatureStyles.currentTemp}>{`${temp}℃`}</Text>
</View>
<MinMaxTemp min={temp_min} max={temp_max} />
```

In here we are using an other custom component provided for you: `MinMaxTemp`. This component is in charge of displaying the minimum and maximum temparature together with small thermometers icons 🌡.

The code of this component is pretty staright forward and you can find it under *components > base > MinMaxTemp.tsx*:

```typescript
<View style={temperatureStyles.minmaxContainer}>
  <MinTempIcon />
  <Text style={temperatureStyles.minmax}>{`${min}℃`}</Text>
  <Text style={temperatureStyles.minmax}>{`     `}</Text>
  <MaxTempIcon />
  <Text style={temperatureStyles.minmax}>{`${max}℃`}</Text>
</View>
```

It uses two icons, `MinTempIcon` and `MaxTempIcon` together with some `Text` components.

For those icons we will again use the UI Kitten `Icon` component (*components > base > Icons.tsx*):

```typescript
export const MinTempIcon = () => (
  <Icon name="thermometer-minus-outline" width={20} height={20} fill="#1a73e8" />
);
export const MaxTempIcon = () => (
  <Icon name="thermometer-plus-outline" width={20} height={20} fill="#f44336" />
);
```

>💡 You can try changing the width, height or fill properties to change the sizes or colors of these icons.

Here's how your application should look like by now:

<img src="../../assets/app/screen_7.png" width="400px"/>

## Relative humidity

The `Humidity` component is straightforward as well, copy the following code and replace the `Text` component.

```typescript
<HumidityIcon />
<Text style={humidityStyles.text}>{`${humidity}%`}</Text>
```

Here again, we sipmly place the desired icon, followed by the `humidity` value (with a % sign at the end).
The `HumidityIcon` component is nothing new: a simple image... (see *components > base > Icons.tsx*).

The application is coming along and should now display:

<img src="../../assets/app/screen_8.png" width="400px"/>

## Wind information

The `WindSpeed` component follows the same logic as the `Humidity`, here is the code to replace this `Text` component.

```typescript
<WindSpeedIcon />
<Text style={windSpeedStyles.text}>{`${direction} @ ${transformMStoKMH(speed)} km/h`}</Text>
```

Pretty much the same as the previous component with the exception of the use of the utility function `transformMStoKMH` that is defined in *utils > dataTransformer.ts*. It's a simple mathematical transformation.

All right, we are almost there! 🤓 All those placeholders have now been replaced by the actual information and your application is now *almost* complete!

<img src="../../assets/app/screen_9.png" width="400px"/>

As you know, we display the last refresh time of the application. It would be nice to allow the user to interact with our application in order to trigger a refresh of the weather... [Let's do this in the final step of this workshop!](./guide_6.md)

---

Next: [Adding user interaction ➤](./guide_6.md)
