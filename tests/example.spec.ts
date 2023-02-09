import { test, expect } from "@playwright/test";

test("Get users", async ({ request, baseURL }) => {
  const _response = await request.get(`${baseURL}public/v2/users/`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  console.log(await _response.json());
});

test("create a new user", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}public/v2/users`, {
    data: {
      name: "Tenali Ramakrishna1",
      gender: "male",
      email: "tenali.ramakrishna@15ce.com",
      status: "active",
    },
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
  let body = await response.body()
  console.log("LOG:" + body);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);
  //console.log(await response.json());
});


test("Get one user", async ({ request, baseURL }) => {
  const _response = await request.get(`${baseURL}public/v2/users/`, {
    params: {
      id: 337655,
    },
  });
  let j = (await _response.body()).toString();
  console.log("Body JSON:" + j);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  expect(j).toContain('Tenali Ramakrishn1a');
  expect(j).toContain('11te111nali.ramakrishna@115ce.com');
  //console.log(await _response.json());
});