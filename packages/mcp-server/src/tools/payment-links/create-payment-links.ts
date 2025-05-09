// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Rzp from 'rzp';

export const metadata: Metadata = {
  resource: 'payment_links',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_payment_links',
  description:
    'Create a new payment link. [Docs](https://razorpay.com/docs/api/payments/payment-links/create-standard/)',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description: 'Amount in the smallest currency unit (e.g., paise)',
      },
      currency: {
        type: 'string',
        description: 'ISO currency code',
      },
      description: {
        type: 'string',
        description: 'Description of the payment link',
      },
      accept_partial: {
        type: 'boolean',
        description: 'Allow partial payments',
      },
      callback_method: {
        type: 'string',
        description: 'HTTP method for callback',
        enum: ['get', 'post'],
      },
      callback_url: {
        type: 'string',
        description: 'Redirect URL after payment',
      },
      customer: {
        type: 'object',
        properties: {
          contact: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        required: [],
      },
      expire_by: {
        type: 'integer',
        description: 'Unix timestamp when the link expires',
      },
      first_min_partial_amount: {
        type: 'integer',
        description: 'Minimum amount for the first partial payment',
      },
      notes: {
        type: 'object',
      },
      notify: {
        type: 'object',
        properties: {
          email: {
            type: 'boolean',
          },
          sms: {
            type: 'boolean',
          },
        },
        required: [],
      },
      reference_id: {
        type: 'string',
        description: 'Unique reference for the payment link',
      },
      reminder_enable: {
        type: 'boolean',
        description: 'Enable reminders for the payment link',
      },
    },
  },
};

export const handler = (client: Rzp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.paymentLinks.create(body);
};

export default { metadata, tool, handler };
