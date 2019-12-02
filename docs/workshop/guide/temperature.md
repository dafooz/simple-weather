<View style={temperatureStyles.tempContainer}>
      <Text style={temperatureStyles.currentTemp}>{`${temp}℃`}</Text>
    </View>
    <MinMaxTemp min={temp_min} max={temp_max} />
