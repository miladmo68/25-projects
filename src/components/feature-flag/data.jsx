const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTocToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: false,
  showTabTest: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some errors occured! Please try again");
  });
}

export default featureFlagsDataServiceCall;
