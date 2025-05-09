// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentLinks extends APIResource {
  /**
   * Create a new payment link.
   * [Docs](https://razorpay.com/docs/api/payments/payment-links/create-standard/)
   *
   * @example
   * ```ts
   * const paymentLink = await client.paymentLinks.create({
   *   amount: 1000,
   *   currency: 'INR',
   *   description: 'Payment for policy no',
   * });
   * ```
   */
  create(body: PaymentLinkCreateParams, options?: RequestOptions): APIPromise<PaymentLink> {
    return this._client.post('/payment_links', { body, ...options });
  }

  /**
   * Fetch a payment link by its unique ID.
   * [Docs](https://razorpay.com/docs/api/payments/payment-links/fetch-id-standard/)
   *
   * @example
   * ```ts
   * const paymentLink = await client.paymentLinks.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentLink> {
    return this._client.get(path`/payment_links/${id}`, options);
  }
}

export interface PaymentLink {
  id?: string;

  accept_partial?: boolean;

  amount?: number;

  amount_paid?: number;

  callback_method?: string;

  callback_url?: string;

  cancelled_at?: number;

  created_at?: number;

  currency?: string;

  customer?: PaymentLink.Customer;

  description?: string;

  entity?: string;

  expire_by?: number;

  expired_at?: number;

  first_min_partial_amount?: number;

  notes?: Record<string, string>;

  notify?: PaymentLink.Notify;

  payments?: Array<unknown> | null;

  reference_id?: string;

  reminder_enable?: boolean;

  reminders?: Array<unknown>;

  short_url?: string;

  status?: string;

  updated_at?: number;

  user_id?: string;
}

export namespace PaymentLink {
  export interface Customer {
    contact?: string;

    email?: string;

    name?: string;
  }

  export interface Notify {
    email?: boolean;

    sms?: boolean;
  }
}

export interface PaymentLinkCreateParams {
  /**
   * Amount in the smallest currency unit (e.g., paise)
   */
  amount: number;

  /**
   * ISO currency code
   */
  currency: string;

  /**
   * Description of the payment link
   */
  description: string;

  /**
   * Allow partial payments
   */
  accept_partial?: boolean;

  /**
   * HTTP method for callback
   */
  callback_method?: 'get' | 'post';

  /**
   * Redirect URL after payment
   */
  callback_url?: string;

  customer?: PaymentLinkCreateParams.Customer;

  /**
   * Unix timestamp when the link expires
   */
  expire_by?: number;

  /**
   * Minimum amount for the first partial payment
   */
  first_min_partial_amount?: number;

  notes?: Record<string, string>;

  notify?: PaymentLinkCreateParams.Notify;

  /**
   * Unique reference for the payment link
   */
  reference_id?: string;

  /**
   * Enable reminders for the payment link
   */
  reminder_enable?: boolean;
}

export namespace PaymentLinkCreateParams {
  export interface Customer {
    contact?: string;

    email?: string;

    name?: string;
  }

  export interface Notify {
    email?: boolean;

    sms?: boolean;
  }
}

export declare namespace PaymentLinks {
  export { type PaymentLink as PaymentLink, type PaymentLinkCreateParams as PaymentLinkCreateParams };
}
