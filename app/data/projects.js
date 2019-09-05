// TODO Add a couple lines about each project
const data = [
  {
    title: 'Cryptocurrency Sentiment Analysis',
    subtitle: 'Created for hackathon, to analyze and predict crypto price trends',
    link: 'https://github.com/rishidk22/crypto_sentiment_analysis',
    image: '/images/projects/crypto.png',
    date: '2019-06-07',
    desc: 'Created analysis tool for crypto pricing: '
      + 'Created cryptocurrency analysis application to webscrape crypto-relevant articles '
      + 'and analyze the information with NLP Sentiment Analysis through IBM Watson. The data '
      + 'was then inputted into a KNN regression model to predict the price trend.',
  },
  {
    title: 'Kernel',
    subtitle: 'A functional x86 kernel',
    link: 'https://github.com/rishidk22/kernel',
    image: '/images/projects/kernel_image.png',
    date: '2019-05-02',
    desc: 'A functional x86 kernel: '
      + 'This kernel is a basic x86 kernel, supporting simple functionality. It was built'
      + 'with a read-only file system, paging and virtual memory to allow for program execution, '
      + 'and a task scheduler to allow for processes to run efficiently.',
  },
  {
    title: 'IoT Arduino LED',
    subtitle: 'An implementation of connnecting an Arduino to the internet',
    link: 'https://github.com/rishidk22/iot_arduino',
    image: '/images/projects/arduino.jpeg',
    date: '2018-08-20',
    desc: 'Basic IoT Arduino: '
     + 'Wired an Arduino to connect to the internet and turn on an LED based on web input. Then, '
     + 'implemented API so Arduino could poll the API to see if the LED should be switched on or off',
  },
  {
   title: 'San Francisco Police Dispatch Analysis',
   subtitle: 'An analysis of the trends found in the SFPD Dispatch data',
   link: 'https://github.com/rishidk22/SFPDDataAnalysis',
   image: '/images/projects/sfpd.png',
   date: '2018-03-27',
   desc: 'SFPD Dispath Analysis: '
     + 'An analysis of the trends found in the SFPD Dispatch analysis. This tool '
     + 'identifies trends found in the data accross zip code and population. '
     + 'Additionally, it has a prediction tool to predict what dispatch will occur based on emergency and zip code. ',
 },
];

export default data;
