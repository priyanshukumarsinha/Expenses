import d from './data.json'  assert { type: 'json' };

// console.log(getData('PK'));

// Your data (replace this with your actual data)
var data = {
  labels: [...Array(3)].map((_, index) => index + 1),
  datasets: [{
    label: 'Income',
    data: getData('PP', 'attendance'),
    backgroundColor: '#ae49f1',
    borderColor: '#ae49f1',
    borderWidth: 1
  },
  {
    label: 'Expenses',
    data: getData('PP', 'iaMarks'),
    backgroundColor: 'lightgreen',
    borderColor: 'lightgreen',
    borderWidth: 1
  }
]
};

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

 // Create the chart
var myChart = new Chart(ctx, {
  type: 'line', // Specify the chart type (bar, line, pie, etc.)
  data: data, // Pass your data object
  options: {
    // Customize options as needed
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function getData(name, type) {
  const foundElement = d.find(element => element['name'] === name);

  if (foundElement) {
    return foundElement[type];
  }

  // Return a default value or handle the case when no matching element is found
  return null;
}
