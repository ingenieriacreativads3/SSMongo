
//Se puede usar asi, pero no estarias usando emacscript6
//const express = require('express');

import express from 'express';
import consign from 'consign';

import cors from 'cors';

const app = express();

app.use(cors());

consign()
    .include('/src/libs/middlewares.js')
    .then('/src/routes')
    .include('/src/libs/boots.js')
    .into(app);



