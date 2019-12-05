# Adding user interaction

User interaction in React Native is a simple callback function passed to the specific event that we will allow our users to interact with.

>💡 We won't be using the standard `Button` component of React Native as it only accepts a text content. Icons can't be displayed in it...
>
>React Native allows us to define other types of 'touchable' areas. This is done via one of the following components:
>
> * TouchableHighlight (highlights on touch)
> * TouchableNativeFeedback (Android only)
> * TouchableOpacity (changes the opacity on touch)
> * TouchableWithoutFeedback (no user feedback on touch)
> 
> See the documentation of these component on [the official documentation page](https://facebook.github.io/react-native/docs/touchablehighlight) of React Native.

Enough talking, let's get to coding... 

Head back to the `Location` component (*components > Location.tsx*). Copy the following snippet and place it just before the last `</View>`.

```typescript
<View style={locationStyles.refreshButton}>
  <IconButton onPress={refresh}>
    <RefreshIcon />
  </IconButton>
</View>
```
We use here an other custom component crafted for you: `IconButton`. The code of this component can be found under *components > base > IconButton.tsx*

It goes like this:

```typescript
export const IconButton = ({ onPress, children }: { onPress: () => void; children: ReactNode }) => (
  <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
);
```

In this component I chose the `TouchableOpacity` component so the user sees some feedback when the area is touched. 

As you can see, we attach a callback function (that we get from the props which resolve to the function `refreshWeather` of the `useLocation` hook) in order to trigger the reload of the device location and the associated weather...

# Et voilà! 

Your application is now in it's final state and should show the refresh icon that can be touched to refresh the weather! **That application is fully functional.**

<img src="../../assets/app/screen_10.png" width="400px"/>

# Thanks

Thanks for following the workshop! I hope you enjoyed and learned new stuff giving you a lot of ideas and the envy of learning more about React and React Native!

---
The official documentation of React Native can be found [here](https://facebook.github.io/react-native/docs/activityindicator).