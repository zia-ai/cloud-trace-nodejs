/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Default configuration
module.exports = {
  // Log levels: 0-disabled,1-error,2-warn,3-info,4-debug
  logLevel: 1,

  enabled: true,

  // Valid entries are:
  // 'express', 'hapi', 'http', 'mongodb-core', restify'
  excludedHooks: [],

  // @type {number} max number of frames to include on traces (0 disables)
  stackTraceLimit: 0,

  // We buffer the captured traces for `flushDelaySeconds` before publishing
  // to the Cloud Trace API; unless the buffer fills up before then.
  // See `bufferSize`.
  flushDelaySeconds: 30,

  // An upper bound on the number of traces to gather each second. If set to
  // -1, all traces will be reported. Sampling rates greater than 1000 are not
  // supported and will result in at most 1000 samples per second.
  // Note: `samplingRate` should never be set to 0. To disable tracing, use
  // `enabled` above.
  samplingRate: -1,

  // The number of transactions we buffer before we publish to the Cloud Trace
  // API, unless we hit `flushDelaySeconds` first.
  bufferSize: 1000

  // TODO: add support for sampling / throttling trace capture. E.g. limit trace
  // to 1 QPS, etc.
};
