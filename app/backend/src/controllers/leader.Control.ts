import { NextFunction, Request, Response } from 'express';
import LeaderService from '../services/leaderService';

export default class Leader {
  private _leaderService: LeaderService;

  constructor() {
    this._leaderService = new LeaderService();
  }

  public async filterHome(_req: Request, res: Response, next: NextFunction) {
    try {
      const result: any = await this._leaderService.filterHome();
      return res.status(200).json(result[0]);
    } catch (err) {
      next(err);
    }
  }

  public async filterAway(_req: Request, res: Response, next: NextFunction) {
    try {
      const result: any = await this._leaderService.filterAway();
      return res.status(200).json(result[0]);
    } catch (err) {
      next(err);
    }
  }

  public async filterAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const result: any = await this._leaderService.filterAll();
      return res.status(200).json(result[0]);
    } catch (err) {
      next(err);
    }
  }
}
