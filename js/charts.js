var weightData = {
  // A labels array that can contain any sort of values
  labels: ['Oct 1', 'Oct 8', 'Oct 15', 'Oct 22', 'Oct 29'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    ['12.5 lbs', '12.8 lbs', '13 lbs', '13.4 lbs', '14 lbs']
  ]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('#weight-chart', weightData);
