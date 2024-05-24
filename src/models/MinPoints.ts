import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const minPointsSchema = new Mongoose.Schema({
  points: {
    type: Number,
    required: true,
  },
});

export interface IMinPoints {
  points: Number;
}

interface IMinPointsDocument extends IMinPoints, Document {}
interface IMinPointsModel extends Model<IMinPointsDocument> {}

const MinPointsModel: IMinPointsModel =
  Mongoose.models.minPoints || Mongoose.model<IMinPointsDocument>("minPoints", minPointsSchema);

export default MinPointsModel;