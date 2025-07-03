// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Rzp } from '../client';

export abstract class APIResource {
  protected _client: Rzp;

  constructor(client: Rzp) {
    this._client = client;
  }
}
