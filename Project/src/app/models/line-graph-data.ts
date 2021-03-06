import * as moment from 'moment';
import { SimplePredictionModel, SimplePredictionsModel } from './simple-predictions-model';
import { SimplePriceModel, SimplePricesModel } from './simple-prices-model';

export class LineGraphData {
  data: LineData[];

  public static fromPrices(pricesModel: SimplePricesModel): LineGraphData {
    if (!pricesModel || !pricesModel.prices || pricesModel.prices.length < 1) {
      return new LineGraphData();
    }

    const lineGraphData = new LineGraphData();
    lineGraphData.data = [];

    const lineData = new LineData();
    lineData.name = pricesModel.prices[0].belongsTo;
    lineData.series = [];
    pricesModel.prices.forEach((price: SimplePriceModel) => {
      lineData.series.push({
        name:  moment(price.atDate).toDate(),
        value: parseFloat(price.value)
      });
    });

    lineGraphData.data.push(lineData);
    return lineGraphData;
  }

  public static fromPredictions(predictionsModel: SimplePredictionsModel): LineGraphData {
    if (!predictionsModel || !predictionsModel.predictions || predictionsModel.predictions.length < 1) {
      return new LineGraphData();
    }

    const lineGraphData = new LineGraphData();
    lineGraphData.data = [];

    const lineData = new LineData();
    lineData.name = predictionsModel.predictions[0].symbol;
    lineData.series = [];
    predictionsModel.predictions.forEach((prediction: SimplePredictionModel) => {
      lineData.series.push({
        name: moment(prediction.predictedDate).toDate(),
        value: parseFloat(prediction.predictedPrice)
      });
    });

    lineData.series.sort((a, b) => (a.name > b.name) ? 1 : -1);
    lineGraphData.data.push(lineData);
    return lineGraphData;
  }
}

export class LineData {
  name: string;
  series: PointData[];
}

export interface PointData {
  name: Date;
  value: number;
}
