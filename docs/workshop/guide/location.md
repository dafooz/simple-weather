Location text
<View>
<LocationIcon />
</View>
<View>
<LocationText city={city} country={country} />
</View>

      ---

Refresh button
<View style={locationStyles.refreshButton}>
<IconButton onPress={refresh}>
<RefreshIcon />
</IconButton>
</View>
