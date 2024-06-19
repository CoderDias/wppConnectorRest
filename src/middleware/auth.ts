/*
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NextFunction, Request, Response } from 'express';

import { clientsArray } from '../util/sessionUtil';

function formatSession(session: string) {
  return session.split(':')[0];
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const secureToken = req.serverOptions.secretKey;

  const { session } = req.params;
  const { authorization: token } = req.headers;
  
  if (!session)
    return res.status(401).send({ message: 'Session not informed' });

  req.session = formatSession(req.params.session);
    req.token = 'byseven';
    req.client = clientsArray[req.session];
    next();
};

export default verifyToken;
