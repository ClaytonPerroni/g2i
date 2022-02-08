import { validateRequest } from './QuestionThunks';

test('validation of code 0 is good', () => {
  const resp = validateRequest({
    data: {
      response_code: 0,
    },
  });
  expect(resp).toEqual({
    response_code: 0,
  });
});

test('validation of code !0 is good', () => {
  expect(() =>
    validateRequest({
      data: {
        response_code: 1,
      },
    })
  ).toThrow();
});

test('validation of no data is good', () => {
  expect(() => validateRequest({})).toThrow();
});
