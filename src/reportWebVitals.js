<<<<<<< HEAD
const reportWebVitals = (onPerfEntry) => {
=======
const reportWebVitals = onPerfEntry => {
>>>>>>> d7104a8e07b4c4e976e20bb35c0680190f5b891d
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
