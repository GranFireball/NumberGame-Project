import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const rankingPlayerSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

export interface IRankingPlayer {
  name: String;
  points: Number;
}

interface IRankingPlayerDocument extends IRankingPlayer, Document {}
interface IRankingPlayerModel extends Model<IRankingPlayerDocument> {}

const RankingPlayerModel: IRankingPlayerModel =
  Mongoose.models.rankingPlayer || Mongoose.model<IRankingPlayerDocument>("rankingPlayer", rankingPlayerSchema);

export default RankingPlayerModel;