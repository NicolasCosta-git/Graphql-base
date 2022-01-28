import * as AWS from 'aws-sdk';

(async () => {
  AWS.config.update({ region: 'us-east-1' });

  const location = new AWS.Location();

  const params = {
    IndexName: 'explore.place',
    Text: '27533260',
  };

  location.searchPlaceIndexForText(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data.Results[0].Place.Geometry);
  });
})();
