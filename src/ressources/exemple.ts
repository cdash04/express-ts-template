import { Request, Response } from 'express';

/**
 * GET /
 * Print Hello Express.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
  res.send('Hello Express');
};
