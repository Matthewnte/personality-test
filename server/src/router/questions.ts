import { Router } from 'express';

const questions = require('../../questions.json');

export const questionRoute = (router: Router): void => {
  router.get('/questions', async (req, res) => {
    res.status(200).json(questions);
  });
};
