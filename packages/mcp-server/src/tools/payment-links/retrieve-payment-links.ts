// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Rzp from 'rzp';

export const metadata: Metadata = {
  resource: 'payment_links',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_payment_links',
  description:
    'Fetch a payment link by its unique ID. [Docs](https://razorpay.com/docs/api/payments/payment-links/fetch-id-standard/)',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Rzp, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.paymentLinks.retrieve(id);
};

export default { metadata, tool, handler };
