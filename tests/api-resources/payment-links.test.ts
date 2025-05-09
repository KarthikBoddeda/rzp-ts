// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rzp from 'rzp';

const client = new Rzp({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentLinks', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.paymentLinks.create({
      amount: 1000,
      currency: 'INR',
      description: 'Payment for policy no',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.paymentLinks.create({
      amount: 1000,
      currency: 'INR',
      description: 'Payment for policy no',
      accept_partial: true,
      callback_method: 'get',
      callback_url: 'https://example-callback-url.com/',
      customer: { contact: '+919000090000', email: 'gaurav.kumar@example.com', name: 'Gaurav Kumar' },
      expire_by: 1691097057,
      first_min_partial_amount: 100,
      notes: { policy_name: 'Jeevan Bima' },
      notify: { email: true, sms: true },
      reference_id: 'TS1989',
      reminder_enable: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.paymentLinks.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
